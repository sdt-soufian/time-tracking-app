import React, { Component } from 'react'
import Clock from './Clock'

export class Timer extends Component {

    deleteBlock = () => this.props.deleteTimer(this.props.id)

    editBlock = () => this.props.editTimer(this.props.id)

    handleColorChange = () => this.props.editColor(this.props.id)

    clockState = () => {
        return {
            width: '100%',
            padding: '15px',
            textAlign: 'center',
            border: this.props.setColor ? '2px solid #5cb85c' : '2px solid #ff3b30',
            borderBottomLeftRadius: ' 6px',
            borderBottomRightRadius: '6px',
            color: this.props.setColor ? '#5cb85c' : '#ff3b30',
            outline: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer'
        }
    }
    render() {
        return (
            <div className="row">
                <div className="div-first">
                    <h3>{this.props.titre}</h3>
                    <p>{this.props.parag}</p>
                    <Clock setTime={this.props.D} />
                    <div className="btn-group">
                        <button className="btn-trash" onClick={this.deleteBlock}><i className="fas fa-trash"></i></button>
                        <button className="btn-edit" onClick={this.editBlock}><i className="fas fa-edit"></i></button>
                    </div>
                </div>
                <div>
                    <button style={this.clockState()} onClick={this.handleColorChange}>
                        <b>{this.props.setTitle ? 'start' : 'stop'}</b>
                    </button>
                </div>

            </div>
        )
    }
}

export default Timer
