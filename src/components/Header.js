import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui inverted menu">
      <div className="item"><Link to="/">Home</Link></div>
      <div className="item"><Link to="/tasks/create">Create</Link></div>
    </div>
  );
}

export default Header;
