import React, { Component, PropTypes } from 'react';
import { ListView, RefreshControl } from 'react-native';

const { array, func } = PropTypes;

class ScrollableList extends Component {
  static propTypes = {
    data: array.isRequired,
    renderRow: func.isRequired,
  };

  constructor(props) {
    super(props);

    const { data, onRefresh, ...other } = props;
    this.otherProps = other;
    this.onRefresh = onRefresh;

    this.refreshEvent = this.refreshEvent.bind(this);

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: this.ds.cloneWithRows(data),
      refreshing: false,
    };
  }

  componentWillReceiveProps(props) {
    if (this.props.data !== props.data) {

      if (props.data == null) {
        props.data = [];
      }

      this.setState({
        dataSource: this.ds.cloneWithRows(props.data),
      });
    }
  }

  refreshEvent() {
    this.setState({ refreshing: true });

    if (typeof this.onRefresh() === 'object' &&
      typeof this.onRefresh().then === 'function') {
      this.onRefresh().then(this.setState({ refreshing: false }));
    } else {
      this.onRefresh();
      this.setState({ refreshing: false });
    }
  }

  renderRefreshControl() {
    return (
      <RefreshControl
        refreshing={this.state.refreshing}
        onRefresh={this.refreshEvent}
      />);
  }

  render() {
    return (
      <ListView
        {...this.otherProps}
        dataSource={this.state.dataSource}
        refreshControl={this.onRefresh ? this.renderRefreshControl() : null}
      />
    );
  }
}

export default ScrollableList;
