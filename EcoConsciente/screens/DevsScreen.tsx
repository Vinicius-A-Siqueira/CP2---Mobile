import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DevsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre os Desenvolvedores</Text>
      <Image style={styles.image} source={require('../assets/dev1.jpg')} />
      <Text style={styles.text}>João Silva - Desenvolvedor Front-end</Text>
      <Image style={styles.image} source={require('../assets/dev2.jpg')} />
      <Text style={styles.text}>Maria Oliveira - Desenvolvedora Back-end</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  image: { width: 150, height: 150, borderRadius: 75, marginVertical: 10 },
  text: { fontSize: 18, textAlign: 'center' },
});
