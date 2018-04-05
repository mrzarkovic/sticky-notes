const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');

const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');
const AppAPI = require('../utils/appAPI');

const CHANGE_EVENT = 'change';

var _notes = [];

const AppStore = assign({}, EventEmitter.prototype, {
    addNote: function (note) {
        _notes.push(note);
    },

    getNotes: function () {
        return _notes;
    },

    setNotes: function (notes) {
        _notes = notes;
    },

    removeNote: function (noteId) {
        let index = _notes.findIndex( n => n._id.$oid == noteId);
        _notes.splice(index, 1);
    },
    
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function (payload) {
    let action = payload.action;

    switch(action.actionType) {
        case AppConstants.ADD_NOTE:
            console.log('Adding note...');

            // Store Save
            AppStore.addNote(action.note);
 
            // API Save
            AppAPI.addNote(action.note);

            // Emmit Change
            AppStore.emitChange();
            break;
        case AppConstants.RECEIVE_NOTES:
            console.log('Receiving notes...');

            // Store Save
            AppStore.setNotes(action.notes);

            AppStore.emitChange();
            break;
        case AppConstants.REMOVE_NOTE:
            console.log('Removing note...');

            // Store Remove
            AppStore.removeNote(action.noteId);

            // API Remove
            AppAPI.removeNote(action.noteId);

            AppStore.emitChange();
            break;
    }

    return true;
});

module.exports = AppStore;