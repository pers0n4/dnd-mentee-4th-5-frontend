import { useTheme } from '@emotion/react';
import React from 'react';
import { Alert, Text, TextInput, View } from 'react-native';
import { Rating } from 'react-native-ratings';

import PageTitle from '../../atoms/PageTitle/PageTitle';
import ThemeView from '../../templates/ThemeView';
import axios from '../../utils/axios';

const SearchScreen: React.FC = () => {
  const { colors } = useTheme();

  const [searchText, setSearchText] = React.useState('');
  const [searchResult, setSearchResult] = React.useState<
    {
      drink_id: string;
      name: string;
      image_url: string;
      type: string;
      avg_rating: number;
    }[]
  >([]);

  const search = async () => {
    try {
      const response = await axios.get(
        'https://backend-server-dev-rlogkv3ukq-du.a.run.app/drinks'
      );
      setSearchResult(response.data);
    } catch (error) {
      Alert.alert(JSON.stringify(error.message));
    }
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
      {searchResult?.map((item) => (
        <View key={item.drink_id} style={{ marginVertical: 16 }}>
          <Text style={{ color: colors.text, fontSize: 10 }}>
            {item.drink_id}
          </Text>
          <View style={{ alignItems: 'flex-start' }}>
            <Text style={{ color: colors.text, fontSize: 20 }}>
              {item.name}
            </Text>
            <Rating
              type="star"
              readonly
              imageSize={20}
              tintColor={colors.background}
            />
          </View>
        </View>
      ))}
    </ThemeView>
  );
};

export default SearchScreen;
