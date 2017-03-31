import React from 'react';

import NotesEditor from './NotesEditor.jsx';
import NotesGrid from './NotesGrid.jsx';

import './App.less';

const App = React.createClass({
    handleNoteAdd(data) {
        console.log(data);
    },
    render() {
        return (
            <div className="App">
                <h2 className="App_header">NotesApp</h2>
                <NotesEditor onNoteAdd={this.handleNoteAdd}/>
                <NotesGrid />
            </div>
        );
    }
});

export default App;