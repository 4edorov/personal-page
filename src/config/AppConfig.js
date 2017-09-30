import lime from 'material-ui/colors/lime';
import deepOrange from 'material-ui/colors/deepOrange';
import screenPage from '../assets/static/images/screen_page.png';
import screenQuote from '../assets/static/images/screen_quote.png';
import screenWeather from '../assets/static/images/screen_weather.png';
import screenSearch from '../assets/static/images/screen_search.png';
import screenTwitch from '../assets/static/images/screen_twitch.png';
import screenCalc from '../assets/static/images/screen_calculator.png';
import screenClock from '../assets/static/images/screen_clock.png';


export const URL_GIT_HUB = 'https://github.com/4edorov';
export const URL_FACEBOOK = 'https://www.facebook.com/alexander.fedorov.948';

export const URL_FOR_SEND_EMAIL_FORM = 'https://script.google.com/macros/s/AKfycbxXeObTdqaWxzNzvupybmT5MCU_PLg5z9btscr4uKfYkcBW5JQ/exec';

export const STATE_APP = ['Greeting', 'About Me', 'Portfolio', 'My Way', 'Contacts'];

export const COLOR_APP = {
  primary: lime,
  secondary: deepOrange,
};

export const PORTFOLIO_WORKS = [
  {
    title: 'Tribute Page',
    description: 'A freeCodeCamp project',
    imgSrc: screenPage,
    openLink: {
      git: 'https://github.com/4edorov/onepage',
      codepen: 'https://codepen.io/4edorov/full/yVzMLV',
    },
    iconType: {
      git: 'fa fa-github',
      codepen: 'fa fa-codepen',
    },
  },
  {
    title: 'Random Quote Machine',
    description: 'A freeCodeCamp project',
    imgSrc: screenQuote,
    openLink: {
      git: 'https://github.com/4edorov/my-quote-generator',
      codepen: 'https://codepen.io/4edorov/full/bgeOMo',
    },
    iconType: {
      git: 'fa fa-github',
      codepen: 'fa fa-codepen',
    },
  },
  {
    title: 'Local Weather',
    description: 'A freeCodeCamp project',
    imgSrc: screenWeather,
    openLink: {
      git: 'https://github.com/4edorov/my-local-weather',
      codepen: 'https://codepen.io/4edorov/full/PWpwLw',
    },
    iconType: {
      git: 'fa fa-github',
      codepen: 'fa fa-codepen',
    },
  },
  {
    title: 'Wiki Search',
    description: 'A freeCodeCamp project',
    imgSrc: screenSearch,
    openLink: {
      git: 'https://github.com/4edorov/wiki_query',
      codepen: 'https://codepen.io/4edorov/full/BpgKyX',
    },
    iconType: {
      git: 'fa fa-github',
      codepen: 'fa fa-codepen',
    },
  },
  {
    title: 'Twitch Streamers',
    description: 'A freeCodeCamp project',
    imgSrc: screenTwitch,
    openLink: {
      git: 'https://github.com/4edorov/stream_twitchtv',
      codepen: 'https://codepen.io/4edorov/full/WpxzaJ',
    },
    iconType: {
      git: 'fa fa-github',
      codepen: 'fa fa-codepen',
    },
  },
  {
    title: 'Caclulator',
    description: 'A freeCodeCamp project',
    imgSrc: screenCalc,
    openLink: {
      git: 'https://github.com/4edorov/jscalculator',
      codepen: 'https://codepen.io/4edorov/project/full/AkzdLd',
    },
    iconType: {
      git: 'fa fa-github',
      codepen: 'fa fa-codepen',
    },
  },
  {
    title: 'Pomodoro Clock',
    description: 'A freeCodeCamp project',
    imgSrc: screenClock,
    openLink: {
      git: 'https://github.com/4edorov/pomodoro_clock',
      site: 'https://4edorov.github.io/pomodoro_clock/',
    },
    iconType: {
      git: 'fa fa-github',
      link: 'fa fa-link',
    },
  },
];

export const CONTACTS = [
  {
    title: '@github',
    link: 'https://github.com/4edorov',
    icon: 'fa fa-github',
  },
  {
    title: '@facebook',
    link: 'https://www.facebook.com/alexander.fedorov.948',
    icon: 'fa fa-facebook',
  },
  {
    title: '@google+',
    link: 'https://plus.google.com/u/0/115224100303990911021',
    icon: 'fa fa-google-plus',
  },
];
