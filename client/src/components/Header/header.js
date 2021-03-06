import React, { Component } from 'react'
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import Nav from './Sidenav/sidenav';

export class Header extends Component {
    state = {
        showNav: false,
    }

    onHideNav = () => {
        this.setState({ showNav: false })
    }

    render() {
        console.log(this.state.showNav)
        return (
            <header>
                <div className="open_nav">
                    <FontAwesome onClick={() => this.setState({ showNav: true })} name="bars" style={{ color: "#ffffff", padding: "10px", cursor: "pointer" }}
                    />
                </div>
                <Nav showNav={this.state.showNav}
                    onHideNav={() => this.onHideNav()} />
                <Link to="/" className="logo">
                    The Book Shelf
                    </Link>
            </header>
        )
    }
}

export default Header;