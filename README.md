# hydromatic
Systematically reusable Lightning components to copy and/or learn from

This project contains a set of components built using the Salesforce Lightning Component framework.

It also contains a test drive application that allows you to quickly play with each component to try: 
  - how it feels as a user
  - how it works in a responsive desktop/mobile application
  - how it was assembled
  
Our hope this that this collection of parts will provide an asset that is automatically valuable to the 
community of Salesforce developers that are learning and building custom Salesforce applications.

To learn Lightning Components you can [watch these videos](https://www.salesforce.com/services-training/learnlightning.jsp)

The initial components in this project will be assembled to migrate 
[the Graphvizforce project](http://stevebuik.github.io/GraphVizForce) to the Lightning framework.

Installation Instructions
---

This project can be automatically installed 
[into a sandbox](https://githubsfdeploy-sandbox.herokuapp.com/app/githubdeploy/stevebuik/hydromatic) or 
[into a free developer edition](https://githubsfdeploy.herokuapp.com/app/githubdeploy/stevebuik/hydromatic)
directly.

Or you can clone this repo, cd to the CI folder and use "ant push" to install or update your org. There is also an "ant pull" for getting new code out of SFDC and back into the project for commits. Both ant commands require credentials to be set in the environment first. See the build.xml for more details.

Once installed, navigate your browser to **/c/VehicleApp.app** once you are logged in to Salesforce.

TODO
---

- create a pre-installed and publically accessible test drive of the application to allow instant gratification for 
anybody that discovers this project.
