import React, { useCallback } from 'react';
import { useMutation } from 'react-query';
import { Form, Input, Row, Col, Card, TimePicker, Select, Button } from 'antd';
import type { FormInstance, FormProps } from 'antd/es/form';
import type { AddIOTCompanyParams } from '@/types';
import CompanySelect from '@/components/DataSelect/CompanySelect';
import FormListTitle from '@/components/FormList/FormListTitle';
import { addIOTCompany } from '@/services/iotc';
import styles from './BoothForm.less';

interface BoothFormProps extends FormProps {}

const BoothForm: React.FC<BoothFormProps> = ({ ...otherProps }) => {
  const [form] = Form.useForm();
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
    <div style={{ padding: 32 }}>
      <FormListTitle>欢迎参加云江.五桥夜市第2022-05期摊位摇号</FormListTitle>
      <Form form={form} onFinish={handleFinish} layout="vertical">
        <Form.Item
          label="姓名"
          name="name"
          rules={[
            {
              required: true,
              message: '请输入您的姓名',
            },
          ]}
        >
          <Input size="large" maxLength={20} placeholder="请输入您的姓名" />
        </Form.Item>
        {/* 这里验证姓名、手机号是否在数据库中，验证通过后发送验证码。一天最多10条  */}
        <Form.Item
          label="手机号"
          name="phone"
          rules={[
            {
              required: true,
              message: '请输入您的手机号',
            },
          ]}
        >
          <Input
            size="large"
            maxLength={20}
            type="number"
            placeholder="请输入您的手机号"
            addonAfter={
              <a
                onClick={() => {
                  console.log('123');
                }}
              >
                获取验证码
              </a>
            }
          />
        </Form.Item>
        <Form.Item
          label="验证码"
          name="phonecode"
          rules={[
            {
              required: true,
              message: '请输入手机短信码',
            },
          ]}
        >
          <Input size="large" maxLength={6} type="number" placeholder="请输入手机短信码" />
        </Form.Item>

        <Button type="primary" htmlType="submit" size="large" style={{ width: '100%' }}>
          提交
        </Button>
      </Form>
    </div>
  );
};

export default BoothForm;
