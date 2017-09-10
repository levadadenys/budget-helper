import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './routes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from './actions/appActions';
import Header from './components/Header';

let browserHistory = createBrowserHistory();

class App extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <div className='app'>
          <Header />
          <Switch>
            {
              routes.map((route, i) =>
                route.path === '/' ? <Route key={i} exact path={route.path}
                                            component={route.component}>
                    <Redirect from='/' to='/incomeAndExpenses' /></Route> :
                  <Route key={i} exact path={route.path}
                         component={route.component} />
              )
            }
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({
    incomeAndExpensesStore: state.incomeAndExpensesStore,
    categoriesStore: state.categoriesStore
  }),
  dispatch => ({actions: bindActionCreators(appActions, dispatch)})
)(App);

