import React from 'react'
import {Link , Outlet} from 'react-router-dom'
const Dashboard = () => {
  return (
    <>
    <div className="container">
        <div className="logo">
            <h3>Halwo <span>RealState</span></h3>
        </div>
        <nav>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>SingUp</Link>
            <Link>SingIn</Link>
            <Link>Profile</Link>
        </nav>
    </div>
    </>
  )
}

export default Dashboard