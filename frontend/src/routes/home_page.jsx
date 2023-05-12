import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
export default function HomeBottomNavBar() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const Nav_Style = {
    position: "absolute",
    bottom: 0,
    width: "100%",
  }
  return (
    <BottomNavigation sx={Nav_Style} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="首页"
        value="home"
        icon={<HomeOutlinedIcon />}
      />
      <BottomNavigationAction
        label="动态"
        value="post"
        icon={<MailOutlineIcon />}
      />
      <BottomNavigationAction
        label="会员购"
        value="sjop"
        icon={<ShoppingBagOutlinedIcon />}
      />
      <BottomNavigationAction
        label="我的" 
        value="user" 
        icon={<TvOutlinedIcon />} 
      />
    </BottomNavigation>
  );
}