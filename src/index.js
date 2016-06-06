import React, { Component, PropTypes } from 'react';
import { ListView } from 'react-native';

const { array, func } = PropTypes;

class ScrollableList extends Component {
  static propTypes = {
    data: array.isRequired,
    renderRow: func.isRequired,
  }

  constructor(props) {
    super(props);

    const { data, renderRow, ...other } = props;
    this.otherProps = other;
    this.renderRow = renderRow;

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: this.ds.cloneWithRows(data),
    };
  }

  componentWillReceiveProps(props) {
    if (this.props.data !== props.data) {
      this.setState({
        dataSource: this.ds.cloneWithRows(props.data),
      });
    }
  }

  render() {
    return (
      <ListView
        {...this.otherProps}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

export default ScrollableList;
