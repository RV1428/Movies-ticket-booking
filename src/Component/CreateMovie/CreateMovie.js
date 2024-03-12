import Movieform from "./Movieform"
function CreateMovie(props){
    function call(data)
    {
        console.log(data);
        //props.evnHandle()
    }
    return(
<div className="row justify-content-md-center">
            <div className="col-6 bg-body-tertiary shadow-sm" style={{background:'black', margin:30}}>
                <Movieform eventcall={call}></Movieform>
            </div>
        </div>
    )
}
export default CreateMovie;