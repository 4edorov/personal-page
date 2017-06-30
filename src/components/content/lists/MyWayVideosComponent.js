import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Book from 'material-ui-icons/Book';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';


const content = [
  {
    name: 'freeCodeCamp',
    properties: "It's a freeCodeCamp!",
    link: 'https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ/featured',
    icon: 'fa fa-youtube',
  },
  {
    name: 'Google Chrome Developers',
    properties: 'Making the web more awesome',
    link: 'https://www.youtube.com/user/ChromeDevelopers/featured',
    icon: 'fa fa-youtube',
  },
  {
    name: 'Douglas Crockford: The Better Parts - JSConfUY 2014',
    properties: 'Douglas Crockford...',
    link: 'https://youtu.be/bo36MrBfTk4',
    icon: 'fa fa-youtube',
  },
];

const MyWayBooksComponent = props => {
  return (
    <div>
      {content.map((one, index) =>
        <List key={index}>
          <ListItem>
            <ListItemIcon>
              <Avatar><Book /></Avatar>
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
}

export default MyWayBooksComponent;
