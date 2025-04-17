import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import InputForm from '../components/InputForm';

export default function FormScreen() {
  const [carDistance, setCarDistance] = useState('');
  const [electricityUse, setElectricityUse] = useState('');

  const handleSubmit = () => {
    // Lógica para calcular a pegada ecológica com base nos valores
    alert(`Pegada ecológica calculada com base em: Distância de carro - ${carDistance} km, Consumo de eletricidade - ${electricityUse} kWh`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule sua Pegada Ecológica</Text>

      <InputForm
        label="Distância percorrida de carro (km)"
        value={carDistance}
        onChangeText={setCarDistance}
        keyboardType="numeric"
      />

      <InputForm
        label="Consumo de eletricidade (kWh)"
        value={electricityUse}
        onChangeText={setElectricityUse}
        keyboardType="numeric"
      />

      <Button title="Calcular" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});
