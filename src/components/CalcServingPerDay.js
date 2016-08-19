import React, { Component } from 'react';
import {
  Text,
  View,
  PickerIOS,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import R from 'ramda';

const getChoices = (servings) => {
  const mapping = {
    fgid: [],
    gender: [],
    ages: [],
  };
  servings.forEach(e => {
    if (!mapping.fgid.includes(e.fgid)) mapping.fgid.push(e.fgid);
    if (!mapping.gender.includes(e.gender)) mapping.gender.push(e.gender);
    if (!mapping.ages.includes(e.ages)) mapping.ages.push(e.ages);
  });

  return mapping;
};

class CalcServingPerDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fgid: props.fgid,
      gender: 'Male',
      ages: '19 to 30',
    };
  }

  render() {
    const { nav, fgid, servings, mapGid2Grp } = this.props;

    const choices = getChoices(servings);

    const numOfServings = servings.find(e => {
      return e.gid === this.state.gid &&
      e.gender === this.state.gender &&
      e.ages === this.state.ages;
    }).servings;

    return (
      <ScrollView
      style={styles.scene}
      >
      <View style={styles.banner}>
      <View style={styles.singleLine}>
      <Text>You need </Text>
      <Text style={styles.numText}>{numOfServings}</Text>
      <Text> servings per day :)</Text>
      </View>
      <View style={styles.singleLine}>
      <Text>given the choices below</Text>
      </View>
      <View>
        <TouchableOpacity
        onPress={() => nav.push({
          id: 'servingSize',
          fgid,
        })}
        >
          <Text>Serving Size of Foods</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style={styles.pickerWrapper}>
      <Text style={styles.title}>Food Group</Text>
      <PickerIOS
      selectedValue={this.state.fgid}
      onValueChange={c => this.setState({fgid: c})}
      style={styles.picker}
      >
      {choices.fgid.map(c => (
        <PickerIOS.Item
        key={`CalcServingPerDayFoodGroup${c}`}
        value={c}
        label={mapGid2Grp[c]}
        />
      ))}
      </PickerIOS>
      </View>

      <View style={styles.pickerWrapper}>
      <Text style={styles.title}>Gender</Text>
      <PickerIOS
      selectedValue={this.state.gender}
      onValueChange={c => this.setState({gender: c})}
      style={styles.picker}
      >
      {choices.gender.map(c => (
        <PickerIOS.Item
        key={`CalcServingPerDayFoodGroup${c}`}
        value={c}
        label={c}
        />
      ))}
      </PickerIOS>
      </View>

      <View style={styles.pickerWrapper}>
      <Text style={styles.title}>Age</Text>
      <PickerIOS
      selectedValue={this.state.ages}
      onValueChange={c => this.setState({ages: c})}
      style={styles.picker}
      >
      {choices.ages.map(c => (
        <PickerIOS.Item
        key={`CalcServingPerDayFoodGroup${c}`}
        value={c}
        label={c}
        />
      ))}
      </PickerIOS>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: '#efeff4',
  },
  banner: {
    paddingTop: 10,
    paddingBottom: 8,
  },
  singleLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numText: {
    fontSize: 24,
    color: '#f44336',
    fontWeight: '500',
  },
  pickerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#373e4d',
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
  picker: {
    flex: 3,
  }
})

export default CalcServingPerDay;
