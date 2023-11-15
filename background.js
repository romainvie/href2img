var menuItemLabel = "href2img";

chrome.runtime.onInstalled.addListener(() => {
	// add a new context menu element for links
	chrome.contextMenus.create({
		id: menuItemLabel,
		title: menuItemLabel,
		contexts: ["link"]
	});
});

// Send message to content.js when the new element is clicked
chrome.contextMenus.onClicked.addListener((info, tab) => {
	if (info.menuItemId === menuItemLabel) {
		chrome.tabs.sendMessage(tab.id, "getClickedElt", {frameId: info.frameId}, data => {});
	}
});