import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

class Liked extends Component {

    close = () => {
        this.props.close()
    }

    render() {
        console.log(this.props.users)
        return (
            <div>

                <div className="likes-popUp" >
                    <div className="likes-popUp-hedear">
                        <span className="redColor" onClick={this.close}> X </span>
                        <span className="header-like"> Who Liked You: </span>
                    </div>
                    {this.props.users.data.map(u =>
                        <div className="list-of-likes">
                            <div className="user-like-wrapper">
                                <img id="user-pic-like" src="http://www.sclance.com/pngs/profile-icon-png/profile_icon_png_1113578.png" />
                                <div> {u.name} </div>
                            </div>
                        </div>
                    )}


                </div>
            </div>
        )

    }
}
export default Liked;