import React, { useCallback } from 'react';
import { useMutation } from 'react-query';
import { Form, Input, Row, Col, Card, TimePicker, Select } from 'antd';
import type { FormInstance, FormProps } from 'antd/es/form';
import type { AddIOTCompanyParams } from '@/types';
import CompanySelect from '@/components/DataSelect/CompanySelect';
import { addIOTCompany } from '@/services/iotc';
import styles from './BoothForm.less';

interface BoothFormProps extends FormProps {
  formRef: React.RefObject<FormInstance<AddIOTCompanyParams>>;
  isEdit?: boolean;
  onSuccess?: () => void;
}

const BoothForm: React.FC<BoothFormProps> = ({
  formRef,
  isEdit = false,
  onSuccess,
  ...otherProps
}) => {
  const { mutate } = useMutation((values: AddIOTCompanyParams) => addIOTCompany(values), {
    onSuccess: () => {
      onSuccess?.();
    },
  });

  const handleFinish = useCallback(
    async (values: AddIOTCompanyParams) => {
      // mutate(values);
    },
    [mutate],
  );

  return (
    <Form {...otherProps} ref={formRef} onFinish={handleFinish} layout="vertical">
      <Card title="基本信息" className={styles.card}>
        <Row gutter={100}>
          <Col span={8}>
            <Form.Item
              label="摊位名称"
              name="iotInstanceId"
              rules={[
                {
                  required: true,
                  message: '请输入摊位名称',
                },
              ]}
            >
              <Input maxLength={100} placeholder="请输入摊位名称" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="夜市"
              name="iotInstanceId"
              rules={[
                {
                  required: true,
                  message: '请选择夜市',
                },
              ]}
            >
              <Select placeholder="请选择夜市">
                <Select.Option value="1">云江.五桥夜市</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="分类"
              name="iotInstanceId"
              rules={[
                {
                  required: true,
                  message: '请选择分类',
                },
              ]}
            >
              <Select placeholder="请选择分类">
                <Select.Option value="1">日用品区</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Card>
    </Form>
  );
};

export default BoothForm;
