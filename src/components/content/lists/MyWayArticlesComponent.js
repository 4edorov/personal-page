import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Book from 'material-ui-icons/Book';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';


const content = [
  {
    name: 'Medium',
    properties: "It's an amazing resource of all what you need",
    link: 'https://medium.com',
    icon: 'fa fa-medium',
  },
  {
    name: 'Alligator.io',
    properties: 'A good resource which I use',
    link: 'https://alligator.io',
    icon: 'fa fa-star-o',
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
