import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Popconfirm, Form, Button } from 'antd';
import { FormInstance } from 'antd/lib/form';
import './index.css';

const EditableContext = React.createContext<FormInstance | null>(null);
interface Item {
  key: string;
  name: string;
  age: string;
  address: string;
}
interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Item;
  record: Item;
  handleSave: (record: Item) => void;
}
const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<Input>(null);
  const form = useContext(EditableContext)!;
  useEffect(() => {
    if (editing) {
      // 为什么这里改成了!
      inputRef.current!.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {}
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `请填写${title}`,
          },
        ]}>
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}>
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

interface EditableRowProps {
  index: number;
}
const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
interface DataType {
  key: React.Key;
  title: string;
  ip: string;
  mac: string;
  time: string;
}
type NetTableProps = Parameters<typeof Table>[0];
interface NetTableState {
  dataSource: DataType[];
}
const NetTable = () => {
  const dataSourceRef = useRef();
  const [columns, setColumns] = useState([
    {
      title: '设备名',
      dataIndex: 'name',
      key: 'name',
      width: '15%',
      editable: true,
    },
    {
      title: 'ip地址',
      dataIndex: 'ip',
      width: '15%',
      key: 'ip',
    },
    {
      title: 'MAC地址',
      dataIndex: 'mac',
      width: '20%',
      key: 'mac',
    },
    {
      title: '上线时间',
      dataIndex: 'time',
      width: '30%',
      key: 'time',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operator',
      render: (_: any, record: { ip: any }) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="确定踢下线？"
            onConfirm={() => handleDelete(record.ip)}>
            <Button type="primary" ghost={true}>
              Push
            </Button>
          </Popconfirm>
        ) : null,
    },
  ]);
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      name: '电脑',
      ip: '10.1.20.203',
      mac: 'sdasdasdsadsad',
      time: '5日12时30分42秒',
    },
    {
      key: '2',
      name: '手机',
      ip: '10.1.20.205',
      mac: 'sdasdasdasdads',
      time: '5日11时30分34秒',
    },
    {
      key: '3',
      name: '平板',
      ip: '10.1.20.206',
      mac: 'sssssdasdsadsa',
      time: '5日11时30分12秒',
    },
  ]);

  const handleDelete = (ip: any) => {
    const newData = [...dataSourceRef.current].filter(item => item.ip !== ip);
    dataSourceRef.current = newData;
    setDataSource(newData);
  };

  const handleSave = (row: any) => {
    const newData = [...dataSourceRef.current];
    const index = newData.findIndex(item => row.ip === item.ip);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    dataSourceRef.current = newData;
    setDataSource(newData);
  };
  // render
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const SaveCellChanges = () => {
    const newColumns = columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: any) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave,
        }),
      };
    });
    setColumns(newColumns);
  };
  useEffect(() => {
    SaveCellChanges();
    dataSourceRef.current = dataSource;
  }, [dataSource]);
  return (
    <div>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered={true}
        dataSource={dataSource}
        columns={columns}
        size={'small'}
        pagination={false}
      />
    </div>
  );
};

export default NetTable;
