import React, { Component } from 'react'
import Timer from './Timer'

export class TimerList extends Component {

    render() {
        return (
            <div className="timer-list">
                {this.props.list.length > 0 ? this.props.list.map(elem => <Timer
                    key={elem.id}
                    titre={elem.title}
                    parag={elem.project}
                    D={elem.D}
                    id={elem.id}
                    deleteTimer={this.props.deleteTimer}
                    editTimer={this.props.editTimer}
                    editColor={this.props.editColor}
                    setColor={elem.btnColor}
                    setTitle={elem.btnTitle} />) :
                    <h2 style={{ textAlign: 'center' }}>No Data To Display</h2>
                }
            </div>
        )
    }
}

export default TimerList
