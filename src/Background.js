import React from 'react';
import './Background.css'
class Background extends React.Component {
    render() {
        return (
            <div>
                <img src={process.env.PUBLIC_URL + '/images/tsg-art.jpg'} alt="background" id="background"/>
            </div>
        )

    };
}

export default Background;
