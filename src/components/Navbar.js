import React, { Component } from 'react';
import Logo1 from "../Assesst/react.png" 
import{MenuItems} from './MenuItems';
import './style.css';

class Navbar extends Component{
    state={clicked:false}
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }



    render(){
        return(
            <nav className="navbarItems">
                <h1 className="navbar-logo">React<img src={Logo1} alt="pic"/>
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times':"fas fa-bars"}></i>
            
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((items, index)=>{
                        return(
                            <li key={index}>
                                <a className={items.cName} href={items.url}>
                                    {items.title} 
                                </a>
                            </li>
                        )
                    })}  
                </ul>
            </nav>
        )
    }
}

export default Navbar