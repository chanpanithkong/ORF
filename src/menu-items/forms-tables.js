// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  CloudUploadOutlined,
  FileDoneOutlined,
  FormOutlined,
  PieChartOutlined,
  StepForwardOutlined,
  TableOutlined,
  InsertRowAboveOutlined
} from '@ant-design/icons';

// icons
const icons = {
  CloudUploadOutlined,
  FileDoneOutlined,
  FormOutlined,
  PieChartOutlined,
  StepForwardOutlined,
  TableOutlined,
  InsertRowAboveOutlined
};

// ==============================|| MENU ITEMS - FORMS & TABLES ||============================== //

const formsTables = {
  id: 'group-forms-tables',
  title: <FormattedMessage id="forms-tables" />,
  type: 'group',
  icon: icons.InsertRowAboveOutlined,
  children: [
    { id: 'rt-basic', title: <FormattedMessage id="basic" />, type: 'item', url: '/tables/react-table/basic', icon: icons.TableOutlined },
    { id: 'rt-sorting', title: <FormattedMessage id="sorting" />, type: 'item', url: '/tables/react-table/sorting' },
    { id: 'rt-filtering', title: <FormattedMessage id="filtering" />, type: 'item', url: '/tables/react-table/filtering' }
  ]
};

export default formsTables;
