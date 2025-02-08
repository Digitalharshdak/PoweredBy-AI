import React from "react";
import img1 from "../Image/3.png";
import img2 from "../Image/4.png";
import img3 from "../Image/5.png";

const Frame2 = () => {
    return (
        <div className="gradient-overlay2">
            <div className="overlay-text2">
                <img src={img1} alt="product2" />
            </div>
            <div className="favourite2">
                <div className="img-container">
                    <img src={img2} alt="fav2" className="img2" />
                </div>
                <div className="text-container">
                    <h1>Your Favourite AI Tools,<br/> One Prompt away.</h1>
                    <div className="input-container2">
                        <input type="email" placeholder="Search Top 10 AI tools for Designing" />
                        <button className="btn-primary1">Generate</button>
                    </div>
                </div>
            </div>
            <div className="row2">
                <div>
                    <img src={img3} alt="" />
                    <p>Content Writers</p>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <p>Solepreneurs</p>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <p>Developers</p>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <p>Data Analysis</p>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <p>Content creators</p>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <p>Marketers</p>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <p>Content Writers</p>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <p>Freelancers</p>
                </div>
            </div>
        </div>
    )
};

export default Frame2;
