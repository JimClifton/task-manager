import React from 'react';
import { connect } from 'react-redux';
import { fetchTask } from '../../actions';

const PRIORITY = {
  "HIGH": "red",
  "MEDIUM": "orange",
  "LOW": "lightgrey"
};

class View extends React.Component {
  componentDidMount() {
    this.props.fetchTask(this.props.match.params.id);
  }

  render() {
    if (!this.props.task) {
      return <div>...loading</div>;
    }

    const iconClasses = `circular icon tasks`;
    const iconColour = PRIORITY[this.props.task.priority];

    return (
      <div>
        <h2 className="ui center aligned icon header">
          <i className={iconClasses} style={{ color: iconColour }}></i>
          { this.props.task.tasksummary }
        </h2>
        <h3>Description</h3>
        <div>{ this.props.task.taskdescription }</div>
        <hr />
        <div>OrganisationTaskId: { this.props.task.OrganisationTaskId }</div>
        <div>OrganisationId: { this.props.task.OrganisationId }</div>
        <div>priority: { this.props.task.priority }</div>
        <div>taskStatus: { this.props.task.taskStatus }</div>
        <div>assignedto: { this.props.task.assignedto }</div>
        <div>timestamp: { this.props.task.timestamp }</div>
        <div>latitude: { this.props.task.latitude }</div>
        <div>longitude: { this.props.task.longitude }</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { task: state.tasks.task }
}

export default connect(mapStateToProps, { fetchTask })(View);
