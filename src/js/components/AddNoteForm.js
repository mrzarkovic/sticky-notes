const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

const AddNoteForm = React.createClass({
    render: function () {
        return (
            <div>
                <h5>Add a Note</h5>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="large-12 columns">
                            <label>Note Text
                                <input type="text" ref="text" placeholder="Enter Text..." />
                            </label>
                            <button className="button">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    },

    onSubmit: function (e) {
        e.preventDefault();

        let note = {
            text: this.refs.text.value.trim()
        }

        AppActions.addNote(note);
    }
});

module.exports = AddNoteForm;