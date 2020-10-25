import React, {Component} from 'react';

// RaspberryPi GPIO Board
import orthogonal_rpi from './../../img/RPI_GPIO_Board/orthogonal.PNG';
import schematic_rpi from './../../img/RPI_GPIO_Board/Schematic.PNG';
import trace_rpi from './../../img/RPI_GPIO_Board/Trace_view.PNG';

// AccumulatorManagementSystem Cell Board Tester 
import render_ams from './../../img/AMSCellBoardTester/3d_render.png';
import render_top from './../../img/AMSCellBoardTester/3d_top.PNG';
import assembled_ams from './../../img/AMSCellBoardTester/assembled.jpg';
import schematic_ams from './../../img/AMSCellBoardTester/schematic.PNG';
import trace_ams from './../../img/AMSCellBoardTester/trace_view.PNG';

import ProjectPage from './ProjectPage';

export class SmallerBoards extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <ProjectPage
            title="Smaller Boards"
            images={[
                {image: orthogonal_rpi,
                decsription: "Orthogonal 3D View of RaspberryPi CAN Shield"},
                {image: schematic_rpi,
                decsription: "Schematic of RaspberryPi CAN Shield"},
                {image: trace_rpi,
                decsription: "Trace view of RaspberryPi CAN Shield"},

                {image: render_ams,
                decsription: "3D render of AMS"},
                {image: render_top,
                decsription: "3D render top view of AMS"},
                {image: assembled_ams,
                decsription: "Assembled AMS Cell Board Tester"},
                {image: schematic_ams,
                decsription: "Schematic of AMS Cell Board tester"},
                {image: trace_ams,
                decsription: "Trace view of AMS Cell Board tester"},
                ]}
            description="The RPI GPIO Board"
           />
        )
    }
}

export default SmallerBoards 