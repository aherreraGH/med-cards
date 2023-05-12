import './App.css';
/**
 * Import remote as needed
 */
import RemoteCards from './components/Cards/RemoteImport';

import React from 'react'

class App extends React.Component<{}, { loaded: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      loaded: "no"
    };
  }

  componentDidMount(): void {
    this.setState({loaded: "yes"})
  }

  render() {
    return <div className="App">
      {this.state.loaded === "yes" && <div className="displays-box">
        <RemoteCards />
      </div>}
      {this.state.loaded !== "yes" && <div>Loading...</div>}
    </div>
  }
}

export default App;