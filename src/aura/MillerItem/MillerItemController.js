({
    doInit : function(cmp) {
        // connect the (specific) data back to the generic Searchable interface attr
        cmp.set("v.searchText", cmp.get("v.data").label);
    }
})