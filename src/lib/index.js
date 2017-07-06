import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';


export const showResources = content => {
  return (
    <div>
      {content.map((one, index) =>
        <List key={index}>
          <ListItem>
            <ListItemIcon>
              <IconButton target="_blank" href={one.link}>
                <Icon color="accent" className={one.icon} />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={one.name} secondary={one.properties} />
          </ListItem>
        </List>
      )}
    </div>
  );
};

export const showTechnologies = (content) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
      {content.map((one, index) =>
        <Card key={index} style={{maxHeight: 200, maxWidth: 120, margin: 15}}>
          <CardMedia>
            <img src={one.src} alt={one.name} style={{width: 'auto', height: 'auto', maxWidth: '100%'}}/>
          </CardMedia>
          <Divider />
          <CardContent style={{padding: 5, display: 'flex', justifyContent: 'center'}}>
            <a style={{textDecoration: 'none'}} href={one.link} target="_blank">
              <Typography color="accent" >
                {one.name}
              </Typography>
            </a>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
