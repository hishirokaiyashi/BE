const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const { randomUUID } = crypto;
const { json } = bodyParser;

const app = express();

// initialize db
app.use(json());

const users = [
    {
        _id: "634b869a4c258ebcdd8a8af7",
        name: "Ned Stark",
        email: "sean_bean@gameofthron.es",
        password: "$2b$12$UREFwsRUoyF0CRqGNK0LzO0HM/jLhgUCNNIJ9RJAqMUQ74crlJ1Vu",
        __v: 0,
    },
    {
        _id: "634ba6b6044fe324bada04a7",
        name: "Tywin Lannister",
        email: "charles_dance@gameofthron.es",
        password: "$2b$12$/i04T5yEJvmsBhF0Jd.kJOk3ZhRzezbTU7ASEM5o43Xxsa4o6IgEy",
        __v: 0,
    },
    {
        _id: "634ba6d5044fe324bada04aa",
        name: "Tyrion Lannister",
        email: "peter_dinklage@gameofthron.es",
        password: "$2b$12$xtHwQNXYlQzP2REobUDlzuQimjzBlXrTx1GnwP.xkfULeuuUpRxa2",
        __v: 0,
    },
];
const movies = [
    {
        _id: "634b8173fefd67ce2ee9516f",
        plot: "A group of bandits stage a brazen train hold-up, only to find a determined posse hot on their heels.",
        poster:
            "https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg",
        title: "The Great Train Robbery",
        rated: "TV-G",
        __v: 0,
    },
    {
        _id: "634b9279c1dc1beeb8003447",
        plot: "A group of bandits stage a brazen train hold-up, only to find a determined posse hot on their heels.",
        poster:
            "https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg",
        title: "The Great Train Robbery 2",
        rated: "TV-G",
        __v: 0,
    },
    {
        _id: "634bab13ac3ee20086d30dae",
        plot: "Two peasant children, Mytyl and Tyltyl, are led by Berylune, a fairy, to search for the Blue Bird of Happiness. Berylune gives Tyltyl a cap with a diamond setting, and when Tyltyl turns the...",
        poster:
            "https://m.media-amazon.com/images/M/MV5BMjNlMThmNzItMTZlMS00YzJkLTk1MzktYzIyMzllOGFmZmRlXkEyXkFqcGdeQXVyMzE0MjY5ODA@._V1_SY1000_SX677_AL_.jpg",
        title: "The Blue Bird",
        rated: "TV-B",
        __v: 0,
    },
];
const reviews = [];

app.get("/v1/reviews", (req, res) => {
    res.send(reviews)
})

app.post("/v1/review", (req, res) => {
    const newReview = {
        user_id: "user_id",
        review: "review",
        movie_id: "movie_id"
    };
    reviews.push(newReview);
    res.send(reviews);
})

app.get("/v1/movies",(req,res)=>{
    res.send(movies)
})

app.post("/v1/movies", (req, res) => {
    console.log(req.body);
    const newMovie = {
        _id: randomUUID(),
        plot: req.body.plot,
        poster: req.body.poster,
        title: req.body.title,
        rated: req.body.rated,
    };
    movies.push(newMovie);
    res.send(newMovie);
})


//find all  rate = TV-G rated movies
app.get("/v1/movies/classification",(req,res)=>{
    const rated = req.query.rated;
    const ratedMovies=movies.filter((movie)=>movie.rated==rated)
    res.status(200).send(ratedMovies);
})
app.listen(8061, () => {
    console.log("Sever running on http://localhost:8061/reviews");
})

//get movie by id + review
//delete movie
//get all review
//add review