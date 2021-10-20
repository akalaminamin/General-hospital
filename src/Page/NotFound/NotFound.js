import React from 'react'
import notFound from "../../Image/notFound.jpg"
const NotFound = () => {
    return (
        <div>
            <img style={{width:"50%", height:"80%", display:"block", textAlign:"center", margin:"auto", marginTop:"80px"}} src={notFound} alt="not found page" />
        </div>
    )
}

export default NotFound;
