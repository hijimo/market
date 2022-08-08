import React, { useCallback } from 'react';
import { useMutation } from 'react-query';
import { Form, Input, Row, Col, Card, TimePicker } from 'antd';
import type { FormInstance, FormProps } from 'antd/es/form';
import type { AddIOTCompanyParams } from '@/types';
import CompanySelect from '@/components/DataSelect/CompanySelect';
import { addIOTCompany } from '@/services/iotc';
import styles from './MarketForm.less';

interface MarketFormProps extends FormProps {
  formRef: React.RefObject<FormInstance<AddIOTCompanyParams>>;
  isEdit?: boolean;
  onSuccess?: () => void;
}

const MarketForm: React.FC<MarketFormProps> = ({
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
              label="夜市名称"
              name="iotInstanceId"
              rules={[
                {
                  required: true,
                  message: '请输入夜市名称',
                },
              ]}
            >
              <Input maxLength={100} placeholder="请输入夜市名称" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="地址"
              name="instanceName"
              rules={[
                {
                  required: true,
                  message: '请输入地址',
                },
              ]}
            >
              <Input maxLength={100} placeholder="请输入地址" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="所属街道"
              name="iotHost"
              rules={[
                {
                  required: true,
                  message: '请输入所属街道',
                },
              ]}
            >
              <Input placeholder="请输入所属街道" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="营业时间"
              name="productKey"
              rules={[
                {
                  required: true,
                  message: '请输入营业时间',
                },
              ]}
            >
              <TimePicker.RangePicker />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="腾讯地址经/纬度"
              name="productName"
              rules={[
                {
                  required: true,
                  message: '请输入腾讯地址经/纬度',
                },
              ]}
            >
              <Input placeholder="请输入腾讯地址经/纬度" />
            </Form.Item>
          </Col>
        </Row>
      </Card>
    </Form>
  );
};

export default MarketForm;
