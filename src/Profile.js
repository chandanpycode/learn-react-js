import React from "react";

export default function Profile (){
    
    // function testFun(){
    //     alert("test fun")
    // }
    const testFun=()=>{
        alert("test fun")
    }
    return(
            <div>
                <h1>Profile</h1>
                <button onClick={testFun}>Click Me</button>
            </div>
        )
    
}