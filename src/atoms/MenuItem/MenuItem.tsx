import { useTheme } from '@emotion/react';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Alert, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

interface Props {
  text: string;
}

const MenuItem: React.FC<Props> = ({ text }) => {
  const { colors } = useTheme();

  return (
    <TouchableHighlight
      underlayColor="rgba(255, 255, 255, 0.1)"
      style={{
        height: 80,
        justifyContent: 'center',
        marginHorizontal: -16,
        paddingHorizontal: 16,
      }}
      onPress={() => Alert.alert(text)}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <Text style={{ color: colors.text, fontSize: 20 }}>{text}</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color={colors.card} />
      </View>
    </TouchableHighlight>
  );
};

export default MenuItem;
