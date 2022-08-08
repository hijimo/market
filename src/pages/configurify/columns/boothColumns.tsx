import { col1, col2, col3 } from '@/pages/configurify/columns/testColumns';
import { option } from '@/pages/configurify/columns/baseColumns';

export const boothCategoryColumns = {
  col1: {
    ...col1,
    title: '分类名称',
    search: true,
  },
  col2: {
    ...col2,
    title: '分类编码',
  },
  col3: {
    ...col3,
    title: '夜市',
    hideInTable: true,
    search: true,
    valueEnum: {
      [1]: { text: '云江夜市' },
    },
  },
  option,
};

export const boothColumns = {
  col1: {
    ...col1,
    title: '摊位名称',
    search: true,
  },
  col3: {
    ...col2,
    title: '分类',
  },
  col2: {
    ...col2,
    title: '夜市',
    hideInTable: true,
    search: true,
    valueEnum: {
      [1]: { text: '云江夜市' },
    },
  },
  option,
};
