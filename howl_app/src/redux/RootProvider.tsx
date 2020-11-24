import React from "react"
import { Provider } from "react-redux"
import store from "./index"

const RootProvider: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      { children }
    </Provider>
  )
}

export default RootProvider
