###MODULE 7 - ADVANCED REACT
\*\* Subjects covered:

- React-Redux Bindings
- Redux-thunk
- React Hooks Reference
- TypeScript

#####M7 Day 1
Basic Recap of ReactJS from previous modules (refresher after back-end)

**_Homework_**:

<details>
<summary>Create a "Search Engine" for Remote Jobs.</summary>
Should include: 
- [ ] User input desired position.
- [ ] Output job search results
- [ ] From the results, every company name should be clickable and redirect to a /company-detail page where all the jobs from that company are listed.
- **EXTRA**: Filter by category;alid categories can be retrieved performing a GET request on this endpoint: https://remotive.io/api/remote-jobs/categories

API DOCS
`https://remotive.io/api-documentation`

Examples
`https://remotive.io/api/remote-jobs?search=front%20end`
`https://remotive.io/api/remote-jobs?company_name=olla`
Features
Home page with search-bar for jobs
Company detail page with their results only
EXTRA: implement also a filter by category; valid categories can be retrieved performing a GET request on this endpoint:
`https://remotive.io/api/remote-jobs/categories`

</details>

#####M7D2
Redux Intro
**_No Homework_** Just watch: [Redux Tutorial 18 episodes - Codevolution](https://www.youtube.com/watch?v=9boMnm5X9ak&list=RDCMUC80PWRj_ZU8Zu0HSMNVwKWw&start_radio=1&rv=9boMnm5X9ak&t=5)

#####M7D3
Redux - add to project
**_Homework_**:

<details>
<summary>Continue with M7D1  "Search Engine" </summary>

Today's task is to add a Redux store to your project, and give the user the ability to set as "favourite" as many companies as he/she likes.
This favourite companies list must be entirely saved in the redux store, and rendered in a separate page
(create a route on /favourites, for example).
Also link your company detail page on every entry in this favourites page, just like you did on the main results.

    // EXTRA
    - Allow the user to also remove a company from his/her favourites.
    - Handle every error that you can think of by using redux actions and reducers (eg. {type: "SET_ERROR", payload: "404"})
    and display it by reading the global state to inform the user.

</details>

#####M7D4
Redux - split reducers
**_Homework_**:

<details>
<summary>Continue with M7D3  "Search Engine" </summary>
    It's time to split our single reducer into multiple ones and introduce redux-thunk in our app for performing asynchronous action dispatching.
    Create two separate reducers: one will continue to store our favourites, and the other will be dedicated to host the array coming from the jobs search results.
    To fill this portion of the redux store, move your fetch method into a thunk action creator like we did this morning for dispatching the right action just when the search results are fully loaded.
    Keep intact the rest of the functionalities, and if you didn't already, give the user the ability to remove a job from the favourites list.
</details>

#####M7D5 - Teamwork Day
Redux - add to old project
**_Homework_**:

<details>
<summary>Add Redux to Spotify (M4D10) project </summary>
Redux Spotify

Organize with your team to have a common version of Reacy Spotify connected to the RapidAPI API, through the Strive endpoint. Alternatively, you can start from the attached template.

💿 Album Page

Parameter: album id

Endpoint : https://striveschool-api.herokuapp.com/api/deezer/album/{id}

Example: https://striveschool-api.herokuapp.com/api/deezer/album/75621062

🎸 Artist page

Parameter: artist id

Endpoint: https://striveschool-api.herokuapp.com/api/deezer/artist/{id}

Example: https://striveschool-api.herokuapp.com/api/deezer/artist/412

🔍 Search

Parameter: query

Endpoint: https://striveschool-api.herokuapp.com/api/deezer/search?q={query}

Example: https://striveschool-api.herokuapp.com/api/deezer/search?q=queen

Once you have it, transform the application by using Redux stores in order to maintain the status of the application.

📑 Features:

- Homepage, Album page, Artist page

- When clicking on a song, the name and the details should appear in the "player" section

- Next to each song, you should be able to "Like" the song. From that moment on, wherever the song appears, the like "status" should be maintained

- [EXTRA] Save in the redux store the songs you retrieve from the APIs as well

- [EXTRA] Be able to add songs to other playlists besides the playing queue

- [EXTRA] Implement an UNDO functionality

💡 Hints:

- Use the store for saving the songs the user liked and check accordingly everytime you display a song

- Use the store for keeping track of the song that is currently playing.

- Use redux-thunk to wrap your async calls in reusable actions

- For the undo:

npm i redux-undo

- Or if you really want to implement it yourself: https://redux.js.org/recipes/implementing-undo-history

</details>
