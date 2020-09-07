import React from "react";

const Movie = (props) => {
    return (
        <div>
            <label htmlFor="movie">Movie:</label>
            <input id="movie" type="text" placeholder="Please type a nmae of a movie" onChange={props.inputHandler}></input>
             <div id="movieDiv"></div>
        </div>
    )
}
export default Movie