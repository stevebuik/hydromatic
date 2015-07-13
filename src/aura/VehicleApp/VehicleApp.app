<aura:application >
    
    <ltng:require styles="/resource/sfbootstrapcss"
			      scripts="/resource/jquery,
                           /resource/VizJS,
                           /resource/ERDRendererJS"
                  afterScriptsLoaded="c.init"
                  />
    
    <div class="container">    
    
        <div class="lead">
            Lightning Components Demos
        </div>
        
        <div class="well">
            <strong class="lead">File Choosers</strong>
            <c:VehiclePartDemo aura:id="demo1">
                <aura:set attribute="componentName" value="Mock File Chooser"/>
                <aura:set attribute="instructions" value="Choose a Mock to see the event emitted"/>
                <c:FileManagerMock fileSelectedEvent="{!c.showEventsFromApp}">
	                <aura:set attribute="eventContext" value="demo1"/>
                </c:FileManagerMock>
            </c:VehiclePartDemo>
    
            <c:VehiclePartDemo aura:id="demo2">
                <aura:set attribute="componentName" value="SObject Chooser"/>
                <aura:set attribute="instructions" value="Choose a Document to see the event emitted"/>
                <c:FileManagerSObject fileSelectedEvent="{!c.showEventsFromApp}">
                    <aura:set attribute="object" value="Document"/>
                    <aura:set attribute="chooseItemEnabled" value="true"/>
	                <aura:set attribute="eventContext" value="demo2"/>                    
                </c:FileManagerSObject>
            </c:VehiclePartDemo>
    
            <c:VehiclePartDemo aura:id="demo3">
                <aura:set attribute="componentName" value="SObject Chooser"/>
                <aura:set attribute="instructions" value="Choose an Account to see the event emitted"/>
                <c:FileManagerSObject fileSelectedEvent="{!c.showEventsFromApp}">
                    <aura:set attribute="object" value="Account"/>
                    <aura:set attribute="fields" value="Id,Name,Phone"/>
                    <aura:set attribute="defaultItem" value="sForce"/>
	                <aura:set attribute="eventContext" value="demo3"/>
                </c:FileManagerSObject>
            </c:VehiclePartDemo>
		</div>        
        
        <br />
        <div class="well">
            <strong class="lead">Vehicle Renderer</strong>
        	<c:VehicleRendererComp aura:id="vehicleRenderer" />
        </div>
    </div>
	
</aura:application>