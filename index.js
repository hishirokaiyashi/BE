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
const moviesFilter= movies.filter((item)=>{
    return item.rated==="TV-G"
})
console.log(moviesFilter)