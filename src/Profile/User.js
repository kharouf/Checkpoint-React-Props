import React from 'react'
import Profile from './Profile';
function User() {
    const users={fullName:"Wala kharouf", bio: "Student", profession :"Devloppeur" , image:"https://cdn-icons-png.flaticon.com/512/146/146035.png"};
    const HandleName = (x)=>{
        alert(x)
    }
    return (
    <div > 
        
    <Profile full={users.fullName} b={users.bio} pro={users.profession} img={users.image} func={HandleName}/>

    </div>
    ) 
}

export default User