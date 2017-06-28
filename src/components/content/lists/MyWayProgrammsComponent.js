import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Assistant from 'material-ui-icons/Assistant';


const content = [
  {
    name: 'freeCodeCamp',
    properties: 'community that helps learn to code, then get experience by contributing to open source projects used by nonprofits',
  },
  {
    name: 'Fundamentals of functional programming',
    properties: 'free email course that will take you on a fun and exploratory journey into understanding principles of functional programming',
  },
];

const MyWayProgrammsComponent = props => {
  return (
    <div>
      {content.map((one, index) =>
        <List key={index}>
          <ListItem>
            <Avatar><Assistant /></Avatar>
            <ListItemText primary={one.name} secondary={one.properties} />
          </ListItem>
        </List>
      )}
    </div>
  );
}

export default MyWayProgrammsComponent;
