import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextCard from '../components/TextCard';

export default function DevsScreen() {
  return (
    <View style={styles.container}>
      <TextCard
        title="Desenvolvedor 1"
        description="João Silva - Desenvolvedor Frontend"
      />
      <TextCard
        title="Desenvolvedor 2"
        description="Maria Oliveira - Desenvolvedora Backend"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
});
