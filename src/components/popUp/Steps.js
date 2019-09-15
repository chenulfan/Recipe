

import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

class Steps extends Component {

    render() {
        const steps = this.props.steps
        console.log(steps)
        return (
            <div className="underline-box end-popup">
                {steps.map(s =>
                    <div>
                        <div className="num-step"> {s.length} </div>
                        <div className="step-popup"> {s.step} </div>
                    </div>
                )}
                <br/>
            </div>
        )

    }
}
export default Steps;