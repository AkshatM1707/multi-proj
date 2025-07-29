import {FaStar} from "react-icons/fa" ;
import {useState} from "react";
import "./styles.css";


export default function StarRating({noOfStars= 5}) {
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);

    function handleClick(getCurrentIndex){

    }

    return( 
        <div className ="starRating">
            {
                [...Array(noOfStars)].map((_,index)=>{
                    return <FaStar 
                        key = {index}
                        onClick={}
                        onMouseMove={}
                        onMouseLeave={}
                        size= {45}
                    />
                })
            }

            
        </div>
    )
}