// 
import { useState } from 'react';

export const UseTogglepassword2 = () => {
  // password will not be initially visible
  // set the initial value to true because this will be the value fo secureTextEntry prop
  const [passwordVisibility2, setPasswordVisibility] = useState(true);
  const [rightIcon2, setRightIcon] = useState('eye');

  // function that toggles password visibility on a TextInput component on a password field
  const handlePasswordVisibility2 = () => {
    if (rightIcon2 === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility2);
    } else if (rightIcon2 === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility2);
    }
  };

  return {
    passwordVisibility2,
    rightIcon2,
    handlePasswordVisibility2
  };
};