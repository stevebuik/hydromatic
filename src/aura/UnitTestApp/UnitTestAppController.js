({
	onInit : function(component, event, helper) {
		$A.get("e.c:UnitTestEvent").fire();
	}
})