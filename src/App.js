import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Repositories from './components/Repositories'
import RepositoryItemDetails from './components/RepositoryItemDetails'
import Analysis from './components/Analysis'
import NotFound from './components/NotFound'
import CommonContext from './ReactContext/CommonContext'

import './App.css'

class App extends Component {
  state = {isHamburgerActive: false, username: 'kentcdodds'}

  onClickHamburger = () => {
    this.setState(prevState => ({
      isHamburgerActive: !prevState.isHamburgerActive,
    }))
  }

  render() {
    const {isHamburgerActive, username} = this.state

    return (
      <CommonContext.Provider
        value={{
          isHamburgerActive,
          username,
          onClickHamburger: this.onClickHamburger,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/repositories" component={Repositories} />
          <Route
            exact
            path="/repositories/:repoName"
            component={RepositoryItemDetails}
          />
          <Route exact path="/analysis" component={Analysis} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </CommonContext.Provider>
    )
  }
}

export default App
