import React from 'react'
import { UsernameContextConsumer } from "./UsernameContext"

function Main() {
    return (
        <UsernameContextConsumer>
            {({ username, changUsername }) => (
                <div>
                    <main>
                        <p className="main">No new notifications, {username}! 🎉</p>
                    </main>
                    <input
                        type="text"
                        name="username"
                        placeholder="New username"
                        value={this.state.newUsername}
                        onChange={this.handleChange}
                    />
                    <button>Change Username</button>
                </div>
            )}

        </UsernameContextConsumer>
    )
}

export default Main