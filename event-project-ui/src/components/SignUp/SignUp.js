import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "./SignUp.css"

// What account is this?, first name, last name, email, password, 

//will need parameters:{ user, setUser }
export default function Signup(){
    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        accountType:"",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    // useEffect(() => {
    //     // if user is already logged in,
    //     // redirect them to the home page
    //     if (user?.email) {
    //       navigate("/")
    //     }
    // }, [user, navigate])
    
    // const handleOnInputChange = (event) => {
    // if (event.target.name === "email") {
    //     if (event.target.value.indexOf("@") === -1) {
    //     setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
    //     } else {
    //     setErrors((e) => ({ ...e, email: null }))
    //     }
    // }

    // setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    // }

    // const handleOnSubmit = async () => {
    // setIsProcessing(true)
    // setErrors((e) => ({ ...e, form: null }))
    //     try {
    //         const res = await axios.post("http://localhost:3001/auth/register", {

                //CHANGE THESE VALUES
    //         name: form.name,
    //         email: form.email,
    //         password: form.password,
    //         })
    //         if (res?.data?.user) {
    //         setUser(res.data.user)
    //         } else {
    //         setErrors((e) => ({ ...e, form: "Something went wrong with registration" }))
    //         }
    //     } catch (err) {
    //         console.log(err)
    //         const message = err?.response?.data?.error?.message
    //         setErrors((e) => ({ ...e, form: message ?? String(err) }))
    //     } finally {
    //         setIsProcessing(false)
    //     }
    // }

    return (
        <div className="Signup">
            <div className="card">
                <h2>Create Account</h2>

                {/* {errors.form && <span className="error">{errors.form}</span>} */}
                <br/>

                <div className="form">
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter your first name"
                        />
                        {/* 
                            above input:
                            value={form.firstName}
                            onChange={handleOnInputChange} 
                        */}
                        {/* {errors.firstName && <span className="error">{errors.firstName}</span>} */}
                    </div>

                    <div className="input-field">
                        <label htmlFor="firstName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter your last name"
                        />
                        {/* 
                            above input:
                            value={form.lasttName}
                            onChange={handleOnInputChange} 
                        */}
                        {/* {errors.lastName && <span className="error">{errors.lastName}</span>} */}
                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        name="email"
                        placeholder="Enter a valid email"
                        />
                        {/* above input:
                            value={form.email}
                            onChange={handleOnInputChange}
                        */}
                        {/* {errors.email && <span className="error">{errors.email}</span>} */}
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input
                        type="password"
                        name="password"
                        placeholder="Enter a secure password"
                        />
                        {/* above input:
                            value={form.password}
                            onChange={handleOnInputChange} 
                        */}
                        {/* {errors.password && <span className="error">{errors.password}</span>} */}
                    </div>
                    
                    <button className="btn">
                        Create Account
                    </button>
                    {/* <button className="btn" disabled={isProcessing} onClick={handleOnSubmit}>
                        {isProcessing ? "Loading..." : "Create Account"}
                    </button> */}
                </div>
            </div>
        </div>
    )
}