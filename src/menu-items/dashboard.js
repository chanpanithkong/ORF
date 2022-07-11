// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, DatabaseOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  DatabaseOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const dashboard = {
  id: 'group-dashboard',
  type: 'group',

  title: <FormattedMessage id="Dashboard" />,
  children: [
    {
      id: 'statistics',
      title: <FormattedMessage id="Statistics" />,
      type: 'item',
      url: '/dashboard/statistics',
      icon: icons.DashboardOutlined
    }
  ]
};

export default dashboard;
