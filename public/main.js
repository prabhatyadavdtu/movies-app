const searchInput = document.getElementById("searchinput");
const result = document.getElementById("section");

async function getMovies(searchText){
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`);
    const movies = await res.json();
    
    for(let movie of movies){

        const pattern = new RegExp(`^${searchText}(?!${movie.show.name}),"i"`);

        if(movie.show.image!=null && pattern){
            const div = document.createElement("div");
            div.innerHTML = `<h1>${movie.show.name}</h1>
            <p> year : ${movie.show.premiered}</p>
            <p>runtime: ${movie.show.runtime}</p>`

            const image = document.createElement("img");
            image.setAttribute("src", movie.show.image.medium);
            div.append(image);
            result.append(div);
        }
    }
}

searchInput.addEventListener("keypress", (e)=>{
    const searchText = searchInput.value;
    
    if(e.key==="Enter"){
        getMovies(searchText)
    }
})