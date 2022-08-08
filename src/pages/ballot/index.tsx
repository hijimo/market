import _values from 'lodash/values';
import { produce } from 'immer';
import React, { useRef, useMemo, useCallback } from 'react';
import { useMutation } from 'react-query';
import { Link } from 'umi';
import { useHistory } from 'umi';
import { Button, Divider, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType } from '@ant-design/pro-table';
import type { IOTCompanySSD } from '@/types';
import { getIOTCompanyList, deleteIOTCompany } from '@/services/iotc';
import useTableRequest from '@/hooks/useTableRequest';
import CommonTable from '@/components/CommonTable';
import { ballotColumns } from '@/pages/configurify/columns/ballotColumns';

const tableColumns = ballotColumns;

const test = [
  { col1: '20220720云江.五桥夜市摊位摇号结果', col2: '200', col3: '250', col4: '80%', id: 1 },
];

const BollotIndex: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const history = useHistory();

  const submitSuccess = useCallback(() => {
    actionRef?.current?.reload();
  }, [actionRef]);

  const { mutate: deletetListItem } = useMutation((id: number) => deleteIOTCompany(id), {
    onSuccess: () => {
      message.success('操作成功');
      submitSuccess?.();
    },
  });

  const deleteItem = useCallback(
    (id: number) => {
      Modal.confirm({
        title: '删除实例确认',
        content: '确认删除该实例',
        okText: '确认',
        cancelText: '取消',
        okType: 'danger',
        onOk: () => {
          // deletetListItem(id);
        },
      });
    },
    [deletetListItem],
  );

  const fetchDate = useTableRequest(getIOTCompanyList);

  const columns = useMemo(() => {
    return _values(
      produce(tableColumns, (draft) => {
        draft.option!.render = (_, record: IOTCompanySSD) => {
          return (
            <>
              <Link to="/ballot/detail">详情</Link>
            </>
          );
        };
      }),
    );
  }, [deleteItem]);

  return (
    <PageContainer>
      <CommonTable
        rowKey="id"
        actionRef={actionRef}
        // request={fetchDate}
        dataSource={test}
        columns={columns}
      />
    </PageContainer>
  );
};

export default BollotIndex;
