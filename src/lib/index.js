import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Storage from 'material-ui-icons/Storage';


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
        <Card key={index} style={{maxHeight: 200, maxWidth: 120, margin: 15}}>
          <CardMedia>
            <img src={one.src} alt={one.name} style={{width: 'auto', height: 'auto', maxWidth: '100%'}}/>
          </CardMedia>
          <Divider />
          <CardContent style={{padding: 0, display: 'flex', justifyContent: 'center'}}>
            <IconButton color="accent" href={one.link} target="_blank">
              <Storage />
            </IconButton>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
