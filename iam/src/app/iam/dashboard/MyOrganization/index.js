import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { inject, observer } from 'mobx-react';
import { DashBoardNavBar } from 'choerodon-front-boot';
import { Table } from 'choerodon-ui';
import OrganizationInfoStore from '../../stores/user/organization-info';
import './index.scss';

const intlPrefix = 'dashboard.myorganization';

@withRouter
@inject('AppState', 'HeaderStore')
@observer
export default class MyOrganization extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData = () => {
    OrganizationInfoStore.loadMyOrganizations();
  };

  handleRowClick({ id, name }) {
    const { history } = this.props;
    history.push(`/?type=organization&id=${id}&name=${encodeURIComponent(name)}`);
  }

  handleRow = (record) => {
    return {
      onClick: this.handleRowClick.bind(this, record),
    };
  };

  getTableColumns() {
    return [{
      title: <FormattedMessage id={`${intlPrefix}.name`} />,
      dataIndex: 'name',
      key: 'name',
    }, {
      title: <FormattedMessage id={`${intlPrefix}.code`} />,
      dataIndex: 'code',
      key: 'code',
    }];
  }

  render() {
    const { myOrganizationData, loading } = OrganizationInfoStore;
    return (
      <div className="c7n-iam-dashboard-my-organization">
        <section>
          <Table
            loading={loading}
            columns={this.getTableColumns()}
            dataSource={myOrganizationData.slice()}
            filterBar={false}
            pagination={false}
            rowKey="code"
            onRow={this.handleRow}
          />
        </section>
        <DashBoardNavBar>
          <Link to="/iam/organization-info?type=site"><FormattedMessage id={`${intlPrefix}.redirect`} /></Link>
        </DashBoardNavBar>
      </div>
    );
  }
}
