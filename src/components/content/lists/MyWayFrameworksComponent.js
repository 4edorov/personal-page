import React from 'react'
import reactLogo from '../../../assets/static/images/way_react_logo.png'
import vueLogo from '../../../assets/static/images/way_vue_logo.png'
import exLogo from '../../../assets/static/images/way_ex_logo.png'
import ftLogo from '../../../assets/static/images/way_ft_logo.png'
import apolloLogo from '../../../assets/static/images/way_apollo_logo.png'
import quasarLogo from '../../../assets/static/images/way_quasar_logo.png'
import { showTechnologies } from '../../../lib'

const frameworks = [
  { name: 'ReactJS', src: reactLogo, link: 'https://www.ecma-international.org' },
  { name: 'VueJS', src: vueLogo, link: 'https://vuejs.org' },
  { name: 'Express', src: exLogo, link: 'https://http://expressjs.com' },
  { name: 'Feathers', src: ftLogo, link: 'https://feathersjs.com' },
  { name: 'Apollo', src: apolloLogo, link: 'https://www.apollographql.com' },
  { name: 'Quasar', src: quasarLogo, link: 'https://quasar.dev' }
]

const MyWayFrameworksComponent = () => {
  return (
    <div>
      {showTechnologies(frameworks)}
    </div>
  )
}

export default MyWayFrameworksComponent
