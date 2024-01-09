import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}> Some text about who we are and what we do. Resize the browser window to see that this page is responsive by the way.</Text>
      </View>

      <Text style={styles.teamHeader}>Team Member</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              source={require('../assets/jane.jpg')}
              style={{ width: 287, height: 200 }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.name}>Jane Potter</Text>
              <Text style={styles.role}>Chairman</Text>
              <Text>Jane potter is a business women which is a confident women.</Text>
              <Text>potter.jane@gmail.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </View>
          </View>

          <View style={styles.card}>
            <Image
              source={require('../assets/mike.jpg')}
              style={{ width: 287, height: 200 }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.name}>Mike Tyson</Text>
              <Text style={styles.role}>Developer</Text>
              <Text>Mike Tyson is a business man which is working in MNC</Text>
              <Text>tyson.mike@gmail.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </View>
          </View>

          <View style={styles.card}>
            <Image
              source={require('../assets/john.jpg')}
              style={{ width: 287, height: 200 }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.name}>John Cena</Text>
              <Text style={styles.role}>Manager</Text>
              <Text>John Cena is a business man which is working as Manager.</Text>
              <Text>cena.john@gmail.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#1890ff',
    padding: 20,
    alignItems: 'center',
  },
  teamHeader: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexDirection: 'column', // Display items vertically
    alignItems: 'center', // Center items horizontally
  },
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '80%', // Adjust the width as per your preference
    marginBottom: 20,
    borderWidth: 2,
     borderColor: 'black',
     borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  role: {
    textAlign: 'center',
    fontWeight: '500'
  },
});

export default AboutUs;
