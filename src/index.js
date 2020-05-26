import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import { Server, Model } from "miragejs";
import DEFAULT_DATA from './data/default.json';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

// Use MirageJS to mock an API by intercepting requests
new Server({
  models: {
    task: Model
  },
  routes() {
    this.timing = 0;

    this.get("/tasks", (schema) => {
      return schema.db.tasks;
    });

    this.post("/tasks", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      attrs.AbxTaskId = Math.floor(Math.random() * 1000);
      attrs.OrganisationTaskId = Math.floor(Math.random() * 1000);
      attrs.timestamp = Date.now();

      schema.tasks.create(attrs);
    });

    this.get("/tasks/:id", (schema, request) => {
      return schema.tasks.find(request.params.id);
    });

    this.patch("/tasks/:id", (schema, request) => {
      let task = schema.tasks.find(request.params.id);
      let attrs = JSON.parse(request.requestBody);
      task.update(attrs);
    });

    this.delete("/tasks/:id", (schema, request) => {
      let task = schema.tasks.find(request.params.id);
      task.destroy();
    });

    this.get("/tasks/organisations/:id", (schema, request) => {
      return schema.tasks.where({ OrganisationId: request.params.id });
    });
  },
  seeds(server) {
    server.db.loadData(DEFAULT_DATA);
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
