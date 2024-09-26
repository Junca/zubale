import {FlatList} from 'native-base';
import {RefreshControl} from 'react-native';
import React, {useCallback, useState} from 'react';
import axios from 'axios';
import RecordCard from '@/RecordCard';

export type Record = {
  createdAt: string;
  name: string;
  avatar: string;
  description: string;
  likes: number;
  image: string;
  comments: number;
  liked: boolean;
  saved: boolean;
  location: string;
  id: string;
};

export const List: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [resultList, setResultList] = useState<Record[]>([]);
  const onRefresh = () => {
    setIsLoading(true);
    axios
      .get('https://662029f13bf790e070af2cd8.mockapi.io/api/v1/posts')
      .then(response => {
        setResultList(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
      });
  };

  React.useEffect(() => {
    onRefresh();
  }, []);

  const RenderCards = useCallback(record => {
    return <RecordCard record={record.item} />;
  }, []);

  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            if (!isLoading) {
              onRefresh();
            }
          }}
          colors={['#7FDEF4']}
        />
      }
      style={{
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
      }}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews={true}
      initialNumToRender={2}
      maxToRenderPerBatch={4}
      updateCellsBatchingPeriod={100}
      windowSize={7}
      data={resultList}
      renderItem={RenderCards}
      keyExtractor={item => String(item.id)}
    />
  );
};
