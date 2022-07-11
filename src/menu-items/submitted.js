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
  CarryOutOutlined,
  FileDoneOutlined
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
  FileDoneOutlined,
  CarryOutOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const submitted = {
  id: 'submitted',
  title: <FormattedMessage id="Submitted forms" />,
  type: 'group',
  icons: icons.ContainerOutlined,
  children: [
    {
      id: 'orf',
      title: <FormattedMessage id="Submitted Requests" />,
      type: 'item',
      url: '/sample-page',
      icon: icons.FileDoneOutlined
    },
    {
      id: 'orf2',
      title: <FormattedMessage id="Submitted Questionnaire" />,
      type: 'item',
      url: '/sample-page',
      icon: icons.CarryOutOutlined
    }
  ]
};

export default submitted;
