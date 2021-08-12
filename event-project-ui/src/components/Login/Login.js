import { useEffect, useState } from "react"
import {useNavigate } from "react-router-dom"
// import axios from "axios"
import apiClient from "../../services/apiClient"
import "./Login.css"

//ADDED THIS PARAMETER
export default function Login({ user, setUser }) {
    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    //ADDED THE FOLLOWING THREE FUNCTIONS 
    useEffect(()=> {
        //If the user is already logged in, redirect them to the homepage
        if(user?.email){
           navigate("/")
        }
        
    }, [user, navigate])


    const handleOnInputChange = (event) => {
        if (event.target.name === "email") {
          if (event.target.value.indexOf("@") === -1) {
            setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
          } else {
            setErrors((e) => ({ ...e, email: null }))
          }
        }
    
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
      }
    
    const handleOnSubmit = async () => {
      setIsProcessing(true)
      setErrors((e) => ({ ...e, form: null }))
      
      const { data, error } = await apiClient.loginUser({ email: form.email, password: form.password })
      if (data) {
        setUser(data.user)
        apiClient.setToken(data.token)
      }
      if (error) {
        setErrors((e) => ({ ...e, form: error }))
      }

      setIsProcessing(false)
    }

    console.log("USER,", user.email)
      
    return (
        <div className="Login">
            <div className="card">
                <h2> Login</h2>

                 {errors.form && <span className="error">{errors.form}</span>}
                <br/>

                <div className="form">
                    <div className="input-field">
                        <label htmlFor="email"> Email </label>
                        {/* <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleOnInputChange} /> */}
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email"
                            //ADDED THE VALUE AND ONCHANGE
                            value={form.email}
                            onChange={handleOnInputChange}
                        />
                        {/* ADDED THIS ERROR */}
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className="input-field"> 
                        <label htmlfor="password"> Password </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            //ADDED THE VALUE AND ONCHANGE
                            value={form.password}
                            onChange={handleOnInputChange} 
                        />
                        {/* for above input:
                            value={form.password}
                            onChange={handleOnInputChange} 
                        */}
                        {/* ADDED THIS ERROR */}
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>

                    {/* <button className="btn">
                        Login
                    </button> */}

                    {/* ADDED THIS BUTTON */}
                    <button className="btn" disabled={isProcessing} onClick={handleOnSubmit}>
                        {isProcessing ? "Loading..." : "Login"}
                    </button>
                </div>
            </div>
        </div>
    )
}