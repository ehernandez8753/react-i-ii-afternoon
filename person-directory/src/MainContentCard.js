import React, {Component} from "react";
import "./DirectoryCard.css";
import dataSheet from "./data.js";

class MainContentCard extends Component{
    
    constructor(props){
        super(props);

    }

    render(){
        let i = this.props.dataIndex;

        return(
            <div className="Main-content">
                <h2 className="mainContentTopIndexVal">{`${i + 1}/25`}</h2>
                <div className="mainDisplayContent">
                    <h2 className ="mainContentName">{`${dataSheet[i].name.first} ${dataSheet[i].name.last}`}</h2>
                    <div className="mainSubContentBox"><strong>From:</strong>{` ${dataSheet[i].city}, ${dataSheet[i].country}`}</div>
                    <div className="mainSubContentBox"><strong>Job Title:</strong>{` ${dataSheet[i].title}`}</div>
                    <div className="mainSubContentBox"><strong>Employer:</strong>{` ${dataSheet[i].employer}`}</div>
                    <br></br>
                    <div className="movieSubContentBox">
                        <strong>Favorite Movies:</strong>
                        <ol className="movieSubListBox">
                            <li>{` ${dataSheet[i].favoriteMovies[0]}`}</li>
                            <li>{` ${dataSheet[i].favoriteMovies[1]}`}</li>
                            <li>{` ${dataSheet[i].favoriteMovies[2]}`}</li>
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContentCard;