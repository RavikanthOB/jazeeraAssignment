import React, {PureComponent} from 'react';
import {Text, View, FlatList} from 'react-native';

import UserTile from './UserTile';
import styles from './style';

const url = 'https://randomuser.me/api/?results=100';

export class DataListScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      RandomUserList: [],
    };
  }
  componentDidMount() {
    fetch(url)
      .then((res) => res.json())
      .then(({results}) => {
        this.setState({RandomUserList: results});
      });
  }

  renderItem = ({item}) => <UserTile user={item} key={item.cell} />;

  keyExtractor = (item) => item.cell;

  render() {
    return (
      <View style={styles.UserListContainer}>
        <Text>Random User List</Text>
        <FlatList
          data={this.state.RandomUserList}
          extraData={this.state}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          initialNumToRender={8}
          maxToRenderPerBatch={5}
          onEndReachedThreshold={0.5}
        />
      </View>
    );
  }
}

export default DataListScreen;
