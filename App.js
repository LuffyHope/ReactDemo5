/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {getArray} from './utils/dataProcessing';

itemView = () => {
  let list = [
    '海贼王',
    '火影忍者',
    '斗破苍穹',
    '疾风传',
    '路飞',
    '鸣人',
    '二柱子',
    '索罗',
    '乌索普',
    '娜美',
    '罗兵',
    '乔巴',
    '萧炎',
    '萧薰儿',
    '诛仙',
    '张小凡',
    '林惊羽',
    '万剑一',
    '碧瑶',
    '陆雪琪',
    '小白',
  ];

  console.log(getArray(list));

  return getArray(list).map((item, index) => (
    <View
      style={{height: 50, flexDirection: 'row'}}
      key={index + Math.random()}>
      {item[0] ? (
        <View style={styles.item}>
          <Text>{item[0]}</Text>
        </View>
      ) : null}
      {item[1] ? (
        <View style={styles.item2}>
          <Text>{item[1]}</Text>
        </View>
      ) : (
        <View style={{flex: 1, marginLeft: 5, marginRight: 5}}></View>
      )}
    </View>
  ));
};

const App: () => React$Node = () => {
  return (
    <View>
      <ScrollView
        style={{height: 300, backgroundColor: '#C5C812'}}
        horizontal={false}
        showsHorizontalScrollIndicator={false}>
        {this.itemView()}
      </ScrollView>

      
      <View style={{
          marginTop: 100,
          height: 50,
          flexDirection: 'row',
          backgroundColor: '#C5C812',
          alignItems: 'center',
          justifyContent:'center',
        }}>
        <Text>每个Item包裹两个子View</Text>
      </View>
      <View
        style={{
          height: 50,
          flexDirection: 'row',
          backgroundColor: '#C5C812',
          alignItems: 'center',
        }}>
        <View style={styles.item}>
          <Text>子View</Text>
        </View>
        <View style={styles.item2}>
          <Text>子View</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 40,
    backgroundColor: '#F4F4F4',
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item2: {
    height: 40,
    backgroundColor: '#3DC6AA',
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
