import React from 'react';
import { connect } from 'react-redux';
import { createTask } from '../../actions';
import Form from './form';

class Create extends React.Component {
  onSubmit = (formValues) => {
    this.props.createTask(formValues);
  }

  render() {
    return (
      <div>
        <h3>Create</h3>
        <Form onSubmit={this.onSubmit} />
      </div>
    );
  };
}

export default connect(null, { createTask })(Create);
