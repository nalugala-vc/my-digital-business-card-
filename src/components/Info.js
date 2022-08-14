import React from 'react'
import image from "./myimage.jpeg"

export default function Info() {
    return (
        <>
        <div className="info">
            <div>
                <div className="myinfo"><img src={image} alt="mypic" /></div>
                <div className="myinfo" id='name'><h1>Venessa Chebukwa</h1></div>
                <div className="myinfo" id='occ'><h3>Frontend Developer</h3></div>
                <div className="myinfo" id='web'><h5>venessachebukwa.website</h5></div>
                <div className="myinfo"id='butt'><button><i class="fa-solid fa-envelope"></i> Email</button></div>

            </div>
        </div>
        
        </>
    )
}
