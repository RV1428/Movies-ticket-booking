import React,{ useState } from "react";
function MovieForm(props){
    let[movNam,updateName]=useState('')
    let[movYear,updateYear]=useState('')
    let[movDuration,updateduration]=useState('')
    let[movDes,updateDes]=useState('')
    let[isSeats,updateSeats]=useState(false)
    let[movImgUrl,updateImgUrl]=useState('')
    function Ramya()
    {
        console.log("hello");
    }
    function namehandler(event)
    {
        updateName(event.target.value)
        //console.log(event)
    }
    function yearhandler(event)
    {
        updateYear(event.target.value)
        //console.log(event.target.value)
    }
    function deschandler(event)
    {
        updateDes(event.target.value)
        //console.log(event.target.value)
    }
    function inputhandler(event)
    {
        updateSeats(event.target.value)
        //console.log(event.target.value)
    }
    // function labelhandler(event)
    // {
    //     console.log(event.target.value)
    // }
    function durationhandler(event)
    {
        updateduration(event.target.value)
        //console.log(event.target.value)
    }
    // function imgurlhandler(event)
    // {
    //     updateImgUrl(event.target.value)
    //     //console.log(event.target.value)
    // }
    function createMovieHandler(event)
    {
        event.preventDefault();
        //console.log("form event");
        let movieip={
            mname:movNam,
            desc:movDes,
            year:+movYear,
            duration:movDuration,
            isseats:isSeats?'Book Now':'No Seats',
            imgurl:movImgUrl
        }
        updateName(''); updateDes(''); updateImgUrl(''); updateduration('');
        updateSeats(''); updateYear('');
        console.log(movieip);
        props.eventcall()
    }
    return(
        <form className="row g-3" onSubmit={createMovieHandler}>
        <div className="col-md-6">
            <label >Movie Name</label>
            <input type="text"
                    className="form-control"
                    id="name"
                    placeholder="Movie Name"
                    onChange={namehandler}
                    value={movNam}
              />
        </div>
        <div className="col-md-6">
            <label >Movie Year</label>
            <input type="number"
                    min="0.01" step="0.01"
                    className="form-control"
                    id="price"
                    placeholder="Movie Year" 
                    onChange={yearhandler}
                    value={movYear}
                    />
        </div>
        <div className="col-md-6">
            <label >Movie Duration</label>
            <input type="text"
                    min="0.01" step="0.01"
                    className="form-control"
                    id="duration"
                    placeholder="Movie duration" 
                    onChange={durationhandler}
                    value={movDuration}
                    />
        </div>
        <div className="form-group">
            <label >Movie Description</label>
            <input type="text"
                    className="form-control"
                    id="description"
                    placeholder="Movie Description"
                    onChange={deschandler} 
                    value={movDes}
                    />
        </div>
        <div className="form-check form-switch">
            <input className="form-check-input" 
            type="checkbox" 
            role="switch" 
            id="isAvailable" 
            onChange={inputhandler}
            value={isSeats}
            />
            <label className="form-check-label" >Is Seats available?
            </label>
        </div>
        <div className="form-group">
            <label >Select Movie image</label>
            <input type="file" className="form-control" id="select-image" />
        </div>
        <button type="submit" className="btn btn-primary"onClick={Ramya}>Add Movie</button>
    </form> 
    )
}
export default MovieForm;