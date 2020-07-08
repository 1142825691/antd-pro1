import React, { useContext } from 'react';
import styles from "./index.less";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {PageHeaderWrapper1} from '../friendStatus'
const NormalLoginForm = (props) => {
  let theme = useContext(PageHeaderWrapper1);
  console.log(props);
  console.log(theme);
  const onFinish = (values) => {
    theme=values.password;
    console.log(theme);
    console.log("Received values of form: ", values);
  };
  // const value=useContext(PageHeaderWrapper);

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: false, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          defaultValue={theme}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"

        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        {props.a}
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default (props) => (
  <div className={styles.container}>
    <div id="components-form-demo-normal-login">
      <NormalLoginForm {...props}/>
    </div>
  </div>
);
