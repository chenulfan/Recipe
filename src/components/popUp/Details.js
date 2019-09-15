

import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'


class Details extends Component {

    render() {
        const details = this.props.details
        return (
            <div className="container-details-recipe-popUp underline">
                <span className="detail-recipe" > {details.time} </span>
                <span  > | </span>
                <span className="detail-recipe" > {details.difficult} </span>
                <span  > | </span>
                <span className="detail-recipe" > {details.type} </span>
            </div>
        )

    }
}
export default Details;