import { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'components/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));
const Questionnaire = Loadable(lazy(() => import('pages/questionnaire/questionnaire')));
const Statistics = Loadable(lazy(() => import('pages/dashboard/statistics')));
const Filtering = Loadable(lazy(() => import('pages/tables/react-table/filtering')));
const Basic = Loadable(lazy(() => import('pages/tables/react-table/basic')));
const NewUser = Loadable(lazy(() => import('pages/forms/orf/newUser')));
const NewAuth = Loadable(lazy(() => import('pages/forms/orf/newAuth')));
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
        },
        {
          path: 'tables',
          children: [
            {
              path: 'react-table',
              children: [{ path: 'basic', element: <Basic /> }]
            },
            {
              path: 'react-table',
              children: [{ path: 'filtering', element: <Filtering /> }]
            }
          ]
        },
        {
          path: 'orf',
          children: [
            {
              path: 'newUser',
              element: <NewUser />
            },
            {
              path: 'newAuth',
              element: <NewAuth />
            }
          ]
        }
      ]
    }
  ]
};

export default MainRoutes;
