# LandMrk

Welcome to LandMrk! LandMrk is a virtual tour assistant that allows the user to identify historical locations and monuments through the use of Augmented Reality technology. 

When the user opens the app, they have access via geolocation to all available "landmarks" nearby. The user may choose to then tap the marker to view a short historical blurb on the landmark and are given the choice to further expand that blurb into a more detailed explanation.

AR technology is implemented through a camera view, in which users may view the landmark markers in real time in the user's environment, and will see the short historical blurb overlay the landmark right in their camera view.

LandMrk is a community driven service and therefore users are given the ability to create their own landmarks if none exists for a previous location!


## Team

  - __Product Owner__: Tony Head
  - __Scrum Master__: Michael Doyle
  - __Development Team Members__: James Knippel, Justin Chandrasekhar

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

- Opening the application takes you to the login page. Login with your existing account, or sign up to create new free account.

- After login, you will be redirected to the home page where you may navigate to the a AR (Augmented Reality) camera view, the map view "View Markers", or may choose to log out of your account.

- From the AR view, you may explore landmarks in your current location via augmented reality, and see the available historical blurbs overlay the landmark in real time! Tapping the blurb navigates you to the more info page where you may read additional information. You may also tap the "Read the Wikipedia Article" to navigate to the related Wikipedia article in your browser.

- The View Markers view will give you similar functionality as the AR view. You may explore nearby landmarks as determined by your geolocation. Tapping the landmarks will display the short blurbs, and tapping the "Click for more info" button at the bottom will navigate to the More Info page. 

## Requirements

- Node v6.10.3
- Ionic 3.7.0
- Ionic CLI (for development)
- Cordova 7.0.1

## Development
- Install dependencies.

- Run 'ionic serve' in the 'ionic-maps' directory to simulate app in your browser.

- 'npm install promise-polyfill' will need to be ran on some devices.

- For more about deployment to your mobile device, please read the tutorial at https://ionicframework.com/docs/intro/deploying/


### Installing Dependencies

From within the ionic-maps directory:

```sh
Run 'ionic serve' in the ionic-maps directory. If Ionic CLI is properly installed on your device, you will be given the choice to npm install dependencies. Please choose yes.

```

### Roadmap

View the project roadmap [here](_ROADMAP.md)


## Contributing

See [CONTRIBUTING.md](_CONTRIBUTING.md) for contribution guidelines.
