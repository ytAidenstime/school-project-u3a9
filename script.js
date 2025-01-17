// use multiple text colors
// use different font types
// use sub headings
// use paragraphs
// wrap your words
// use break tags
function alertIfHasntView() {
  if(localStorage.getItem("hasViewed")) return;
  localStorage.setItem("hasViewed", true);
  alert("Please note that for the best viewing experience you should use this webpage in full view not from within codepen");
}

alertIfHasntView();
