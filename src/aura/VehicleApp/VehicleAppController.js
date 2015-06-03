({
    init: function(component, event, helper) {       
        if (typeof jQuery !== "undefined" && typeof $j === "undefined") {
            $j = jQuery.noConflict(true);
        }                    
        // TODO fire jquery ready event
	},
    
	showEvents : function(component, event, helper) {
		console.log(event.getSource().getElement());
        console.log(event);
        
	}    
})