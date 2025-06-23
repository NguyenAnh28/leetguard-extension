console.log("Background script loaded");

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'loading' && tab.url) {
        console.log("User is visiting", tab.url);

        if (tab.url.includes('youtube.com')) {
            console.log("BLOCKED! User is trying to visit Youtube");
        }
    }
});