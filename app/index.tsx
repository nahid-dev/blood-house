import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Red House</Text>
          <Text style={styles.subtitle}>Connecting lives through blood donation.</Text>
        </View>

        <View style={styles.optionsContainer}>
          <TouchableOpacity 
            style={[styles.card, styles.donorCard]} 
            onPress={() => router.push('/donor')}
            activeOpacity={0.9}
          >
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons name="heart-pulse" size={40} color="#FF5A5F" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>I want to Donate</Text>
              <Text style={styles.cardDescription}>Save a life today by donating blood to those in need.</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.card, styles.finderCard]} 
            onPress={() => console.log('Finder selected')}
            activeOpacity={0.9}
          >
            <View style={[styles.iconCircle, styles.finderIconCircle]}>
              <MaterialCommunityIcons name="magnify" size={40} color="#fff" />
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.cardTitle, styles.finderText]}>I need Blood</Text>
              <Text style={[styles.cardDescription, styles.finderText]}>Find blood donors near you urgently for emergencies.</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#333',
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    maxWidth: '80%',
    lineHeight: 24,
  },
  optionsContainer: {
    gap: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.02)',
  },
  donorCard: {
    // Standard white card
  },
  finderCard: {
    backgroundColor: '#FF5A5F', // Primary Red
    borderColor: '#FF5A5F',
    shadowColor: '#FF5A5F',
    shadowOpacity: 0.3,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFF0F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  finderIconCircle: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  finderText: {
    color: '#FFFFFF',
    opacity: 0.95,
  },
});
