import React from 'react';
import { Text } from 'react-native';

export const MaterialIcons = ({ name, size, color, ...props }) => {
  return (
    <Text {...props} style={{ fontSize: size, color }}>
      {name}
    </Text>
  );
};
