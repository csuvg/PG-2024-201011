import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Success from '../../app/screens/Success'; // Ajusta la ruta según la ubicación del archivo.

describe('Success Component', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <Success />
      </NavigationContainer>
    );

    // Verifica que el texto se renderiza correctamente
    expect(getByText('Pago realizado con éxito')).toBeTruthy();

    // Verifica que el botón se renderiza correctamente
    expect(getByText('Volver')).toBeTruthy();

    // Verifica que el ícono se renderiza (podrías agregar un `testID` en el componente para identificarlo)
    expect(getByTestId('success-icon')).toBeTruthy();
  });


});
