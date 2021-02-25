import { useTheme } from '@emotion/react';
import React from 'react';
import { Alert, TextInput } from 'react-native';

import PageTitle from '../../atoms/PageTitle/PageTitle';
import ThemeView from '../../templates/ThemeView';
import axios from '../../utils/axios';

const SearchScreen: React.FC = () => {
  const { colors } = useTheme();

  const [searchText, setSearchText] = React.useState('');

  const search = async () => {
    const response = await axios.get(
      'https://backend-server-dev-rlogkv3ukq-du.a.run.app/drinks'
    );
    Alert.alert(JSON.stringify(response));
  };

  return (
    <ThemeView>
      <PageTitle>당신의 술 검색</PageTitle>
      <TextInput
        style={{
          height: 40,
          paddingHorizontal: 16,
          borderRadius: 15,
          backgroundColor: '#333',
          color: colors.text,
        }}
        placeholder="당신이 찾는 술은 어디에?"
        placeholderTextColor="#aaa"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={search}
      />
    </ThemeView>
  );
};

export default SearchScreen;
