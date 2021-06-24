# RobotGameChallengeWebPortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

# Access in Cloud: 
I deployed to my personal AWS account on S3: you can access the app [here](http://game-arcade.s3-website.ca-central-1.amazonaws.com/)

# A couple of things.. :)
I estimated a total of 6 hours working on this including the backend work. However, there were a couple of additional stuff I didn't get to: 

1. Typically, I'd have a full unit test coverage (jest) and e2e test, but I didn't have time to do so. 
2. I implemented the board to support dynamic sizing, like 6, 8, 9 (the board will adjust itself based on an input). But I hard coded to 5 for the time being.
3. You will find the unit test and integration test of backend missing as well. I'm not happy about it either (I'm always a bit crazy over achieving full coverage). But I only got to work on it after work. 

# Local Setup 

1. run `npm install` first
2. run `npm start` (I had a `prestart` script configured, so the openapi will generate the modes and service for communicating to the backend api)

# Build for prod
1. run `npm run generate:api` to generate openapi module
2. run `ng build --prod` to build for cloud deployment

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Screen shots
![Screen Shot 2021-06-24 at 11 26 40 AM](https://user-images.githubusercontent.com/18537184/123275738-28121000-d4df-11eb-969f-810662ef9fa3.png)
![Screen Shot 2021-06-24 at 11 26 51 AM](https://user-images.githubusercontent.com/18537184/123275746-2a746a00-d4df-11eb-879d-93c68fe24a0e.png)
![Screen Shot 2021-06-24 at 11 26 47 AM](https://user-images.githubusercontent.com/18537184/123275751-2c3e2d80-d4df-11eb-8c50-68c0380798e5.png)

