const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const AddNoteForm = require('./AddNoteForm');
const NoteList = require('./NoteList');

function getAppState () {
    return {
        notes: AppStore.getNotes()
    };
}

const App = React.createClass({
    getInitialState: function () {
        return getAppState();
    },
    
    componentDidMount: function () {
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        AppStore.removeChangeListener(this._onChange);
    },

    render: function () {
        console.log(this.state.notes);

        return (
            <div>
                <div className="off-canvas-wrapper">
                    <div className="off-canvas-wapper-inner" data-off-canvas-wrapper>
                        <div className="off-canvas position-left reveal-for-large" data-off-canvas data-position="left">
                            <div className="row column">
                                <br />
                                <AddNoteForm />
                            </div>
                        </div>
                        <div className="off-canvas-content" data-off-canvas-content>
                            <NoteList notes={this.state.notes} />
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    // Update view state when change is received
    _onChange: function () {
        this.setState(getAppState());
    }
});

module.exports = App;