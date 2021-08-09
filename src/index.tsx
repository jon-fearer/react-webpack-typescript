import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render(): JSX.Element {
    return <div>Hello World Again</div>;
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));
