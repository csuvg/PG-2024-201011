import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../../app/screens/Signup';

describe('Log In Component', () => {
  it('renders correctly', () => {
    const { getByText} = render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    );



    // Verifica que el texto "Salir" en el navBar se renderiza correctamente
    expect(getByText('Sign Up !')).toBeTruthy();
    


    

  });
});
