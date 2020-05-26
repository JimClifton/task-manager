import React from 'react';
import { connect } from 'react-redux';
import { fetchTask, editTask } from '../../actions';
import Form from './form';

class Edit extends React.Component {
  componentDidMount() {
    this.props.fetchTask(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    const id = this.props.match.params.id;
    this.props.editTask(id, formValues);
  }

  render() {
    if (!this.props.task) {
      return <div>...loading</div>;
    }

    return (
      <div>
        <h2>Editing:</h2>
        <h3>{ this.props.task.title }</h3>
        <Form
          initialValues={
            {
              OrganisationTaskId: this.props.task.OrganisationTaskId,
              OrganisationId: this.props.task.OrganisationId,
              priority: this.props.task.priority,
              taskStatus: this.props.task.taskStatus,
              assignedto: this.props.task.assignedto,
              timestamp: this.props.task.timestamp,
              latitude: this.props.task.latitude,
              longitude: this.props.task.longitude,
              tasksummary: this.props.task.tasksummary,
              taskdescription: this.props.task.taskdescription,
            }
          }
          onSubmit={ this.onSubmit }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { task: state.tasks.task }
}

export default connect(mapStateToProps, { fetchTask, editTask })(Edit);
