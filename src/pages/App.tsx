import React, { Component, lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'

import Loading from '../components/loading/loading';
import TabBar from '../components/tabBar';
import '../styles/App.scss';
const Home = lazy(() => import('../pages/index/index'))


interface AppProps {

}

class App extends Component {
  constructor(props:AppProps) {
    super(props)
    this.state = {
      isDrawer: false
    }
  }

  render() {
    return (
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <main className="aBank-wrapper">
              <div className="container">
                <Route path="/home" component={Home} />
                <Redirect to="/home" />
              </div>
              <TabBar changeTabFn={()=>{}} />
            </main>
          </Switch>
        </Suspense>
      </Router>
    )
  }
}
interface AppState {
  showPlayer: boolean
}

//映射Redux全局的state到组件的props上
const mapStateToProps = (state: AppState): Object => ({
  showPlayer: state.showPlayer
})

export default connect(mapStateToProps)(App)
