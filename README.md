Web app that searches the Yelp API for business such as restaurants.

Built with ReactJS. Live on: http://ravenousweb.surge.sh

This project is one of many built for Codecademy's course "Create a Front-end app with React". 

Some additional features added by myself:
-Pressing the enter key triggers a search
-Show a 'loading' message while waiting for results from the API
-Refresh the search when choosing a different "Sort By" option
-Refactored code to prevent searches with empty terms
-Refactored code to prevent searches that don't return any results from breaking the app.


*Note from Yelp's API: 
The rating sort is not strictly sorted by the rating value, but by an adjusted rating value that takes into account the number of ratings, similar to a Bayesian average. This is to prevent skewing results to businesses with a single review.
