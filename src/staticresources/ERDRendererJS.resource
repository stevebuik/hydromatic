/*********************Javascripts to put Graphviz to web**********************/
function inspect(s) {
	return "<pre>" + s.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;") + "</pre>"
}
  
function convertERDContentToMarkup(content, format, engine) {
	var result;
	try {
		result = Viz(content, format, engine);
		if (format === "svg")
			return result;
		else
			return inspect(result);
    } catch(e) {
		return inspect(e.toString());
	}
}

function generateERDToWeb(content)
{
	var erdMarkup = convertERDContentToMarkup(content,"svg");
	document.getElementById("diagramContainer").innerHTML = erdMarkup;
}