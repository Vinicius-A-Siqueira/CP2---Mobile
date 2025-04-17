import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import InputForm from '../components/InputForm';

export default function FormScreen() {
  const [carDistance, setCarDistance] = useState('');
  const [electricityUse, setElectricityUse] = useState('');

  const handleSubmit = () => {
    const car = parseFloat(carDistance);
    const electricity = parseFloat(electricityUse);

    if (isNaN(car) || isNaN(electricity)) {
      Alert.alert('Erro', 'Por favor, insira valores válidos.');
      return;
    }

    const carEmissions = car * 0.2; // 0.2 kg CO2 por km
    const electricityEmissions = electricity * 0.5; // 0.5 kg CO2 por kWh
    const totalEmissions = carEmissions + electricityEmissions;

    Alert.alert(
      'Resultado',
      `Sua pegada ecológica estimada é de ${totalEmissions.toFixed(2)} kg de CO₂.`
    );
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  }
});
