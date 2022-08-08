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
import { marketColumns } from '@/pages/configurify/columns/marketColumns';
import CodeModal from './components/CodeModal';
import type { RefCodeModalProps } from './components/CodeModal';

const tableColumns = marketColumns;

const test = [{ col1: '云江夜市', col2: '瑞安市锦湖街道', id: 1 }];

const MarketIndex: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const history = useHistory();

  const codeModalRef = useRef<RefCodeModalProps>(null);

  const submitSuccess = useCallback(() => {
    actionRef?.current?.reload();
  }, [actionRef]);

  const handleRouteAdd = useCallback(() => {
    history.push('/market/add');
  }, []);

  const handleShowModal = useCallback((id) => {
    codeModalRef.current?.show(id);
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
              {/* <Link to={`/market/${record.id}/edit`}>编辑</Link> */}
              <Link to={`/market/add`}>编辑</Link>
              <Divider type="vertical" />
              <a onClick={() => deleteItem(record.id as number)}>删除</a>
              <Divider type="vertical" />
              <a onClick={() => handleShowModal(record.id)}>查看摇号二维码</a>
              {/* <Divider type="vertical" />
              <Link to={`/market/detail/${record.id}`}>预览</Link> */}
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
      <CodeModal ref={codeModalRef} />
    </PageContainer>
  );
};

export default MarketIndex;
