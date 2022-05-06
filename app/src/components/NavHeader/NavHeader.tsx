import React from 'react';
import css from './NavHeader.css';

interface Props {
  callback?: any;
}

export default class Page extends React.Component<Props> {
  navAction = (key: any) => {
    this.props.callback(key);
  };

  render() {
    return (
      <div className={css.root}>
        <div className={css.logo}>
          <img src="https://clickhouse.com/docs/img/clickhouse.svg" alt="" />
          <span className={css.systitle}>CKVision</span>
        </div>

        <div className={css.funlist}>
          <span className={css.systitle} onClick={() => this.navAction(1)}>
            Processes
          </span>
          <span className={css.systitle} onClick={() => this.navAction(2)}>
            Db Overview
          </span>
          <span className={css.systitle} onClick={() => this.navAction(3)}>
            Server Overview
          </span>
          <span className={css.systitle} onClick={() => this.navAction(4)}>
            Metrics server
          </span>
          <span className={css.systitle} onClick={() => this.navAction(5)}>
            History sql
          </span>
        </div>
      </div>
    );
  }
}
