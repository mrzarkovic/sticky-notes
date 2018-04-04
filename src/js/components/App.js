const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

function getAppState () {
    return {

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
        return (
            <div>
                <div className="off-canvas-wrapper">
                    <div className="off-canvas-wapper-inner" data-off-canvas-wrapper>
                        <div className="off-canvas position-left reveal-for-large" data-off-canvas data-position="left">
                            <div classNmae="row column">
                                <br />
                                // Add note from
                            </div>
                        </div>
                        <div className="off-canvas-content" data-off-canvas-content>
                            // Note list
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