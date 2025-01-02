import React from 'react';
import { render, screen } from '@testing-library/react-native';
import SignupScreen from '../../app/screens/Signup'; // Asegúrate de ajustar la ruta

describe('SignupScreen', () => {
  it('should render correctly', () => {
    render(<SignupScreen />);

    // Verificar si el texto "Sign Up!" está presente en el componente
    expect(screen.getByText('Sign Up !')).toBeTruthy();
  });

  // También se pueden agregar pruebas para otros elementos de la UI si es necesario
  it('should have a view container', () => {
    render(<SignupScreen />);
    const container = screen.getByTestId('signup-container');
    expect(container).toBeTruthy();
  });
});
