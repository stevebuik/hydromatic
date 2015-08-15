({
	handleFocus : function(component, event, helper) {
        var focus = event.getParams().demoId;
        var isInFocus = focus == null || focus == component.get("v.focusId");
        $A.util.removeClass(component.getElement(), isInFocus?'unfocused':'focused');
        $A.util.addClass(component.getElement(), isInFocus?'focused':'unfocused');
	}
})