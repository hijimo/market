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
import { boothColumns } from '@/pages/configurify/columns/boothColumns';

const tableColumns = boothColumns;

const test = [{ col1: '日用品01', col2: '云江.五桥夜市', col3: '日用品区', id: 1 }];

const BoothIndex: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const history = useHistory();

  const submitSuccess = useCallback(() => {
    actionRef?.current?.reload();
  }, [actionRef]);

  const handleRouteAdd = useCallback(() => {
    history.push('/booth/add');
  }, []);

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
              {/* <Link to={`/booth/${record.id}/edit`}>编辑</Link> */}
              <Link to={`/booth/add`}>编辑</Link>
              <Divider type="vertical" />
              <a onClick={() => deleteItem(record.id as number)}>删除</a>
              <Divider type="vertical" />
              <Link to={`/booth/${record.id}/history`}>经营记录</Link>
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
        toolBarRender={() => [
          <Button type="primary" onClick={handleRouteAdd} key="add">
            <PlusOutlined /> 新增
          </Button>,
        ]}
      />
    </PageContainer>
  );
};

export default BoothIndex;
