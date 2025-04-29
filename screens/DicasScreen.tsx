import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextCard from '../components/TextCard';
import ButtonLink from '../components/ButtonLink';
import ImageCard from '../components/ImageCard';


export default function DicasScreen() {
  return (
    <View style={styles.container}>
      <TextCard
        title="Dica 1: Reduza o consumo de plástico"
        description="Use menos produtos descartáveis e invista em alternativas reutilizáveis."
      />
      <ImageCard
        imageSource={require('../assets/Reciclagem.jpg')}
        caption="Reciclagem"
      />
      <TextCard
        title="Dica 2: Prefira transporte sustentável"
        description="Utilize bicicleta, transporte público ou caronas para reduzir a emissão de gases poluentes."
      />
      <ImageCard
        imageSource={require('../assets/onibus.jpg')}
        caption="Onibus"
      />

      <ButtonLink title="Saiba mais sobre sustentabilidade" url="https://www.sustentabilidade.com" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
});
