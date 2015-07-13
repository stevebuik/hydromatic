({
	renderVehicleContent: function(component, content) {
        var action = component.get("c.getVehicleContent");
        action.setParams({
        	"content": content
        });
        
    	var self = this;
        action.setCallback(this, function(a) {
            var result = a.getReturnValue();
            generateERDToWeb(content);
    	});
    	$A.enqueueAction(action);
    }
})