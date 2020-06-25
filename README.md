# Watch me roam

## Description
Watch me roam is a travel log allowing users to display their itinerary on a map by registering each stop they make with location, date, description and pictures. They can share the link to non-users so they can follow along during the trip.

## MVP 
- authorization/authentification
- home page with all trips listed
- 'add new trip' page
- 'edit trip' page
- 'trip overview' page with all stops of one trip listed
- 'map overview' page with all the stops displayed and linked on the map
- 'view stop details' page
- 'add new stop' page
- 'edit stop' page
- start date of a stop can not be before start date of the trip

## User Stories
-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start creating and managing my backlog
-  **Login:** As a user I can login to the platform so that I can start creating and managing my backlog
-  **Logout:** As a user I can logout from the platform so no one else can modify my information
-  **Add elements** As a user I can add elements to my backlog
-  **Delete elements** As a user I can delete elements from my backlog
-  **Edit elements** As a user I can edit elements from my backlog
-  **Check overview and map of a trip** As a user I can check my stops overview and map



## Backlog

- statistics page (how many countries visited, how many km, flags, continent)
- add a key to the stopModel 'people' and link it to a new model 'people' where information about peoplethe user is travelling with
- add automatic weather display for each step
- trip overview and map over view on the same page (flex box?)
- add a new stop by starting on clicking on a country on a map
- add 'comment' and 'like' buttons on each stop for followers

<br>

# Client / Frontend

## React Router Routes (React App)
| Path                      | Component                      | Permissions                 | Behavior                                                       |
| ------------------------- | --------------------           | -----------                 | ------------------------------------------------------------   |
| `/`                       | SplashPage                     | public `<Route>`            | Home page                                                      |
| `/signup`                 | SignupPage                     | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup  |
| `/signin`                 | SigninPage                     | anon only `<AnonRoute>`     | Login form, link to signup, navigate to homepage after login   |
| `/logout`                 | n/a                            | user only `<PrivateRoute>`  | Navigates to landing after logout, expire session              |
| `/home`                   | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Desplays all trips                                             |
| `/createTrip`             | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Adds an element                                                |
| `/editTrip`               | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Edits an element                                               |
| `/tripOverview`           | SearchForm, SearchResults      | user only  `<PrivateRoute>` | Desplays all stops from a trip                                 |
| `/stopDetails`            | SearchForm, SearchResults      | user only `<PrivateRoute>`  | Desplays details of a specific stop                            |
| `/map`                    | SearchForm, SearchResults      | user only `<PrivateRoute>`  | Desplays the map with all the stops locations                  |
| `/createStop`             | ElementInfo                    | user only `<PrivateRoute>`  | Adds an element                                                |
| `/editStop`               | Profile, Stats                 | user only  `<PrivateRoute>` | Edits an element                                               |
    

## Routes

- '/'  => Landing page
- 'signup'  =>  Sign up page
- 'signin'  =>  Sign in page
- 'home'  =>  Home page with all the trips listed
- 'createTrip' => create new trip page
- 'editTrip' => edit trip page
- 'tripOverview' => page with all stops of one trip listed
- 'stopDetails' => page with all the details of one stop (Name, city, country, description, pictures)
- 'map' => page with all the stops displayed and linked on the map
- 'createStop'  =>  Page to create a new stop
- 'editStop/:id'  =>  Page to edit a stop

## Models

- UserModel {username, email, password}
- TripModel {name, description, start date, end date}
- StopModel {location, name, date, description, pictures}


## Links


### GitHub Projects
[GitHub projects]


### Git
- [GitHub Repo](https://github.com/justinebenevent/watch-me-roam/)
- [Heroku]


### Slides
[Google Slides]
