import React from "react";
import "../components/Signupform.css";

const Signupform = () =>{

    return(
        <>
        <div className="container">
            <div className="app-container">
                <div className="text">
                    <h2>Create Account</h2>
                </div>
                <form action="#" className="form-wrapper">
                    
                    <div className="input-box">
                       <p> <label className="label">Full Name</label></p>
                        <input className="input" type="text"/>
                    </div>

                    <div className="input-box">
                      <p><label className="label-middle">Email</label></p>  
                        <input className="input" type="Email"/>
                    </div>

                    <div className="input-box">
                       <p><label className="label">Password</label></p> 
                        <input className="input" type="Password"/>

                    </div>
                    <button type="submit" className="submit">Sign Up</button>
                </form>
            </div>
        </div>
        </>
    )
};

export default Signupform;