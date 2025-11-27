import React, { useEffect, useRef } from 'react';

/**
 * Reusable Ad Component for Adsterra Integration
 * 
 * @param {string} scriptSrc - The Adsterra script source URL
 * @param {string} containerId - The unique container ID for the ad
 * @param {string} position - Ad position: 'sidebar', 'inline', 'bottom'
 */
function AdComponent({ scriptSrc, containerId, position = 'inline' }) {
    const containerRef = useRef(null);

    useEffect(() => {
        // Check if script already exists in document
        let script = document.querySelector(`script[src="${scriptSrc}"]`);

        if (!script) {
            // Create script element if it doesn't exist
            script = document.createElement('script');
            script.src = scriptSrc;
            script.async = true;
            script.setAttribute('data-cfasync', 'false');

            // Append to document body
            document.body.appendChild(script);
        }

        // No cleanup - let the script stay loaded for all pages
    }, [scriptSrc, containerId]);

    // Different styles based on position
    const getContainerStyle = () => {
        const baseStyle = {
            margin: '20px 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100px'
        };

        switch (position) {
            case 'sidebar':
                return {
                    ...baseStyle,
                    position: 'sticky',
                    top: '20px',
                    maxWidth: '300px',
                    margin: '0 auto'
                };
            case 'bottom':
                return {
                    ...baseStyle,
                    marginTop: '40px',
                    padding: '20px 0',
                    borderTop: '1px solid #e0e0e0'
                };
            case 'inline':
            default:
                return {
                    ...baseStyle,
                    padding: '20px 0'
                };
        }
    };

    return (
        <div style={getContainerStyle()} ref={containerRef}>
            <div id={containerId} style={{ width: '100%', textAlign: 'center' }}></div>
        </div>
    );
}

export default AdComponent;
