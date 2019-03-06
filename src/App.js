import React, {Suspense } from 'react';
import { BrowserRouter as Router, Route, NavLink,Switch,Redirect } from 'react-router-dom';
import Login from './Views/Account/Login';
import Home from './Dashboard/HomePage';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
// const Links = () => (
//   <div className="list-group">
//     <NavLink className="list-group-item" exact activeClassName="active" to="/">Login</NavLink>
//     <NavLink className="list-group-item" activeClassName="active" to="/Home">Home</NavLink> 
//   </div>
// )
export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
  },
  signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
  }
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={() => (
      fakeAuth.isAuthenticated === true
      ? <Component {...this.props}/>
      : <Redirect to="/" />
  )}/> 
)
const App = () => (
  <Router>
    {/* <div className="row">
      <section className="col-sm-12">
       <Suspense fallback={<div>Loading....</div>}>
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route path="/" component={Home} />
        </Switch>
      </Suspense>
      </section>
    </div> */}
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="Login">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Login
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Home">
                        <NavIcon>
                            <i className="fas fa-check-double" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Authenticator
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
                {/* <Route path="/" exact component={props => <RootComponent />} /> */}
                <Route path="/home" component={props => <Home />} />
                <Route path="/Login" component={props => <Login />} />
            </main>
        </React.Fragment>
    )}
    />
  </Router>
)
export default App;
