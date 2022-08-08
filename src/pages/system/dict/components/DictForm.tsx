import React, { useCallback } from 'react';
import { useMutation } from 'react-query';
import { Form, Input, Row, Col, Card } from 'antd';
import type { FormInstance, FormProps } from 'antd/es/form';
import type { AddDictParams } from '@/types';
import { addDict } from '@/services/dict';
import styles from './DictForm.less';

interface DictFormProps extends FormProps {
  formRef: React.RefObject<FormInstance<AddDictParams>>;
  onSuccess?: () => void;
}

const DictForm: React.FC<DictFormProps> = ({ formRef, onSuccess, ...otherProps }) => {
  const { mutate } = useMutation((values: AddDictParams) => addDict(values), {
    onSuccess: () => {
      onSuccess?.();
    },
  });

  const handleFinish = useCallback(
    async (values: AddDictParams) => {
      mutate(values);
    },
    [mutate],
  );

  return (
    <Form {...otherProps} ref={formRef} onFinish={handleFinish} layout="vertical">
      <Card className={styles.card}>
        <Row gutter={100}>
          <Col span={8}>
            <Form.Item hidden name="id">
              <Input placeholder="这是一个隐藏起来的表单域" />
            </Form.Item>

            <Form.Item
              label="字典名称	"
              name="dictName"
              rules={[
                {
                  required: true,
                  message: '请输入字典名称',
                },
              ]}
            >
              <Input maxLength={50} placeholder="请输入昵称" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="字典标签名称"
              name="dictLabel"
              rules={[
                {
                  required: true,
                  message: '请输入字典标签名称',
                },
              ]}
            >
              <Input maxLength={50} placeholder="请输入字典标签名称" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="字典编码"
              name="dictCode"
              rules={[
                {
                  required: true,
                  message: '请输入字典编码',
                },
              ]}
            >
              <Input maxLength={50} placeholder="请输入字典编码" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="标签类型	"
              name="dictType"
              rules={[
                {
                  required: true,
                  message: '请输入标签类型',
                },
              ]}
            >
              <Input maxLength={50} placeholder="请输入标签类型" />
            </Form.Item>
          </Col>
        </Row>
      </Card>
    </Form>
  );
};

export default DictForm;
