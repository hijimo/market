import { useCallback } from 'react';
import { ResponseData } from '@/utils/request';
const transformDataToProTable = (result: any) => {
  return {
    data: result?.data?.records,
    total: result?.data?.totalCount,
    success: result?.success,
    pageSize: result?.data?.pageSize,
    current: result?.data?.pageNo,
  };
};

const useTableRequest = (
  dataLoader?: (params: any) => Promise<any>,
  getParams?: (params: any) => any,
  transform?: (result: ResponseData) => any,
) => {
  const request = useCallback(
    async (params: any) => {
      const newParams = {
        ...params,
        current: undefined,
        pageNo: params.current,
        ...getParams?.(params),
      };
      const result: any = await dataLoader?.(newParams);
      const transformedResult = transform?.(result) || transformDataToProTable(result);
      return Promise.resolve(transformedResult);
    },
    [dataLoader],
  );
  return request;
};

export default useTableRequest;
