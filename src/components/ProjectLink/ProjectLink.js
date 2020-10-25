import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './ProjectLink.css'

export class ProjectLink extends Component {
    render() {
        return (this.props.project.type==="website"?
            <a href={this.props.project.link} className="project-link-link" target="_blank" rel="noopener noreferrer" >
                <div className="project-link-container">
                    <img className="project-thumbnail" src={this.props.project.thumbnail} alt=""/>
                    <h1 className="project-name">{this.props.project.name}</h1>              
                </div>
            </a>
        :
            <Link className="project-link-link" to={this.props.project.link}>
            <div className="project-link-container">
                <img className="project-thumbnail" src={this.props.project.thumbnail} alt=""/>
                <h1 className="project-name">{this.props.project.name}</h1>              
            </div>
            </Link>
        )
    }
}
export default ProjectLink
