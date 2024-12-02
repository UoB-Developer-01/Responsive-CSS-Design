
```js
{
    "name": "Comprehensive PWA",  // Full name of the PWA; displayed when installing the app
    "short_name": "PWA",  // Short name of the PWA; used on the home screen
    "start_url": "/",  // URL that the app starts at when launched; typically the root or a specific page like "/index.html"
    "display": "standalone",  // Display mode of the app. Alternatives:
                             // - 'fullscreen': Fullscreen mode
                             // - 'standalone': App-like appearance without browser UI
                             // - 'minimal-ui': Browser UI with minimal controls
                             // - 'browser': Regular browser appearance
    "background_color": "#ffffff",  // Background color for the splash screen; can be any valid CSS color value
    "theme_color": "#0000ff",  // Theme color for the browser's address bar; can be any valid CSS color value
    "description": "A comprehensive PWA example to demonstrate manifest capabilities.",  // Description of the PWA
    "orientation": "portrait-primary",  // Default orientation for the app. Alternatives:
                                        // - 'any': Supports all orientations
                                        // - 'natural': Default orientation of the device
                                        // - 'landscape': Landscape mode
                                        // - 'landscape-primary': Primary landscape mode
                                        // - 'landscape-secondary': Secondary landscape mode
                                        // - 'portrait': Portrait mode
                                        // - 'portrait-primary': Primary portrait mode
                                        // - 'portrait-secondary': Secondary portrait mode
    "scope": "/",  // Scope of the app; limits navigation to the specified URL scope
    "lang": "en-US",  // Default language of the app
    "dir": "ltr",  // Text direction of the app. Alternatives:
                   // - 'ltr': Left-to-right
                   // - 'rtl': Right-to-left
    "icons": [
        {
            "src": "images/icon-48x48.png",  // Path to the icon file
            "sizes": "48x48",  // Size of the icon
            "type": "image/png"  // MIME type of the icon
        },
        {
            "src": "images/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
        },
        {
            "src": "images/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
        },
        {
            "src": "images/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
        },
        {
            "src": "images/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
        },
        {
            "src": "images/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
        },
        {
            "src": "images/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "images/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
        },
        {
            "src": "images/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "screenshots": [
        {
            "src": "screenshots/screenshot1.png",  // Path to the screenshot file
            "sizes": "640x480",  // Size of the screenshot
            "type": "image/png"  // MIME type of the screenshot
        },
        {
            "src": "screenshots/screenshot2.png",
            "sizes": "1280x720",
            "type": "image/png"
        }
    ],
    "related_applications": [  // List of related applications
        {
            "platform": "web",  // Platform of the related application (e.g., web, play, windows, ios)
            "url": "https://example.com/related-app",  // URL of the related application
            "id": "com.example.relatedapp"  // ID of the related application (e.g., package name for Android apps)
        }
    ],
    "prefer_related_applications": false  // Whether to prefer the related applications over the web app
}

```