import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  StyleSheet,
} from 'react-native';
import FgcatIdServingSize from './FgcatIdServingSize';
import R from 'ramda';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const FgidServingSize = ({ fds, ...rest }) => {
  const grouped = R.groupBy((d) => d.fgid)(fds);
  const lintered = Object.keys(grouped).map(k => ({
    fgid: k,
    fd: grouped[k],
  }));

  const dataSource = ds.cloneWithRows(lintered);

  return (
    <ListView
    style={styles.scene}
    dataSource={dataSource}
    renderRow={({ fgid, fd }) => (
      <FgcatIdServingSize
      fd={fd}
      fgid={fgid}
      {...rest}
      />
    )}
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: '#efeff4',
  },
});

export default FgidServingSize;
