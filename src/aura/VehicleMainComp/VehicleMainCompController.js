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
        
		var sampleSVG = 'digraph R {  rankdir=LR  node [style=rounded]  node1 [shape=box]  node2 [fillcolor=yellow, style="rounded,filled", shape=diamond]  node3 [shape=record, label="{ a | b | c }"] node1 -> node2 -> node3}';
        
        component.find("vehicleRenderer").set("v.graphvizContent", sampleSVG);
	}
})