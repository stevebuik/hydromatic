({
    filter : function(cmp) {
        var searchTerm = cmp.find("search").get("v.value");
        $j.each(cmp.get("v.body"), function( index, item ) {
	        // this treats the item as a Searchable interface impl only
            if (item.get("v.searchText").toLowerCase().indexOf(searchTerm) >= 0) {
    			$A.util.removeClass(item.getElement(), "hidden");
            } else {
    			$A.util.addClass(item.getElement(), "hidden");
            }
        });
    },
    
	// when the items list changes, react by syncing the child components
	// with the data but use the component type specified by the 
    upsertItems : function(cmp) {

		var itemWidget = cmp.get("v.itemComponent");        
        $j.each(cmp.get("v.items"), function( index, item ) {
            $A.createComponent(
                itemWidget,
                {
                    "aura:Id": item.id,
                    "data": item
                },
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