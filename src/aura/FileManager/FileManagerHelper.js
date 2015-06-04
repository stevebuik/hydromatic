({
    // main logic of the component
	loadFiles : function(component) {
        var hlp = this.getConcreteHelper(component);
    	hlp.getFiles(component.getConcreteComponent(),
            function(files) {
                if (hlp.isChooseItemEnabled(component.getConcreteComponent())) {
                    files.unshift({value: "choose", label: "- Choose "+ component.get("v.fileSingular") +" -"});                    
                } else {
                    for (var i = 0; i < files.length; i++) {
                        if (hlp.isItemSelected(component.getConcreteComponent(), files[i])) {
                    		files[i].selected = true;
                        }
                    }
                }
		      	component.find("picker").set("v.options", files);  
            }
        );
	},
    
    handleFileSelection : function(component, selection) {
        var hlp = this.getConcreteHelper(component);
    	hlp.getFile(component.getConcreteComponent(),
            function(file) {
                var componentEvent = component.getEvent("fileSelectedEvent");
                componentEvent.setParams({selection: file,                                           
                                          context: component.get("v.eventContext")});
                componentEvent.fire();                
            }, 
			selection);
	},
    
    getConcreteHelper : function(component) {
        var cc = component.getConcreteComponent();
        return cc.getDef().getHelper();
    },
    
    isChooseItemEnabled: function(component) {        
        return component.get("v.chooseItemEnabled");
    },
        
    // can be implemented (same as an OO override) by the sub-component
    
    getFiles : function(component, callback) {
        console.log("TODO add a getFiles function to sub-component helper!");  
        callback([]);
    },

	// override this to provide different data to the callback i.e. event payload    
    getFile : function(component, callback, selection) {        
        callback(selection);
    },
    
    // predicate to pick which item is selected by default when not using "Choose File" option
    // default is to use the "defaultItem" component attribute but can be overridden in sub-component
    isItemSelected: function(component, item) {
        return item.label == component.get("v.defaultItem");
    }
    
    
})