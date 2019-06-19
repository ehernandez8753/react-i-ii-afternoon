import React, {Component} from "react";
import "./MainFooter.css";

class MainFooter extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="mainFooter">
                <h3 className="footerButton" onClick={() => this.props.moveToPrevItem()}>◄ Previous</h3>
                <h3 className="footerButton" onClick={() => this.props.moveToNextItem()}>Next ►</h3>
            </div>
        )
    }
}

export default MainFooter;