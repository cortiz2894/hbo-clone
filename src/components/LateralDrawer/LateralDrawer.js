import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const LateralDrawer = () => {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
        <React.Fragment key={'left'}>
          <button onClick={toggleDrawer('left', true)}>
            <img src="/icons/menu.svg" alt="Menu Icon" />
          </button>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer('left', false)}
                onKeyDown={toggleDrawer('left', false)}
            >
            <p style={{color: 'black'}}>OPCIONES</p>
            </Box>
          </Drawer>
        </React.Fragment>
    </div>
  );
}

export default LateralDrawer

