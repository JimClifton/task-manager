import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrgTasks } from '../../actions';
import { Link } from 'react-router-dom';

const PRIORITY = {
  "HIGH": "red",
  "MEDIUM": "orange",
  "LOW": "lightgrey"
}

class List extends Component {
  componentDidMount() {
    this.props.fetchOrgTasks(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h2>Task List for Organisation: { this.props.match.params.id }</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    )
  };

  renderList() {
    return this.props.tasks.map((task) => {
      const iconColour = PRIORITY[task.priority];

      return (
        <div className="item" key={task.AbxTaskId}>
          {this.renderButtons(task)}
          <i title={`Priority: ${task.priority}`} className="large tasks aligned icon" style={{ color: iconColour }}></i>
          <div className="content">
            <div className="header"><Link to={`/tasks/view/${task.AbxTaskId}`}><h3>{task.tasksummary}</h3></Link></div>
            <div className="description">{task.taskdescription}</div>
            <div className="status">Status: {task.taskStatus}</div>
          </div>
        </div>
      );
    });
  };

  renderButtons(task) {
    return (
      <div className="right floated content">
        <Link to={`tasks/edit/${task.AbxTaskId}`} className="ui button primary">EDIT</Link>
        <Link to={`tasks/delete/${task.AbxTaskId}`} className="ui button negative">DELETE</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { tasks: Object.values({...state.tasks}) };
};

export default connect(
  mapStateToProps,
  { fetchOrgTasks }
)(List);
