import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageCard from '../components/ImageCard';
import TextCard from '../components/TextCard';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao EcoConsciente</Text>

      <ImageCard
        imageSource={require('../assets/natureza1.jpg')}
        caption="Preservando a Natureza"
      />

      <TextCard
        title="Ação é tudo!"
        description="Junte-se a nós na luta pela preservação do meio ambiente."
      />

      <ImageCard
        imageSource={require('../assets/natureza2.png')}
        caption="Cuidando do nosso planeta"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});
