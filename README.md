# Movie Database Web Application

**Student:** Favour Eloghosahumwen Otaye  
**Track:** Front-End Web Development (ALX)  
**Project:** Front-End Capstone  (Cohort 07)




## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Setup Instructions](#setup-instructions)  
- [How to Use](#how-to-use)  
- [API Information](#api-information)  
- [Deployment](#deployment)  
- [Challenges Faced](#challenges-faced)  
- [Next Steps](#next-steps)  



## Project Overview

This is a **Movie Database Web Application** that allows users to search for movies, view detailed movie information, and explore trending and popular movies. The application uses the **OMDB API** to fetch real-time movie data, giving users accurate and up-to-date information.

The project demonstrates my skills in **React**, **Tailwind CSS**, **state management**, **API integration**, and **responsive web design**.




## Features

- **Landing Page** with trending and popular movies sections  
- **Search Functionality** for movies by title  
- **Movie Details Page** showing plot, cast, genre, director, and ratings  
- **Pagination** for search results  
- **Reusable Components** (SearchBar, MovieCard, SearchResultCard)  
- **Responsive Design** for mobile, tablet, and desktop  
- **Error Handling** for network errors or invalid searches  



## Technologies Used

- **React** (Functional Components & Hooks)  
- **Vite** (Development environment)  
- **Tailwind CSS** (Styling and responsive layouts)  
- **React Router DOM** (Navigation between pages)  
- **OMDB API** (Movie data fetching)  
- **Netlify / Vercel** (Deployment platforms)  



## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/favour-dev20/movie-db.git

2. Navigate to the project folder:


cd movie-db

3. Install dependencies:


npm install

4. Create a .env file in the root directory and add your OMDB API key:


VITE_OMDB_API_KEY=your_api_key_here

5. Start the development server:

npm run dev

6. Open your browser at http://localhost:5173 to view the app.




How to Use

Use the search bar on the landing page to find movies.

Click the red Search button to navigate to the search results page.

Click any movie card to view the Movie Details Page.

Use the Back button on the details page to return to the search results.

Explore trending and popular movies directly from the landing page.




API Information

API Used: OMDB API

Endpoint for search: https://www.omdbapi.com/?s={searchQuery}&page={pageNumber}&apikey={API_KEY}

Endpoint for details: https://www.omdbapi.com/?i={imdbID}&apikey={API_KEY}

What it provides: Movie title, year, poster, plot, actors, director, genre, IMDB rating, and more.




Deployment

The application is deployed live at: [https://movie-db-opal-omega.vercel.app]

Steps I followed for deployment:

1. Built the app using npm run build.


2. Uploaded to Netlify / Vercel.


3. Configured environment variable VITE_OMDB_API_KEY.


4. Tested the live site for search, navigation, and responsiveness.




Challenges Faced

Setting up React Router DOM for seamless navigation.

Handling API errors and cases with no search results.

Ensuring all pages are fully responsive.

Implementing pagination for search results.




Next Steps

Add favorites list stored in local storage.

Include sorting and filtering by genre, year, or rating.

Display movie trailers using YouTube integration.

Add light/dark mode toggle for better user experience.

Implement internationalization for multiple languages.



Author

Favour E. Otaye
Front-End Web Developer | ALX Student
Email: [favourotaye7@gmail.com]


“Consistency compounds — small daily progress becomes unstoppable growth.”