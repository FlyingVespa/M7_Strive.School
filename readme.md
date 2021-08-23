### ⚛️ MODULE 7 - ADVANCED REACT ⚛️

_ReactJS is a powerful and complex library. In this module we’ll learn how to use REDUX, Stores and other advanced features that are currently used in apps like Facebook, Instagram, AirBnb etc. We’re also gonna learn the basic of TypeScript, a typed superset of JavaScript that compiles to plain JavaScript, that is quickly become the industry standard for web development._

**Topics covered:**

- React-Redux Bindings
- Redux-thunk
- React Hooks Reference
- TypeScript

#### Day 1

_Basic Recap of ReactJS from previous modules (refresher after back-end)_

<details>
<summary>🔗 - Useful Resources</summary>

- [REDUX](https://redux.js.org/)
- [React Redux](https://react-redux.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Router](https://reactrouter.com/web/guides/quick-start)
</details>

<details>
<summary>🥇 - Homework - "Search Engine"</summary>

**Create a "Search Engine" for Remote Jobs.**

Complete the homework and submit it before 17.00 GMT +1.

**Jobs Search Engine**
You are in charge of building a "Search Engine" for Remote Jobs.

The application should have a search page where the user can input the desired position and retrieve relevant results.

From the results, every company name should be clickable and redirect to a /company-detail page where all the jobs from that company are listed.

API DOCS
https://remotive.io/api-documentation

Examples
https://remotive.io/api/remote-jobs?search=front%20end

https://remotive.io/api/remote-jobs?company_name=olla

**Features**

- Home page with search-bar for jobs
- Company detail page with their results only

**EXTRA**:

- implement also a filter by category; valid categories can be retrieved performing a GET request on this endpoint: https://remotive.io/api/remote-jobs/categories
</details>

#### Day 2

_Redux Intro_
[💊 - Coding Pill: Redux](https://youtu.be/n93GQorqcMY)

<details><summary>🥇 - Homework - "Watch Tut's Redux" ✅</summary>

[Redux Tutorial 18 episodes - Codevolution](https://www.youtube.com/watch?v=9boMnm5X9ak&list=RDCMUC80PWRj_ZU8Zu0HSMNVwKWw&start_radio=1&rv=9boMnm5X9ak&t=5)

Homework for today is divided in two solo activities:

**Watch the React Redux videos provided for a better understanding of the topic (don't be scared by the amount, it's ~ 1:40h in total)**

- Be able to present a brief overview on three of these Redux - related topics (you can choose):
- Immutability in Redux
- Predictability in Redux
- Actions
- Reducers
- mapStateToProps
- mapDispatchToProps
- Redux middlewares
- the connect function</details>

#### Day 3

_Redux - Strivezon with Redux_

<details><summary>🔗 - Useful Resources</summary>

- [Does it mutate?](https://doesitmutate.xyz/)
</details>

<details><summary>🥇 - Homework - Continue "Search Engine" </summary>
_You are in charge of building a "Search Engine" for Job Posting.
The application should have a search page where the user can input the desired position and retrieve
relevant results._

**START FROM MONDAY'S WORK**

- Today's task is to add a Redux store to your project
- Give the user the ability to set as "favourite" as many **companies** as he/she likes.
- This favourite companies list must be entirely saved in the redux store, and **rendered in a separate page**.
  _(create a route on /favourites, for example)._

- Also link your company detail page on every entry in this favourites page, just like you did on the main results.
  **EXTRA:**

- Allow the user to also remove a company from his/her favourites.
- Handle every error that you can think of by using redux actions and reducers (eg. {type: "SET_ERROR", payload: "404"})
  and display it by reading the global state to inform the user.

</details>

#### Day 4

_Redux - Advance Redux reducers_

<details><summary>🔗 - Useful Resources</summary>

- [Redux Thunk Github](https://github.com/reduxjs/redux-thunk)
- [Combiner Reducers](https://redux.js.org/api/combinereducers)
</details>

<details><summary>🥇 - Homework - Continue "Search Engine" </summary>
Continue with M7D3  "Search Engine" 
    It's time to split our single reducer into multiple ones and introduce redux-thunk in our app for performing asynchronous action dispatching.
    Create two separate reducers: one will continue to store our favourites, and the other will be dedicated to host the array coming from the jobs search results.
    To fill this portion of the redux store, move your fetch method into a thunk action creator like we did this morning for dispatching the right action just when the search results are fully loaded.
    Keep intact the rest of the functionalities, and if you didn't already, give the user the ability to remove a job from the favourites list.
</details>

#### Day 5 - Teamwork Day

Redux - add to old project(Spotify)

<details><summary>🥇 - Homework - Teamwork ✅</summary>

**Redux Spotify**

_Organize with your team to have a common version of Reacy Spotify connected to the RapidAPI API, through the Strive endpoint. Alternatively, you can start from the attached template._

##### 💿 Album Page

**Parameter:** album id
**Endpoint :** https://striveschool-api.herokuapp.com/api/deezer/album/{id}
**Example:** https://striveschool-api.herokuapp.com/api/deezer/album/75621062

##### 🎸 Artist page

**Parameter:** artist id
**Endpoint:** https://striveschool-api.herokuapp.com/api/deezer/artist/{id}
**Example:** https://striveschool-api.herokuapp.com/api/deezer/artist/412

##### 🔍 Search

**Parameter:** query
**Endpoint:** https://striveschool-api.herokuapp.com/api/deezer/search?q={query}
**Example:** https://striveschool-api.herokuapp.com/api/deezer/search?q=queen

_Once you have it, transform the application by using Redux stores in order to maintain the status of the application._

##### 📑 Features:

- Homepage, Album page, Artist page
- When clicking on a song, the name and the details should appear in the "player" section
- Next to each song, you should be able to "Like" the song. From that moment on, wherever the song appears, the like "status" should be maintained

_EXTRA:_

- [x] Save in the redux store the songs you retrieve from the APIs as well
- [x] Be able to add songs to other playlists besides the playing queue
- [x] Implement an UNDO functionality

##### 💡 Hints:

- Use the store for saving the songs the user liked and check accordingly everytime you display a song
- Use the store for keeping track of the song that is currently playing.
- Use redux-thunk to wrap your async calls in reusable actions
- For the undo:

`npm i redux-undo`

- Or if you really want to implement it yourself: https://redux.js.org/recipes/implementing-undo-history

</details>

#### Day 6

Redux Extra

<details><summary>🔗 - Useful Resources</summary>

- [Redux Presist](https://github.com/rt2zz/redux-persist)
- [Redux Presist Transform Encrypt](https://github.com/maxdeviant/redux-persist-transform-encrypt)
- [Redux Hooks](https://react-redux.js.org/api/hooks)
- [NextJs](https://nextjs.org/)

</details>

<details><summary>🥇 - Homework - Continue "Search Engine" </summary>

_You are in charge of building a "Search Engine" for Job Posting.
The application should have a search page where the user can set the position (or tech) and the location._

**START FROM Day 4's WORK**
_Let's refactor the project using some new techniques: Redux Hooks and redux-persist!_

- Track down the functional components in your application and replace their connect function with useSelector and useDispatch.
- Install the redux-persist package from npm (npm i redux-persist) and add it to your project. The goal is to make your redux store survive a browser refresh.
  Try to use the session storage of your browser as its engine.

[EXTRA]

- For some extra practise, transform some class components in your project into functional ones and apply useSelector and useDispatch to keep their functionalities.
- encrypt your session storage keys with AES using redux-persist-transform-encrypt, keep the key into a .env file
- Create a NextJS App following the docs tutorial:
  https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website

</details>

#### Day 7

<details><summary>🔗 - Useful Resources</summary>

- [TypeScript Official Website](https://www.typescriptlang.org/)
- [TypeScript quick start & reference](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

</details>

<details><summary>🥇 - Homework - Watch the TypeScript video </summary>
🥇 - Homework

Watch the TypeScript video provided for a better understanding of the topic
Be able to present a brief overview on three of these TypeScript related topics (you can choose):

- General overview (what it is, how it helps, differences from plain JS)
- The TS compiler (why is needed, how can be used)
- Type Inference
- The ‘any’ Type
- The Union Type
- The Tuple Type
- Interfaces in TS
- Generics in TS

[TS Tut](https://youtu.be/wyO8RWl1ges)

</details>

#### Day 8

<details><summary>🔗 - Useful Resources</summary>

- [create-react-app TypeScript support](https://create-react-app.dev/docs/adding-typescript/)
- [socket.io Website](https://socket.io/)
- [ The WebSocket protocol](https://en.wikipedia.org/wiki/WebSocket)

</details>

<details><summary>🥇 - Homework -  Music Search Engine TypeScript  </summary>

_Today you'll create a new TypeScript application from scratch.
Fulfill the requirements and try to implement as best as you can typings and interfaces.
The application will be a Music Search Engine!_

Implement a nice main page with an input field for the search and re-use the same page to show the search results.

Clicking on any result should bring the user on a detail page, which will fetch the data for that particular track. Show on this detail page information you consider relevant about the song (i.e. title, album, duration ecc.)

**API INFO:**
For the main search use

    https://striveschool-api.herokuapp.com/api/deezer/search?q=whatever

to get the results.

Use the id property of any resulting track to fetch detail information with
https://striveschool-api.herokuapp.com/api/deezer/track/:id

**HINTS:**

- As usual split your application in many reusable components
- Implement props & state interfaces for each one of them
- Skip the Redux approach and fetch data directly in your components and store them in local states (we didn't had the chance to talk about Redux typings)
</details>

#### Day 9

[💊 - Coding Pill: TypeScript + Redux](https://youtu.be/ubWiHeuFHAI)

<details><summary>🔗 - Useful Resources</summary>

- [create-react-app TypeScript support](https://create-react-app.dev/docs/adding-typescript/)
- [ tsconfig reference](hhttps://www.typescriptlang.org/tsconfig)
- [DefinitelyTyped homepage](https://definitelytyped.org/)

</details>

<details><summary>🥇 - Homework - Strivestaurant convert TypeScript  </summary>

**\_PASTA IS BACK!**

It's time to convert the Strivestaurant project into TypeScript!
Clone the repo → [HERE](https://github.com/irvelervel/strivestaurant-M7) ←

Currently the application is written in plain JS. To start you can choose between:

**Create a new TS create-react-app using the command:**
npx create-react-app strivestaurant --template typescript
and manually copy all the relevant files and components into it, renaming every .js/.jsx file into .ts/.tsx.

**OR**

**In the repo you just cloned execute:**
npm i typescript @types/node @types/react @types/react-dom @types/jest
And rename every .js/.jsx file into .ts/.tsx.
When you run the project for the first time, a tsconfig.json file will be automatically generated and the editor will start showing you the missing types in the code.

No matter which route you choose, after setting up the project don't forget to install the typings for react-router-dom, because the projects needs them:
npm i @types/react-router-dom

Implement typings and interfaces the best you can and make the project run again!

</details>

#### Day 10 - Benchmark

<details><summary>🥇 - Homework - WeatherApp TS</summary>
Should I carry the Umbrella with me?
 
_You are in charge of building a new App for checking the weather around the world!_
_Use ReactJS and OPTIONALLY any new skill learned in this module :_

- Redux
- Functional components
- React Hooks
- TypeScript

**Features**
The user should be able to select the city and receive the weather info (is it going to rain? temperature? next days?)
You can use Open Weather APIs to build your own Weather website!
https://openweathermap.org/api
Study the APIs, if you choose to go with TS build your interfaces and start building the best weather app out there!

</details>
