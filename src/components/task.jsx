import React from 'react';

import './task.scss';


class Task extends React.Component {
    state = {
        newText: this.props.data.text,

    }

    // editing: false,
    // newText: this.props.data.text
    // toggleEditMode = () => {
    //     this.setState({ editing: !this.state.editing });
    // }

    handleChange = (ev) => {
        this.setState({ newText: ev.target.value });
    }
    // this.setState({ newText: ev.target.value }, { newTask: ev.target.createAt });

    isEnter = ev => {
        if (ev.keyCode === 13) {
            this.edit(ev)
        }
    }
    // date = (ev) => {
    //     if (ev.onClick) {
    //         this.setState({ newTask: ev.target.createAt })
    //     }
    // }

    edit = (ev) => {
        let editedTask = {
            ...this.props.data,   //agregar un nuevo elemento a uno existente
            text: this.state.newText
        }
        this.props.updateTask(editedTask);
        ev.target.blur();
    }

    markAsCompleted = () => {
        let editedTask = {
            ...this.props.data,
            completed: !this.props.data.completed,
        };
        this.props.updateTask(editedTask);
    }

    render() {
        return (
            <div className={'task ' + (this.props.data.completed ? 'completed' : '')}>

                <input type="text"
                    value={this.state.newText}
                    onChange={this.handleChange}
                    onKeyUp={this.isEnter}
                    onBlur={this.edit} />
                {/* onClick={this.date}  */}
                {/* <div className='text' onClick={this.toggleEditMode} className={this.state.editing ? 'hidden' : ''}> {this.props.data.text}</div>

                <input type="text" className={this.state.editing ? '' : 'hidden'} value={this.state.newText} onChange={this.handleChange} onKeyUp={this.isEnter} onBlur={this.edit} /> */}

                <div className='actions'>
                    <img src="https://www.freeiconspng.com/uploads/check-tick-icon-25.png" alt="Completado" className="check" onClick={this.markAsCompleted} />
                    <img src="https://www.freeiconspng.com/uploads/garbage-bin-png-8.png" alt="Borrar" className="papelera" onClick={() => this.props.deleteTask(this.props.data.id)} />
                    {/* <h6 onChange={this.props.data.createAt} /> */}
                </div>
            </div>
        )
    };
}

export default Task;