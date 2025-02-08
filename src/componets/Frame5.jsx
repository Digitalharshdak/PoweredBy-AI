import React from "react";
import img from "../Image/23.png";
import img1 from "../Image/24.png";
const Frame5 = () => {
    return (
        <div className="frame5-container">
            <div className="card">
                <img src={img} alt="Engineering team" className="card-image" />
                <div className="card-content">
                    <h3>Meet Shashank Jain: Head of <br/>Engineering at Poweredbyai</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Gravida aliquam egestas sollicitudin ac et turpis...</p>
                    <p>PBA</p>
                </div>
            </div>
            <div className="card">
                <img src={img1} alt="Engineering team" className="card-image" />
                <div className="card-content">
                    <h3>Meet Shashank Jain: Head of <br/>Engineering at Poweredbyai</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Gravida aliquam egestas sollicitudin ac et turpis...</p>
                    <p>PBA</p>
                </div>
            </div>
            <div className="card">
                <img src={img1} alt="Engineering team" className="card-image" />
                <div className="card-content">
                    <h3>Meet Shashank Jain: Head of <br/>Engineering at Poweredbyai</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Gravida aliquam egestas sollicitudin ac et turpis...</p>
                    <p>PBA</p>
                </div>
            </div>
            <div className="card">
                <img src={img} alt="Engineering team" className="card-image" />
                <div className="card-content">
                    <h3>Meet Shashank Jain: Head of <br/>Engineering at Poweredbyai</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Gravida aliquam egestas sollicitudin ac et turpis...</p>
                    <p>PBA</p>
                </div>
            </div>        
            <div className="view-more-container">
                <button className="view-more-btn">View More</button>
            </div>
    </div>
    );
};

export default Frame5;