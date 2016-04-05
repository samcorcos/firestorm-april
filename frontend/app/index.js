import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Home from 'components/Home'
import ProfileShow from 'components/ProfileShow'
import PostShow from 'components/PostShow'
import PostNew from 'components/PostNew'

const App = (props) => {
  return <div> { props.children } </div>
}

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="profile" component={ProfileShow} />
			<Route path="post" component={PostShow} />
      <Route path="new" component={PostNew} />
		</Route>
	</Router>, document.getElementById('root'))
