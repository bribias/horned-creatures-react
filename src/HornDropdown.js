import React, { Component } from 'react'

export default class HornDropdown extends Component {
    render() {
        return (
                <label>
                <select onChange={this.props.handleHornChange}>
                    
                        <option value=''>H O R N S</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='100'>M A N Y</option>
                    </select>
                </label>
        )
    }
}