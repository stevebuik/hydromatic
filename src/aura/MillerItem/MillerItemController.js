({
    doInit : function(cmp) {
        // connect the (specific) data back to the generic Searchable interface attr
        cmp.set("v.searchText", cmp.get("v.data").label);
    },
    stateChanged : function(cmp) {
        $A.util.removeClass(cmp, "inFocus");
        $A.util.removeClass(cmp, "unFocused");
        $A.util.addClass(cmp, cmp.get("v.state"));
    }
})