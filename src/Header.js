import React from 'react'

import { Link} from 'react-router-dom';
function Header() {
    return (
         
         
          <div>
            <header>
            <div className="nav">
                <div className="logo">
                <img alt="timer" src={require('./images/margdarshak-logo.png').default} />
                </div>
                <div className='admin'>
               
                    <Link to="/login"><p><span><i className='fa fa-user'></i></span>Login</p></Link>
                    
                </div>
            </div>
        </header>
        </div>
        
   
    
        
        
    )
}

export default Header
