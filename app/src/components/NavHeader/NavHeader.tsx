import React from 'react';
import css from './NavHeader.css';
import { ServerAction } from '../../components/Dashboard/ServerStructureTree/ServerTitle/ContextMenu';
import { RootStore, Stores } from 'stores';
import { TabType } from 'models';

interface Props {
  callback?: any;
  allStore: RootStore
}

export default class Page extends React.Component<Props> {
  navAction = (key: ServerAction) => {
    this.props.callback(key);
  };

  render() {
    const { allStore } = this.props
    return (
      <div className={css.root}>
        <div className={css.logo}>
          <img src="https://clickhouse.com/docs/img/clickhouse.svg" alt="" />
          <span className={css.systitle}>CKVision</span>
        </div>

        <div className={css.funlist}>
        <span className={css.systitle} onClick={() => {
            allStore.changeCurrentPage('')
          }}>
            Sql
          </span>
          <span className={css.systitle} onClick={() => {
            allStore.changeCurrentPage(TabType.Processes)
          }}>
            Processes
          </span>
          {/* <span
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
          </span> */}
          <span className={css.systitle} onClick={() => {
            allStore.changeCurrentPage(TabType.Metrics)
          }}>
            Metrics server
          </span>
          <span
            className={css.systitle}
            onClick={() => {
              allStore.changeCurrentPage(TabType.SqlHistory)
            }}
          >
            History sql
          </span>
        </div>
      </div>
    );
  }
}
