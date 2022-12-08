import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Toasty from 'react-native-toasty';

export default function App() {
  React.useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          Toasty.show({ title: '测试' });
        }}
      >
        <Text>Result</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
