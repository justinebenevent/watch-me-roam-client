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


## Backlog

- statistics page (how many countries visited, how many km, flags, continent)
- add a key to the stopModel 'people' and link it to a new model 'people' where information about peoplethe user is travelling with
- add automatic weather display for each step
- trip overview and map over view on the same page (flex box?)
- add a new stop by starting on clicking on a country on a map
- add 'comment' and 'like' buttons on each stop for followers

## Models

- UserModel {username, email, password}
- TripModel {name, description, start date, end date}
- StopModel {location, name, date, description, pictures}


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


## Links


### GitHub Projects
[GitHub projects]


### Git
- [GitHub Repo](https://github.com/justinebenevent/watch-me-roam/)
- [Heroku]


### Slides
[Google Slides]
