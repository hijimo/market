import { Modal } from 'antd';

import type { ModalProps } from 'antd/es/modal';
import React, { useCallback, useImperativeHandle, useState } from 'react';
import qrcode from '@/assets/qrcode.png';

interface CodeModalProps
  extends Omit<ModalProps, 'visible' | 'onOk' | 'confirmLoading' | 'destroyOnClose'> {
  onSuccess?: () => void;
}

export interface RefCodeModalProps {
  show: (id: string) => void;
  hide: () => void;
}

const InternalCodeModal = (
  { onSuccess, ...otherProps }: CodeModalProps,
  ref: React.Ref<RefCodeModalProps>,
) => {
  const [visible, setVisible] = useState(false);
  const [record, setRecord] = useState<string>();

  useImperativeHandle(ref, () => ({
    show: (data) => {
      if (data) {
        setRecord(data);
      } else {
        setRecord(undefined);
      }
      setVisible(true);
    },
    hide: () => setVisible(false),
  }));

  const handleCancel = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <Modal
      {...otherProps}
      title="二维码"
      visible={visible}
      onCancel={handleCancel}
      cancelText="关闭"
      destroyOnClose
      okButtonProps={{
        style: { display: 'block' },
      }}
    >
      <img src={qrcode} style={{ width: 300, display: 'block', margin: '0 auto' }} />
    </Modal>
  );
};

const CodeModal = React.forwardRef(InternalCodeModal) as (
  props: CodeModalProps & { ref?: React.Ref<RefCodeModalProps> },
) => React.ReactElement;

export default CodeModal;
