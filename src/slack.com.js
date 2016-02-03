$(function() {
	// https://github.com/naugtur/insertionQuery
	var anime_watch = function(selector, callback) {
		var guid = selector.replace(/[^a-zA-Z0-9]+/g, "_") +"_"+ ((new Date()).getTime());

		$("<style/>").html([
			"@-webkit-keyframes {guid} { from { clip: rect(auto, auto, auto, auto); } to { clip: rect(auto, auto, auto, auto); } }",
			"@keyframes {guid} { from { clip: rect(auto, auto, auto, auto); } to { clip: rect(auto, auto, auto, auto); } }",
			"{selector} { animation-duration: 0.001s; animation-name: {guid}; -webkit-animation-duration: 0.001s; -webkit-animation-name: {guid}; }"
		].join("\n").replace(/\{guid\}/g, guid).replace(/\{selector\}/g, selector)).appendTo("head");


		var eventHandler = function(event) {
			if (event.animationName === guid || event.WebkitAnimationName === guid) {
				callback.call(event.target, event.target);
			}
		}

		document.addEventListener("animationstart", eventHandler, false);
		document.addEventListener("webkitAnimationStart", eventHandler, false);
	};

	// Watches the animation event and parses li if they are inserted
	anime_watch("div.message_content", function(div) {
		$(div).parseIssueTrackerNumbers();
	});
});
