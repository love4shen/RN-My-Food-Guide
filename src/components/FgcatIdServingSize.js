import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  StyleSheet,
} from 'react-native';
import FoodAndServingSize from './FoodAndServingSize';
import R from 'ramda';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const FgcatIdServingSize = ({ mapGid2Grp, fgid, fd, ...rest }) => {
  const grouped = R.groupBy((d) => d.fgcat_id)(fd);
  const lintered = Object.keys(grouped).map((k) => ({
    fgcatId: k,
    foodAndSize: grouped[k].map(({ srvg_sz, food }) => ({ srvg_sz, food })),
  }));

  const dataSource = ds.cloneWithRows(lintered);

  return (
    <View>
      <Text>{mapGid2Grp[fgid]}</Text>
      <ListView
      style={styles.scene}
      dataSource={dataSource}
      renderRow={({ fgcatId, foodAndSize }) => (
        <FoodAndServingSize
        fgcatId={fgcatId}
        foodAndSize={foodAndSize}
        {...rest}
        />
      )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
});

export default FgcatIdServingSize;
