/* @flow */

import React, { PureComponent } from 'react';
import classnames from 'classnames';

import '../../styles/reset.scss';
import '../../styles/module.scss';
import './MainSample.scss';

type PropTypes = {};

type StateType = {};

/**
 * MagicMirror
 * Main REACT component sample
 * Rename this component and associated resources to your convenience
 */
class MainSample extends PureComponent<PropTypes, StateType> {
  static defaultProps = {}

  constructor(props: PropTypes) {
    super(props);
  }

  /**
   * @return component markup
   */
  render() {
    return (
      <div className={classnames('MainSample', 'dimmed', 'light', 'small')}>
        <p className="MainSample__description">
          Main component sample for MM2's React template
        </p>
      </div>
    );
  }
}

export default MainSample;
