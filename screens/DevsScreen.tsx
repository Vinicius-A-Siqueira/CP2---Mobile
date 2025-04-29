import React from 'react';
import { View, Text, StyleSheet, Button, Linking, ScrollView } from 'react-native';

export default function DevsScreen() {
  const abrirGitHub = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre os Desenvolvedores</Text>

      <Text style={styles.text}>Vinicius Alves Siqueira</Text>
      <Text style={styles.text}>RM: 551939</Text>
      <Button title="GitHub Vinicius" onPress={() => abrirGitHub('https://github.com/Vinicius-A-Siqueira')} />

      <Text style={styles.text}>Gabriel Camargo Ravanhani</Text>
      <Text style={styles.text}>RM: 557879</Text>
      <Button title="GitHub Gabriel" onPress={() => abrirGitHub('https://github.com/GabrielCamargoo')} />

      <Text style={styles.text}>Kauan Felipe</Text>
      <Text style={styles.text}>RM: 557954</Text>
      <Button title="GitHub Kauan" onPress={() => abrirGitHub('https://github.com/KauanSouz')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});
