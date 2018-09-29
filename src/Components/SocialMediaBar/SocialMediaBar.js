import React from 'react';
import './SocialMediaBar.css';

const socialmediabar = props => {
    return (
        <div className="socialmedialist">
            <a href="https://www.facebook.com/evsoldevilla"><div className="facebook"></div></a>
            <a href="https://www.instagram.com/edson.soldevilla/"><div className="instagram"></div></a>
            <a href="https://www.linkedin.com/in/edson-soldevilla-827b67107/"><div className="linkedin"></div></a>
            <a href="https://plus.google.com/109178552911822532856"><div className="googleplus"></div></a>
            <a href="https://twitter.com/evsoldevilla"><div className="twitter"></div></a>
        </div>
    );
};

export default socialmediabar;
