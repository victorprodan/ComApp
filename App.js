import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import PushNotification from 'react-native-push-notification';

export default class App extends Component {
  componentDidMount() {
    PushNotification.configure({
      onNotification: function(notification) {
        console.log('NOTIFICATION:', notification);
      }
    });
  }

  createPushNotification = () => {
    console.log('Notification function called; Notification expected to appear.');

    PushNotification.localNotification({
      message: 'Push Notification'
    });
  };

  createScheduledPushNotification = () => {
    console.log('Scheduled Notification function called; Scheduled Notification expected to appear.');

    PushNotification.localNotificationSchedule({
      message: 'Scheduled Push Notification', // (required)
      date: new Date(Date.now() + 5 * 1000)
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Push Notifications Example</Text>
        <Text style={styles.instructions}>Tap the button below to trigger a push Notification</Text>

        <Text style={styles.sendText} onPress={this.createPushNotification}>
          Send Push Notification
        </Text>

        <Text style={styles.sendText} onPress={this.createScheduledPushNotification}>
          Send Scheduled Push Notification
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6C7A89'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#EEE'
  },
  instructions: {
    textAlign: 'center',
    color: '#EEE',
    fontSize: 18,
    marginBottom: 40
  },
  sendText: {
    color: '#013243',
    fontSize: 18,
    marginBottom: 40
  }
});
