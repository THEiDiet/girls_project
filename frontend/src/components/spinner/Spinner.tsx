import React, { FC } from 'react'

import spinner from 'assets/spinner.gif'

const Spinner: FC = () => (
  <img
    src={spinner}
    alt="Loading..."
    style={{ width: '200px', margin: 'auto', display: 'block' }}
  />
)

export default Spinner
