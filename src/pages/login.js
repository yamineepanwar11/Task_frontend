import { useState } from "react"
import axios from 'axios'
function Login(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
            try{
                let res=await axios.post("http://localhost:5000/login",{email,password})
                alert("login done")
                console.log(res.data);
            }catch(err){
                console.log("something wrong",err)
                alert("error occure")
            }
    }
    return(<>
    <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <label>Password:</label>
        <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type="submit">Log-in</button>
    </form>
    </>)
}
export default Login;