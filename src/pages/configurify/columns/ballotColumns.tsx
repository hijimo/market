import { col1, col2, col3, col4, col5 } from '@/pages/configurify/columns/testColumns';
import { option, gmtCreate } from '@/pages/configurify/columns/baseColumns';
import { BooleanDesc } from '@/enum';

export const ballotColumns = {
  col1: {
    ...col1,
    title: '名称',
    search: false,
  },
  col2: {
    ...col2,
    title: '摊位数',
  },
  col3: {
    ...col3,
    title: '摇号人数',
  },
  col4: {
    ...col4,
    title: '中签率',
  },
  col5: {
    ...col5,
    title: '夜市',
    hideInTable: true,
    search: true,
    valueEnum: {
      [1]: { text: '云江夜市' },
    },
  },
  gmtCreate: {
    ...gmtCreate,
    hideInTable: true,
    search: true,
    title: '日期',
  },
  option,
};

export const ballotDetailColumns = {
  col1: {
    ...col1,
    title: '摊主',
    search: true,
  },
  col5: {
    ...col5,
    title: '夜市',
    search: true,
    hideInTable: true,
    valueEnum: {
      [1]: { text: '云江夜市' },
    },
  },
  col3: {
    ...col3,
    title: '摊位分区',
    search: true,
  },
  col2: {
    ...col2,
    title: '摊位',
    search: true,
  },
  col4: {
    ...col4,
    title: '是否中签',
    hideInTable: true,
    valueEnum: BooleanDesc,
    search: true,
  },
  gmtCreate: {
    ...gmtCreate,
    search: true,
    title: '日期',
  },
};
