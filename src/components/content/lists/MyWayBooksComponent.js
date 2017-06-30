import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Book from 'material-ui-icons/Book';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';


const content = [
  {
    name: 'JavaScript The Definitive Guide (6 ed.) David Flanagan',
    properties: 'The basics...',
    link: 'http://shop.oreilly.com/product/9780596805531.do',
    icon: 'fa fa-book',
  },
  {
    name: 'Learning Web App Development: Build Quickly with Proven JavaScript. Semmy Purewal',
    properties: 'Grasp the fundamentals of web application development by building a simple database-backed app from scratch, using HTML, JavaScript, and other open source tools',
    link: 'http://shop.oreilly.com/product/0636920030621.do',
    icon: 'fa fa-book',
  },
  {
    name: "You Don't Know JS (book series)",
    properties: 'Must read...',
    link: 'https://github.com/getify/You-Dont-Know-JS',
    icon: 'fa fa-book',
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
