import React, { Component } from 'react'
import styled from 'styled-components'
import TimerForm from './components/TimerForm'
import TimerList from './components/TimerList'
import ToggleableTimerForm from './components/ToggleableTimerForm'
import './style.css'

export class App extends Component {

  state = {
    timerList: [],
    displayFormState: false,
    buttonVisibility: true,
    formAddTimer: false,
    formEditTimer: false,
    title: '',
    project: '',
    editTitle: '',
    editProject: '',
    getId: '',
    toggleBtnState: {
      btnColor: false,
      btnTitle: true,
    }
  }

  componentDidMount() {

  }

  handleDisplayForm = () => {
    this.setState({ displayFormState: true })
    this.setState({ formAddTimer: true })
    this.setState({ formEditTimer: false })
    this.setState({ buttonVisibility: false })
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleEditChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault();
    this.addTimer(this.state.title, this.state.project)
    this.setState({ displayFormState: false })
    this.setState({ buttonVisibility: true })
  }

  handleDeleteTimer = id => this.setState({ timerList: this.state.timerList.filter(elem => elem.id !== id) });

  handleEditTimer = id => {
    this.setState({ displayFormState: true })
    this.setState({ formAddTimer: false })
    this.setState({ formEditTimer: true })
    const getTimer = this.state.timerList.find(elem => elem.id === id)
    this.setState({ editTitle: getTimer.title })
    this.setState({ editProject: getTimer.project })
    this.setState({ getId: parseInt(getTimer.id) })
  }

  handleUpdate = e => {
    e.preventDefault()
    const joker_id = this.state.getId
    const tempListTimer = this.state.timerList.map(editElem => {
      return editElem.id === joker_id ? Object.assign({}, editElem, { title: this.state.editTitle },
        { project: this.state.editProject }) : editElem
    })
    this.setState({ timerList: tempListTimer })
    this.reset()
  };

  handleCancel = e => {
    e.preventDefault()
    this.reset()
  };

  handleToggleBtnState = id => {
    const changeColor = this.state.timerList.map(elem => {
      console.log(elem.id);
      return elem.id === id ? Object.assign({}, elem, { btnColor: !elem.btnColor }, { btnTitle: !elem.btnTitle })
        : elem
    })
    this.setState({ timerList: changeColor })

  }
  /*-------------class Methods--------------------*/

  addTimer = (title, project) => {
    const date = new Date()
    const newTimer = {
      id: Math.floor(Math.random() * 200),
      title: title,
      project: project,
      D: date,
      btnColor: this.state.toggleBtnState.btnTitle,
      btnTitle: this.state.toggleBtnState.btnTitle
    }
    this.setState({ title: '' })
    this.setState({ project: '' })
    return this.setState({ timerList: [...this.state.timerList, newTimer] })
  }

  reset = () => {
    this.setState({ editTitle: '' })
    this.setState({ editProject: '' })
    this.setState({ displayFormState: false })
  }

  /*---------------------------------fonctions-------------------------*/
  render() {
    return (
      <div className="container">
        <Title>Timers</Title>
        <TimerList list={this.state.timerList}
          deleteTimer={this.handleDeleteTimer}
          editTimer={this.handleEditTimer}
          editColor={this.handleToggleBtnState} />
        <ToggleableTimerForm handleEvent={this.handleDisplayForm}
          isVisible={this.state.buttonVisibility} />
        <TimerForm displayFrom={this.state.displayFormState}
          title={this.state.title}
          project={this.state.project}
          formAdd={this.state.formAddTimer}
          formEdit={this.state.formEditTimer}
          editTitle={this.state.editTitle}
          editProject={this.state.editProject}
          editId={this.state.getId}
          handleEditChange={this.handleEditChange}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          btnUpdate={this.handleUpdate}
          btnCancel={this.handleCancel} />

      </div>
    )
  }
}

export default App

const Title = styled.h1`
text-align: center;
color: #292b2c;
`