// variable to store the clicked element (a link)
var clickedElt = null;

// Retrieve the clicked element when the context menu is displayed
document.addEventListener("contextmenu", function(event){
    clickedElt = event.target;
}, true);

// When the menu item is clicked, replace clicked link by an image
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request == "getClickedElt") {		
		newImg = document.createElement('img');
		// Image src attribut is the link's url
		newImg.src = clickedElt.href;
		clickedElt.parentNode.insertBefore(newImg, clickedElt);
		clickedElt.remove();		
        sendResponse(null);
    }
});