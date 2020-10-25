import React, {Component} from 'react';

import orthogonal from './../../img/AccumulatorControlBoard/orthogonal.PNG';
import top3d from './../../img/AccumulatorControlBoard/Top_3d.PNG';
import schematic from './../../img/AccumulatorControlBoard/Top_pcb.PNG';
import printed from './../../img/AccumulatorControlBoard/printed.jpg';
import mounted from './../../img/AccumulatorControlBoard/mounted.jpg';
import mounted_render from './../../img/AccumulatorControlBoard/mounted_render.jpg';

import ProjectPage from './ProjectPage';

export class HVSideBoard extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <ProjectPage
            title="Accumulator Control Board"
            images={[
                {image: orthogonal,
                decsription: "PCB 3D View"},
                {image: top3d,
                decsription: "PCB 3D Top View"},
                {image: schematic,
                decsription: "PCB 3D Top View"},
                {image: mounted,
                decsription: "Board mounted on accumulator"},
                {image: printed,
                decsription: "Printed board"},
                {image: mounted_render,
                decsription: "CAD rendering of mounted PCB"},
                ]}
            description="ACB"
           />
        )
    }
}

export default HVSideBoard 
