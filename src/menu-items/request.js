// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  BorderOutlined,
  BoxPlotOutlined,
  ChromeOutlined,
  DeploymentUnitOutlined,
  GatewayOutlined,
  MenuUnfoldOutlined,
  QuestionOutlined,
  SmileOutlined,
  StopOutlined,
  FormOutlined,
  BankOutlined,
  BulbOutlined,
  ContainerOutlined,
  WalletOutlined
} from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  MenuUnfoldOutlined,
  BoxPlotOutlined,
  StopOutlined,
  BorderOutlined,
  SmileOutlined,
  GatewayOutlined,
  QuestionOutlined,
  DeploymentUnitOutlined,
  FormOutlined,
  BankOutlined,
  BulbOutlined,
  ContainerOutlined,
  WalletOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const request = {
  id: 'request',
  title: <FormattedMessage id="Request forms" />,
  type: 'group',
  children: [
    {
      id: 'flexcube',
      title: <FormattedMessage id="Flexcube" />,
      type: 'collapse',
      icon: icons.BankOutlined,
      children: [
        {
          id: 'fc001',
          type: 'item',
          url: 'request/fc001',
          title: <FormattedMessage id="Create new user account" />
        },
        {
          id: 'fc002',
          type: 'item',
          url: '/sample-page2',
          title: <FormattedMessage id="Modify authorization" />
        },
        {
          id: 'fc003',
          type: 'item',
          url: '/sample-page',
          title: <FormattedMessage id="Disable user account" />
        },
        {
          id: 'fc004',
          type: 'item',
          url: '/sample-page2',
          title: <FormattedMessage id="Delete user account" />
        },
        {
          id: 'fc005',
          type: 'item',
          url: '/sample-page',
          title: <FormattedMessage id="Open user account" />
        },
        {
          id: 'fc006',
          type: 'item',
          url: '/sample-page2',
          title: <FormattedMessage id="Problem solving" />
        },
        {
          id: 'fc007',
          type: 'item',
          url: '/sample-page',
          title: <FormattedMessage id="Change password" />
        },
        {
          id: 'fc008',
          type: 'item',
          url: '/sample-page2',
          title: <FormattedMessage id="Unlock user" />
        },
        {
          id: 'fc009',
          type: 'item',
          url: '/sample-page',
          title: <FormattedMessage id="Create temp user" />
        }
      ]
    },
    {
      id: 'bi',
      title: <FormattedMessage id="Business Intelligence" />,
      type: 'collapse',
      icon: icons.BulbOutlined,
      children: [
        {
          id: 'bi001',
          title: <FormattedMessage id="Create user account" />,
          type: 'item',
          url: '/samplepage'
        },
        {
          id: 'bi002',
          title: <FormattedMessage id="Delete user account" />,
          type: 'item',
          url: '/samplepage'
        },
        {
          id: 'bi003',
          title: <FormattedMessage id="Change password" />,
          type: 'item',
          url: '/samplepage'
        },
        {
          id: 'bi004',
          title: <FormattedMessage id="Disable user account" />,
          type: 'item',
          url: '/samplepage'
        },
        {
          id: 'bi005',
          title: <FormattedMessage id="Change authorization" />,
          type: 'item',
          url: '/samplepage'
        }
      ]
    },
    {
      id: 'cms',
      title: <FormattedMessage id="Cash Management" />,
      type: 'collapse',
      icon: icons.WalletOutlined,
      children: [
        {
          id: 'cms001',
          type: 'item',
          url: '/sample-page',
          title: <FormattedMessage id="Create user account" />
        },
        {
          id: 'cms002',
          title: <FormattedMessage id="Change authorization" />,
          type: 'item',
          url: '/samplepage'
        },
        {
          id: 'cms003',
          title: <FormattedMessage id="Change password" />,
          type: 'item',
          url: '/samplepage'
        },
        {
          id: 'cms004',
          title: <FormattedMessage id="Delete user account" />,
          type: 'item',
          url: '/samplepage'
        },
        {
          id: 'cms005',
          title: <FormattedMessage id="Open user account" />,
          type: 'item',
          url: '/samplepage'
        }
      ]
    },
    {
      id: 'orf',
      title: <FormattedMessage id="Online Request form" />,
      type: 'collapse',
      icon: icons.ContainerOutlined,
      children: [
        {
          id: 'orf001',
          type: 'item',
          url: '/sample-page',
          title: <FormattedMessage id="Create user account" />
        },
        {
          id: 'orf002',
          title: <FormattedMessage id="Delete user account" />,
          type: 'item',
          url: '/samplepage'
        },
        {
          id: 'orf003',
          title: <FormattedMessage id="Change authorization" />,
          type: 'item',
          url: '/samplepage'
        },
        {
          id: 'orf004',
          title: <FormattedMessage id="Change password" />,
          type: 'item',
          url: '/sample-page'
        }
      ]
    },
    {
      id: 'questionnaire',
      title: <FormattedMessage id="Questionnaire form" />,
      type: 'item',
      url: '/questionnaire/questionnaire',
      icon: icons.FormOutlined
    }
  ]
};

export default request;
