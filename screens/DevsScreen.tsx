// DevsScreen.tsx - Sobre os Desenvolvedores
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { MotiView } from 'moti';

export default function DevsScreen() {
  const developers = [
    {
      id: 1,
      name: 'Vinicius Alves Siqueira',
      rm: '551939',
      github: 'https://github.com/Vinicius-A-Siqueira',
      icon: '👨‍💻',
      color: '#2196F3',
    },
    {
      id: 2,
      name: 'Gabriel Camargo Ravanhani',
      rm: '557879',
      github: 'https://github.com/GabrielCamargoo',
      icon: '👨‍💻',
      color: '#4CAF50',
    },
    {
      id: 3,
      name: 'Kauan Felipe',
      rm: '557954',
      github: 'https://github.com/KauanSouz',
      icon: '👨‍💻',
      color: '#FF9800',
    },
  ];

  const openGitHub = (url: string) => {
    Linking.openURL(url);
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
        <Text style={styles.headerIcon}>👥</Text>
        <Text style={styles.headerTitle}>Equipe de Desenvolvimento</Text>
        <Text style={styles.headerSubtitle}>FIAP - Mobile 2025</Text>
      </MotiView>

      {/* Cards dos Desenvolvedores */}
      {developers.map((dev, index) => (
        <MotiView
          key={dev.id}
          from={{
            opacity: 0,
            rotateY: '90deg',
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            rotateY: '0deg',
            scale: 1,
          }}
          transition={{
            type: 'spring',
            delay: index * 200 + 300,
            damping: 15,
          }}
          style={styles.devCard}
        >
          <View style={[styles.iconContainer, { backgroundColor: dev.color }]}>
            <Text style={styles.devIcon}>{dev.icon}</Text>
          </View>
          
          <View style={styles.devInfo}>
            <Text style={styles.devName}>{dev.name}</Text>
            <Text style={styles.devRM}>RM: {dev.rm}</Text>
          </View>

          <TouchableOpacity
            style={[styles.githubButton, { backgroundColor: dev.color }]}
            onPress={() => openGitHub(dev.github)}
          >
            <Text style={styles.githubButtonText}>GitHub →</Text>
          </TouchableOpacity>
        </MotiView>
      ))}

      {/* Footer */}
      <MotiView
        from={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: 'timing',
          duration: 800,
          delay: developers.length * 200 + 500,
        }}
        style={styles.footer}
      >
        <Text style={styles.footerText}>
          💚 Desenvolvido com React Native + Expo
        </Text>
        <Text style={styles.footerSubtext}>
          CP6 - Checkpoint de Mobile 2025
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
    alignItems: 'center',
    marginBottom: 30,
  },
  headerIcon: {
    fontSize: 70,
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
  },
  devCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    alignSelf: 'center',
  },
  devIcon: {
    fontSize: 35,
  },
  devInfo: {
    marginBottom: 15,
  },
  devName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  devRM: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  githubButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  githubButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    marginBottom: 40,
    padding: 20,
    backgroundColor: '#e8f5e9',
    borderRadius: 12,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#2e7d32',
    fontWeight: '600',
    marginBottom: 5,
  },
  footerSubtext: {
    fontSize: 14,
    color: '#66bb6a',
  },
});
