const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

const Note = React.createClass({
    render: function () {
        return (
            <div className="column">
                <div className="note" onDoubleClick={ this.removeNote.bind(this, this.props.note._id) }>
                    <p>
                        { this.props.note.text }
                    </p>
                </div>
            </div>
        );
    },

    removeNote: function (id) {
        AppActions.removeNote(id.$oid);
    }
});

module.exports = Note;