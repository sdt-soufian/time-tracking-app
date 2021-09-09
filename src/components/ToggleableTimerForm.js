import React, { Component } from 'react'

export class ToggleableTimerForm extends Component {
    render() {
        return (
            <div className="btn-add"
                onClick={this.props.handleEvent}
                style={{ visibility: this.props.isVisible ? 'visible' : 'hidden' }}>
                <i className="fas fa-plus fa-2x"></i>
            </div>
        )
    }
}

export default ToggleableTimerForm
