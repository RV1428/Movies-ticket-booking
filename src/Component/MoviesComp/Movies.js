//import React,{useState} from "react"
import MoviesDetail from "./MovieDetails"
let style1={
    padding:'10px',
    fontSize:20,
}
//let seatCount=10;


function Movies(props)
{
    return (    
        <div className="card mb-3" style={style1}>
        <div className="row g-0 shadow">
          <div className="col-md-4">
          <img src={props.imgurl} className="img-fluid rounded-start" alt="..."/>
          
          </div>
          <div className="col-md-8">
          <MoviesDetail
                id={props.id} mname={props.mname}
                year={props.year}  desc={props.desc} duration={props.duration}

          ></MoviesDetail>
          </div>
        </div>
      </div>
    )}


export default Movies;