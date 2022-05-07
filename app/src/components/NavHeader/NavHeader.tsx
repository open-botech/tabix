import React from 'react';
import css from './NavHeader.css';
import { RootStore } from 'stores';
import { TabType } from 'models';
import { observer } from 'mobx-react';
import { typedInject } from 'module/mobx-utils';

interface Props {
  allStore: RootStore
}

@observer
class Page extends React.Component<Props> {
  render() {
    const { allStore } = this.props
    return (
      <div style={{
        position: allStore.currentPage ? 'sticky' : 'unset',
        top: allStore.currentPage ? '0' : 'unset',
      }} className={css.root}>
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

export default typedInject(({ store }) => {
  return {
    allStore: store,
  }
})(Page)
