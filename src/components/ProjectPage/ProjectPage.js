import React, { Component } from 'react'
import ProfileBox from '../ProfileBox/ProfileBox';

import './ProjectPage.css';

export class ProjectPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            showcase:this.props.images[0],
            images:this.props.images

        }}
    

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    updateShowcase = (newImage) =>{
        this.setState({showcase:newImage})
    }

    render() {
        return (
            <div>
                <ProfileBox />
                <div className="project-header-container">
                    <h1 className="project-header">
                        {this.props.title}
                    </h1>
                </div>
                <div className="showcase-container">
                    <img src={this.state.showcase.image} className="showcase-image" alt=""/>
                    <p className="showcase-description">{this.state.showcase.description}</p>
                </div>
                <div className="showcase-image-selector-container">
                    {this.state.images.map(img => (
                        <div className="showcase-image-selector-image-container" onClick={this.updateShowcase.bind(this,img)}>
                            <img src={img.image} className="showcase-image-selector-image" alt=""/>
                        </div>
                    ))}
                </div>
                <div className="project-description-container">
                    <p className="project-description">
                        {this.props.description}
                    </p>
                </div>
            </div>
        )
    }
}

export default ProjectPage
