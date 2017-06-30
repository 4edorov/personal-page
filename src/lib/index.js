import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';


export const showResources = (content, iconComponent) => {
  return (
    <div>
      {content.map((one, index) =>
        <List key={index}>
          <ListItem>
            <ListItemIcon>
              <Avatar>{iconComponent}</Avatar>
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
