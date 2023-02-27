import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import "./header.css"
import { LoginContext } from './ContextProvider/Context';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate , NavLink } from "react-router-dom";
import {URL} from '../App';
//import { Refresh } from '@mui/icons-material';

const Header = () => {

    const { logindata, setLoginData } = useContext(LoginContext);
    const history = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const logoutUser = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch(`${URL}/logout`, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                Accept: "application/json"
            },
           
        });

        const data = await res.json()        ;
        console.log(data);

        if (data.status === 201) {
            console.log("user logout");
            localStorage.removeItem("usersdatatoken");
            setLoginData(false)
            history("/");
        } else {
            console.log("error");
        }
    }

    const goDash = () => {
        history("/dash")
    }

    const price = () => {
        history("/pricing")
    }

    const goError = () => {
        history("*")
    }

    return (
        <>
            <header className="head bg-primary">
                
                <nav> <div className="avtar"><a href='/'><img className="logo" src='https://play-lh.googleusercontent.com/66SHOhjirVEAbqmSOWKzkyqf7gBhKQNE6fDITDL-qEAOizKtd6Q56YSQUReGt1izaDA'></img></a>
                <NavLink className="avt" to="/"><h1>Bulk Emailer</h1></NavLink></div>
                <div className="avtar">
                <ul className="adver">
                        {/* <li className='nav-super-item card-nav has-sub-menu sub-menu-opened'>About</li>
                        <li>Support</li> */}
                        <button className="btnpro" onClick={() => {
                                        price()
                                    }}>Pricing</button>
                </ul>
                        {
                            logindata.ValidUserOne ? <Avatar style={{ background: "salmon", fontWeight: "bold", textTransform: "capitalize" }} onClick={handleClick}>{logindata.ValidUserOne.fname[0].toUpperCase()}</Avatar> :
                                <Avatar style={{ background: "black" }} onClick={handleClick} />
                        }

                    </div>

                    


                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        
                        {
                            logindata.ValidUserOne ? (
                                <>
                                    <MenuItem onClick={() => {
                                        goDash()
                                        handleClose()
                                    }}>Profile</MenuItem>
                                    <MenuItem onClick={() => {
                                        logoutUser()
                                        handleClose()
                                    }}>Logout</MenuItem>
                                </>
                            ) : (
                                <>
                                    <MenuItem onClick={() => {
                                        goError()
                                        handleClose()
                                    }}>Profile</MenuItem>
                                    
                                </>
                            )
                        }

                    </Menu>
                    
                </nav>
            </header>
        </>
    )
}

export default Header