import React from "react"
import { Link } from "react-router-dom"
import GoogleAuth from "./GoogleAuth"

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light navbar-expand-md">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link active">Home <span
                            className="sr-only">(current)</span></Link>
                    </div>
                    <GoogleAuth />
                </div>
            </nav>
        </div>
    )
}
export default Header