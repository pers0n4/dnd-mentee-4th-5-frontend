import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  text: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SampleView: React.FC<Props> = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

export default SampleView;
