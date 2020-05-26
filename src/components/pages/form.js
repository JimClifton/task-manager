import React from 'react';
import { Field, reduxForm } from 'redux-form';

class Form extends React.Component {
  renderInput = (formProps) => {
    const classes = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : '' }`;
    return (
      <div className={ classes }>
        <label>{ formProps.label }</label>
        <input { ...formProps.input } placeholder={formProps.placeholder} autoComplete="off" />
        { this.renderError(formProps.meta) }
      </div>
    );
  }

  renderError({ error, touched }) {
    if ( touched && error ) {
      return (
        <div className="ui error message">
          <div className="header">{ error }</div>
        </div>
      );
    }
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.props.handleSubmit(this.onSubmit) } className="ui form error">
          <Field
            name="tasksummary"
            label="Task Summary"
            component={ this.renderInput } />
          <Field
            name="taskdescription"
            label="Task Description"
            component={ this.renderInput } />
          <Field
            name="OrganisationId"
            label="Organisation Id"
            component={ this.renderInput } />
          <Field
            name="priority"
            label="Priority"
            placeholder="Type HIGH, MEDIUM or LOW"
            component={ this.renderInput } />
          <Field
            name="taskStatus"
            label="Task Status"
            component={ this.renderInput } />
          <Field
            name="assignedto"
            label="Assigned To"
            component={ this.renderInput } />

          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  };
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.tasksummary) {
    errors.tasksummary = "Please enter a summary";
  }

  if (!formValues.taskdescription) {
    errors.taskdescription = "Please enter a description";
  }

  if (!formValues.OrganisationId) {
    errors.OrganisationId = "Please enter an organisation id";
  }

  return errors;
};

export default reduxForm({
  form: 'form',
  validate: validate
})(Form);
