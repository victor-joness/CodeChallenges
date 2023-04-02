import React from 'react'
import "./NotFound.css";


const NotFound = () => {
    const User = localStorage.getItem("User");

  return (
    <div>
        <h1>Not found</h1>
        {User.message}
    </div>
  )
}

export default NotFound;
