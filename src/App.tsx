/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {List} from '@/List';

function App(): React.JSX.Element {

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{backgroundColor: 'black'}}>
        <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
        <List />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default App;
