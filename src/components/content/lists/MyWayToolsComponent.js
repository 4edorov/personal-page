import React from 'react'
import nodeLogo from '../../../assets/static/images/way_node_logo.png'
import wpLogo from '../../../assets/static/images/way_wp_logo.png'
import babelLogo from '../../../assets/static/images/way_babel_logo.png'
import gitLogo from '../../../assets/static/images/way_git_logo.png'
import reduxLogo from '../../../assets/static/images/way_redux_logo.png'
import d3Logo from '../../../assets/static/images/way_d3_logo.png'
import wechatLogo from '../../../assets/static/images/way_wechat_logo.png'
import { showTechnologies } from '../../../lib'

const tools = [
  { name: 'NodeJS', src: nodeLogo, link: 'https://nodejs.org' },
  { name: 'Webpack', src: wpLogo, link: 'https://webpack.github.io' },
  { name: 'Babel', src: babelLogo, link: 'https://babeljs.io' },
  { name: 'Git', src: gitLogo, link: 'https://git-scm.com' },
  { name: 'Redux', src: reduxLogo, link: 'https://http://redux.js.org' },
  { name: 'D3', src: d3Logo, link: 'https://d3js.org/' },
  { name: 'WeChat SDK', src: wechatLogo, link: 'https://open.weixin.qq.com' }
]

const MyWayToolsComponent = () => {
  return (
    <div>
      {showTechnologies(tools)}
    </div>
  )
}

export default MyWayToolsComponent
