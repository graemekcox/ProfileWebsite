import React, { Component } from 'react'
import ProfileBox from './../ProfileBox/ProfileBox';
import Formula from './../Formula/Formula';

export class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <ProfileBox home="is-home"/>
                <Formula />
            </div>
        )
    }
}

export default HomePage
