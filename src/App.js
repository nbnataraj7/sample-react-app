import React from 'react';
import './App.css';

let navItems = [{
  label: "Home"
}, {
  label: "Tutorials",
  children: [{
    label: "React"
  }, {
    label: "Angular"
  }]
}];

let topNavItems = [{
  label: "Home",
  path: '/home'
}, {
  label: "Tutorials",
  path: "/tutorials"
}, {
  label: "Careers",
  path: "/careers"
}, {
  label: "About",
  path: "/about"
}];

let cards = [{
  title: "Card 1",
  description: "This is a demo card. A Square block to represent essentially any item",
  id: 1
}, {
  title: "Card 2",
  description: "This is a demo card. A Square block to represent essentially any item",
  id: 2
}, {
  title: "Card 3",
  description: "This is a demo card. A Square block to represent essentially any item",
  id: 3
}, {
  title: "Card 4",
  description: "This is a demo card. A Square block to represent essentially any item",
  id: 4
}, {
  title: "Card 5",
  description: "This is a demo card. A Square block to represent essentially any item",
  id: 5
}, {
  title: "Card 6",
  description: "This is a demo card. A Square block to represent essentially any item",
  id: 6
}, {
  title: "Card 6",
  description: "This is a demo card. A Square block to represent essentially any item",
  id: 7
}, {
  title: "Card 6",
  description: "This is a demo card. A Square block to represent essentially any item",
  id: 8
}, {
  title: "Card 6",
  description: "This is a demo card. A Square block to represent essentially any item",
  id: 9
}, {
  title: "Card 6",
  description: "This is a demo card. A Square block to represent essentially any item",
  id: 10
}];

function App() {
  return (
    <>
      <Header />
      <Container />
    </>
  );
}

function Container() {
  return (
    <div className="container">
      <div className="left-pane">
        <List items={navItems} />
      </div>
      <div className="content">
        <CardList items={cards} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img className="logo" src="logo192.png" alt="logo" />
      </div>
      <Navbar items={topNavItems} />
    </header>
  )
}

function ListItem(props) {
  if (props.value.children && props.value.children.length > 0) {
    return (
      <li>
        {props.value.label}
        <List items={props.value.children} />
      </li>
    );
  }
  else {
    return (
      <li>
        {props.value.label}
      </li>
    );
  }
}

/**
 * 
 * @param {Array} items 
 */
function List(props) {
  return (
    <ul>
      {
        props.items.map((item, i) => {
          return (
            <ListItem key={i} value={item} />
          )
        })
      }
    </ul>
  )
}

function Navbar(props) {
  return (
    <nav>
      {
        props.items.map((item, index) => {
          return (
            <a href={item.path} className="nav-item" key={index}>
              {item.label}
            </a>
          )
        })
      }
    </nav>
  )
}

function CardList(props) {
  return (
    <div className="card-layout">
      {
        props.items.map(item => {
          return (
            <Card key={item.id} title={item.title} description={item.description} />
          )
        })
      }
    </div>
  )
}


function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        {props.title}
      </div>
      <div className="card-body">
        {props.description}
      </div>
    </div>
  )
}

export default App;
