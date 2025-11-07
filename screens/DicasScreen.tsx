import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { MotiView } from 'moti';

export default function DicasScreen() {
  const dicas = [
    {
      id: 1,
      icon: '♻️',
      title: 'Reduza o Plástico',
      description: 'Use menos produtos descartáveis e invista em alternativas reutilizáveis.',
      color: '#4CAF50',
    },
    {
      id: 2,
      icon: '🚲',
      title: 'Transporte Sustentável',
      description: 'Prefira bicicleta, transporte público ou caronas para reduzir emissões.',
      color: '#2196F3',
    },
    {
      id: 3,
      icon: '💡',
      title: 'Economize Energia',
      description: 'Desligue aparelhos da tomada e use lâmpadas LED.',
      color: '#FF9800',
    },
    {
      id: 4,
      icon: '💧',
      title: 'Preserve a Água',
      description: 'Feche a torneira ao escovar os dentes e reduza o tempo do banho.',
      color: '#00BCD4',
    },
    {
      id: 5,
      icon: '🌱',
      title: 'Plante Árvores',
      description: 'Participe de projetos de reflorestamento em sua comunidade.',
      color: '#8BC34A',
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header animado */}
      <MotiView
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          damping: 15,
        }}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Dicas para Preservar o Planeta</Text>
        <Text style={styles.headerSubtitle}>Pequenas ações, grandes mudanças! 🌍</Text>
      </MotiView>

      {/* Cards com animação em cascata */}
      {dicas.map((dica, index) => (
        <MotiView
          key={dica.id}
          from={{
            opacity: 0,
            translateY: 50,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
            scale: 1,
          }}
          transition={{
            type: 'timing',
            duration: 500,
            delay: index * 120,
          }}
          style={[styles.card, { borderLeftColor: dica.color }]}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>{dica.icon}</Text>
            <Text style={styles.cardTitle}>{dica.title}</Text>
          </View>
          <Text style={styles.cardDescription}>{dica.description}</Text>
        </MotiView>
      ))}

      {/* Footer animado */}
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: 'timing',
          duration: 800,
          delay: dicas.length * 120 + 300,
        }}
        style={styles.footer}
      >
        <Text style={styles.footerText}>
          Juntos podemos fazer a diferença! 💚
        </Text>
      </MotiView>
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
    marginBottom: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#66bb6a',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    borderLeftWidth: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  footer: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e8f5e9',
    borderRadius: 12,
  },
  footerText: {
    fontSize: 16,
    color: '#2e7d32',
    fontWeight: '600',
  },
});
