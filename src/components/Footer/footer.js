import React from 'react';
import Logo10 from '../../Assesst/logo10.svg';
import Logo11 from '../../Assesst/logo11.svg';
import Logo12 from '../../Assesst/logo12.svg';
import Logo13 from '../../Assesst/logo13.svg';
import classes from "./footer.module.css";

const Footer = () => {
    return ( 
        <div className={classes.foot}>
            <div className={classes.items}>
                <div className={classes.item_1}>
                    <h2>LoopStudio</h2>
                    <ul>
                        <li>About</li>
                        <li>Career</li>
                        <li>Event</li>
                        <li>Product</li>
                        <li>Support</li>
                    </ul>

                </div>
                <div className={classes.item_2}>
                    <div className={classes.icons}>
                        <img src={Logo10} alt="pic"/>
                        <img src={Logo11} alt="pic"/>
                        <img src={Logo12} alt="pic"/>
                        <img src={Logo13} alt="pic"/>
                    </div>
                    <p>&copy; 2021 LoopStudio. All rights reserved</p>

                </div>

            </div>
          
        </div>
     );
}
 
export default Footer;