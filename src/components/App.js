import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';

import Header from './Header';
import List from './pages/List';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Delete from './pages/Delete';
import View from './pages/View';
import Organisations from './pages/Organisations';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={List} />
          <Route path="/tasks/create" exact component={Create} />
          <Route path="/tasks/edit/:id" exact component={Edit} />
          <Route path="/tasks/delete/:id" exact component={Delete} />
          <Route path="/tasks/view/:id" exact component={View} />
          <Route path="/tasks/organisations/:id" exact component={Organisations} />
        </div>
      </Router>
    </div>
  );
};

export default App;
