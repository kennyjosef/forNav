import React from 'react';
import Button from "./Button";
import "../components/styleArticle.css"
const Articles = () => {
    return ( 
        <div className='container'>
            <div className='item1'>
                <h2>
                    OUR CREATION
                </h2>
                <div className='forDesktopbtn'>
                <Button/>
                </div>
                {/* <Button/> */}

            </div>
            <div className='item2'>
                <div className='el1'>
                    <h2 className='el1a'>DEEP EARTH</h2>
                    <h2 className='el1b' >NIGHT ARCADE</h2>
                    <h2 className='el1c'>SOCCER TEAM VR</h2>
                    <h2 className='el1d'>THE GRID</h2>
                </div>
                <div className='el2'>
                    <h2 className='el1e'>FROM UP ABOVE VR</h2>
                    <h2 className='el1f'>POCKET BORELAIS</h2>
                    <h2 className='el1g'>THE CURIOSITY</h2>
                    <h2 className='el1h'>MAKE IT FISHEYE</h2>
                </div>
            </div>
            <div className='item3'>
                <div className='el3'>
                    <h2 className='el3a'>DEEP EARTH</h2>
                    <h2 className='el3b' >NIGHT ARCADE</h2>
                    <h2 className='el3c'>SOCCER TEAM VR</h2>
                    <h2 className='el3d'>THE GRID</h2>
                    <h2 className='el3e'>FROM UP ABOVE VR</h2>
                    <h2 className='el3f'>POCKET BORELAIS</h2>
                    <h2 className='el3g'>THE CURIOSITY</h2>
                    <h2 className='el3h'>MAKE IT FISHEYE</h2>
                </div>
            </div>
            <div className='forMobileBtn'>
                < Button/>   
            </div>
        

        </div>
     );
}
 
export default Articles;