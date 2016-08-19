import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const DirStmt = ({ nav, stmt, mapGid2Grp }) => (
  <View>
  <TouchableOpacity
  onPress={() => nav.push({
    id: 'calcServingPerDay',
    fgid: stmt.fgid,
  })}
  >
  <Text style={styles.title}>{mapGid2Grp[stmt.fgid]}</Text>
  </TouchableOpacity>
  {stmt.dir_stmts.map((dir, i) => (
    <Text key={`DirStmt${i}`}>{`• ${dir}`}</Text>
  ))}
  </View>

);

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: '#ffcc33',
  }
});

export default DirStmt;
