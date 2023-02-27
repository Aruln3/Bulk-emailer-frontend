import React, { useState } from 'react'
import { NavLink ,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import "./mix.css"
import {URL} from '../App';

const Login = () => {

    const [passShow, setPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });

    const history = useNavigate();

    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };


    const loginuser = async(e) => {
        e.preventDefault();

        const { email, password } = inpval;

        if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else {
            // console.log("user login succesfully done");


            const data = await fetch(`${URL}/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                     email, password
                })
            });

            const res = await data.json();
            //  console.log(res);

            if(res.status === 201){
                localStorage.setItem("usersdatatoken",res.result.token);
                history("/dash")
                setInpval({...inpval,email:"",password:""});
            }else{
                toast.error("Invalid Credentials", {
                    position: "top-center"
                });
            }
        }
    }

    return (
        <>

        {/* <img src='https://website-assets-fw.freshworks.com/attachments/ck9jhqvf3047fxvg10iipraaz-bulk-emailing-01.svg'></img> */}
            <section>
            <div class="aboutmailer">      
               <img className="mailimg" alt='mail' src='https://website-assets-fw.freshworks.com/attachments/ck9jhqvf3047fxvg10iipraaz-bulk-emailing-01.svg'></img>
                <div className="cont">
                <h1>Want to send emails in bulk?&nbsp;</h1>
                 <p class="sub-text">Learn everything about bulk emails and start sending them with <b>Bulk-Emailer</b>.</p>
                  <div class="mt-md">
                    <a title="" class="btn btn-primary " rel="" role="button" target="_self" href="/register">  GET STARTED FOR FREE</a>     
                    <a title="" class="btn btn-outline-dark m-md-3 secbut" rel="" role="button" target="_self" href="/"> REQUEST DEMO</a>
                  </div>
                  </div>
           </div>
                <div className="form_data">
                    <div className="form_heading">
                    <h2><b>Welcome Back, Log In &nbsp;</b></h2>
                    <p>Hi, we are you glad you are back. Please login.</p>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn bg-primary' onClick={loginuser}>Login</button>
                        <p className='text-dark fw-bold'>Don't have an Account? <NavLink to="/register" className="signup">Sign Up</NavLink> </p>
                        <p style={{color:"black",fontWeight:"bold"}}>Forgot Password  <NavLink to="/password-reset" className="signup">Click Here</NavLink> </p>
                    </form>
                    <ToastContainer />
                </div>
            </section>
           
        </>
    )
}

export default Login