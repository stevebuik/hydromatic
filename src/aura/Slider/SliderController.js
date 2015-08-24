({
    javascriptReady : function(component, event, helper) {
        if (event.getParam("library") == "JQUERY") {
            $j("#sliderInput").slider();
            $j("#sliderInput").on('slide', function(slideEvt) {
                $j("#sliderValue").text(slideEvt.value);
            });   
        }
	}
})