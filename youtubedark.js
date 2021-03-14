var htmlTag = document.getElementsByTagName("html")[0];
htmlTag.setAttribute("dark", "true");

// Now do it the proper way - listen for changes in the DOM with MutationObserver

// Options for the observer (which mutations to observe)
const config = { attributeFilter: ["dark"]};

const callback = function(mutationsList, observer) {
	if (!htmlTag.hasAttribute("dark")) {	// you absolutely need this if statement, utterly kills performance otherwise
		htmlTag.setAttribute("dark", "true");
	}	
}

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(htmlTag, config);
