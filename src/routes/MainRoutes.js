import { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'components/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));
const Questionnaire = Loadable(lazy(() => import('pages/questionnaire/questionnaire')));
const Statistics = Loadable(lazy(() => import('pages/dashboard/statistics')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: 'sample-page',
          element: <SamplePage />
        },
        {
          path: 'questionnaire',
          children: [
            {
              path: 'questionnaire',
              element: <Questionnaire />
            }
          ]
        },
        {
          path: 'dashboard',
          children: [
            {
              path: 'statistics',
              element: <Statistics />
            }
          ]
        }
      ]
    }
  ]
};

export default MainRoutes;
