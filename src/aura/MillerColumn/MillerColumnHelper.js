({
    
    filter : function(cmp, stateFunction) {
        var searchTerm = cmp.find("search").get("v.value");
        var searchTermAbsent = searchTerm == null || searchTerm.length == 0;
        var matchCount = 0;
        $j.each(cmp.get("v.body"), function( index, item ) {
	        // use the item as a Searchable interface impl
	        var isAMatch = item.get("v.searchText").toLowerCase().indexOf(searchTerm) >= 0;
            if (searchTermAbsent || isAMatch) {
    			$A.util.removeClass(item.getElement(), "hidden");
                matchCount++;
            } else {
    			$A.util.addClass(item.getElement(), "hidden");
            }
            var focus = cmp.get("v.focusPosition");
            var displayState = stateFunction(focus, matchCount, item.get("v.data"));
	        // use the item as a DisplaysState interface impl
            item.set("v.state", displayState)
        });
    },
    
    // override this fn to add more states or conditions
	calculateState : function(focusPosition, count, data) {        
        if ((count - 1) == focusPosition) {
            return "inFocus";
        } else {
            return "unFocused";
        }
	}
})