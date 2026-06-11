import React            from 'react'

import { Ceilings }     from './Ceilings.js'
import { Floors }       from './Floors.js'
import { HomeBuilding } from './HomeBuilding.js'
import { Wallpapering } from './Wallpapering.js'
import { Welding }      from './Welding.js'

const Worksheet = ({ intl, value }) => {
  const data = value && JSON.parse(value)

  if (data && data.type === 'welding') {
    return <Welding intl={intl} {...data} />
  }
  if (data && data.type === 'floors') {
    return <Floors intl={intl} {...data} />
  }
  if (data && data.type === 'wallpapering') {
    return <Wallpapering intl={intl} {...data} />
  }
  if (data && data.type === 'ceilings') {
    return <Ceilings intl={intl} {...data} />
  }
  if (data && data.type === 'home-building') {
    return <HomeBuilding intl={intl} {...data} />
  }
  return null
}

export default Worksheet
