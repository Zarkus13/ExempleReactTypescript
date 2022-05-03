import React from 'react'

interface Props {
  color: string,
  children: React.ReactElement | string
}

const Header: React.FunctionComponent<Props> = ({ color, children }) =>
  <header className="basic-header" style={{ color: color }}>
    {children}
  </header>

export default Header