// src/components/FeedbackForm.js
import { collection, addDoc } from 'firebase/firestore';

function FeedbackForm({ courseId, userId }) {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  const [requestedCourses, setRequestedCourses] = useState('');
  
  const submitFeedback = async () => {
    await addDoc(collection(db, 'users', userId, 'feedback'), {
      courseId: courseId,
      rating: rating,
      review: review,
      wantsMoreCourses: requestedCourses.split(',').map(c => c.trim()),
      submittedDate: new Date().toISOString()
    });
    
    // Update course average rating
    updateCourseRating(courseId, rating);
    
    alert('Thank you for your feedback!');
  };
  
  return (
    <div>
      <h3>Course Feedback</h3>
      <label>Rating (1-5):</label>
      <input 
        type="number" 
        min="1" 
        max="5" 
        value={rating}
        onChange={(e) => setRating(parseInt(e.target.value))}
      />
      
      <label>Review:</label>
      <textarea 
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="What did you think of this course?"
      />
      
      <label>What courses would you like next?</label>
      <input 
        type="text"
        value={requestedCourses}
        onChange={(e) => setRequestedCourses(e.target.value)}
        placeholder="Arduino, Raspberry Pi, etc."
      />
      
      <button onClick={submitFeedback}>Submit Feedback</button>
    </div>
  );
}
