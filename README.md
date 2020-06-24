# Watch me roam

## Description
Watch me roam is a travel log allowing users to display their itinerary on a map by registering each stop they make with location, date, description and pictures. They can share the link to beloved ones or publically so non-users can follow along during the trip.

## MVP 
- authorization/authentification
- home page with all trips listed
- 'add new stop' page
- 'edit a stop' page
- 'trip overview' page with all stops of one trip listed
- 'map overview' page with all the stops displayed and linked on the map


## Backlog

- statistics page (how many countries visited, how many km, flags, continent)
- add a key to the stopModel 'people' and link it to a new model 'people' where information about peoplethe user is travelling with
- add automatic weather display for each step
- trip overview and map over view on the same page (flex box?)


## Models

- UserModel {username, email, password}
- StopModel {location, name, date, description, pictures}


## Routes

- '/'  => Landing page
- 'signup'  =>  Sign up page
- 'signin'  =>  Sign in page
- 'home'  =>  Home page with all the trips listed
- 'tripOverview' => page with all stops of one trip listed
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
