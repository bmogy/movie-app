import React, {Component} from "react";
import Header from "./Header/Header"
import Movie from "./Body/Movie/Movie"

class Layout extends Component{
    // creatong the states
    state = {
        apiKey:"b2f49c297ee42a377615666c4da25acf",
        storedDate:[]
    }
    // creating input hnadler function where it will pull from the movie dba apt anytime someone types something
    inputHandler =  (event) => {
        //storing the event
         let searchField = event.target.value

        // storing the URL for searching movies
       const movieSearch = "https://api.themoviedb.org/3/search/movie?api_key=" + this.state.apiKey + "&language=en-US&query=" + searchField +"&page=1&include_adult=false"
        // creating my promise    
       const promise = new Promise((resolve,reject)=>{
            const catchData =  fetch(movieSearch)
            resolve(catchData);
       })
       // converting the data to json data
       promise.then((response)=>response.json())
       //converting the data to a object
       .then((data)=>{
        // grabbed the div tag from the Movie.js
        const movieDiv = document.getElementById("movieDiv");
       // movieDiv.innerHTML=""
       // create p tag for movie over view
        const movieOverView =document.createElement("p")
        movieOverView.innerHTML =""
        // create p tag for movie title
        const movieTilte = document.createElement("p")
        movieTilte.innerHTML =""
        // filter through the list of objects        
            const filteredMovieData = data.results.filter((movie)=>{
                console.log(movie.title)
                    return movie.original_title=== searchField
                
            })
            // printing off the list of objects
            filteredMovieData.forEach((movie)=>{
                movieTilte.innerHTML="<Strong>Title: </Strong>" + movie.title
                movieOverView.innerHTML ="<Strong>Movie Overview: </Strong>" + movie.overview
                movieDiv.appendChild(movieTilte)
                movieDiv.appendChild(movieOverView)
                console.log(movieTilte)
                console.log(movieOverView)

            })
       })
    }
    render(){
    
        return (
            <div>
            <Header></Header>
            <Movie inputHandler={this.inputHandler}></Movie>
            </div>
        )
    }
}
export default Layout