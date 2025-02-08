import React from "react";
import discordImage from "../Image/25.png";
import img from "../Image/26.svg";

const Frame6 = () => {
    return (
        <div className="community-section">
        <div className="content-wrapper">
            <div className="text-container">
                <p className="question-text">Got Questions?</p>
                <h2 className="community-text">Join the Community?</h2>
                <p className="info-text">Our discord community and staff are here to help!</p>
                <p className="feedback-text">Your feedback will help Alice AI improve in future versions.</p>
            </div>
            <div className="button-box-container">
                <img src={discordImage} alt="Discord" className="discord-icon" />
                <div className="button-box">
                <div className="button-content">
                    <p className="join-text">JOIN THE SERVER NOW</p>
                    <div className="server-info">
                    <img src={img} alt="guild" className="guild-image" />
                    <div className="server-details">
                    <p className="powered-text">PoweredbyAI.app</p>
                    <p className="members-text">• 750 Online • 1,500 Members</p>
                </div>
            </div>
        </div>
        <button className="join-button">Join</button>
    </div>
    </div>
            </div>
        </div>
    );  
};

export default Frame6;
