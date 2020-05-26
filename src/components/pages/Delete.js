import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import history from '../../history';
import { fetchTask, deleteTask } from '../../actions';
import { Link } from 'react-router-dom';

class Delete extends React.Component {
  componentDidMount() {
    this.props.fetchTask(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button onClick={()=> this.props.deleteTask(id) } className="ui primary button">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    )
  };

  renderContent() {
    if (this.props.task) {
      return `Are you sure you want to delete "${this.props.task.tasksummary}"?`
    }
  }
  
  render() {
    return (
      <Modal
        title="Delete this?"
        message={ this.renderContent() }
        actions={ this.renderActions() }
        onDismiss={()=> history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { task: state.tasks.task }
}

export default connect(mapStateToProps, { fetchTask, deleteTask })(Delete);
