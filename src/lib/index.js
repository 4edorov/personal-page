import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Card, { CardMedia, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';


export const showResources = (content, iconComponent) => {
  return (
    <div>
      {content.map((one, index) =>
        <List key={index}>
          <ListItem>
            <ListItemIcon>
              {iconComponent}
            </ListItemIcon>
            <ListItemText primary={one.name} secondary={one.properties} />
            <ListItemSecondaryAction>
              <IconButton color="accent" target="_blank" href={one.link}>
                <Icon className={one.icon} />
              </IconButton>
            </ListItemSecondaryAction>
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
        <Card key={index} style={{maxWidth: 120, margin: 15}}>
          <CardMedia>
            <img src={one.src} alt={one.name} style={{maxWidth: 120}}/>
            <Divider />
          </CardMedia>
          <CardActions>
            <Button color="accent" href={one.link}>{one.name}</Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};
