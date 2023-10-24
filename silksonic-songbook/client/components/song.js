import {React} from 'react';
//import Song from '../../server/app';
//

function Song (props){
    return(
        <>
        
            <div className = "songBox" >
            <img className = "songImageBox" src = {props.image} alt = {props.title}/>     
                <p>song:{props.title}</p>
                <p>artist:{props.artist}</p>
                <p>rating:{props.rating}</p>
            </div>
        </>
    )
}

export default Song;