import React from 'react';
import './board.scss';
import Task from '../components/task.jsx';


class Board extends React.Component {
    state = {
        newTaskText: '',
        tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    };

    componentDidUpdate() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }


    addTask = text => {
        let newTask = {
            id: Date.now(),
            createAt: new Date(),
            text,
            completed: false,
        };
        this.setState({
            tasks: [newTask, ...this.state.tasks],
            newTaskText: '',
            newTaskCreateAt: new Date()
        });
    };

    editTask = task => {
        task = {
            ...task,
            updateAt: new Date(),
        };
        this.setState({
            tasks: this.state.tasks.map(_task => (_task.id === task.id ? task : _task)),  //recorre uno a uno todos los elementos del array y los devuelve todos
        });
    };

    removeTask = (id) => {
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== id), //recorre los elementos uno a uno y si algun elemento no cumple con la condicion no lo agrega al array y por lo tanto la borra
        })
    };

    // dateTask = (createAt) => {
    //     this.setState({
    //         newTask: this.state.tasks.createAt(new Date)
    //     })
    // }


    handleChange = ev => {
        this.setState({ newTaskText: ev.target.value }); //cambia el dato que se ha creado anteriormente
        this.setState({ newTaskCreateAt: ev.target.value })
    };

    handleKeyUp = (ev) => {
        if (ev.keyCode === 13) {
            this.addTask(ev.target.value);
        }
    };

    render() {
        return (
            <div className='board'>

                <header>
                    <input type='text'
                        placeholder='añade una tarea'
                        onKeyUp={this.handleKeyUp}
                        onChange={this.handleChange}
                        value={this.state.newTaskText}
                        value={this.state.newTaskCreateAt} />
                    <button value={this.state.newTaskCreateAt}>Añadir Tarea</button>
                </header>

                <main className='tasks'>
                    {this.state.tasks.map(task => (
                        <Task data={task} deleteTask={this.removeTask} key={task.id} updateTask={this.editTask} addDate={this.newTaskCreateAt} />
                    ))}
                </main>

                <footer>
                    (c) Jan Fajarnés Jessen
                </footer>
            </div>
        );
    }
}

export default Board;