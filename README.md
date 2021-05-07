# Shoppies

## App Description

Shoppies allows users to search movies in OMDB and select 5 movies for nomination. 


### Prerequisites

- Environmental Variables: Replace with your OMDB API key in `.env.development` file
e.g. GATSBY_OMDB_API_KEY=123456 


### Running Applicaiton locally

```
non-optimized
$ npm install
$ npm run develop (non-optimized)

OR

$ npm install
$ npm run build (optimized)
$ npm run serve 

```

### Deployment

- Hosted at: https://shoppies-hongming-li.netlify.app/


### Functionalities

- Search OMDB and display the results (movies only)
- Add a movie from the search results to our nomination list
- View the list of films already nominated
- Remove a nominee from the nomination list

Extra:
- Save nomination lists if the user leaves the page
- Detail of the movie shows up by clicking on the name of the movie in the Search List


