// ApiScreen.tsx - Qualidade do Ar com Loading Animado
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';

export default function ApiScreen() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    city: 'São Paulo',
    pm10: 45,
    pm25: 32,
    quality: 'Moderada',
  });

  useEffect(() => {
    // Simular carregamento de API
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        {/* Loading Spinner Rotativo */}
        <MotiView
          from={{ rotate: '0deg' }}
          animate={{ rotate: '360deg' }}
          transition={{
            type: 'timing',
            duration: 1000,
            loop: true,
            easing: Easing.linear,
          }}
          style={styles.spinner}
        />
        <MotiView
          from={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'timing',
            duration: 800,
            loop: true,
            easing: Easing.inOut(Easing.ease),
          }}
        >
          <Text style={styles.loadingText}>Carregando dados...</Text>
        </MotiView>
      </View>
    );
  }

  const getQualityColor = () => {
    if (data.pm10 < 50) return '#4CAF50';
    if (data.pm10 < 100) return '#FF9800';
    return '#F44336';
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <MotiView
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          damping: 15,
        }}
        style={styles.header}
      >
        <Text style={styles.headerIcon}>🌬️</Text>
        <Text style={styles.headerTitle}>Qualidade do Ar</Text>
        <Text style={styles.city}>{data.city}</Text>
      </MotiView>

      {/* Card de Qualidade */}
      <MotiView
        from={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: 'timing',
          duration: 600,
          delay: 200,
        }}
        style={[styles.qualityCard, { borderColor: getQualityColor() }]}
      >
        <Text style={styles.qualityLabel}>Status</Text>
        <Text style={[styles.qualityValue, { color: getQualityColor() }]}>
          {data.quality}
        </Text>
      </MotiView>

      {/* Cards de Dados */}
      <MotiView
        from={{ opacity: 0, translateX: -50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{
          type: 'timing',
          duration: 500,
          delay: 400,
        }}
        style={styles.dataCard}
      >
        <Text style={styles.dataLabel}>PM 10</Text>
        <Text style={styles.dataValue}>{data.pm10} µg/m³</Text>
        <Text style={styles.dataDescription}>Material Particulado</Text>
      </MotiView>

      <MotiView
        from={{ opacity: 0, translateX: 50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{
          type: 'timing',
          duration: 500,
          delay: 600,
        }}
        style={styles.dataCard}
      >
        <Text style={styles.dataLabel}>PM 2.5</Text>
        <Text style={styles.dataValue}>{data.pm25} µg/m³</Text>
        <Text style={styles.dataDescription}>Partículas Finas</Text>
      </MotiView>

      {/* Info Footer */}
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: 'timing',
          duration: 800,
          delay: 800,
        }}
        style={styles.infoBox}
      >
        <Text style={styles.infoText}>
          💡 Mantenha-se informado sobre a qualidade do ar em sua região para proteger sua saúde!
        </Text>
      </MotiView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  spinner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 6,
    borderColor: '#4CAF50',
    borderTopColor: 'transparent',
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 16,
    color: '#666',
  },
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
    fontSize: 70,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 5,
  },
  city: {
    fontSize: 18,
    color: '#66bb6a',
  },
  qualityCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  qualityLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  qualityValue: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dataLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  dataValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 5,
  },
  dataDescription: {
    fontSize: 12,
    color: '#999',
  },
  infoBox: {
    backgroundColor: '#e3f2fd',
    borderRadius: 12,
    padding: 20,
    marginTop: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  infoText: {
    fontSize: 14,
    color: '#1976D2',
    lineHeight: 20,
  },
});
