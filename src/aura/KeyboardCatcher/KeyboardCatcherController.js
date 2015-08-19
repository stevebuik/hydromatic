({
    // wait till JQuery has been loaded since we want to use $j
    // but that is not available immediately.
	javascriptReady : function(cmp, event, helper) {
        if (event.getParam("library") == "JQUERY") {
            $j(document).keydown(function(event){
                var keycode = (event.keyCode ? event.keyCode : event.which);
                var mapped = cmp.get("v.keyMap")[keycode];
                if(mapped){
                    event.preventDefault();
                    // fire a component event for the parent component to handle
                    var compEvent = cmp.getEvent("keyEvent");
                    compEvent.setParams({keyPressed: mapped});
                    compEvent.fire();                    
                }
            });        
        }
	}
})