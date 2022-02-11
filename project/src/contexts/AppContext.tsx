import React, { ContextType } from 'react'

// createContextのGenerics型で一旦文字列を許可
const AppContext = React.createContext<any>('')

export default AppContext
