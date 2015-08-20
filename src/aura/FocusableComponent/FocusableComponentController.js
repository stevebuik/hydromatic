({
	handleFocus : function(component, event, helper) {
        var focus = event.getParams().demoId;
        var isInFocus = focus == null || focus == component.get("v.focusId");
        if (isInFocus) {
	        $A.util.removeClass(component.getElement(), 'unfocused');
        } else {
	        $A.util.addClass(component.getElement(), 'unfocused');
        }
	}
})