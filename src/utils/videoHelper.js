/**
 * Video Content Helper
 * Generates HTML for embedding videos in course sessions
 */

export const createVideoEmbed = (videoData) => {
    const { title, description, videoUrl, thumbnail } = videoData;

    return `
    <div style="margin: 30px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); background-color: #fff;">
      <!-- Video Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 15px 20px; color: white;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 24px;">🎬</span>
          <div>
            <h3 style="margin: 0; font-size: 18px; font-weight: bold;">${title}</h3>
            ${description ? `<p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">${description}</p>` : ''}
          </div>
        </div>
      </div>
      
      <!-- Video Container -->
      <div style="position: relative; padding-bottom: 56.25%; background-color: #000; overflow: hidden;">
        ${thumbnail ? `
          <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('${thumbnail}'); background-size: cover; background-position: center; display: flex; align-items: center; justify-content: center;">
            <div style="width: 80px; height: 80px; border-radius: 50%; background-color: rgba(255,255,255,0.9); display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 40px; margin-left: 5px;">▶️</span>
            </div>
          </div>
        ` : ''}
        <video controls style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
          <source src="${videoUrl}" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <!-- Video Footer -->
      <div style="padding: 12px 20px; background-color: #f8f9fa; border-top: 1px solid #e0e0e0; font-size: 13px; color: #666;">
        <span>💡 Tip: Watch this short animation to understand the concept visually</span>
      </div>
    </div>
  `;
};

// Predefined video content for each course
export const courseVideos = {
    'c-programming': {
        session1: {
            title: 'C Programming Compilation Process',
            description: 'See how your C code becomes an executable program',
            videoUrl: '/videos/c-programming/compilation-process.mp4',
            thumbnail: '/images/c-programming-intro.png'
        },
        session2: {
            title: 'Variables and Data Types',
            description: 'Visual guide to memory allocation and data types',
            videoUrl: '/videos/c-programming/variables-datatypes.mp4',
            thumbnail: '/images/c-variables.png'
        }
    },
    'embedded-firmware': {
        session1: {
            title: 'Bare-Metal Programming Explained',
            description: 'Understanding direct hardware control without an OS',
            videoUrl: '/videos/embedded/bare-metal-intro.mp4',
            thumbnail: '/images/embedded-intro.png'
        },
        session2: {
            title: 'ARM Cortex-M Architecture',
            description: 'Inside the microcontroller: CPU, memory, and peripherals',
            videoUrl: '/videos/embedded/arm-architecture.mp4',
            thumbnail: '/images/arm-architecture.png'
        }
    },
    'microcontroller': {
        session1: {
            title: 'Microcontroller Basics',
            description: 'What is a microcontroller and how does it work?',
            videoUrl: '/videos/microcontroller/basics.mp4',
            thumbnail: '/images/mcu-basics.png'
        }
    },
    'networking': {
        session1: {
            title: 'OSI Model Explained',
            description: 'The 7 layers of network communication',
            videoUrl: '/videos/networking/osi-model.mp4',
            thumbnail: '/images/osi-model.png'
        }
    },
    'electrical-basics': {
        session1: {
            title: 'Electric Current Flow',
            description: 'How electrons move through a circuit',
            videoUrl: '/videos/electrical/current-flow.mp4',
            thumbnail: '/images/current-flow.png'
        }
    }
};
