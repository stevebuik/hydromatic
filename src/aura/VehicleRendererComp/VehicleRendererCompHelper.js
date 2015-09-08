({
	renderVehicleContent: function(component) {
        var content = component.get("v.graphvizContent");
        this.generateERDToWeb(content);
    },
    dispatchLockScreenEvent: function(component, isLoading){
        var appEvent = $A.get("e.c:LockScreenEvent");
        appEvent.setParams({ "isLoading": isLoading }).fire();
    },
    dispatchAppMessageEvent: function(component, isShow, severity, title, body){
        var appEvent = $A.get("e.c:ApplicationMessageEvent");
        appEvent.setParams({ "isShow": isShow,
							 "severity": severity,
							 "title": title,
							 "body": body
                           })
        		.fire();
    },
    /*********************Javascripts to put Graphviz to web**********************/
    inspect : function(s) {
        return "<pre>" + s.replace("/</g", "&lt;").replace("/>/g", "&gt;").replace('/\"/g', "&quot;") + "</pre>";
    },
    convertERDContentToMarkup : function (content, format, engine) {
        var result;
        try {
            result = Viz(content, format, engine);
            if (format === "svg")
                return result;
            else
                return this.inspect(result);
        } catch(e) {
            return this.inspect(e.toString());
        }
    },
    generateERDToWeb : function (content)
    {
        var erdMarkup = this.convertERDContentToMarkup(content,"svg");
        var container = document.getElementById("diagramContainer");
        container.innerHTML = erdMarkup;
        
        // Make svg responsive
        var svg = container.getElementsByTagName('svg')[0];
        if(svg != null)
        {
            svg.setAttribute('preserveaspectratio', 'xminymin meet');
            svg.setAttribute('width', "100%");
        }
    },
    
    runUnitTests : function(component){
        
        // Prepare test data
        var sampleSVG = 'digraph R {  rankdir=LR  node [style=rounded]  node1 [shape=box]  node2 [fillcolor=yellow, style="rounded,filled", shape=diamond]  node3 [shape=record, label="{ a | b | c }"] node1 -> node2 -> node3}';
        component.set("v.graphvizContent", sampleSVG);
        
        // Do test
        this.renderVehicleContent(component);
        
        // Assert test
        QUnit.test( "Test VehicleRendererComp", function( assert ) {
			var content = component.get("v.graphvizContent");
			assert.equal( sampleSVG, content, "Passed!" );
            
            var container = document.getElementById("diagramContainer");
			assert.notEqual( null, container.innerHTML, "Passed!" );
            
        	var svg = container.getElementsByTagName('svg')[0];
			assert.notEqual( null, svg, "Passed!" );
            
            var svgPreserveAspectRatio = svg.getAttribute('preserveaspectratio');
			assert.equal( 'xminymin meet', svgPreserveAspectRatio, "Passed!" );
            
            var svgWidth = svg.getAttribute('width');
			assert.equal( '100%', svgWidth, "Passed!" );
            
        });
    }
})