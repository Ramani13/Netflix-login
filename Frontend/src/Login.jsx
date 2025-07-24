import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate()
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")

    function HandleEmail(event){
        setEmail(event.target.value)
    }
    function HandlePass(event){
        setPass(event.target.value)
    }
    function Check(){
      if(email.trim()==""|| pass.trim()==""){
        alert("Email and password cannot be empty")
        return;
      }
      if(!email.includes("@gmail.com")){
        alert("Please enter the valid email")
        return
      }
         axios.get(`http://localhost:3000/login?useremail=${email}&password=${pass}`)

    .then(function (response) {
      if (response.data.toString() === "true") {
        navigate("/success");
      } else {
        alert("Login failed ");
      }
    })
    .catch(function (error) {
      console.log("Error during login:", error);
    });
    }

  return (
    <div className="bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs')]
    h-screen w-full relative bg-cover bg-center flex items-center justify-center bg-black bg-opacity-50" >
       <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
      <div className='bg-black relative z-10 bg-opacity-90 h-[500px] w-[400px] '>
        <h1 className='text-3xl  text-white font-bold p-5 mt-6 ml-5'>Login</h1>
        <input onChange={HandleEmail} className='bg-slate-500 bg-opacity-30 h-12 w-80 p-3 ml-9 text-center mt-10 border text-white' placeholder='Enter email or number' name="useremail" type='text'></input>
        <input onChange={HandlePass} 
        className='bg-slate-500 bg-opacity-30 h-12 w-80 p-3 ml-9 text-center mt-4 border text-white' 
        placeholder='Password'  
        name="password" value={pass}
        type='password'></input>
        <button onClick={Check} className='bg-red-600 h-10 w-80 p-3 ml-9 text-center mt-4 font-semibold' type='submit'>Login</button>
        <p className='text-white underline ml-9'>Forgot password?</p>
        <p className='text-white ml-9 mt-6'>New to netflix?Sing up now.</p>
          <p className='text-gray-300 ml-9 mt-8 text-xs'>This page is protected by Google reCAPTCHA to ensure <br></br>
            you're not a bot
        </p>
      </div>
    </div>
  )
}

export default Login
