import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { PORTFOLIO_WORKS, COLOR_APP } from '../../config/AppConfig';


const styleSheet = createStyleSheet('ContentPortfolioComponent', {
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
    marginBottom: 50,
  },
  imgView: {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
  },
  cardContent: {
    background: COLOR_APP.primary[500],
  },
});

const ContentPortfolioComponent = props => {
  const classes = props.classes;

  return (
    <div id="portfolio" className={classes.root}>
      <div className={classes.caption}>
        <h1>Portfolio</h1>
      </div>
      <div>
        <Grid container gutter={24}>
          {PORTFOLIO_WORKS.map((work, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card className={classes.cards}>
                <CardMedia>
                  <img className={classes.imgView} src={work.imgSrc} alt={work.title} />
                </CardMedia>
                <CardContent className={classes.cardContent}>
                  <Typography type="headline">
                    {work.title}
                  </Typography>
                  <Typography component="p">
                    {work.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton color="accent" target="_blank" href={work.openLink.git}>
                    <Icon className={work.iconType.git} />
                  </IconButton>
                  <IconButton color="accent" target="_blank" href={work.openLink.codepen}>
                    <Icon className={work.iconType.codepen} />
                  </IconButton>
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
