import React from "react"
import UsernameContext from "./UsernameContext"

function Header(props) {
    return (
        <UsernameContext.Consumer>
            {username => (
                <header>
                    <p>Welcome, {username}!</p>
                </header>
            )}

        </UsernameContext.Consumer>
    )
}

export default Header
