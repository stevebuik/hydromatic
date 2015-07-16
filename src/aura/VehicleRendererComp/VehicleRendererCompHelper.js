({
	renderVehicleContent: function(component, content) {
        /*
        this.dispatchLockScreenEvent(component, true);
        this.dispatchAppMessageEvent(component, false, "", "", "");
        
        var action = component.get("c.getVehicleContent");
        action.setParams({
        	"content": content
        });
        
    	var self = this;
        action.setCallback(this, function(a) {
        	this.dispatchLockScreenEvent(component, false);
            this.dispatchAppMessageEvent(component, true, "confirm", "Information", "Vehicle successfully renderred.");
            var result = a.getReturnValue();
            this.generateERDToWeb(content);
    	});
    	$A.enqueueAction(action);
        */
        
        var content = component.get("v.graphvizContent");
        this.generateERDToWeb(content);
    },
    dispatchLockScreenEvent: function(component, isLoading){
        var appEvent = $A.get("e.c:LockScreenEvent");
        appEvent.setParams({ "isLoading": isLoading }).fire();
    },
    dispatchAppMessageEvent: function(component, isShow, severity, title, body){
        var appEvent = $A.get("e.c:ApplicationMessageEvent");
        appEvent.setParams({ "isShow": isShow,
							 "severity": severity,
							 "title": title,
							 "body": body
                           })
        		.fire();
    },
    /*********************Javascripts to put Graphviz to web**********************/
    inspect : function(s) {
        return "<pre>" + s.replace("/</g", "&lt;").replace("/>/g", "&gt;").replace('/\"/g', "&quot;") + "</pre>";
    },
    convertERDContentToMarkup : function (content, format, engine) {
        var result;
        try {
            result = Viz(content, format, engine);
            if (format === "svg")
                return result;
            else
                return this.inspect(result);
        } catch(e) {
            return this.inspect(e.toString());
        }
    },
    generateERDToWeb : function (content)
    {
        var erdMarkup = this.convertERDContentToMarkup(content,"svg");
        document.getElementById("diagramContainer").innerHTML = erdMarkup;
    }
})