import { lime, deepOrange } from 'material-ui/styles/colors';
import screenPage from '../assets/static/images/screen_page.png';
import screenQuote from '../assets/static/images/screen_quote.png';
import screenWeather from '../assets/static/images/screen_weather.png';
import screenSearch from '../assets/static/images/screen_search.png';
import screenTwitch from '../assets/static/images/screen_twitch.png';


export const URL_GIT_HUB = 'https://github.com/4edorov';
export const URL_FACEBOOK = 'https://www.facebook.com/alexander.fedorov.948';

export const STATE_APP = ['Greeting', 'About Me', 'Portfolio', 'My Way', 'Contacts'];

export const COLOR_APP = {
  primary: lime,
  accent: deepOrange,
};

export const PORTFOLIO_WORKS = [
  {
    title: 'Tribute Page',
    description: 'A freeCodeCamp project',
    imgSrc: screenPage,
    openLink: {
      git: 'https://github.com/4edorov/onepage',
      codepen: 'https://codepen.io/4edorov/pen/yVzMLV',
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
      codepen: 'https://codepen.io/4edorov/pen/bgeOMo',
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
      codepen: 'https://codepen.io/4edorov/pen/PWpwLw',
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
      codepen: 'https://codepen.io/4edorov/pen/BpgKyX',
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
      codepen: 'https://codepen.io/4edorov/pen/WpxzaJ',
    },
    iconType: {
      git: 'fa fa-github',
      codepen: 'fa fa-codepen',
    },
  },
];
