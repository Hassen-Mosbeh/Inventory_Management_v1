<<<<<<< HEAD
import React from 'react';
import { Button } from 'antd';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
  return (
    <div className='toggle-theme-btn'>
      <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineSun/> : <HiOutlineMoon/>}
      </Button>
    </div>
  );
};
=======
import React from 'react'

const ToggleThemeButton = () => {
  return (
    <div className='toggle-theme-btn'>ToggleThemeButton</div>
  )
}
>>>>>>> 0ff35f15e1723f871f4af958e9c4de5a51f49dde

export default ToggleThemeButton