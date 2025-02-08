import React from "react";
const Frame2 = () => {
    return (
        <div className="subscribe-section">
            <div className="subscribe-content">
                <div className="image-container">
                    <img src="../src/Image/22.png" alt="Subscribe" />
                </div>
                <div className="form-container">
                    <h2>Stay in the loop</h2>
                    <p>Get the latest insights</p>
                    <div className="input-container">
                        <input type="email" placeholder="Enter your Email id" />
                        <button className="btn-primary">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frame2;