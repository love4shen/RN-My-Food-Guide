import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  StyleSheet,
} from 'react-native';
import R from 'ramda';
import DirStmt from './DirStmt';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

const FgDirectionalStatements = ({ dirStmts, ...rest }) => {
  const grouped = R.groupBy((d) => d.fgid)(dirStmts);
  const lintered = Object.keys(grouped).map(k => ({
    fgid: k,
    dir_stmts: grouped[k].map(o => o.dir_stmt),
  }));

  const dataSource = ds.cloneWithRows(lintered);

  return (
    <ListView
    style={styles.scene}
    dataSource={dataSource}
    renderRow={stmt => (
      <DirStmt
      stmt={stmt}
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
})

export default FgDirectionalStatements;
