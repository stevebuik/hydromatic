({
    filter : function(cmp, event, helper) {
        // TODO get helper using overriden opt
        helper.filter(cmp, helper.calculateState);
    },
    
	// when the items list changes, react by syncing the child components
	// with the data but use the component type specified by the 
    upsertItems : function(cmp, event, helper) {
		var itemComponentType = cmp.get("v.itemComponent");        
        var items = cmp.get("v.items");
        $j.each(items, function( index, item ) {
            $A.createComponent(
                itemComponentType,
                {"aura:Id": item.id,
                    "data": item},
                function(newItem){
                    if (cmp.isValid()) {
                        var body = cmp.get("v.body");
                        body.push(newItem);
                        cmp.set("v.body", body);
                    } else {
                        console.log("Invalid item widget!");
                    }
                }
            );
        });
    }    
})