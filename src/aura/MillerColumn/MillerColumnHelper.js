({
	calculateState : function(count, data) {
        if (count == 1) {
            return "inFocus";
        } else {
            return "unFocused";
        }
	}
})