({
	getFiles : function(component, callback) {
		var action = component.get("c.getRecords");
        action.setParams({ obj : component.get("v.object") });
        action.setCallback(this, 
                           function(response){
                               var records = response.getReturnValue();
                               var options = [];
                               for (var i = 0; i < records.length; i++) {
                                   options.push({value: records[i].Id,
                                                 label: records[i].Name});
                               }
                               callback(options);               
                           },
                           "SUCCESS");            
  		$A.enqueueAction(action);
    },
        
    getFile : function(component, callback, selection) {
        var fieldsForSelection = component.get("v.fields");
        if (typeof fieldsForSelection === "undefined") {
            callback(selection);
        } else {            
            var action = component.get("c.getRecord");
            action.setParams({obj   : component.get("v.object"),
                              id    : selection.value,
                              fields: fieldsForSelection});
            action.setCallback(this, function(response){
                callback(response.getReturnValue());               
            }, "SUCCESS");            
            action.setCallback(this, function(response){
                console.log(response.error[0].message);
            }, "ERROR");            
            $A.enqueueAction(action);
        }
    }
})