import React, {Component} from 'react';

import orthogonal from './../../img/HVSideBoard/Orthogonal.PNG';
import hvschematic from './../../img/HVSideBoard/HV_Schematic.PNG';
import lvschematic from './../../img/HVSideBoard/LV_schematic.PNG';
import top3d from './../../img/HVSideBoard/Top3dView.PNG';

import ProjectPage from './ProjectPage';

export class HVSideBoard extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <ProjectPage
            title="HV Side Board"
            images={[
                {image: orthogonal,
                decsription: "PCB 3D View"},
                {image: top3d,
                description: "PCB Top 3D View"},
                {image: hvschematic,
                description: "High Voltage circuit schematic"},
                {image: lvschematic,
                description: "Low Voltage circuit schematic"},
                ]}
            description="The HV Side Board 
                "
           />
        )
    }
}

export default HVSideBoard 
