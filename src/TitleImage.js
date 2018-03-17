import React, {Component} from "react";

class TitleImage extends Component {
    render() {
        return (
            <div className="card bg-dark text-white">
                <img className="card-img" src="/" alt="Card image" />
                    <div className="card-img-overlay">
                        <h4 className="card-title"></h4>
                        <p></p>
                    </div>
            </div>
        )
    }
}

export default TitleImage;