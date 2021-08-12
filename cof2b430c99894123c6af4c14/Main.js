import React from 'react'
import UsernameContext from "./UsernameContext"

function Main() {
    return (
        <UsernameContext.Consumer>
            {username => (
                <main>
                    <p className="main">No new notifications, {username}! 🎉</p>
                </main>
            )}

        </UsernameContext.Consumer>
    )
}

export default Main