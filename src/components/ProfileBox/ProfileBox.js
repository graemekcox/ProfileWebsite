import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './ProfileBox.css';

import homelogo from './../../img/home-icon-silhouette.png'
import resume from './../../GraemeCox-Resume.pdf'

export class ProfileBox extends Component {
    render() {
        return (
            <div className="profile-box-container">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="profile-box-name-container">
                    <h1 className="profile-box-name">Graeme Cox</h1>
                    
                    {window.innerWidth > 1100 ?
                    <div>
                    <a className="linkedin-link-container" href="https://www.linkedin.com/in/graemekcox/" target="_blank" rel="noopener noreferrer">

                        <i class="fa fa-linkedin" style={{fontSize:"45px",color:"white"}}></i>
                    </a>
                    <a className="resume-tag"href={resume} target="_blank" rel="noopener noreferrer">resume</a>
                    </div>
                    :<div />
                    }
                </div>
                <div className="profile-box-school-container">
                    <h1 className="profile-box-school">McMaster University | Electrical Engineering Graduate 2018</h1>
                </div>
                <div className="home-link-container">
                <Link to="/">
                    <img className={`home-link ${this.props.home}`} src={homelogo} alt=""></img>
                </Link>
                </div>
            </div>
        )
    }
}

export default ProfileBox
