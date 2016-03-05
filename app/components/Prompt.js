var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles/index').transparentBg;

function Prompt (props) {
    return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
            <h1>{props.header}</h1>
            <div className="col-sm-12">
                <form onSubmit={props.onSubmitUser}>
                    <div className="form-group">
                        <input 
                            type="text"
                            onChange={props.onUpdateUser}
                            value={props.username}
                            placeholder="GitHub username"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button 
                            type="submit"
                            className="btn btn-success">
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

Prompt.propTypes = {
    header: PropTypes.string.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
}

module.exports = Prompt;