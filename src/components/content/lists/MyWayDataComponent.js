import React from 'react'
import mongoLogo from '../../../assets/static/images/way_mongo_logo.png'
import pgLogo from '../../../assets/static/images/way_pg_logo.png'
import { showTechnologies } from '../../../lib'

const data = [
  { name: 'MongoDB', src: mongoLogo, link: 'https://www.mongodb.com' },
  { name: 'PostgresSQL', src: pgLogo, link: 'https://www.postgresql.org' }
]

const MyWayDataComponent = () => {
  return (
    <div>
      {showTechnologies(data)}
    </div>
  )
}

export default MyWayDataComponent
