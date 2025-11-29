import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome to African</Text>
        <Text style={styles.subtitle}>A starter React Native (Expo) app</Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Hello', 'Hello from your mobile app!')}> 
          <Text style={styles.buttonText}>Say Hello</Text>
        </TouchableOpacity>
        <Text style={styles.hint}>Platform: {Platform.OS}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8FAFC' },
  card: { width: '90%', padding: 20, borderRadius: 12, backgroundColor: '#fff', alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 10, elevation: 4 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#6B7280', marginBottom: 20, textAlign: 'center' },
  button: { backgroundColor: '#0EA5E9', paddingVertical: 10, paddingHorizontal: 18, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: '600' },
  hint: { marginTop: 12, color: '#94A3B8', fontSize: 12 }
});
