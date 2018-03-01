console.log("Loaded extension");


function blockRequest(details) {
    return {cancel: true};
}

function updateFilters(urls) {
    if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
    chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
    chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: [
        "*://*.politifact.com/*",
        "*://*.factcheck.org/*",
        "*://*.snopes.com/*",
        "*://*.rationalwiki.org/*",
        "*://*.cnn.com/*",
        "*://*.politico.com/*",
        "*://*.ap.org/*",
        "*://*.huffpost.com/*",
        "*://*.huffingtonpost.com/*",
        "*://*.buzzfeed.com/*",
        "*://*.nytimes.com/*",
        "*://*.washingtonpost.com/*",
        "*://*.shareblue.com/*"
    ]}, ['blocking']); 
}

updateFilters();