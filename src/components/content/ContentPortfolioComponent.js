import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { PORTFOLIO_WORKS, COLOR_APP } from '../../config/AppConfig';

const styleSheet = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'monospace',
    minHeight: '100vh',
    margin: 50,
  },
  caption: {
    marginTop: 128,
    marginBottom: 50,
  },
  imgView: {
    height: 300,
    width: 'auto',
    maxWidth: '100%',
  },
  cardContent: {
    background: COLOR_APP.primary[500],
  },
});

const ContentPortfolioComponent = props => {
  const checkForSymbols = string => {
    const pattern = /(&{1}\w{1,7};{1})/g;
    if (pattern.test(string)) {
      const replacer = match => {
        return `<span>${match}</span>`;
      };
      return (
        <span dangerouslySetInnerHTML={{ __html: string.replace(pattern, replacer) }} />
      );
    } else {
      return string;
    }
  }

  const classes = props.classes;

  return (
    <div className={classes.root}>
      <div className={classes.caption}>
        <h1>Portfolio</h1>
      </div>
      <div>
        <Grid container spacing={24}>
          {PORTFOLIO_WORKS.map((work, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card className={classes.cards}>
                <CardMedia
                  className={classes.imgView}
                  image={work.imgSrc}
                  title={work.title}
                />
                <CardContent className={classes.cardContent}>
                  <Typography type='headline'>
                    {checkForSymbols(work.title)}
                  </Typography>
                  <Typography component='p'>
                    {work.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton color='secondary' target='_blank' href={work.openLink.git}>
                    <Icon className={work.iconType.git} />
                  </IconButton>
                  { work.iconType.codepen &&
                    <IconButton color='secondary' target='_blank' href={work.openLink.codepen}>
                      <Icon className={work.iconType.codepen} />
                    </IconButton>
                  }
                  { work.iconType.link &&
                    <IconButton color='secondary' target='_blank' href={work.openLink.site}>
                      <Icon className={work.iconType.link} />
                    </IconButton>
                  }
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

ContentPortfolioComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ContentPortfolioComponent);
