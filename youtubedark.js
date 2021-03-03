var htmlTag = document.getElementsByTagName("html")[0];
htmlTag.setAttribute("dark", "true");

// attaching a listener to page load didn't seem to work for some reason - so doing it the lazy way
var execute = function () {
 htmlTag.setAttribute("dark", "true");
 setTimeout(execute, 1000);
};

// Incase it removes it for some reason - it seems to do this on large vids
setTimeout(execute, 1000);

