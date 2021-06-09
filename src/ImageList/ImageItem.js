import React, { Component } from 'react';

export default class ImageItem extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={this.props.url} alt="" />
                </div>
                {/* <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <span>
                    <p>Keyword: {this.props.keyword}</p>
                    <p>Number of Horns: {this.props.horns}</p>
                </span> */}
            </div>
        )
    }
}
