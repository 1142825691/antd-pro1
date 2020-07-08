import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Button,Form,Input } from 'antd';
import styles from './index.less';
import FormNormalLogin from './FormNormalLogin';
import {useFriendStatus,PageHeaderWrapper1} from './friendStatus';
export default () => {
  //
  const dog={
    a:'aa',
    b:'bb'
  }
  const [name,setName]=useFriendStatus('firstName1');
  const [count, setCount] = useState(100);
  const [count1, setCount1] = useState(100);
  useEffect(() => {

    return () => {
      // console.log(count);
    };
  }, [count]);
  // const onFinish = (values) => {
  //   // name.newName
  //
  // };
  return (

    <PageHeaderWrapper content="react 16.8版本练习demo" className={styles.main}>
      <div
        style={{
          paddingTop: 100,
          textAlign: 'center',
        }}
      >
        <Button onClick={() => setCount(count + 1)}>当前count点击次数{count}</Button>
        <Button onClick={() => setCount1(count1 + 1)}>当前count1点击次数{count1}</Button>
      </div>
      <p>自定义hook</p>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={setName.onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            placeholder="Username"
            onChange={setName.onFinish}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
      <Button >{name}</Button>
      <FormNormalLogin aa={'bbbbbb'} {...dog}></FormNormalLogin>
      <p>useContext</p>
      <PageHeaderWrapper1.Provider>
        <FormNormalLogin ></FormNormalLogin>
      </PageHeaderWrapper1.Provider>

    </PageHeaderWrapper>
  );
};
