import React, { Component } from 'react'

export class TimerForm extends Component {


    render() {
        return (
            <div className="form-group" style={{ display: this.props.displayFrom ? 'block' : 'none' }}>
                <form onSubmit={this.props.handleSubmit}
                    style={{ display: this.props.formAdd ? 'block' : 'none' }}>
                    <input type="text"
                        name="getId"
                        value={this.props.editId}
                        onChange={this.props.handleChange}
                        style={{ visibility: 'hidden' }} />
                    {/*------------------get Id of Tiemr -----------------------*/}
                    <label htmlFor="">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={this.props.title}
                        onChange={this.props.handleChange}
                        placeholder="please enter a title" />
                    {/*--------------------input text----------------------*/}
                    <label htmlFor="">Project</label>
                    <input
                        type="text"
                        name="project"
                        value={this.props.project}
                        onChange={this.props.handleChange}
                        placeholder="please enter your project details" />
                    {/*--------------------input project----------------------*/}
                    <div className="btn-submit">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                {/*---------------------------Add Timer Form-------------------*/}
                <form style={{ display: this.props.formEdit ? 'block' : 'none' }}>
                    <label htmlFor="">Title</label>
                    <input type="text"
                        name="editTitle"
                        value={this.props.editTitle}
                        onChange={this.props.handleEditChange}
                        placeholder="please enter a title"
                    />
                    <label htmlFor="">Project</label>
                    <input type="text"
                        name="editProject"
                        value={this.props.editProject}
                        onChange={this.props.handleEditChange}
                        placeholder="please enter your project details" />
                    <div className="btn-edit-timer">
                        <button onClick={this.props.btnUpdate}>Update</button>
                        <button onClick={this.props.btnCancel}>Cancel</button>
                    </div>
                    {/*-----------------Edit Timer-----------------*/}
                </form>

            </div>
        )
    }
}

export default TimerForm
