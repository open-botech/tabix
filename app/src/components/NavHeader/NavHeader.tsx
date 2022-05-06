import React from 'react';
import css from './NavHeader.css';
import { ServerAction } from '../../components/Dashboard/ServerStructureTree/ServerTitle/ContextMenu';

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
          <span className={css.systitle} onClick={() => this.navAction(ServerAction.OpenProcesses)}>
            Processes
          </span>
          <span
            className={css.systitle}
            onClick={() => this.navAction(ServerAction.OpenDbOverview)}
          >
            Db Overview
          </span>
          <span
            className={css.systitle}
            onClick={() => this.navAction(ServerAction.OpenServerOverview)}
          >
            Server Overview
          </span>
          <span className={css.systitle} onClick={() => this.navAction(ServerAction.OpenMetrics)}>
            Metrics server
          </span>
          <span
            className={css.systitle}
            onClick={() => this.navAction(ServerAction.OpenSqlHistory)}
          >
            History sql
          </span>
        </div>
      </div>
    );
  }
}
