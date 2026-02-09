import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Mock data for urgent requests
const URGENT_REQUESTS = [
  {
    id: '1',
    name: 'Sarah Connor',
    bloodType: 'A+',
    hospital: 'City General Hospital',
    distance: '2.5 km',
    urgency: 'Critical',
    postedTime: '10 mins ago',
  },
  {
    id: '2',
    name: 'James Smith',
    bloodType: 'O-',
    hospital: 'St. Mary\'s Medical Center',
    distance: '4.1 km',
    urgency: 'High',
    postedTime: '25 mins ago',
  },
  {
    id: '3',
    name: 'Emma Watson',
    bloodType: 'B+',
    hospital: 'Children\'s Hospital',
    distance: '5.8 km',
    urgency: 'Medium',
    postedTime: '1 hr ago',
  },
];

export default function DonorDashboard() {
  const router = useRouter();
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Hero 👋</Text>
          <Text style={styles.subGreeting}>Ready to save lives?</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Image 
            source={{ uri: 'https://i.pravatar.cc/150?img=11' }} 
            style={styles.avatar} 
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Availability Card */}
        <View style={styles.statusCard}>
          <View style={styles.statusTextContainer}>
            <Text style={styles.statusTitle}>Availability Status</Text>
            <Text style={styles.statusSubtitle}>
              {isAvailable ? 'You are visible to potential receivers' : 'You are currently hidden'}
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#FF5A5F" }}
            thumbColor={isAvailable ? "#fff" : "#f4f3f4"}
            onValueChange={() => setIsAvailable(!isAvailable)}
            value={isAvailable}
          />
        </View>

        {/* Stats Row */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Lives Saved</Text>
          </View>
          <View style={styles.verticalDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>Last</Text>
            <Text style={styles.statLabel}>25 Oct</Text>
          </View>
          <View style={styles.verticalDivider} />
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: '#FF5A5F' }]}>A+</Text>
            <Text style={styles.statLabel}>My Type</Text>
          </View>
        </View>

        {/* Section Title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Urgent Requests Nearby</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Requests List */}
        <View style={styles.requestsList}>
          {URGENT_REQUESTS.map((request) => (
            <View key={request.id} style={styles.requestCard}>
              <View style={styles.requestHeader}>
                <View style={styles.bloodBadge}>
                  <Text style={styles.bloodType}>{request.bloodType}</Text>
                </View>
                <View style={styles.requestInfo}>
                  <Text style={styles.patientName}>{request.name}</Text>
                  <Text style={styles.hospitalName}>{request.hospital}</Text>
                </View>
                <View style={styles.urgencyBadge}>
                  <Text style={styles.urgencyText}>{request.urgency}</Text>
                </View>
              </View>
              
              <View style={styles.divider} />
              
              <View style={styles.requestFooter}>
                <View style={styles.footerItem}>
                  <MaterialCommunityIcons name="map-marker-distance" size={16} color="#666" />
                  <Text style={styles.footerText}>{request.distance}</Text>
                </View>
                <View style={styles.footerItem}>
                  <MaterialCommunityIcons name="clock-outline" size={16} color="#666" />
                  <Text style={styles.footerText}>{request.postedTime}</Text>
                </View>
                <TouchableOpacity style={styles.donateButton}>
                  <Text style={styles.donateButtonText}>Donate</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '800',
    color: '#333',
  },
  subGreeting: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  profileButton: {
    padding: 2,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FF5A5F',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  statusCard: {
    backgroundColor: '#333',
    marginHorizontal: 24,
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  statusTextContainer: {
    flex: 1,
    paddingRight: 16,
  },
  statusTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  statusSubtitle: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 24,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'space-between',
    marginBottom: 32,
    // Soft shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '800',
    color: '#333',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#999',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  verticalDivider: {
    width: 1,
    height: '80%',
    backgroundColor: '#EEEEEE',
    alignSelf: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  seeAllText: {
    color: '#FF5A5F',
    fontWeight: '600',
    fontSize: 14,
  },
  requestsList: {
    paddingHorizontal: 24,
    gap: 16,
  },
  requestCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  requestHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  bloodBadge: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFF0F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  bloodType: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FF5A5F',
  },
  requestInfo: {
    flex: 1,
  },
  patientName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  hospitalName: {
    fontSize: 13,
    color: '#666',
  },
  urgencyBadge: {
    backgroundColor: '#FFECEC',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  urgencyText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FF3B30',
    textTransform: 'uppercase',
  },
  divider: {
    height: 1,
    backgroundColor: '#F5F5F5',
    marginBottom: 12,
  },
  requestFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  footerText: {
    fontSize: 12,
    color: '#888',
    fontWeight: '500',
  },
  donateButton: {
    backgroundColor: '#FF5A5F',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: '#FF5A5F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  donateButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
});
