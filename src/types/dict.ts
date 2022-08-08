import type { PaginationParams, SSDBase } from './common';

export interface DictSSD extends SSDBase {
  /**
   * 企业编号
   */
  companyNo: string;
  /**
   * 部门编号
   */
  deptNo: string;
  /**
   * 字典编号
   */
  dictCode: string;
  /**
   * 字典标签名称
   */
  dictLabel: string;
  /**
   * 字典名称
   */
  dictName: string;
  /**
   * 标签类型
   */
  dictType: number;
  /**
   * 主键id
   */
  id?: number;
  /**
   * 组内排序
   */
  seq: number;
}

export interface AddDictParams extends DictSSD {}
export interface DictListParams extends PaginationParams {
  companyNo?: string;
  deptNo?: string;
  dictCode?: string;
  dictLabel?: string;
  dictName?: string;
  dictType?: string;
}
