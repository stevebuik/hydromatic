<aura:application template="c:UnitTestTemplate">
    
    <ltng:require styles="/resource/sfbootstrapcss,
                          /resource/styles/css/qunit-1.19.0.css"
			      scripts="/resource/jquery,
                           /resource/bootstrapjs,
                           /resource/VizJS,
                           /resource/styles/js/qunit-1.19.0.js"
                  afterScriptsLoaded="{!c.onInit}"/>
    
    <c:VehicleMainComp />
</aura:application>