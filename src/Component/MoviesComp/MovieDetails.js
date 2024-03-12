import React,{useState} from "react";
//st+=bk=== 'Book Now' ? 'text-bg-succes' : 'text-bg-danger'
function MoviesDetail(props){
  let valuedis=''
  let badgeclass='badge '
if(props.isSeats === 'Book Now')
{
  valuedis='Book Now'
  badgeclass+='text-bg-succes'
}
else if(props.isSeats === 'No seats')
{
  valuedis='No seat'
  badgeclass+='text-bg-danger'
}
else
{
  valuedis='Available'
  badgeclass+='text-bg-danger'
}
let [seatCount,getcount]=useState(0)
let [amount, getamount]=useState(0);
function displayseatCount(){
  //console.log(seatCount)
   return seatCount
 }
function Increasebuttonhandler(){
 // console.log("Increasebuttonhandler");
 /* console.log(seatCount)
  return seatCount++; */ 
  getcount(seatCount+1)
  getamount((seatCount+1)*150)
}
function displayAmount(){
 // console.log("Amount");
   return amount
}
function Decreasebuttonhandler(){
  //console.log("Decreasebuttonhandler");
  // console.log(seatCount)
 // return seatCount--;
 getcount(seatCount-1)
 getamount((seatCount-1)*150) 
}
        return (
            <div className="card-body">
            <h4 className="card-title">{props.mname}</h4>
        
            <h5 className="card-text">{props.desc}</h5>
            <p className="card-text">{props.year}:
            <small className="text-body-secondary">{props.duration}</small></p>
            <span className={badgeclass}>{valuedis}</span>
            <button onClick={Decreasebuttonhandler} className='btn btn-info' style={{marginLeft:50}}>Decrease Seats</button>
            <span style={{marginLeft:20}}>{displayseatCount()} seats</span>
            <button onClick={Increasebuttonhandler} className='btn btn-info' style={{marginLeft:50}}>Increase Seats</button>
            <span style={{marginLeft:20}}>Amount Rs. {displayAmount()}/-</span>           
          </div>
        )
}

export default MoviesDetail;