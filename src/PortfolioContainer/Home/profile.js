import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Typical from "react-typical";
const Profile = () => {
  return (
    <div className="profile-container">
      
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.facebook.com/" className="btn btn-primary">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com/" className="btn btn-primary">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/" className="btn btn-primary">
              <FaInstagram />
            </a>
          </div>

          <div className="profile-detail-name">
            <span className="primary-text">
              Hello, I'M{" "}
              <span className="highlighted-text">Manjila Nepali</span>
            </span>
          </div>

          <div  div className="profile-detail-role">
            <span className="primary-text">
              <h1>
              <Typical 
                loop={Infinity} 
                steps={[
                  "Ethusiastic Dev", 1000,
                  "Full Stack  Developer", 1000,
                  "MERN Stack Developer", 1000,
                 
                
                ]} />
              </h1>
              <span className="profile-role-tagline">knack of building application with front and back end operations.</span>
            </span>
               </div>
               <div className="profile-options">
                <button className="button">Hire Me</button>
               </div>
            
        
            
          
          </div>
        </div>
      </div>
    
  );
};

export default Profile;
