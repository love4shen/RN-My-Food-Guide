import React, { Component } from 'react';
import {
  View,
  Navigator,
  PixelRatio,
  StyleSheet,
} from 'react-native';
import FgDirectionalStatements from './FgDirectionalStatements';
import NavBarRouteMapperTitle from './NavBarRouteMapperTitle';
import NavBarRouteMapperLeftButton from './NavBarRouteMapperLeftButton';
import CalcServingPerDay from './CalcServingPerDay';
import FgidServingSize from './FgidServingSize';

const NavigationBarRouteMapper = {
  Title: NavBarRouteMapperTitle,
  LeftButton: NavBarRouteMapperLeftButton,
  RightButton: () => null,
};

const Main = ({ directional_statements, foodgroups, foods, servings }) => {
  const mapGid2Grp = {};
  foodgroups.forEach(c => {
    mapGid2Grp[c.fgid] = c.foodgroup;
  });

  const mapCatid2Cat = {};
  foodgroups.forEach(c => {
    c.categories.forEach(e => {
      mapCatid2Cat[e.fgcat_id] = e.fgcat;
    })
  });

  return (
    <Navigator
    initialRoute={{
      title: 'Directional Statement',
      id: 'FgDirectionalStatements',
    }}
    renderScene={(route, nav) => {
      switch (route.id) {
        case 'FgDirectionalStatements':
        return (
          <FgDirectionalStatements
          dirStmts={directional_statements}
          fdGrps={foodgroups}
          mapGid2Grp={mapGid2Grp}
          nav={nav}
          />
        );
        case 'calcServingPerDay':
        return (
          <CalcServingPerDay
          fgid={route.fgid}
          servings={servings}
          mapGid2Grp={mapGid2Grp}
          nav={nav}
          />
        );
        case 'servingSize':
        return (
          <FgidServingSize
          selectedFgid={route.fgid}
          fds={foods}
          mapGid2Grp={mapGid2Grp}
          mapCatid2Cat={mapCatid2Cat}
          />
        );
        default:
        return null;
      }
    }}

    configureScene={(route, routeStack) => {
      switch (route.id) {
        case 'servingSize':
        return Navigator.SceneConfigs.VerticalUpSwipeJump;
        default:
        return Navigator.SceneConfigs.PushFromRight;
      }
    }}

    navigationBar={
      <Navigator.NavigationBar
      routeMapper={NavigationBarRouteMapper}
      style={styles.navBar}
      />
    }
    />
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#f5f5f7',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#cdcdcd',
  },
});

export default Main;
