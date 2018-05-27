import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

export const showResources = content => {
  return (
    <div>
      {content.map((one, index) =>
        <List key={index}>
          <ListItem>
            <ListItemIcon>
              <IconButton target='_blank' href={one.link}>
                <Icon color='secondary' className={one.icon} />
              </IconButton>
            </ListItemIcon>
            <ListItemText
              primary={
                <a style={{textDecoration: 'none', color: 'inherit'}} href={one.link} target="_blank">
                  {one.name}
                </a>
              }
              secondary={one.properties}
            />
          </ListItem>
        </List>
      )}
    </div>
  );
};

export const showTechnologies = (content) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
      {content.map((one, index) =>
        <Card key={index} style={{minWidth: 100, margin: 15}}>
          <a href={one.link} target='_blank'>
            <CardMedia
              image={one.src}
              title={one.name}
              style={{width: 'auto', height: 100, maxWidth: '100%'}}
            />
          </a>
          <Divider />
          <CardContent style={{padding: 5, display: 'flex', justifyContent: 'center'}}>
            <a style={{textDecoration: 'none'}} href={one.link} target="_blank">
              <Typography color='secondary' >
                {one.name}
              </Typography>
            </a>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
