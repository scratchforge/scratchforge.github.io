import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { allCourses } from "../courses";
import "../styles/Course.css";

function Course() {
  const { courseId } = useParams();
  const course = allCourses[courseId];
  const [currentSessionIndex, setCurrentSessionIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  if (!course) {
    return <div className="container">Course not found.</div>;
  }

  const session = course.sessions[currentSessionIndex];

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionIndex]: answerIndex
    });
  };

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    session.questions.forEach((question, index) => {
      if (quizAnswers[index] === question.answer) {
        correct++;
      }
    });
    return { correct, total: session.questions.length };
  };

  return (
    <div className="course-container">
      <div className="course-header" style={{ backgroundColor: course.color }}>
        <h2>{course.title}</h2>
        <p>Session {currentSessionIndex + 1} of {course.sessions.length}</p>
      </div>

      <div className="course-content">
        <h3>{session.title}</h3>
        <div 
          className="lesson-content"
          dangerouslySetInnerHTML={{ __html: session.content }}
        />

        {/* Tools Section */}
        {session.tools && session.tools.length > 0 && (
          <div className="tools-section">
            <h4>🛠️ Interactive Tools</h4>
            {session.tools.map((tool, toolIndex) => (
              <ToolRenderer key={toolIndex} tool={tool} courseColor={course.color} />
            ))}
          </div>
        )}

        {/* Quiz Section */}
        {session.questions && session.questions.length > 0 && (
          <div className="quiz-section">
            <h4>📝 Quiz Questions</h4>
            {session.questions.map((question, qIndex) => (
              <div key={qIndex} className="quiz-question">
                <p><strong>Q{qIndex + 1}: {question.q}</strong></p>
                {question.options.map((option, oIndex) => (
                  <label key={oIndex} className="quiz-option">
                    <input
                      type="radio"
                      name={`question-${qIndex}`}
                      checked={quizAnswers[qIndex] === oIndex}
                      onChange={() => handleQuizAnswer(qIndex, oIndex)}
                      disabled={quizSubmitted}
                    />
                    {option}
                    {quizSubmitted && (
                      <span className={oIndex === question.answer ? "correct" : ""}>
                        {oIndex === question.answer ? " ✓" : ""}
                      </span>
                    )}
                  </label>
                ))}
              </div>
            ))}

            {!quizSubmitted ? (
              <button 
                className="submit-quiz-btn"
                onClick={handleSubmitQuiz}
                style={{ backgroundColor: course.color }}
              >
                Submit Quiz
              </button>
            ) : (
              <div className="quiz-result">
                <h5>Your Score: {calculateScore().correct}/{calculateScore().total}</h5>
                <p>{Math.round((calculateScore().correct / calculateScore().total) * 100)}% Correct</p>
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="navigation">
          <button
            onClick={() => {
              setCurrentSessionIndex(i => Math.max(i - 1, 0));
              setQuizSubmitted(false);
              setQuizAnswers({});
            }}
            disabled={currentSessionIndex === 0}
            className="nav-btn"
          >
            ← Previous
          </button>
          <span className="session-counter">{currentSessionIndex + 1} / {course.sessions.length}</span>
          <button
            onClick={() => {
              setCurrentSessionIndex(i => Math.min(i + 1, course.sessions.length - 1));
              setQuizSubmitted(false);
              setQuizAnswers({});
            }}
            disabled={currentSessionIndex === course.sessions.length - 1}
            className="nav-btn"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

// Calculator Tool Component
function CalculatorTool({ tool, courseColor }) {
  const [values, setValues] = useState({});
  const [result, setResult] = useState(null);

  const handleInputChange = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const handleCalculate = () => {
    const res = tool.calculate(values);
    setResult(res);
  };

  const handleReset = () => {
    setValues({});
    setResult(null);
  };

  return (
    <div className="tool-calculator">
      <h5>{tool.name}</h5>
      <p className="tool-description">{tool.description}</p>
      
      <div className="tool-fields">
        {tool.fields.map((field) => (
          <div key={field.key} className="field-group">
            <label>{field.label}</label>
            <input
              type="number"
              placeholder={field.placeholder}
              value={values[field.key] || ''}
              onChange={(e) => handleInputChange(field.key, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="tool-buttons">
        <button onClick={handleCalculate} className="btn-calculate" style={{ backgroundColor: courseColor }}>
          Calculate
        </button>
        <button onClick={handleReset} className="btn-reset">
          Reset
        </button>
      </div>

      {result !== null && (
        <div className="tool-result">
          <p className="result-label">Result:</p>
          <p className="result-value">{result} {tool.unit}</p>
        </div>
      )}
    </div>
  );
}

// Interactive Tool Component
function InteractiveTool({ tool }) {
  return (
    <div className="tool-interactive">
      <h5>{tool.name}</h5>
      <p className="tool-description">{tool.description}</p>
      <div className="tool-placeholder">
        <p>🎮 Interactive visualization coming soon!</p>
      </div>
    </div>
  );
}

// Tool Renderer
function ToolRenderer({ tool, courseColor }) {
  if (tool.type === 'calculator') {
    return <CalculatorTool tool={tool} courseColor={courseColor} />;
  } else if (tool.type === 'interactive') {
    return <InteractiveTool tool={tool} />;
  }
  return null;
}

export default Course;
