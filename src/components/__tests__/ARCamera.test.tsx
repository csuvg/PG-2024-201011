import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import ARCamera from '../../app/screens/ARCamera'; // Ajusta la ruta
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';


// Mock del stack de navegación para que no se realicen cambios reales de pantalla
const Stack = createNativeStackNavigator();

const MockNavigation = ({ children }) => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="ARCamera" component={ARCamera} />
      <Stack.Screen name="ConfirmPayment" component={() => <Text>ConfirmPayment</Text>} />
    </Stack.Navigator>
  </NavigationContainer>
);

describe('ARCamera', () => {
  it('should render correctly and show scanning text and cube', async () => {
    render(
      <MockNavigation>
        <ARCamera />
      </MockNavigation>
    );

    // Verificar si el texto "Escaneando..." está presente
    expect(screen.getByText('Escaneando...')).toBeTruthy();

    // Verificar si el cubo animado está presente
    const cube = screen.getByTestId('cube-container'); // Si agregas un testID al cubo
    expect(cube).toBeTruthy();
  });

  it('should navigate to ConfirmPayment after 4 seconds', async () => {
    jest.useFakeTimers(); // Usamos timers falsos para simular el tiempo

    render(
      <MockNavigation>
        <ARCamera />
      </MockNavigation>
    );

    // Verificar que la navegación no ha sucedido inmediatamente
    expect(screen.queryByText('ConfirmPayment')).toBeNull();

    // Avanzamos el tiempo de 4 segundos para ver si la navegación ocurre
    jest.advanceTimersByTime(4000);

    // Esperar a que la navegación haya sucedido
    await waitFor(() => {
      expect(screen.getByText('ConfirmPayment')).toBeTruthy();
    });

    jest.useRealTimers(); // Restaurar los timers reales después de la prueba
  });
});
