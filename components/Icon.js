import React from 'react';
import { Icon } from 'galio-framework';


class IconExtra extends React.Component {
  render() {
    const { name, family, ...rest } = this.props;
    return <Icon name={name} family={family} {...rest} />;
  }
}

export default IconExtra;
