import React, { useEffect, useRef } from 'react';

function VerticalAd({ position = 'left' }) {
    const iframeRef = useRef(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const doc = iframe.contentWindow.document;

        // Write the ad script into the iframe
        // This isolates the ad environment so multiple ads can coexist
        const adContent = `
            <html>
                <body style="margin:0;padding:0;overflow:hidden;">
                    <script type="text/javascript">
                        atOptions = {
                            'key': '720520f25da9fd06646a39c8f09effcd',
                            'format': 'iframe',
                            'height': 600,
                            'width': 160,
                            'params': {}
                        };
                    </script>
                    <script type="text/javascript" src="//www.highperformanceformat.com/720520f25da9fd06646a39c8f09effcd/invoke.js"></script>
                </body>
            </html>
        `;

        doc.open();
        doc.write(adContent);
        doc.close();

        console.log(`[VerticalAd] Loaded ad iframe for ${position}`);
    }, [position]);

    return (
        <div
            style={{
                width: '160px',
                height: '600px',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                overflow: 'hidden'
            }}
        >
            <iframe
                ref={iframeRef}
                title={`ad-${position}`}
                width="160"
                height="600"
                scrolling="no"
                frameBorder="0"
                style={{ border: 'none', overflow: 'hidden' }}
            />
        </div>
    );
}

export default VerticalAd;
