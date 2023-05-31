# input-currency-vue

> A Input currency component based on ant-design-vue .

## public
``` bash
npm run build

npm publish --access public

```
## Build Setup

``` bash
npm i input-currency-vue

import InputCurrency from 'input-currency-vue'
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

### Usage
```
<InputCurrency
  v-model="value"
>
<AudioPlayer
  v-model="value"
  allowClear
  currency
>

The format will from 11234 to 11,234
```

### Options
+ v-model(value)
+ allowClear - boolean -  - 默认是false - 展示删除图标
+ placeholder - 默认值是"请输入"
+ size - large/default/size - 默认是"default"
+ disalbed - boolean - 默认是false
+ currency - boolean - 返回的数据类型是否是千分符格式的，默认false