import React            from 'react'

import { Ceilings }     from './Ceilings'
import { Floors }       from './Floors'
import { HomeBuilding } from './HomeBuilding'
import { Wallpapering } from './Wallpapering'
import { Welding }      from './Welding'

export default ({ intl, value }) => {
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
