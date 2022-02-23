import React, { Component } from 'react';
import Logo1 from "../Assesst/react.png" 
import Logo2 from "../Assesst/icon-close.svg";
import{MenuItems} from './MenuItems';
import './style.css';

class Navbar extends Component{
    state={clicked:false}
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <div className='overall'>
                <div>
                    <nav className="navbarItems">
                        <h1 className="navbar-logo">LoopStudio</h1>
                            <div className="menu-icon" onClick={this.handleClick}>
                             <i className={this.state.clicked ? 'fas fa-times':"fas fa-bars"}></i>
            
                            </div>
                             <ul className={this.state.clicked ? <img src={Logo2}/> : "nav-menu"}>
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
                </div>
                    <div className='border'>
                         <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
                    </div>
            </div>
        )
    }
}

export default Navbar