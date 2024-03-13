import React from 'react';
import type {PropsWithChildren} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';

function Page({children}: PropsWithChildren<{}>) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', marginTop: 100}}>
      {children}
    </View>
  );
}
function Section({title, children}: PropsWithChildren<{title: string}>) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

export default function App() {
  const [value, setValue] = React.useState(0.5);

  return (
    <Page>
      <Section title="Standard">
        <Text>Value: {value && +value.toFixed(3)}</Text>
        <Slider value={value} onValueChange={setValue} />
      </Section>
      <Section title="Custom Color">
        <Text>Value: {value && +value.toFixed(3)}</Text>
        <Slider
          value={value}
          minimumTrackTintColor="red"
          maximumTrackTintColor="green"
          onValueChange={setValue}
          thumbTintColor="gold"
        />
      </Section>
      <Section title="Test interaction">
        <Button title="Test" onPress={() => Alert.alert('hi')} />
      </Section>
    </Page>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});
