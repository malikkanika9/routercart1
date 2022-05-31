import axios from "axios"
import { useEffect, useState } from "react"

export const ShoppingCart=()=>{

    const [data,setData]=useState([])
useEffect(()=>{

    axios({

        url:"http://localhost:8080/cart",
        method: "GET"
    })
    .then((res)=>{
        setData(res.data)
    })
},[])
console.log(data)

return (

    <div  style={{gap:"2rem", marginTop:"10px"}}>
        {data.map((item)=>(<div>

            <div ><img src={item?.image} style={{width:"50px", height:"50px"}} /></div>
<div>{item?.details}</div>
<div>{item?.model}</div>
 <div> Rs{item?.price} </div>  
 <button>Remove Item</button>

        </div>))}
</div>



  
)

}