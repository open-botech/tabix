import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { observer } from 'mobx-react';
import { Layout } from 'antd';
import { Flex } from 'reflexy';
import { typedInject } from '@vzh/mobx-stores';
import { Stores, DashboardStore } from 'stores';
import Page from 'components/Page';
import { DBTree } from 'components/Dashboard';

interface InjectedProps {
  store: DashboardStore;
}

export interface Props extends InjectedProps {}

type RoutedProps = Props & RouteComponentProps<any>;

@observer
class DashboardView extends React.Component<RoutedProps> {
  componentWillMount() {
    const { store } = this.props;
    store.loadData();
  }

  render() {
    const { store } = this.props;

    return (
      <Page column={false} uiStore={store.uiStore}>
        <Flex alignItems="stretch">
          <Layout>
            <Layout.Sider width="250">
              {store.databaseStructure.map(s => <DBTree dbStructure={s} />).orUndefined()}
            </Layout.Sider>
          </Layout>
        </Flex>

        <Flex column grow shrink={false} alignItems="center" justifyContent="center">
          content
        </Flex>
      </Page>
    );
  }
}

export default withRouter(
  typedInject<InjectedProps, RoutedProps, Stores>(({ store }) => ({ store: store.dashboardStore }))(
    DashboardView
  )
);
