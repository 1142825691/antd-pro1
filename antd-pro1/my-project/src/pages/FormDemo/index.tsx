import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Input, Radio } from 'antd';
import styles from './index.less';

export default () => {
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const [form] = Form.useForm();
  const ruleForm = {
    username: 'wangwu',
    select: 1,
    email: '1@qq.com',
    alias: 'zhansan',
  };
  const onFinish = (values: { [key: string]: any }) => {
    //提交按钮 获取values数据  请求ajax
    console.log(values);
  };
  const onValuesChange = (value: { [key: string]: any }) => {
    if (value.select === 'a') {
      console.log(value);
      setIsSelect(true);
    }else{
      setIsSelect(false);
    }
  };
  useEffect(() => {

  }, []);
  return (
    <PageHeaderWrapper content="获取表单基本信息！" className={styles.main}>
      <div style={{ paddingTop: 100, textAlign: 'center' }}>
        <Card style={{ width: '100%' }}>
          <Form
            name='form'
            initialValues={{ ...ruleForm }}
            form={form}
            onFinish={onFinish}
            onValuesChange={onValuesChange}
          >
            <Form.Item
              label='用户名' name='username'>
              <Input></Input>
            </Form.Item>
            <Form.Item
              label='别名' name='alias'>
              <Input></Input>
            </Form.Item>
            <Form.Item name="select" label="单选">
              <Radio.Group>
                <Radio value="a">a</Radio>
                <Radio value="b">b</Radio>
                <Radio value="c">c</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label='a' name='email'>
              <Input style={{ display: isSelect ? 'block' : 'none' }}></Input>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </PageHeaderWrapper>
  );
};
