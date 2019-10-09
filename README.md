# ReactDemo5
React native网格列表
## 先看效果图👇
![gridList.gif](https://github.com/LuffyHope/ReactDemo5/blob/master/gridList.gif)
## 理解
> 1.react native没有网格列表的控件，所以我们采用的是最外层为```ScrollView```</br>
> 2.每两个横向的子条目共用一个父```View```。</br>
> 3.list数据需要提前处理为二维数组。因为每个条目有两个子view。

看下图可知晓👇：View结构
![explain.jpg](https://github.com/LuffyHope/ReactDemo5/gridList.gif)

数据方面也同样需要配合VIew条目去做变动。格式如下；</br>
**变动前👇：**
```
[
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
  ]
```
**变动后👇：**
```
[
["海贼王", "火影忍者"], 
["斗破苍穹", "疾风传"], 
["路飞", "鸣人"], 
["二柱子", "索罗"], 
["乌索普", "娜美"], 
["罗兵", "乔巴"], 
["萧炎", "萧薰儿"], 
["诛仙", "张小凡"], 
["林惊羽", "万剑一"], 
["碧瑶", "陆雪琪"], 
["小白", undefined]
]
```
## 注意点
> 每个父级条目实际上是包括了两个子条目。

## 核心代码如下：
```
//list转二维数组，这个很好理解。
export const getArray = (list) =>{
    let arry=[];

    for(var i=0;i<list.length;i+=2){
      let fu = [];
      fu.push(list[i]);
      if((i+1)<=list.length){
        fu.push(list[i+1]);
      }
      arry.push(fu);
    }
    return arry;
}
```
```
//条目展示的代码
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
.....
.....
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
```

## 项目下载后如何运行起来
> - 1.用visual studio code打开工程依次执行以下命令

>> - npm install //下载依赖包；不下载的话运行不起来。
>> - yarn
>> - yarn start
>
> - 2.用android studio将工程运行到手机上
> - 3.reload App,如果还是加载不出来那么把app进程杀死重启，然后再重复操作1.步骤。
> - 4.如果还是不行那么执行 react-native run-android命令。

