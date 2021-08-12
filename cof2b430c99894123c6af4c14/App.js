import React, { Component } from "react"

import Header from "./Header"
import Main from "./Main"
import { UsernameContextConsumer } from "./UsernameContext"


class App extends Component {
    state = {
        newUsername: ""
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {

    }

    render() {
        return (
            <div>
                <Header />
                <UserContextConsumer>
                    {({ username, changeUsername }) => (
                        <main>
                            <p className="main">No new notifications, {username}! 🎉</p>
                            <input
                                type="text"
                                name="username"
                                placeholder="New username"
                                value={this.state.newUsername}
                                onChange={this.handleChange}
                            />
                            <button onClick={() => changeUsername(this.state.newUsername)}>Change Username</button>
                        </main>
                    )}
                </UserContextConsumer>


            </div>
        )
    }
}

export default App