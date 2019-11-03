import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';
import history from '../../history';


class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        return (
            <div>
                <button onClick={() => this.props.deleteStream(this.props.match.params.id)} className="ui red button">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </div>
        )
    };

    renderContent() {
        if(!this.props.stream) {
            return "Are you sure you want to delete this stream?";
        } else {
            return `Are you sure you want to delete ${this.props.stream.title}?`;
        }
    }

    render() {
        return (
            <div>
                <Modal 
                    title="Delete Stream" 
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);