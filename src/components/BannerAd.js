import React, { useEffect } from 'react';

/**
 * Banner Ad Component for 728x90 Adsterra Banner
 */
function BannerAd() {
    useEffect(() => {
        // Check if script already exists
        const scriptId = 'banner-ad-script-642e29127e5a8b32e46b5acf7ad2b240';
        let script = document.getElementById(scriptId);

        if (!script) {
            // Create the atOptions configuration
            window.atOptions = {
                'key': '642e29127e5a8b32e46b5acf7ad2b240',
                'format': 'iframe',
                'height': 90,
                'width': 728,
                'params': {}
            };

            // Create and append the script
            script = document.createElement('script');
            script.id = scriptId;
            script.type = 'text/javascript';
            script.src = '//www.highperformanceformat.com/642e29127e5a8b32e46b5acf7ad2b240/invoke.js';
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '20px 0',
            padding: '20px 0',
            minHeight: '90px'
        }}>
            <div id="banner-ad-container" style={{
                width: '728px',
                height: '90px',
                textAlign: 'center'
            }}></div>
        </div>
    );
}

export default BannerAd;
