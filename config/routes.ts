// import { AuthorityMap } from '../src/access';
// import runtimeConfig from './runtime';

// path: `${runtimeConfig.heraOrigin}/roleManage`,

export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    menu: {
      flatMenu: true,
    },
    routes: [
      {
        path: '/',
        redirect: '/welcome',
      },
      {
        path: '/welcome',
        name: 'welcome',
        title: '欢迎',
        component: './Welcome',
        hideInMenu: true,
      },
      {
        path: '/ballot/h5',
        name: 'ballotH5',
        layout: false,
        component: './ballot/h5',
        hideInMenu: true,
      },

      {
        path: '/user',
        layout: false,
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/login',
          },
        ],
      },

      {
        path: '/market',
        name: 'market',
        icon: 'shop',
        routes: [
          {
            path: './',
            name: 'index',
            component: './market',
            hideInMenu: true,
            // exact: true,
          },
          {
            path: 'add',
            name: 'add',
            component: './market/add',
            hideInMenu: true,
          },
          {
            path: ':id/edit',
            name: 'edit',
            component: './market/edit',
            hideInMenu: true,
          },
        ],
      },
      {
        path: '/boothCategory',
        name: 'boothCategory',
        icon: 'shareAlt',
        routes: [
          {
            path: './',
            name: 'index',
            component: './boothCategory',
            hideInMenu: true,
            // exact: true,
          },
          {
            path: 'add',
            name: 'add',
            component: './boothCategory/add',
            hideInMenu: true,
          },
          {
            path: ':id/edit',
            name: 'edit',
            component: './boothCategory/edit',
            hideInMenu: true,
          },
        ],
      },
      {
        path: '/booth',
        name: 'booth',
        icon: 'sound',
        routes: [
          {
            path: './',
            name: 'index',
            component: './booth',
            hideInMenu: true,
            // exact: true,
          },
          {
            path: 'add',
            name: 'add',
            component: './booth/add',
            hideInMenu: true,
          },
          {
            path: ':id/edit',
            name: 'edit',
            component: './booth/edit',
            hideInMenu: true,
          },
          {
            path: ':id/history',
            name: 'history',
            component: './booth/history',
            hideInMenu: true,
          },
        ],
      },
      {
        path: '/ballot',
        name: 'ballot',
        icon: 'shake',
        routes: [
          {
            path: './',
            name: 'index',
            component: './ballot',
            hideInMenu: true,
          },
          {
            path: 'detail',
            name: 'detail',
            component: './ballot/detail',
            hideInMenu: true,
          },
        ],
      },
      {
        path: '/system',
        icon: 'setting',
        name: 'system',
        routes: [
          {
            path: 'role',
            name: 'role',
            icon: 'TeamOutlined',
            routes: [
              {
                // access: AuthorityMap.ROLE_INDEX,
                path: './',
                name: 'index',
                hideInMenu: true,
                component: './system/role',
                exact: true,
              },
              {
                // access: AuthorityMap.ROLE_ADD,
                path: 'add',
                name: 'add',
                hideInMenu: true,
                component: './system/role/add',
              },
              {
                // access: AuthorityMap.ROLE_EDIT,
                path: ':id/edit',
                name: 'edit',
                hideInMenu: true,
                component: './system/role/edit',
              },
            ],
          },
          {
            path: 'user',
            name: 'user',
            icon: 'UserOutlined',
            routes: [
              {
                // access: AuthorityMap.USER_INDEX,
                path: './',
                name: 'index',
                hideInMenu: true,
                component: './system/user',
                exact: true,
              },
              {
                // access: AuthorityMap.USER_ADD,
                path: 'add',
                name: 'add',
                hideInMenu: true,
                component: './system/user/add',
              },
              {
                // access: AuthorityMap.USER_EDIT,
                path: ':id/edit',
                name: 'edit',
                hideInMenu: true,
                component: './system/user/edit',
              },
            ],
          },
          {
            path: 'company',
            name: 'company',
            hideInMenu: true,
            icon: 'MenuOutlined',
            routes: [
              {
                // access: AuthorityMap.COMPANY_INDEX,
                path: './',
                name: 'index',
                hideInMenu: true,
                component: './system/company',
                exact: true,
              },
              {
                // access: AuthorityMap.COMPANY_ADD,
                path: 'add',
                name: 'add',
                hideInMenu: true,
                component: './system/company/add',
              },
              {
                // access: AuthorityMap.COMPANY_DETAIL,
                path: ':id',
                name: 'companyDetail',
                hideInMenu: true,
                exact: true,
                component: './system/company/detail',
              },
              {
                // access: AuthorityMap.COMPANY_EDIT,
                path: ':id/edit',
                name: 'edit',
                hideInMenu: true,
                component: './system/company/edit',
              },
            ],
          },
          {
            path: 'dept',
            name: 'dept',
            hideInMenu: true,
            icon: 'MenuOutlined',
            routes: [
              {
                // access: AuthorityMap.DEPT_INDEX,
                path: './',
                name: 'index',
                hideInMenu: true,
                component: './system/dept',
                exact: true,
              },
              {
                // access: AuthorityMap.DEPT_ADD,
                path: 'add',
                name: 'add',
                hideInMenu: true,
                component: './system/dept/add',
              },
              {
                // access: AuthorityMap.DEPT_EDIT,
                path: ':id/edit',
                name: 'edit',
                hideInMenu: true,
                component: './system/dept/edit',
              },
            ],
          },
          // {
          //   path: '/system/dict',
          //   name: 'dict',
          //   icon: 'MenuOutlined',
          //   hideInMenu: true,
          //   routes: [
          //     {
          //       path: '/system/dict',
          //       name: 'index',
          //       hideInMenu: true,
          //       component: './system/dict',
          //       exact: true,
          //     },
          //     {
          //       path: '/system/dict/add',
          //       name: 'add',
          //       hideInMenu: true,
          //       component: './system/dict/add',
          //     },
          //     {
          //       path: '/system/dict/:id/edit',
          //       name: 'edit',
          //       hideInMenu: true,
          //       component: './system/dict/edit',
          //     },
          //   ],
          // },
          {
            // access: AuthorityMap.LOG_INDEX,
            path: '/system/log',
            name: 'log',
            icon: 'MenuOutlined',
            hideInMenu: true,
            component: './system/log',
          },
        ],
      },

      {
        // access: AuthorityMap.ACCOUNT_INFO,
        path: '/account',
        name: 'account',
        component: './account',
        hideInMenu: true,
      },
      {
        component: './404',
      },
    ],
  },
];
