import React, {Component} from 'react';

import brakelight from './../../img/PIU/Brake_light_schematic.PNG';
import orthogonal from './../../img/PIU/orthogonal_view.PNG';
import timer_shutdown from './../../img/PIU/Timer_shutdown_schematic.PNG';
import topdown from './../../img/PIU/Topdown_PCB.PNG';
import topschematic from './../../img/PIU/TopLevel.PNG';

import ProjectPage from './ProjectPage';

export class PIU extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <ProjectPage
            title="Pedal Input Unit"
            images={[
                {image: orthogonal,
                decsription: "PCB 3D View"},
                {image : topdown,
                description: "PCB 3D Topdown View"},
                {image: topschematic,
                description: "Top level schematic"},
                {image: brakelight,
                description: "Brakelight Circuit"},
                {image: timer_shutdown,
                description: "Timer shutdown for shutdown system"},
                ]}
            description="The PIU (Pedal Input Unit) is a board located in the front of the car that interfaces with the pedal sensors, steering sensor, 
                and some additional sensors used for torque vectoring. The board houses safety circuitry to disable the tractive system in the case of 
                sensor failure. An Atmel32m1 8-bit microcontroller is used to process all information, before sending it the vehicle's VCU (Vehicle Control Unit)
                CAN (Controller Area Network) bus. 
                "
           />
        )
    }
}

export default PIU 
