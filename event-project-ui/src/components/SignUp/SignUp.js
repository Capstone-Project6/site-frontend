import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import apiClient from "../../services/apiClient"
import "./SignUp.css";

export default function Signup({ user, setUser }){
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [errors, setErrors] = useState({});
    //This variable holds the state of the dropdown (for toggling)
    const [showMenu, setShowMenu] = useState(false);
    const [form, setForm] = useState({
        accountType:"",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        // if user is already logged in,
        // redirect them to the home page
        if (user?.email) {
          navigate("/")
        }
    }, [])
    
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
    
    //MUST BE A PROBLEM WITH THIS FUNCTION??
    
    const handleOnSubmit = async () => {
        setIsProcessing(true)
        setErrors((e) => ({ ...e, form: null }))
            
        const { data, error } = await apiClient.signupUser({
            first_name: form.firstName,
            last_name: form.lastName,
            email: form.email,
            password: form.password,
        })
        if (data) {
            setUser(data.user)
            apiClient.setToken(data.token)
            navigate("/interests");
        }
        if (error) {
            setErrors((e) => ({ ...e, form: error }))
        }
    
        setIsProcessing(false)
    }
    
    
      
    
    return (
        <div className="Signup">
            <div className="card">
                <h2>Create Account</h2>

                {errors.form && <span className="error">{errors.form}</span>}
                <br/>

                <div className="form">
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter your first name"
                            value={form.firstName}
                            onChange={handleOnInputChange} 
                            className="input"
                            />
                        {errors.firstName && <span className="error">{errors.firstName}</span>}
                    </div>

                    <div className="input-field">
                        <label htmlFor="firstName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter your last name"
                            value={form.lasttName}
                            onChange={handleOnInputChange} 
                            className="input"
                            />
                        {errors.lastName && <span className="error">{errors.lastName}</span>}
                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter a valid email"
                            value={form.email}
                            onChange={handleOnInputChange}
                            className="input"
                            />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter a secure password"
                            value={form.password}
                            onChange={handleOnInputChange} 
                            className="input"
                            />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <button className="btn" disabled={isProcessing} onClick={handleOnSubmit}>
                        {isProcessing ? "Loading..." : "Create Account"}
                    </button>
                </div>
            </div>
        </div>
    )
}
//Will continue later: 
// try {
//     const res = await axios.post("http://localhost:3001/auth/register", {
    
//     // CHANGED THESE VALUES
//         first_name: form.firstName,
//         last_name: form.lastName,
//         email: form.email,
//         password: form.password,
//     })
//     if (res?.data?.user) {
    //         setUser(res.data.user)
    //     } else {
        //         setErrors((e) => ({ ...e, form: "Something went wrong with registration" }))
        //     }
        // } catch (err) {
            //     console.log(err)
            //     const message = err?.response?.data?.error?.message
            //     setErrors((e) => ({ ...e, form: message ?? String(err) }))
            // } finally {
                //     setIsProcessing(false)
                // }
            //}
//Will need a click handler for the menu button to make the dropdown close
            
//An event listener can be added to document(this is a common parent) in order to 
//close the menu by clicking anywhere.
                                 
// This menu does the following:
// - If you click on the button ("What account is this?"), the menu appears
// - Clicking on anything inside the menu does not close the menu
// - Clicking anywhere outside the menu closes the menu

// The dropdown menu is a card
//<div className="dropdown">
    // The showMenu boolean is given a value of false by passing this value through the setShowMenu function
    // <button onClick={() => setShowMenu(true)}>
    // What kind of account is this?
    // </button> 
    // {
    //     showMenu
    //     ? (
    //         <div className="menu">
    //         <button> Personal </button>
    //         <button> Organizer </button>
    //         </div>
//             )
//             : (
//                 null
//                 )
//             }
// </div>
                   
                   
                   
