import React from "react"
import logo from "../assets/images/logo.png"
export default function Header(){
    return(
       <header>
            <div className="header-container">
                <i class="fa-solid fa-burger"></i>
                <strong>Food Recipe</strong>
            </div>
       </header>
    )
}