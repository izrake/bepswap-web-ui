import React, { Component } from 'react';

import { CaretRightOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import CoinIcon from '../coinIcon';
import { CoinPairWrapper } from './coinPair.style';

class CoinPair extends Component {
  render() {
    const { from, to, className, ...props } = this.props;

    return (
      <CoinPairWrapper className={`coinPair-wrapper ${className}`} {...props}>
        <div className="coin-data">
          <CoinIcon type={from} />
        </div>
        <CaretRightOutlined className="arrow-icon" />
        <div className="coin-data">
          <CoinIcon type={to} />
        </div>
      </CoinPairWrapper>
    );
  }
}

CoinPair.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'big']),
  className: PropTypes.string,
};

CoinPair.defaultProps = {
  size: 'big',
  className: '',
};

export default CoinPair;
