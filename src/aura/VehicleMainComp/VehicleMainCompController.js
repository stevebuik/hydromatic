({
    init: function(component, event, helper) {       
        
        if (typeof jQuery !== "undefined" && typeof $j === "undefined") {
            $j = jQuery.noConflict(true);
        } 
        
        // TODO fire jquery ready event
        
        component.find("millerDemo").set("v.items", [{id: "123", label: "Foo"}, 
                                                     {id: "456", label: "Foobar"}]);
                
	},
    
    // make the app respond to uri changes by firing an event
    // that parts will use to show/hide themselves
    handleLocationChange : function(component, event, helper) {
        var appEvent = $A.get("e.c:FocusEvent");
        appEvent.setParams({demoId: event.getParam("token")});
        appEvent.fire();
    },
    
    // handle a debug event by displaying it's payload in the correct demo part
    showEventsFromApp : function(component, event, helper) {
        var demoComponent = component.find(event.getParams().context);
        delete event.getParams().context;
        demoComponent.set("v.debugData", JSON.stringify(event.getParams()));
	},
    
    // TODO remove component specific code from main component
    showApplicationMessage : function(component, event, helper){
        
        var severity = component.find("inputSeverity").get("v.value");

        var appEvent = $A.get("e.c:ApplicationMessageEvent");
        appEvent.setParams({"isShow": true,
            				"severity": severity,
            				"title" : "Test Title",
            				"body" : "Test Body"
                           })
        		.fire();
        
        component.find("demo4").set("v.debugData", "selected severity: " + severity);
    },
    
    // display charts
    showChart1 : function(component, event, helper){
        var sampleSVG = 'digraph R {  rankdir=LR  node [style=rounded]  node1 [shape=box]  node2 [fillcolor=yellow, style="rounded,filled", shape=diamond]  node3 [shape=record, label="{ a | b | c }"] node1 -> node2 -> node3}';
        component.find("vehicleRenderer").set("v.graphvizContent", sampleSVG);
    },
    showChart2 : function(component, event, helper){
        var sampleSVG = 'digraph finite_state_machine { rankdir=LR; size="8,5" node [shape = doublecircle]; LR_0 LR_3 LR_4 LR_8; node [shape = circle]; LR_0 -> LR_2 [ label = "SS(B)" ]; LR_0 -> LR_1 [ label = "SS(S)" ]; LR_1 -> LR_3 [ label = "S($end)" ]; LR_2 -> LR_6 [ label = "SS(b)" ]; LR_2 -> LR_5 [ label = "SS(a)" ]; LR_2 -> LR_4 [ label = "S(A)" ]; LR_5 -> LR_7 [ label = "S(b)" ]; }';
        component.find("vehicleRenderer").set("v.graphvizContent", sampleSVG);
    }
})