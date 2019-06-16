import React from 'react';
import classNames from 'classnames';
import { Cascader } from 'antd';
import { CascaderProps, FieldNamesType } from 'antd/es/cascader';
import cityData from '@jiumao/china-city-data';
import './city-select.less';

export interface ICitySelectProps extends CascaderProps {
  // 选择的值的类型
  valueType: 'name' | 'code';
}

interface IState {
  fieldNames: FieldNamesType;
}

const prefixCls = 'rc-city-select';

class CitySelect extends React.Component<ICitySelectProps, IState> {
  static defaultProps = {
    changeOnSelect: true,
    valueType: 'name'
  };
  readonly state: IState = {
    fieldNames: {
      label: 'n',
      value: 'n',
      children: 'c'
    }
  };

  componentDidMount() {
    const { valueType } = this.props;

    if (valueType === 'name') {
      this.setState({
        fieldNames: {
          label: 'n',
          value: 'n',
          children: 'c'
        }
      })
    } else {
      this.setState({
        fieldNames: {
          label: 'n',
          value: 'v',
          children: 'c'
        }
      })
    }
  }

  render() {
    const { className, valueType, ...rest } = this.props;
    const { fieldNames } = this.state;

    return (
      <Cascader
        className={classNames(className, {
          [`${prefixCls}`]: true
        })}
        options={cityData}
        onChange={(value, selectedOptions) => {
          console.log(value);
          console.log(selectedOptions);
        }}
        {...rest}
        fieldNames={fieldNames}
      />
    )
  }
}

export default CitySelect;
