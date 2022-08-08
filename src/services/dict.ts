import type { DictSSD, DictListParams, DictAddParams } from '@/types';
import type { ResponseData, PaginationData } from '@/utils/request';
import request from '@/utils/request';

/**
 * 数据字典表-分页查询
 * @param DictListParams
 * @returns DictSSD[]
 */
export async function getDictList(params: DictListParams) {
  return request<ResponseData<PaginationData<DictSSD[]>>>('/api/dictPo/page', {
    params,
  });
}

/**
 * 数据字典表-新增-修改
 * @param DictAddParams
 * @returns
 */
export async function addDict(data: DictAddParams) {
  return request<ResponseData>('/api/dictPo/edit', {
    method: 'POST',
    data,
  });
}

/**
 * 删除角色
 * @param data
 * @returns
 */
export async function deleteDict(id: number | string) {
  return request<ResponseData>('/api/dictPo/del', {
    method: 'POST',
    data: { id },
  });
}

/**
 * 数据字典表-根据主键ID查看详情
 * @param params id
 * @returns DictSSD
 */
export async function getDictInfo(id: number | string) {
  return request<ResponseData<DictSSD>>('/api/dictPo/info', {
    params: { id },
  });
}
