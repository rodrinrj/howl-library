import React, { useState } from "react"
import { Redirect, Route } from "react-router-dom";

interface PrivateRouteProps {
  exact?: boolean
  path: string
  component: React.FC<any>
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  exact = false,
  path,
  component: Component,
  ...rest
}) => {
  const [isLogged, setIsLogged] = useState<boolean>(true)

  return (
    <Route 
      exact
      {...rest} 
      render={props =>
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }} 
          />
        )
      }
    />
  )
}

export default PrivateRoute
