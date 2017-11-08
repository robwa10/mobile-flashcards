## Mobile Flashcards
The third and final project in Udacity's React Nanodegree program. Created to learn the fundamental aspects of building React Native apps. Modeled after the traditional way of using flashcards to study.

Copyright 2016 Robert Hubbard.  
Licensed under the MIT License.  
Free for personal or educational use.  
All work is my own unless otherwise noted.  

## Getting Started
### Install and start

Clone the repository using:
`git clone https://github.com/robwa10/mobile-flashcards.git`

`cd mobile-flashcards` and node dependencies using `yarn install`.

Run the app using `yarn start`.

### View the App
Install the [Expo](https://expo.io/) client app on your iOS or Android phone and connect to the same wireless network as your computer. Using the Expo app, scan the QR code from your terminal to open your project.

## App Views & Features
#### Home View
The home screen features a listing of all your decks with the Title and number of cards in each.  
Navigation is via the tab navigator or by clicking on a deck.

#### New Deck View
Clicking the New tab will take you to a screen where you can enter a new deck title.

#### Deck View
Clicking the deck brings you to a screen with:  
* Deck title  
* Number of cards in the deck  
* Option to add a card  
* Option to start quiz (must be at least 1 card for this button to render)  

#### Add Card View  
View that allows you to add a new card to the deck. Card contains a question and answer.  

#### Quiz View  
The quiz view rotates to display the question and then the answer of the relevant card.  

Front view displays:  
* Number of correct answers out of total cards  
* Card Question
* Option to see the answer  

Back view displays:
* Answer  
* Correct button
* Incorrect button  

When all questions have been asked and marked as correct or incorrect a results view displays.  

Results view displays:  
* Score in a percentage  
* Option to retake quiz  

#### Notifications  
User receives a local notification at 8pm if they haven't opened the app that day.

## Future Features  
Items to include in future refactors are:  
* Changing quiz card opacity based off of card rotation degrees.  
* Option to delete a deck.  
* Card list view.  
* Option to delete a card.  

#### Due to this project being part of a Udacity course all pull requests will be ignored.  
This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).
