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
        <Card key={index} style={{maxWidth: 100, margin: 15}}>
          <a href={one.link} target="_blank">
            <CardMedia
              image={one.src}
              title={one.name}
              style={{width: 'auto', height: 'auto', maxWidth: '100%'}}
            />
          </a>
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
