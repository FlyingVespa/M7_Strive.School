## 🥇 - Homework

**Redux Spotify**
_Organize with your team to have a common version of Reacy Spotify connected to the RapidAPI API, through the Strive endpoint. Alternatively, you can start from the attached template._

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
