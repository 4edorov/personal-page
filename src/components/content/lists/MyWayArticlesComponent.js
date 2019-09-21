import React from 'react'
import { showResources } from '../../../lib'

const content = [
  {
    name: 'Medium',
    properties: "It's an amazing resource of all what you need",
    link: 'https://medium.com',
    icon: 'fab fa-medium'
  },
  {
    name: 'Alligator.io',
    properties: 'A good resource which I use',
    link: 'https://alligator.io',
    icon: 'fas fa-star'
  },
  {
    name: 'The Twelve-Factor App',
    properties: 'About app architecture',
    link: 'https://12factor.net',
    icon: 'fas fa-sticky-note'
  }
]

const MyWayBooksComponent = () => {
  return (
    <div>
      {showResources(content)}
    </div>
  )
}

export default MyWayBooksComponent
