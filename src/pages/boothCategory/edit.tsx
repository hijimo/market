import React, { useRef, useCallback, useMemo } from 'react';
import { Card, Button, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useHistory, useParams } from 'umi';
import { useQuery, useQueryClient } from 'react-query';
import type { FormInstance } from 'antd/es/form';
import { getIOTCompanyInfo } from '@/services/iotc';
import type { AddIOTCompanyParams } from '@/types';
import BoothCategoryForm from './components/BoothCategoryForm';

const EditIndex: React.FC = () => {
  const formRef = useRef<FormInstance<AddIOTCompanyParams>>(null);
  const history = useHistory();
  const queryClient = useQueryClient();
  const { id }: { id: string } = useParams();

  // const { data } = useQuery(['iotCompanyInfo', id], () => getIOTCompanyInfo(id), {
  //   enabled: !!id,
  //   select: (d) => d.data,
  // });

  const data = {};

  const initialValues = useMemo(() => {
    if (!data) return undefined;
    const values: any = {
      ...data,
    };
    return values;
  }, [data]);

  const handleSuccess = useCallback(() => {
    message.success('操作成功');
    queryClient.invalidateQueries(['iotCompanyInfo', id]);
    history.replace('/iotc');
  }, [history]);

  const handleCancel = useCallback(() => {
    history.goBack();
  }, []);

  const handleSubmit = useCallback(() => {
    formRef.current?.submit();
  }, []);

  return (
    <PageContainer
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          取消
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          提交
        </Button>,
      ]}
    >
      <Card>
        {initialValues !== undefined && (
          <BoothCategoryForm
            formRef={formRef}
            onSuccess={handleSuccess}
            initialValues={initialValues}
          />
        )}
      </Card>
    </PageContainer>
  );
};

export default EditIndex;
