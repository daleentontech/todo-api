import React, { Component } from 'react';

const list = [
{
"id": 1,
"title": "Rehearsal",
"body": "Wake up early and go to church for rehearsals"
},
{
"id": 2,
"title": "Sleep",
"body": "Stop working and relax"
}
]
class App extends Component{
  constructor(props) {
    super(props);
    this.state = { list };
  }
  render() {
    return (
      <div>
        {this.state.list.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default App;