import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchAirQuality } from '../api/fetchApi';

export default function ApiScreen() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const city = 'London'; // Pode ser alterado para outra cidade

    const getAirQuality = async () => {
      try {
        const result = await fetchAirQuality(city);
        setData(result);
      } catch (err) {
        setError('Falha ao carregar dados');
      } finally {
        setLoading(false);
      }
    };

    getAirQuality();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qualidade do Ar</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <View>
          <Text style={styles.text}>Localização: {data?.location?.name}</Text>
          <Text style={styles.text}>Qualidade do Ar: {data?.current?.air_quality?.pm10}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginTop: 10 },
  error: { color: 'red', fontSize: 18, marginTop: 20 },
});

