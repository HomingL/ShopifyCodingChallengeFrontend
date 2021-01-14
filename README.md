# ShopifyCodingChallengeFrontend

```
ShopifyCodingChallengeFrontend

- Challenge Description: https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit
- Deployed on Gatsby Cloud
- Hosted at: https://shopifycodingchallengefrontend.gtsb.io/


```

### Prerequisites
```
- Environmental Variables: Replace with your OMDB API key in `.env.development` file

```
### Development

```
non-optimized
$ npm install
$ npm run develop (non-optimized)

OR

$ npm install
$ npm run build (non-optimized)
$ npm run serve 

```

### Functionalities
```
- Search OMDB and display the results (movies only)
- Add a movie from the search results to our nomination list
- View the list of films already nominated
- Remove a nominee from the nomination list

Extra:
- Save nomination lists if the user leaves the page (Solved)
    - Not working during deployment but working in local development 
    - Error : localstorage is not defined server side rendering
- Detail of the movie shows up by clicking on the name of the movie in the Search List

```
