import React from 'react';
import Logo1 from "../Assesst/logo1.jpg";
const Content = () => {
    return ( 
        <div className="content">
            <div className=" box red">
                <img src={Logo1} alt="pic"/>
            </div>
            <div className="box green">
                <h1>THE LEADER IN INTERACTIVE VR</h1>
                <p>
                    Founded in 2011, Loopstudios has been producing world-class virtual reality projects for
                    some of the best companies around the globe. Our awarding winning creation
                    has transformed businesses through digital experience that binds to their brand.
                </p>
            </div>

        </div>
     );
}
 
export default Content;