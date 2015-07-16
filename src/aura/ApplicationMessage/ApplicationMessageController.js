({
	displayMessage : function(component, event, helper) {
        var isShow = event.getParam("isShow");
        var severity = event.getParam("severity");
        var title = event.getParam("title");
        var body = event.getParam("body");
        
        component.set("v.isShow", isShow);
        component.set("v.severity", severity);
        component.set("v.title", title);
        component.set("v.body", body);
	}
})