import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { userInfoContext } from '../../App'

const PrivateRoute = ({children, ...rest}) => {
    // from context
    const [loggedInUser,setLoggedInUser] = useContext(userInfoContext)

    return (
        <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.email? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    )
}

export default PrivateRoute
