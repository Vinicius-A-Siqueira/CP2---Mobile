import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';

export default function FormScreen() {
  const [carDistance, setCarDistance] = useState('');
  const [electricityUse, setElectricityUse] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = () => {
    const car = parseFloat(carDistance);
    const electricity = parseFloat(electricityUse);

    if (isNaN(car) || isNaN(electricity)) {
      Alert.alert('Erro', 'Por favor, insira valores válidos.');
      return;
    }

    // Cálculo de emissões
    const carEmissions = car * 0.2; // 0.2 kg CO2 por km
    const electricityEmissions = electricity * 0.5; // 0.5 kg CO2 por kWh
    const totalEmissions = carEmissions + electricityEmissions;

    setResult(totalEmissions);
    setShowResult(true);
  };

  const handleReset = () => {
    setCarDistance('');
    setElectricityUse('');
    setResult(null);
    setShowResult(false);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <MotiView
        from={{ opacity: 0, translateY: -30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: 'spring',
          damping: 15,
        }}
        style={styles.header}
      >
        <Text style={styles.headerIcon}>📊</Text>
        <Text style={styles.title}>Calcule sua Pegada Ecológica</Text>
        <Text style={styles.subtitle}>Descubra seu impacto no meio ambiente</Text>
      </MotiView>

      {/* Campo 1 */}
      <MotiView
        from={{ opacity: 0, translateX: -50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{
          type: 'timing',
          duration: 500,
          delay: 200,
          easing: Easing.out(Easing.ease),
        }}
        style={styles.inputContainer}
      >
        <Text style={styles.label}>🚗 Distância de carro (km/dia)</Text>
        <TextInput
          style={styles.input}
          value={carDistance}
          onChangeText={setCarDistance}
          keyboardType="numeric"
          placeholder="Ex: 20"
          placeholderTextColor="#999"
        />
      </MotiView>

      {/* Campo 2 */}
      <MotiView
        from={{ opacity: 0, translateX: 50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{
          type: 'timing',
          duration: 500,
          delay: 400,
          easing: Easing.out(Easing.ease),
        }}
        style={styles.inputContainer}
      >
        <Text style={styles.label}>💡 Consumo de eletricidade (kWh/dia)</Text>
        <TextInput
          style={styles.input}
          value={electricityUse}
          onChangeText={setElectricityUse}
          keyboardType="numeric"
          placeholder="Ex: 10"
          placeholderTextColor="#999"
        />
      </MotiView>

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <MotiView
          from={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            delay: 600,
            damping: 12,
          }}
          style={{ flex: 1, marginRight: 10 }}
        >
          <TouchableOpacity style={styles.button} onPress={handleCalculate}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
        </MotiView>

        <MotiView
          from={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            delay: 700,
            damping: 12,
          }}
          style={{ flex: 1, marginLeft: 10 }}
        >
          <TouchableOpacity style={styles.buttonSecondary} onPress={handleReset}>
            <Text style={styles.buttonSecondaryText}>Limpar</Text>
          </TouchableOpacity>
        </MotiView>
      </View>

      {/* Resultado */}
      {showResult && result !== null && (
        <MotiView
          from={{ opacity: 0, scale: 0.5, rotate: '-10deg' }}
          animate={{ opacity: 1, scale: 1, rotate: '0deg' }}
          transition={{
            type: 'spring',
            damping: 15,
          }}
          style={styles.resultContainer}
        >
          <Text style={styles.resultIcon}>🌍</Text>
          <Text style={styles.resultTitle}>Sua Pegada Diária:</Text>
          <Text style={styles.resultValue}>{result.toFixed(2)} kg de CO₂</Text>
          <Text style={styles.resultSubtext}>
            {result < 5
              ? '🟢 Excelente! Continue assim!'
              : result < 10
              ? '🟡 Bom, mas pode melhorar!'
              : '🔴 Alta! Considere reduzir suas emissões.'}
          </Text>
        </MotiView>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerIcon: {
    fontSize: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#66bb6a',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  buttonSecondaryText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    backgroundColor: '#e8f5e9',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#4CAF50',
  },
  resultIcon: {
    fontSize: 50,
    marginBottom: 15,
  },
  resultTitle: {
    fontSize: 18,
    color: '#2e7d32',
    marginBottom: 10,
  },
  resultValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1b5e20',
    marginBottom: 15,
  },
  resultSubtext: {
    fontSize: 16,
    color: '#388e3c',
    textAlign: 'center',
  },
});
