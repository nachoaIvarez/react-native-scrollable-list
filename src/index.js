import React, { Component } from 'react';
import { ListView } from 'react-native';

class ScrollableList extends Component {
  constructor(props) {
    super(props);

    const { data, row, ...other } = props;
    this.otherProps = other;
    this.row = row;

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  render() {
    const Row = this.row;
    return (
      <ListView
        {...this.otherProps}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Row {...data} />}
      />
    );
  }
}

export default ScrollableList;
