import React, { useState } from 'react';

/**
 * VideoPlayer Component
 * Displays educational videos with a clean, modern interface
 * @param {string} videoUrl - URL or path to the video file
 * @param {string} title - Title of the video
 * @param {string} description - Brief description of what the video covers
 * @param {string} thumbnail - Optional thumbnail image
 */
function VideoPlayer({ videoUrl, title, description, thumbnail }) {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <div style={{
            margin: '30px 0',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            backgroundColor: '#fff'
        }}>
            {/* Video Header */}
            <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '15px 20px',
                color: 'white'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '24px' }}>🎬</span>
                    <div>
                        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>{title}</h3>
                        {description && (
                            <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: 0.9 }}>
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Video Container */}
            <div style={{
                position: 'relative',
                paddingBottom: '56.25%', // 16:9 aspect ratio
                backgroundColor: '#000',
                overflow: 'hidden'
            }}>
                {!isPlaying && thumbnail ? (
                    <div
                        onClick={handlePlay}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${thumbnail})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255,255,255,0.9)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <span style={{ fontSize: '40px', marginLeft: '5px' }}>▶️</span>
                        </div>
                    </div>
                ) : (
                    <video
                        controls
                        autoPlay={isPlaying}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%'
                        }}
                        onPlay={() => setIsPlaying(true)}
                    >
                        <source src={videoUrl} type="video/mp4" />
                        <source src={videoUrl} type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>

            {/* Video Footer */}
            <div style={{
                padding: '12px 20px',
                backgroundColor: '#f8f9fa',
                borderTop: '1px solid #e0e0e0',
                fontSize: '13px',
                color: '#666'
            }}>
                <span>💡 Tip: Watch this short animation to understand the concept visually</span>
            </div>
        </div>
    );
}

export default VideoPlayer;
