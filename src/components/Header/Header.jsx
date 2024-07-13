import { Button } from '@mui/material';
import './Header.scss';

import logo from '../../assets/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import ShopIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className='header'>
      <img src={logo} alt="logo" />
      <div className="center">
        <a href="#offers">ALL PRODUCTS</a>
        <a href="#items">SOLUTIONS</a>
        <a href="#best">ABOUT</a>
        <a href="#footer">SUPPORT</a>
      </div>
      <div className="end">
        <Button className='myBtn'><SearchIcon /></Button>
        <Button className='myBtn'><ShopIcon /></Button>
      </div>
    </div>
  )
}

export default Header