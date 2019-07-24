import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation.jsx';
import Icons from './components/Icons.jsx';
import Projects from './components/Projects.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {

    }
  }

  render() {
    return(<div className="body">

        <Navigation/>
        <div className="name">Aysun Sulun Tas</div>
        <Icons/>
        {/* <Projects/> */}

    </div>);
  }
}
ReactDOM.render(<App />, document.getElementById('app'));

