import React, { useState } from "react";

function regiteruser(){
let[name,Setname]=useState("");
let[email,Setemail]=useState("");
let[password,Setpassword]=useState("")

function handleSubmit(){

}
    return(
        <>
        <form onSubmit={handleSubmit}>
        <label>Username</label>

        <input
         type="text"
         placeholder="Enter your name" 
         onChange={(e)=>Setname(e.target.value)} 
         value={name}
         />

        <label>Email</label>
        <input
        type="email" 
        placeholder="Enter your Email"
        onChange={(e)=>Setemail(e.target.value)} 
        value={email}
        />

        <label>Password</label>

        <input 
        type="text"
        placeholder="Enter your password"
        onChange={(e)=>Setpassword(e.target.value)} 
        value={password}
        />

        <button
        type="submit">
        Submit
        </button>
        </form>
        </>
    )
}