import React from 'react'
import PropTypes from 'prop-types'; 


function Profile({full,b,pro,img,func}) {
    return (
        <div className='App'>
        <div className='box'>
            <div className="image">
                <img src={img} alt="logo" />
            </div>
            <div className="discreption">
                <h1> {full}</h1>
                <h2>{ b} </h2>
                <h3>{pro}</h3>
            </div>
           <div className="btn">
            <button onClick={()=>func(full)}>Click me!</button>
           </div>
        </div>
        </div>
    )
}
Profile.defaultProps={
    full:"Ali Beji",
    b:'Doctor',
    img:"No picture"
}
Profile.propTypes = {
    full: PropTypes.string,
    b: PropTypes.string,
    pro: PropTypes.string,
    img: PropTypes.string.isRequired,
    func: PropTypes.func
   };
export default Profile