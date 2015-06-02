<aura:application >
    
    <ltng:require styles="/resource/sfbootstrapcss"
			      scripts="/resource/jquery"
                  afterScriptsLoaded="c.init"
                  />
    
    <div class="container">    
    
        <div class="lead">
            Lightning Components Demos
        </div>
        
        <div class="well">
            <strong class="lead">File Choosers</strong>
            <c:VehiclePartDemo >
                <aura:set attribute="componentName" value="Mock File Chooser"/>
                <aura:set attribute="instructions" value="Choose a Mock to see the event emitted"/>
                <c:FileManagerMock fileSelectedEvent="{!c.showEvents}"/>
            </c:VehiclePartDemo>
    
            <c:VehiclePartDemo >
                <aura:set attribute="componentName" value="SObject Chooser"/>
                <aura:set attribute="instructions" value="Choose a Document to see the event emitted"/>
                <c:FileManagerSObject >
                    <aura:set attribute="object" value="Document"/>
                    <aura:set attribute="chooseItemEnabled" value="true"/>
                </c:FileManagerSObject>
            </c:VehiclePartDemo>
    
            <c:VehiclePartDemo >
                <aura:set attribute="componentName" value="SObject Chooser"/>
                <aura:set attribute="instructions" value="Choose an Account to see the event emitted"/>
                <c:FileManagerSObject >
                    <aura:set attribute="object" value="Account"/>
                    <aura:set attribute="fields" value="Id,Name,Phone"/>
                    <aura:set attribute="defaultItem" value="sForce"/>
                </c:FileManagerSObject>
            </c:VehiclePartDemo>
		</div>        
    </div>
	
</aura:application>