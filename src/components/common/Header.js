import React from 'react';
import {Link, IndexLink} from 'react-router';

const navItems = [
  { isIndex: true, activeClassName: 'active', name: 'Home', routeTo: '/'},
  { isIndex: false, activeClassName: 'active', name: 'About', routeTo: '/about'},
];

const Header = () => {
  return (
    <nav>
      {navItems.map(item => {
        if(item.isIndex) {
          return (<IndexLink key={item.name} to={item.routeTo} activeClassName={item.activeClassName}> {item.name} </IndexLink>);
        }
        return (<Link key={item.name} to={item.routeTo} activeClassName={item.activeClassName}> {item.name} </Link>);
      })}
    </nav>
  );
};

export default Header;
