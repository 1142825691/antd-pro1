import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useEffect, useState } from 'react';
import { Button, Form, Input, notification, Select, Spin, Table } from 'antd';
import styles from './index.less';
// import {queryUser1} from './servicer';
// import request from '@/utils/request';
import { connect } from 'umi';
// import { queryRule } from '@/pages/ListTableList/service';
// @connect(({ Tables, loading }) => ({
//   data: Tables.data, // 将data赋值给
//   loading: loading
// }))
const { Option } = Select;
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '名称',
    dataIndex: 'text',
    key: 'text',
  },
];
const openNotification = () => {
  notification.open({
    message: '功能及知识点',
    description:
      '异步请求表格加筛选' +
      'antd：Button, Spin, Table,Form,Input,Select,notification ' +
      'ts ：基础类型声明',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
const Tables = (props) => {
  const [loading, setLoading] = useState<boolean>(true);
  // const [tableData, settableData] = useState<arr>();
  //form
  const [form] = Form.useForm();
  const onFinish = async (values: { [key: string]: any }) => {
    console.log('Success:', values);
    // props = await request(`https://api.apiopen.top/getJoke`, { params: { page: 1, count: 3, type: 'video' } });
    // queryUser1({params:{page:1,count:2,type:'video'}})
    const { dispatch } = props;
    // 分发器调用models发起请求，具体流程是dispatch=>models=>services
    dispatch({
      // newPage命名空间，fetch是该文件中的方法，对应src/models/newPage.js，因为newPage的namespace的值newPage
      type: 'newPage/fetch1',
      // 参数，一般采用json格式
      payload: { params: { page: 1, count: 4, type: 'video' } },
    });
  };
  // const [msg, setMsg] = useState<any>([]);
  useEffect(() => {
    const { dispatch } = props;
    // 分发器调用models发起请求，具体流程是dispatch=>models=>services
    dispatch({
      // newPage命名空间，fetch是该文件中的方法，对应src/models/newPage.js，因为newPage的namespace的值newPage
      type: 'newPage/fetch1',
      // 参数，一般采用json格式
      payload: { params: { page: 1, count: 3, type: 'video' } },
    });
    setLoading(false);
  }, []);

  return (
    <PageHeaderWrapper content="表格加筛选" className={styles.main}>
      <Button type="primary" onClick={openNotification}>功能点</Button>
      <Form form={form} onFinish={onFinish} name="筛选" layout='inline'>
        <Form.Item
          name="姓名"
          rules={[{ message: 'Please input your username!' }]}
        >
          <Input placeholder="姓名"/>
        </Form.Item>
        <Form.Item
          name="性别"
          rules={[{ message: 'Please input your username!' }]}
        >
          <Select>
            <Option value="nan">男</Option>
            <Option value="nv">女</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="住址"
          rules={[{ message: 'Please input your username!' }]}
        >
          <Input placeholder="住址"/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">查询</Button>
        </Form.Item>
      </Form>

      <div style={{ paddingTop: 100, textAlign: 'center' }}>
        <Spin size="small" spinning={loading}>
          <Table dataSource={props.data.result} columns={columns}></Table>
        </Spin>

      </div>
    </PageHeaderWrapper>
  );
};
// export default Tables
export default connect(({ newPage }) => ({
  data: newPage.data, // 将data赋值
}))(Tables);
