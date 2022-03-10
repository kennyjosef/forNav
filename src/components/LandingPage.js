import React from 'react';
import Articles from './Articles';
import Content from './Content';
import Footer from './Footer/footer';
import Navbar from './Navbar';
const LandingPage = () => {
    return ( 
        <div>
            <Navbar/>
            <Content/>
            <Articles/>
            <Footer/>
        </div>
     );
}
 
export default LandingPage;