import type { ProColumns } from '@ant-design/pro-table';
import type { DictSSD } from '@/types';
import { key, option, companyNo, gmtCreate } from './baseColumns';

const dictCode: ProColumns<DictSSD> = {
  title: '字典编码',
  dataIndex: 'dictCode',
  className: 'nowrap',
};

const dictName: ProColumns<DictSSD> = {
  title: '字典名称',
  dataIndex: 'dictName',
  className: 'nowrap',
};

const dictType: ProColumns<DictSSD> = {
  title: '标签类型',
  dataIndex: 'dictType',
  className: 'nowrap',
  search: false,
};

const seq: ProColumns<DictSSD> = {
  title: '组内排序',
  dataIndex: 'seq',
  className: 'nowrap',
  search: false,
};

export const dictColumns: Record<string, ProColumns<DictSSD>> = {
  key,
  companyNo,
  dictCode,
  dictName,
  dictType,
  seq,
  gmtCreate,
  option,
};
