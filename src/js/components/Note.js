const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

const Note = React.createClass({
    render: function () {
        return (
            <div className="column">
                <div className="note">
                    <p>
                        { this.props.note.text }
                    </p>
                </div>
            </div>
        );
    }
});

module.exports = Note;