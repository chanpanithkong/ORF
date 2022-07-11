// material-ui
// import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

// project imports
// import ReportCard from 'components/cards/statistics/ReportCard';
// import HoverSocialCard from 'components/cards/statistics/HoverSocialCard';
// import RoundIconCard from 'components/cards/statistics/RoundIconCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
// import UserCountCard from 'components/cards/statistics/UserCountCard';
// import LabelledTasks from 'sections/dashboard/analytics/LabelledTasks';
// import ReaderCard from 'sections/dashboard/analytics/ReaderCard';

// assets
// import {
//   AimOutlined,
//   BarChartOutlined,
//   CalendarOutlined,
//   ContactsOutlined,
//   DownloadOutlined,
//   EyeOutlined,
//   FacebookOutlined,
//   FileTextOutlined,
//   FileProtectOutlined,
//   FieldTimeOutlined,
//   LinkedinOutlined,
//   RedditOutlined,
//   TwitterOutlined,
//   YoutubeOutlined
// } from '@ant-design/icons';

// ===========================|| WIDGET - STATISTICS ||=========================== //

const WidgetStatistics = () => {
  // const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Requests" count="4,42,236" percentage={59.3} extra="35,000" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Open Requests" count="120" percentage={20.5} color="success" extra="8,900" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Issues" count="300" percentage={27.4} isLoss color="warning" extra="1,943" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Open Issues" count="10" percentage={2} isLoss color="error" extra="$20,395" />
      </Grid>
    </Grid>
  );
};

export default WidgetStatistics;
