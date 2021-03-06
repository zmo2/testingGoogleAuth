import React from "react"
import { connect } from "react-redux"
import { signIn, signOut } from "../Actions"

class GoogleAuth extends React.Component {
    state = { isSignedIn: null }
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                client_id: "951298485867-13af88mtvilqg59c5nnetvj8skprru86.apps.googleusercontent.com",
                scope: "email"
            })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance()
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                    this.auth.isSignedIn.listen(this.onAuthChange)
                })
        })
    }
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn()
        } else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }
    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="btn google">
                    <i className="google icon" />
                    Sign Out</button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className="btn google">
                    <i className="google icon" />
                    Sign In</button>
            )
        }
    }
    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

export default connect(null, { signIn, signOut })(GoogleAuth)