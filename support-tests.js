var checkButton = document.getElementById("check-button");
var resultsDiv = document.getElementById("results");
var resultStr = "";

checkButton.onclick = function() {
	try {
		var _customElements = "customElements" in window;
		resultStr += "customElements: " + _customElements + "\n";
	} catch(ex) {
		resultStr += "error (customElements): " + ex + "\n";
	}
	
	resultsDiv.innerText = resultStr;
};