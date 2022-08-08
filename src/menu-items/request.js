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
  title: <FormattedMessage id="request-forms" />,
  type: 'group',
  children: [
    {
      id: 'flexcube',
      title: <FormattedMessage id="flexcube" />,
      type: 'collapse',
      icon: icons.BankOutlined,
      children: [
        {
          id: 'fc001',
          type: 'item',
          url: 'request/fc001',
          title: <FormattedMessage id="new-acc" />
        },
        {
          id: 'fc002',
          type: 'item',
          url: '/sample-page2',
          title: <FormattedMessage id="chg-auth" />
        },
        {
          id: 'fc003',
          type: 'item',
          url: '/sample-page',
          title: <FormattedMessage id="dis-acc" />
        },
        {
          id: 'fc004',
          type: 'item',
          url: '/sample-page2',
          title: <FormattedMessage id="del-acc" />
        },
        {
          id: 'fc005',
          type: 'item',
          url: '/sample-page',
          title: <FormattedMessage id="open-acc" />
        },
        {
          id: 'fc006',
          type: 'item',
          url: '/sample-page2',
          title: <FormattedMessage id="prob-req" />
        },
        {
          id: 'fc007',
          type: 'item',
          url: '/sample-page',
          title: <FormattedMessage id="chg-pwd" />
        },
        {
          id: 'fc008',
          type: 'item',
          url: '/sample-page2',
          title: <FormattedMessage id="unl-usr" />
        },
        {
          id: 'fc009',
          type: 'item',
          url: '/sample-page',
          title: <FormattedMessage id="tmp-usr" />
        }
      ]
    },
    {
      id: 'bi',
      title: <FormattedMessage id="bi" />,
      type: 'collapse',
      icon: icons.BulbOutlined,
      children: [
        {
          id: 'bi001',
          title: <FormattedMessage id="new-acc" />,
          type: 'item',
          url: '/samplepage'
        },
        {
          id: 'bi002',
          title: <FormattedMessage id="del-acc" />,
          type: 'item',
          url: '/samplepage'
        },
        {
          id: 'bi003',
          title: <FormattedMessage id="chg-pwd" />,
          type: 'item',
          url: '/samplepage'
        },
        {
          id: 'bi004',
          title: <FormattedMessage id="dis-acc" />,
          type: 'item',
          url: '/samplepage'
        },
        {
          id: 'bi005',
          title: <FormattedMessage id="chg-auth" />,
          type: 'item',
          url: '/samplepage'
        }
      ]
    },
    {
      id: 'cms',
      title: <FormattedMessage id="cm" />,
      type: 'collapse',
      icon: icons.WalletOutlined,
      children: [
        {
          id: 'cms001',
          type: 'item',
          url: '/sample-page',
          title: <FormattedMessage id="new-acc" />
        },
        {
          id: 'cms002',
          title: <FormattedMessage id="chg-auth" />,
          type: 'item',
          url: '/samplepage'
        },
        {
          id: 'cms003',
          title: <FormattedMessage id="chg-pwd" />,
          type: 'item',
          url: '/samplepage'
        },
        {
          id: 'cms004',
          title: <FormattedMessage id="del-acc" />,
          type: 'item',
          url: '/samplepage'
        },
        {
          id: 'cms005',
          title: <FormattedMessage id="open-acc" />,
          type: 'item',
          url: '/samplepage'
        }
      ]
    },
    {
      id: 'orf',
      title: <FormattedMessage id="orf" />,
      type: 'collapse',
      icon: icons.ContainerOutlined,
      children: [
        {
          id: 'orf001',
          type: 'item',
          url: '/orf/newUser',
          title: <FormattedMessage id="new-acc" />
        },
        {
          id: 'orf002',
          title: <FormattedMessage id="del-acc" />,
          type: 'item',
          url: '/orf/deleteUser'
        },
        {
          id: 'orf003',
          title: <FormattedMessage id="chg-auth" />,
          type: 'item',
          url: '/orf/newAuth'
        },
        {
          id: 'orf004',
          title: <FormattedMessage id="chg-pwd" />,
          type: 'item',
          url: '/orf/changePassword'
        }
      ]
    },
    {
      id: 'questionnaire',
      title: <FormattedMessage id="qf" />,
      type: 'item',
      url: '/questionnaire/questionnaire',
      icon: icons.FormOutlined
    }
  ]
};

export default request;
