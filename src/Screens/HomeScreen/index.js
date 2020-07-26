import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import LeaveBalance from '../../components/LeaveBalance';
import LateLogins from '../../components/LateLogins';
import QuicksLinks from '../../components/QuicksLinks';
import PersonDetails from '../../components/PersonDetails';

import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <PersonDetails />
      <ScrollView>
        <View style={styles.HomeScreenListContainer}>
          <LeaveBalance />
          <LateLogins />
          <QuicksLinks />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
