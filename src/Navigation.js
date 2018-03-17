import React, {Component} from "react";

class Navigation extends Component {
    render() {
        return (
            <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">팀원관리</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="/">주간업무관리</a>
                </li>
            </ul>
        )
    }
}

export default Navigation;