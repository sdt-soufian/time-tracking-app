import React, { Component } from 'react'

export class Clock extends Component {
    render() {
        return <h2 style={{ textAlign: 'center' }}>{this.props.setTime.toLocaleTimeString()}</h2>
    }
}

export default Clock
