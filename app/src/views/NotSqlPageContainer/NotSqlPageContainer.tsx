import { RootStore, TabsStore } from '../../stores';
import { TabType } from '../../models';
import {
  MetricsTabPage,
  ProcessesTabPage,
  SqlHistoryTabPage,
} from '../../components/Dashboard';
import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { typedInject } from 'module/mobx-utils';
import css from './NotSqlPageContainer.css'

type Props = {
  allStore: RootStore
  tabsStore: TabsStore
}

const NotSqlPageContainer: React.FC<Props> = (props: Props) => {
  const { allStore, tabsStore } = props
  return <>
    {
      allStore.currentPage && <div className={css.NotSqlPageContainer}>
        {allStore.currentPage === TabType.Processes && <ProcessesTabPage />}

        {allStore.currentPage === TabType.Metrics && <MetricsTabPage />}

        {allStore.currentPage === TabType.SqlHistory && (
          <SqlHistoryTabPage onEdit={tabsStore.openNewEditorTab} />
        )}
      </div>
    }
  </>
}

export default typedInject(({store}) => {
  return {
    tabsStore: store.tabsStore,
    allStore: store,
  }
})(observer(NotSqlPageContainer))
// observer((store) => {
//   console.log(store, '9999999999')
//   return <NotSqlPageContainer allStore={store} tabsStore={store.tabsStore} />
// })
