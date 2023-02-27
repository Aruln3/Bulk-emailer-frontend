import React, { useContext } from 'react'
import "./header.css"
import { useNavigate , NavLink } from "react-router-dom";
import {URL} from '../App';

export default function Footer() {
    return (
        <>
            <Footer className="bg-info">
                <nav>
                <NavLink className="avt" to="/"><h1>Bulk Emailer</h1></NavLink>
                </nav>
            </Footer>
      </>   
    ); 
}