({
    doInit : function(component, event, helper) {
        helper.loadFiles(component);
    },
    
	handleSelection : function(component, event, helper) {
        var opts = component.find("picker").get("v.options");
        var selection = $j(opts)
        	.filter(function(i) { return opts[i].selected; })
        	.get(0);
        helper.handleFileSelection(component, selection);
	}
})