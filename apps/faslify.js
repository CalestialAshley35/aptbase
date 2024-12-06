// Fastlify - Real and Super Fast
(function(global, document) {
    "use strict";

    // Function to load a single script asynchronously with minimal overhead
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // Function to load multiple scripts efficiently
    function loadScripts(scripts) {
        const promises = scripts.map(loadScript);
        return Promise.all(promises);
    }

    // Function to load a single stylesheet asynchronously
    function loadStylesheet(href) {
        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            link.onload = resolve;
            link.onerror = reject;
            document.head.appendChild(link);
        });
    }

    // Function to load multiple stylesheets asynchronously
    function loadStylesheets(stylesheets) {
        const promises = stylesheets.map(loadStylesheet);
        return Promise.all(promises);
    }

    // Expose Fastlify API to the global window object
    global.Fastlify = {
        loadScript,
        loadScripts,
        loadStylesheet,
        loadStylesheets
    };

    // Log a fast initialization message for debug purposes
    console.log("⚡ Fastlify loaded - Ready to Go Fast!");

})(window, document);
