console.log("Background script loaded");

const blockedSites = ['youtube.com', 'facebook.com', 'twitter.com', 'reddit.com']

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'loading' && tab.url) {
        // Don't block the extension's own blocked.html page
        if (tab.url.includes('blocked.html')) {
            return;
        }

        console.log("User is visiting", tab.url);

        const blockedSite = blockedSites.find(site => tab.url.includes(site));
        
        if (blockedSite) {
            console.log("User is trying to visit a blocked", blockedSite)

            const blockedPageUrl = chrome.runtime.getURL('blocked.html') + '?site=' + blockedSite;
            chrome.tabs.update(tabId, {url: blockedPageUrl});
        }
    }
});