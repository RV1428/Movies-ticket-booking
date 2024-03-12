import './Component/App.css'
import Movies from "./Component/MoviesComp/Movies";
import CreateMovie from './Component/CreateMovie/CreateMovie';
import axios from 'axios';
import React,{ useState } from 'react';
function App(props){
    let moviesdata=[
        {
            id:1,
            mname:"Love",
            desc:"This movie is Love Movie",
            year:2013,
            duration:'230min',
            isseats:'Book now',
            imgurl:'images/image1.jpg',
            amount:'amount'
        },
        {
            id:2,
            mname:"Bloody Sweet",
            desc:"This movie is a family Movie",
            year:2020,
            duration:'250min',
            isseats:'Available',
            imgurl:'images/image2.jpg',
            amount:'amount'
        }
    ]
    function getData(data){
        //console.log("com to App")
        updateMov([data,...newMovie])
        console.log(data);  
    }
    callme()
    async function callme(){
        console.log("from server");
        const res1= await axios.get("http://127.0.0.1:3002/movies")
        console.log(res1.data);
        }
    let[newMovie,updateMov]=useState(moviesdata)
    return (<div>
         <CreateMovie sendData={getData}></CreateMovie>
            {
                newMovie.map(mov=> {
                    return (
                    <Movies key={mov.id}
                    id={mov.id}
                    mname={mov.mname}
                    desc={mov.desc}
                    year={mov.year}
                    duration={mov.duration}
                    isseats={mov.isseats}
                    imgurl={mov.imgurl} >
                     </Movies> 
                    )})
            }
    </div>
    )
}
export default App;