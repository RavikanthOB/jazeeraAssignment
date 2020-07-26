import React from 'react';
import {View, ScrollView} from 'react-native';

import CollapsibleCard from '../../components/ReusableComponents/CollapsibleCard';
import ImageCard from './ImageCard';
import UpdateButton from './UpdateButton';
import PersonalInfo from './PersonalInfo';
import Address from './Address';
import JoiningDetails from './JoiningDetails';

const ProflieScreen = () => {
  return (
    <ScrollView>
      <View style={{padding: 20, width: '100%'}}>
        <ImageCard />
        <CollapsibleCard title="Personal information" icon={'account'}>
          <PersonalInfo />
        </CollapsibleCard>
        <CollapsibleCard title="Address" icon={'account'}>
          <Address />
        </CollapsibleCard>
        <CollapsibleCard title="JoiningDetails" icon={'account'}>
          <JoiningDetails />
        </CollapsibleCard>

        <UpdateButton />
      </View>
    </ScrollView>
  );
};

export default ProflieScreen;
