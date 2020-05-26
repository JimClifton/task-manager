import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../../actions';
import { Link } from 'react-router-dom';

const PRIORITY = {
  "HIGH": "red",
  "MEDIUM": "orange",
  "LOW": "lightgrey"
};

class List extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    return (
      <div>
        <h2>Task List</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    )
  };

  renderList() {
    return this.props.tasks.map((task) => {
      const iconColour = PRIORITY[task.priority];

      return (
        <div className="item" key={task.id}>
          {this.renderButtons(task)}
          <i title={`Priority: ${task.priority}`} className="large tasks aligned icon" style={{ color: iconColour }}></i>
          <div className="content">
            <div className="header"><Link to={`/tasks/view/${task.id}`}><h3>{task.tasksummary}</h3></Link></div>
            <div className="description">{task.taskdescription}</div>
            <div className="status">Status: {task.taskStatus}</div>
            <div><Link to={`/tasks/organisations/${task.OrganisationId}`}>View organisation tasks ></Link></div>
          </div>
        </div>
      );
    });
  };

  renderButtons(task) {
    return (
      <div className="right floated content">
        <Link to={`tasks/edit/${task.id}`} className="ui button primary">EDIT</Link>
        <Link to={`tasks/delete/${task.id}`} className="ui button negative">DELETE</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { tasks: Object.values(state.tasks) };
};

export default connect(
  mapStateToProps,
  { fetchTasks }
)(List);
