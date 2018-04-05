const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const Note = require('./Note');

const NoteList = React.createClass({
    render: function () {
        return (
            <div className="row small-up-2 medium-up-3 large-up-4">
                { this.props.notes.map((note, i) => {
                    return (
                        <Note note={note} key={i} />
                    );
                }) }
            </div>
        );
    }
});

module.exports = NoteList;