import React from 'react';
import { Button, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({navigation}) {
  return (
    <MainLayout>
      <Text>AboutScreen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </MainLayout>
  );
}

export default AboutScreen;
