import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';

export default function HomeScreen({ navigation }: any) {
  const menuItems = [
    { id: 1, title: 'Dicas Sustentáveis', icon: '💡', screen: 'Dicas', color: '#FF9800' },
    { id: 2, title: 'Calcular Pegada', icon: '📊', screen: 'Form', color: '#2196F3' },
    { id: 3, title: 'Qualidade do Ar', icon: '🌬️', screen: 'Api', color: '#9C27B0' },
    { id: 4, title: 'Desenvolvedores', icon: '👥', screen: 'Devs', color: '#607D8B' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header animado */}
      <MotiView
        from={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: 'spring',
          damping: 15,
        }}
        style={styles.header}
      >
        <Text style={styles.headerIcon}>🌍</Text>
        <Text style={styles.headerTitle}>Bem-vindo ao EcoConsciente!</Text>
        <Text style={styles.headerSubtitle}>Juntos por um planeta melhor</Text>
      </MotiView>

      {/* Cards do menu com animação em cascata */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <MotiView
            key={item.id}
            from={{
              opacity: 0,
              scale: 0.5,
              rotate: '-10deg',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: '0deg',
            }}
            transition={{
              type: 'spring',
              delay: index * 150 + 300,
              damping: 15,
            }}
          >
            <TouchableOpacity
              style={[styles.menuCard, { backgroundColor: item.color }]}
              onPress={() => navigation.navigate(item.screen)}
              activeOpacity={0.8}
            >
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={styles.menuTitle}>{item.title}</Text>
            </TouchableOpacity>
          </MotiView>
        ))}
      </View>

      {/* Indicador animado de loading contínuo (decorativo) */}
      <MotiView
        from={{ opacity: 0.5, scale: 1 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{
          type: 'timing',
          duration: 1500,
          loop: true,
          easing: Easing.inOut(Easing.ease),
        }}
        style={styles.pulseIndicator}
      >
        <Text style={styles.pulseText}>🌱</Text>
      </MotiView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
  },
  headerIcon: {
    fontSize: 80,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    textAlign: 'center',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#66bb6a',
    textAlign: 'center',
  },
  menuContainer: {
    width: '100%',
    gap: 15,
  },
  menuCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  menuIcon: {
    fontSize: 40,
    marginRight: 15,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },
  pulseIndicator: {
    marginTop: 40,
    alignItems: 'center',
  },
  pulseText: {
    fontSize: 50,
  },
});
