({
	onInit : function (component, event, helper) {
        document.title = component.get('v.pageHeader');
        component.set("v.commandCount", 0);
    },
    toggleLockScreen : function(component, event, helper) {
        
        var commandCount = component.get("v.commandCount");
        var isLoading = event.getParam("isLoading");
        if(isLoading)
        {
            commandCount++;
        }
        else
        {
            commandCount--;
        }
        component.set("v.commandCount", commandCount);
        
        if(isLoading)
        {
            component.find('lock').getElement().className = 'lockOn';
        }
        else if(commandCount == 0)
        {
            component.find('lock').getElement().className = 'lockOff';
        }
    }
})