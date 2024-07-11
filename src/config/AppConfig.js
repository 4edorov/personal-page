import lime from '@material-ui/core/colors/lime'
import deepOrange from '@material-ui/core/colors/deepOrange'
import screenCalc from '../assets/static/images/screen_calculator.png'
import screenClock from '../assets/static/images/screen_clock.png'
import screenTicTac from '../assets/static/images/screenTicTac.png'
import screenSimon from '../assets/static/images/screenSimon.png'
import screenSpa from '../assets/static/images/screenSpa.png'

export const GIT_HUB_QUERY = `
{
  viewer {
    repositories(first: 100) {
      totalCount
    }
    issueComments(first: 100) {
      totalCount
    }
    pullRequests(first: 100) {
      totalCount
    }
    starredRepositories(first: 100) {
      totalCount
    }
  }
}
`

export const URL_GIT_HUB = 'https://github.com/4edorov'
export const URL_FACEBOOK = 'https://www.facebook.com/alexander.fedorov.948'

export const URL_FOR_SEND_EMAIL_FORM = 'https://script.google.com/macros/s/AKfycbziCslH4DK_D1aFaQFxZ09ZV8QErJnOoDQPGkpWZw/exec'

export const STATE_APP = ['Greeting', 'About Me', 'Portfolio', 'My Way', 'Contacts', 'Articles']

export const COLOR_APP = {
  primary: lime,
  secondary: deepOrange
}

export const PORTFOLIO_WORKS = [
  {
    title: 'Caclulator',
    description: 'A freeCodeCamp project',
    imgSrc: screenCalc,
    openLink: {
      git: 'https://github.com/4edorov/jscalculator',
      codepen: 'https://codepen.io/4edorov/project/full/AkzdLd'
    },
    iconType: {
      git: 'fab fa-github',
      codepen: 'fab fa-codepen'
    }
  },
  {
    title: 'Pomodoro Clock',
    description: 'A freeCodeCamp project',
    imgSrc: screenClock,
    openLink: {
      git: 'https://github.com/4edorov/pomodoro_clock',
      site: 'https://4edorov.github.io/pomodoro_clock/'
    },
    iconType: {
      git: 'fab fa-github',
      link: 'fas fa-link'
    }
  },
  {
    title: 'Tic Tac Toe Game',
    description: 'A freeCodeCamp project',
    imgSrc: screenTicTac,
    openLink: {
      git: 'https://github.com/4edorov/tic-tac-game',
      site: 'https://4edorov.github.io/tic-tac-game/#/'
    },
    iconType: {
      git: 'fab fa-github',
      link: 'fas fa-link'
    }
  },
  {
    title: 'Simon&reg; Game',
    description: 'A freeCodeCamp project',
    imgSrc: screenSimon,
    openLink: {
      git: 'https://github.com/4edorov/simon-game',
      site: 'https://4edorov.github.io/simon-game/'
    },
    iconType: {
      git: 'fab fa-github',
      link: 'fas fa-link'
    }
  },
  {
    title: 'Portfolio SPA',
    description: 'A personal page',
    imgSrc: screenSpa,
    openLink: {
      site: 'https://magicinwords.club'
    },
    iconType: {
      link: 'fas fa-link'
    }
  }
]

export const CONTACTS = [
  {
    title: '@github',
    link: 'https://github.com/4edorov',
    icon: 'fab fa-github'
  },
]
