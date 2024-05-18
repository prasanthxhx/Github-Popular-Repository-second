import {createContext} from 'react'

const CommonContext = createContext({
  isHamburgerActive: false,
  onClickHamburger: () => {},
  username: 'kentcdodds',
})

export default CommonContext
