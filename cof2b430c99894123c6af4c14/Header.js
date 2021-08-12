import React from "react"
import { UsernameContextConsumer } from "./UsernameContext"

function Header(props) {
    return (
        <UsernameContextConsumer>
            {({ username }) => (
                <header>
                    <p>Welcome, {username}!</p>
                </header>
            )}

        </UsernameContextConsumer>
    )
}

export default Header
