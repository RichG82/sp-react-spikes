import * as React from 'react';
import { css } from 'office-ui-fabric-react';

import styles from '../React5.module.scss';
import { IReact5WebPartProps } from '../IReact5WebPartProps';

export interface IReact5Props extends IReact5WebPartProps {
}

export interface React5State {
  counter: number;
}

export default class React5 extends React.Component<IReact5Props, React5State> {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      counter: 0
    };
  }
  public handleClick() {
    this.setState({counter:this.state.counter+1});
  }
  public render(): JSX.Element {
    return (
      <div className={styles.react5}>
        <div className={styles.container}>
          <div className={css('ms-Grid-row ms-bgColor-themeDark ms-fontColor-white', styles.row)}>
            <div className='ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1'>

              <h1>{this.props.description}</h1>
              <h1>{this.props.counter}</h1>
              <h1>{this.state.counter}</h1>
              <button onClick={this.handleClick}>Do Action</button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
