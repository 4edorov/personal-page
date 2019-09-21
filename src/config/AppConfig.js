import lime from '@material-ui/core/colors/lime'
import deepOrange from '@material-ui/core/colors/deepOrange'
import screenPage from '../assets/static/images/screen_page.png'
import screenQuote from '../assets/static/images/screen_quote.png'
import screenWeather from '../assets/static/images/screen_weather.png'
import screenSearch from '../assets/static/images/screen_search.png'
import screenTwitch from '../assets/static/images/screen_twitch.png'
import screenCalc from '../assets/static/images/screen_calculator.png'
import screenClock from '../assets/static/images/screen_clock.png'
import screenTicTac from '../assets/static/images/screenTicTac.png'
import screenSimon from '../assets/static/images/screenSimon.png'

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

export const URL_FOR_SEND_EMAIL_FORM = 'https://script.google.com/macros/s/AKfycbwnSz8PAky2rAy-elcSz0qnESnj3qCdgRMYcaZ-/exec'

export const STATE_APP = ['Greeting', 'About Me', 'Portfolio', 'My Way', 'Contacts', 'Articles']

export const COLOR_APP = {
  primary: lime,
  secondary: deepOrange
}

export const PORTFOLIO_WORKS = [
  {
    title: 'Tribute Page',
    description: 'A freeCodeCamp project',
    imgSrc: screenPage,
    openLink: {
      git: 'https://github.com/4edorov/onepage',
      codepen: 'https://codepen.io/4edorov/full/yVzMLV'
    },
    iconType: {
      git: 'fab fa-github',
      codepen: 'fab fa-codepen'
    }
  },
  {
    title: 'Random Quote Machine',
    description: 'A freeCodeCamp project',
    imgSrc: screenQuote,
    openLink: {
      git: 'https://github.com/4edorov/my-quote-generator',
      codepen: 'https://codepen.io/4edorov/full/bgeOMo'
    },
    iconType: {
      git: 'fab fa-github',
      codepen: 'fab fa-codepen'
    }
  },
  {
    title: 'Local Weather',
    description: 'A freeCodeCamp project',
    imgSrc: screenWeather,
    openLink: {
      git: 'https://github.com/4edorov/my-local-weather',
      codepen: 'https://codepen.io/4edorov/full/PWpwLw'
    },
    iconType: {
      git: 'fab fa-github',
      codepen: 'fab fa-codepen'
    }
  },
  {
    title: 'Wiki Search',
    description: 'A freeCodeCamp project',
    imgSrc: screenSearch,
    openLink: {
      git: 'https://github.com/4edorov/wiki_query',
      codepen: 'https://codepen.io/4edorov/full/BpgKyX'
    },
    iconType: {
      git: 'fab fa-github',
      codepen: 'fab fa-codepen'
    }
  },
  {
    title: 'Twitch Streamers',
    description: 'A freeCodeCamp project',
    imgSrc: screenTwitch,
    openLink: {
      git: 'https://github.com/4edorov/stream_twitchtv',
      codepen: 'https://codepen.io/4edorov/full/WpxzaJ'
    },
    iconType: {
      git: 'fab fa-github',
      codepen: 'fab fa-codepen'
    }
  },
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
  }
]

export const CONTACTS = [
  {
    title: '@github',
    link: 'https://github.com/4edorov',
    icon: 'fab fa-github'
  },
  {
    title: '@facebook',
    link: 'https://www.facebook.com/alexander.fedorov.948',
    icon: 'fab fa-facebook'
  },
  {
    title: '@google+',
    link: 'https://plus.google.com/u/0/115224100303990911021',
    icon: 'fab fa-google-plus'
  }
]
