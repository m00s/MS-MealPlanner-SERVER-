MS-MealPlanner
===============

A simple weekly meal planner made with love

##Setup
Clone the repo
```
$ git clone git@github.com:m00s/MS-MealPlanner.git
```
Make sure to have npm installed, then move to the repo dir and download dependencies issuing
```
$ cd <reponame> && npm install && bower install
```

##Start the app
Just issue a ```grunt serve``` from the root and wait for the process to open a new tab in your browser, with a server listening at ```http://127.0.0.1:9000```

##Building the release
First, bump the package.json version using a command like ```npm version patch```, then issue the default Grunt task with a plain ```grunt```

###Technologies stack
  * AngularJS 
  * Express 4
  * MongoDB

##Testing
###Unit testing
The unit tests are written in Jasmine and launched through a Karma launcher, that uses the ```karma.conf.js``` config file.
You can run the issue ```grunt test```. Also, they are run when building the release.
To run unit test on multiple browser edit ```karma.conf.js```.
###E2E
E2E tests are run using Protractor, a library that leverages WebDriverJs to run tests on angular. The config file is ```protractor.conf.js```
All the Unit test live in the ```e2e``` folder.

