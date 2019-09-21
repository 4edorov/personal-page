import React from 'react'
import bsLogo from '../../../assets/static/images/way_bs_logo.png'
import bsreactLogo from '../../../assets/static/images/way_bsreact_logo.png'
import mdreactLogo from '../../../assets/static/images/way_mdreact_logo.png'
import { showTechnologies } from '../../../lib'

const design = [
  { name: 'Bootstrap', src: bsLogo, link: 'http://getbootstrap.com' },
  { name: 'React-Bootstrap', src: bsreactLogo, link: 'https://react-bootstrap.github.io' },
  { name: 'Material-UI', src: mdreactLogo, link: 'http://www.material-ui.com' }
]

const MyWayDesignComponent = () => {
  return (
    <div>
      {showTechnologies(design)}
    </div>
  )
}

export default MyWayDesignComponent
