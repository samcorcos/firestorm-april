import React from 'react'
import Relay from 'react-relay'

class Home extends React.Component {
  render() {
    return (
      <div> content </div>
    )
  }
}

Home = Relay.createContainer(Home, {
  fragments: {
    store: () => Relay.QL`
      fragment on HackerNewsAPI {
        item(id: 8863) {
          title,
          score,
          url,
          by {
            id
          }
        }
      }
    `
  }
})

class HackerNewsRoute extends Relay.Route {
  static routeName = 'HackerNewsRoute'
  static queries = {
    store: ((Component) => {
      return Relay.QL`
      query root {
        hn { ${Component.getFragment('store')} },
      }
    `}),
  }
}

export default Home
