const API_KEY =  "3189df4c-0d44-43ce-ab7f-bf311464c97e";
const API_URL_POPULAR = "https://kinopoiskapiunoffcial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";

getMovies(API_URL_POPULAR);

async function getMovies(url){
    const resp = await fetch(url,{
        headers: {
            "Content-type": "application/json",
            "X-API-KEY": API_KEY,
        },
    });
    const respData = await resp.json();
    shopMovies(respData)
}

function showMovies(data){
    const moviesEl = document.querySelector(".movies");

    data.films.forEach((movie =>{
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML = '
        <div class="movie_cover-inner">
        <img 
            src="http://kinohod.ru/o/31/2a/312a2cee-74eb-11eb-9d3a-9013c0bf4a22.jpg" class="movie_cover"
        />
        <div class="movie_cover-darkned"></div>
    </div>
    <div class="movie_info">
        <div class="movie_title">Mortal combat</div>
        <div class="movie_category">frgthy</div>
        <div class="movie_average movie_average-green">9</div>
    </div>
        ';
    });
}