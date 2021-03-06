import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';


const drawerWidth = 160;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    //marginTop: '65px',
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    marginTop: '65px',
    width: drawerWidth,
    color: '#3f51b5',  
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  //const tokenLS = localStorage.getItem('token')
  //const tokenLS = 'hey'
  return (
       (<div className={classes.root}>
        <CssBaseline />
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"        
        >        
        <List>
            <ListItem button className={classes.hover} component={Link} to='/dashboard' >DASHBOARD</ListItem>      
            <ListItem button className={classes.hover} component={Link} to='/customers' >CUSTOMERS</ListItem> 
            <ListItem button className={classes.hover} component={Link} to='/products' >PRODUCTS</ListItem> 
            <ListItem button className={classes.hover} component={Link} to='/shop' >SHOP</ListItem>
            <ListItem button className={classes.hover} component={Link} to='/bills' >BILLS</ListItem>              
        </List>
        </Drawer>
    </div>) 
  );
}

        // <main className={classes.content}>
        //   <div className={classes.toolbar} />
        //   <Typography paragraph>
        //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        //     ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        //     facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
        //     gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
        //     donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
        //     adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
        //     Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
        //     imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
        //     arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
        //     donec massa sapien faucibus et molestie ac.
        //   </Typography>
        //   <Typography paragraph>
        //     Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
        //     facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
        //     tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
        //     consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        //     vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
        //     hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
        //     tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
        //     nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
        //     accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        //   </Typography>
        // </main>