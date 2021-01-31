import React from 'react';
import { StyleSheet, View } from 'react-native';

import RegisterForm from '../../organisms/RegisterForm/RegisterForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Register: React.FC = () => {
  return (
    <View style={styles.container}>
      <RegisterForm />
    </View>
  );
};

export default Register;
