
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

class Amounts extends Component {

    render() {
        const amounts = this.props.amounts
        return (
                <div className="underline-box amounts">
                    {amounts.map(a =>
                        <div className="ing-list">
                            <label>
                                <input type="checkbox" />
                                <span className="popup-ing-check"> {a} </span>
                            </label>
                        </div>
                    )}
                    <br/>
                </div>
        )

    }
}
export default Amounts;