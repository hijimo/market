import { col1, col2 } from '@/pages/configurify/columns/testColumns';
import { option } from '@/pages/configurify/columns/baseColumns';

export const marketColumns = {
  col1: {
    ...col1,
    title: '夜市名称',
    search: true,
  },
  col2: {
    ...col2,
    title: '夜市地址',
  },
  option,
};
