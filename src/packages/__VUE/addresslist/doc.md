# AddressList 地址列表

### 介绍

主要用于进行地址列表的展示以及操作。依赖组件：Icon、Swipe、Button

### 安装

```javascript
import { createApp } from "vue";
import { AddressList, Icon, Swipe, Button } from "@nutui/nutui";

const app = createApp();
app.use(AddressList);
app.use(Icon);
app.use(Swipe);
app.use(Button);
```

## 代码演示

### 基础用法

```html
<nutbiz-addresslist
  :data="data"
  @handelDelIcon="delClick"
  @handelEditIcon="editClick"
  @handelItem="itemClick"
  :show-bottom-button="false"
  :dataMapOptions="dataMapOptions"
>
</nutbiz-addresslist>
```

```javascript
setup() {
    const data = ref([
        {
          testid:3,
          testaddressName:'姓名',
          phone:'123****4567',
          defaultAddress:false,
          fullAddress:'北京市通州区测试测试测试测试测试测试测试测试测试'
        },
        {
          testid:4,
          testaddressName:'姓名',
          phone:'123****4567',
          defaultAddress:true,
          fullAddress:'北京市通州区测试测试测试测试测试测试测试测试测试'
        },
      ]);
      const dataMapOptions = reactive({
        id: 'testid',
        addressDetail:'testaddressDetail',
        addressName:'testaddressName'
      });
      const itemClick = ()=>{
        Toast.text('点击了地址哦～');
      }
      const delClick = ()=>{
        Toast.text('点击了删除哦～');
      }
      const editClick = ()=>{
        Toast.text('点击了编辑哦～');
      }
      const copyClick = ()=>{
        Toast.text('复制成功～');
      }
      const holdDownClick = (event: Event,id:number)=>{
        Toast.text('长按～');
      }
      const setClick = ()=>{
        Toast.text('点击了设置～');
      }
      const addAddress = ()=>{
        Toast.text('添加新地址～');
      }
      return {
        itemClick,
        holdDownClick,
        data,
        delClick,
        editClick,
        copyClick,
        setClick,
        addAddress,
        dataMapOptions
      };
    }
```

### 长按功能

```html
<nutbiz-addresslist
  :data="data"
  long-press-edition
  :show-bottom-button="false"
  @handelDelIcon="delClick"
  @handelEditIcon="editClick"
  @handelItem="itemClick"
  @longPressCopyClick="copyClick"
  @longPressSetClick="setClick"
  @longPressDelClick="delClick"
  :dataMapOptions="dataMapOptions"
>
</nutbiz-addresslist>
```

### 滑动功能

```html
<nutbiz-addresslist
  :data="data"
  swipe-edition
  show-bottom-button
  @handelDelIcon="delClick"
  @handelEditIcon="editClick"
  @handelItem="itemClick"
  @swipeDelClick="delClick"
  @addAddressClick="addAddress"
  :dataMapOptions="dataMapOptions"
>
</nutbiz-addresslist>
```

## API

### Props

| 参数               | 说明             | 类型    | 默认值 |
| ------------------ | ---------------- | ------- | ------ |
| data               | 地址数组         | Array   | -      |
| long-press-edition | 长按功能         | Boolean | false  |
| swipe-edition      | 右滑功能         | Boolean | false  |
| show-bottom-button | 是否展示底部按钮 | Boolean | true   |

### Events

| 事件名             | 说明                 | 回调参数          | 备注               |
| ------------------ | -------------------- | ----------------- | ------------------ |
| handelDelIcon      | 点击删除图标         | event: Event,item | 公共               |
| handelEditIcon     | 点击编辑图标         | event: Event,item | 公共               |
| handelDelIcon      | 点击删除图标         | event: Event,item | 公共               |
| handelItem         | 点击地址列表每一项   | event: Event,item | 公共               |
| addAddressClick    | 点击底部添加地址按钮 | event: Event      | 公共               |
| longPressCopyClick | 点击复制地址按钮     | event: Event,item | 长按功能下点击事件 |
| longPressSetClick  | 点击设置默认按钮     | event: Event,item | 长按功能下点击事件 |
| longPressDelClick  | 点击删除地址按钮     | event: Event,item | 长按功能下点击事件 |
| swipeDelClick      | 默认右滑删除按钮     | event: Event,item | 滑动功能下点击事件 |

### Slots

AddressList 组件默认划分为若干区域，这些区域都定义成了插槽，可以按照需求进行替换。

| 插槽名        | 说明                             | 说明           |
| ------------- | -------------------------------- | -------------- |
| iteminfos     | 地址列表项姓名/联系方式/默认一行 | 公共           |
| itemicon      | 地址列表项图标                   | 公共           |
| itemaddr      | 地址列表项详细地址               | 公共           |
| swiperight    | 地址列表项右滑区域               | 滑动功能下使用 |
| longpressbtns | 地址列表项长按遮罩内容           | 长按功能下使用 |

### data 数组中每一项 与 dataMapOptions 对象的参数磨平

下面是 data 数组中每一项 基础数据结构

```javascript
const dataInfo = {
  id: 2, //地址id
  addressName: "姓名", //地址姓名
  phone: "123****4567", //联系方式
  defaultAddress: false, //是否是默认
  fullAddress: "北京市通州区测试测试测试测试测试测试测试测试测试", //详细地址
};
```

组件内优先获取基础数据结构中定义的字段，若想自定义 key 值，可以通过 dataMapOptions 设置映射关系。

```javascript
const dataMapOptions = {
  id: "testid",
  addressDetail: "testaddressDetail",
  addressName: "testaddressName",
};
```