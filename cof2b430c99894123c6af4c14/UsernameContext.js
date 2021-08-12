import React, { Component } from 'react'
const { Provider, Consumer } = React.createContext()

class UsernameContextProvider extends Component {
    state = {
        username: "Mike"
    }

    changeUsername = (username) => {
        this.setState({ username: username })
    }

    render() {
        const { username } = this.state
        return (
            <Provider value={{ username, changeUsername: this.changeUsername }}>
                {this.props.children}
            </Provider>
        )
    }
}

export { UsernameContextProvider, Consumer as UsernameContextConsumer }