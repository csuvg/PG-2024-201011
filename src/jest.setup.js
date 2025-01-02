jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon'); 
// jest.setup.js
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-vector-icons/MaterialIcons', () => {
  const Icon = 'Icon';  // Esto puede ser cualquier string para simular el componente
  return { default: Icon };
});


jest.mock('react-native-vector-icons/MaterialIcons', () => ({
    default: 'MaterialIcons', // Mock de la librería de iconos
  }));
  