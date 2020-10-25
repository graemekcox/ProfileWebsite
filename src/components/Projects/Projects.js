import React, { Component } from 'react'
import './Projects.css';
import ProjectLink from '../ProjectLink/ProjectLink';

import websiteThumbnail from './../../img/project/website-thumbnail.png';
import piuThumbnail from './../../img/PIU/thumbnail.png';
import acbThumbnail from './../../img/AccumulatorControlBoard/mounted.jpg';
import hvThumbnail from './../../img/HVSideBoard/Orthogonal.PNG';
import smallBoardThumbnail from './../../img/RPI_GPIO_Board/orthogonal.PNG';


export class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects:[
                {name:"Team Website",
                type:"website",
                link:"https://macformularacing.com/",
                thumbnail: websiteThumbnail},
                {name:"Pedal Input Unit",
                type:"modelling",
                thumbnail: piuThumbnail,
                link:'/piu'},
                {name:"Accumulator Control Board",
                type:"modelling",
                thumbnail: acbThumbnail,
                link:'/acb'},
                {name:"HVSideBoard",
                type:"modelling",
                thumbnail: hvThumbnail,
                link:'/hvsideboard'},
                {name:"Other small boards",
                type:"modelling",
                thumbnail: smallBoardThumbnail,
                link:'/smallboards'},
            ]
        }
    }


    render() {
        return (
            <div className="projects-container">
                {this.state.projects.map(project => (
                    <div className="projects-project-link-container">
                    <ProjectLink 
                    project={project}
                    />
                </div>))}   
                {window.innerWidth > 900 ? 
                <>
                {/* <div className="projects-project-link-container"/> */}
                {/* <div className="projects-project-link-container"/> */}
                </>
                :
                <div/>}
            </div>
        )
    }
}

export default Projects
