import React, { Component } from 'react';
import Task from '../components/task.jsx';

import './board.scss';

class Board extends Component {
    render() {
        return (
            <div className="board">

                <header>
                    <input type="text" placeholder="add task" />
                </header>

                <main className="tasks">
                    <Task text="aprender react" />
                    <Task text="aprender jsx" />
                    <Task text="aprender redux" />
                    <Task text="aprender angular" />
                </main>

                <footer>
                    (c) Jan Fajarnés Jessen
                </footer>
            </div>
        );
    }
}

export default Board;