import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TextCardProps {
  title: string;
  description: string;
}

const TextCard: React.FC<TextCardProps> = ({ title, description }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default TextCard;
