import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import UsernameContext from "./UsernameContext"

/**
 * Challenge: Set up context to save the user's username and pass it to anywhere that is currently hardcoding "Username".
 * 
 * Use the static class property `contextType` on any components that need to consume context.
 * https://reactjs.org/docs/context.html
 */

ReactDOM.render(
    <UsernameContext.Provider value={"Mike"}>
        <App />
    </UsernameContext.Provider>, 
    document.getElementById("root"))
