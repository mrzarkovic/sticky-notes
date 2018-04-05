const AppActions = require('../actions/AppActions');

const key = '_KxMM59dnO_DACSOiahhO3fotGHBbXCs';

module.exports = {
    addNote: function (note) {
        $.ajax({
            url: 'https://api.mlab.com/api/1/databases/stickypad/collections/notes?apiKey=' + key,
            data: JSON.stringify(note),
            type: 'POST',
            contentType: 'application/json'
        });
    },

    getNotes: function () {
        $.ajax({
            url: 'https://api.mlab.com/api/1/databases/stickypad/collections/notes?apiKey=' + key,
            type: 'GET',
            dataType: 'json',
            cache: false,
            success: function (data) {
                AppActions.receiveNotes(data);
            }.bind(this),
            error: function (xhr, status, error) {
                console.log(error);
            }.bind(this)
        });
    },

    removeNote: function (noteId) {
        $.ajax({
            url: 'https://api.mlab.com/api/1/databases/stickypad/collections/notes/' + noteId + '?apiKey=' + key,
            type: 'DELETE',
            async: true,
            timeout: 300000,
            success: function (data) {
                console.log('Note deleted.');
            }.bind(this),
            error: function (xhr, status, error) {
                console.log(error);
            }.bind(this)
        });
    }
};