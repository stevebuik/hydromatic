({
    init : function(component, event, helper) {
            $("#sliderInput").slider();
            $("#sliderInput").on('slide', function(slideEvt) {
                $("#sliderValue").text(slideEvt.value);
            });   
        }
	}
})