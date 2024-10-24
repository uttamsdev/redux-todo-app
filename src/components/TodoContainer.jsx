import { Button, Dropdown, Space } from "antd"
import { items } from "../lib/filterItems";
import { DownOutlined } from "@ant-design/icons";
import TodoCard from "./TodoCard";
import React, { useState } from "react";
import CustomModal from "./Modal";
import AddTodo from "./AddTodo";
import { useSelector } from "react-redux";


const TodoContainer = () => {
  const [open, setOpen] = useState(false);
  const todos = useSelector((state) => state.todo.todos);

  console.log('todo', todos)
  const handleMenuClick = (e) => {
    // message.info('Click on menu item.');
    console.log('click', e);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div>
      <h1 className="mt-10 mb-4 text-xl font-bold text-center">Todo Application With Redux</h1>
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-3">
          <Button color="default" variant="solid" onClick={() => setOpen(true)}>
            Add Todo
          </Button>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Button
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
        <div className=" bg-stone-100 min-h-[400px] rounded px-6 py-4 space-y-3">
          {
            todos?.map((item, i) => <TodoCard  item={item} key={i} />)
          }
        </div>
      </div>
      <CustomModal
        setOpen={setOpen}
        open={open}
        title={'Add Todo'}
        modalContent={React.cloneElement(<AddTodo setOpen={setOpen} />, { key: new Date().getTime() })}
      />
    </div>
  )
}

export default TodoContainer