({
    init: function(component, event, helper) {       
        if (typeof jQuery !== "undefined" && typeof $j === "undefined") {
            $j = jQuery.noConflict(true);
        }                    
        // TODO fire jquery ready event
	},

	showEventsFromApp : function(component, event, helper) {
        var demoComponent = component.find(event.getParams().context);
        delete event.getParams().context;
        demoComponent.set("v.debugData", JSON.stringify(event.getParams()));
	}
    
})