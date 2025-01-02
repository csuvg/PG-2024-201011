import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import ConfirmPayment from '../../app/screens/ConfirmPayment';
import SignupScreen from '../../app/screens/Signup';
SignupScreen

describe('Sign Up Component', () => {
  it('renders correctly', () => {
    const { getByText} = render(
      <NavigationContainer>
        <SignupScreen />
      </NavigationContainer>
    );



    // Verifica que el texto "Salir" en el navBar se renderiza correctamente
    expect(getByText('Sign Up !')).toBeTruthy();
    


    

  });
});
