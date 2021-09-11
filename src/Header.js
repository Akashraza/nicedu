import React from 'react'

function Header() {
    return (
        <div>
            <header>
            <div className="nav">
                <div className="logo">
                <img alt="timer" src={require('./images/margdarshak-logo.png').default} />
                </div>
                <div className='admin'>
                    <a ><p><span><i className='fa fa-user'></i></span>Login</p></a>
                </div>
            </div>
        </header>
        </div>
    )
}

export default Header
