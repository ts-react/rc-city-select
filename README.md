# rc-city-select

> 组件在ant-design的[cascader](https://ant.design/components/cascader-cn/)添加城市数据

## 使用

* 安装项目依赖

```
yarn add antd classnames @jiumao/china-city-data
```

* 安装rc-city-select

```
yarn add rc-city-select
```

* 使用

````
import React form 'react';
import CitySelect form 'rc-city-select';

const TestPage: Rract.FC = () => {
  return (
    <div>
      <CitySelect />
    </div> 
  )
}

````

## Props

具体请查看[cascader](https://ant.design/components/cascader-cn/)

### valueType

* 数据类型

```
'name' | 'code';
```

* 描述

值的类型，省市区名称 还是 省市区编码

* 默认值

name
