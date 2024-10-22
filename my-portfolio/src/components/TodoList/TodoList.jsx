import { useEffect, useState } from "react";
import TodoItems from "./TodoItems";
import { v4 as uuidv4 } from "uuid";
// import { FaEdit } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import img1 from './images/images.jpeg'

function ToDo() {

  const saveTodo = () => {
    let getData = localStorage.getItem("todo");
    if (getData) {
      return JSON.parse(localStorage.getItem("todo"));
    } else {
      return [];
    }
  };

  const [text, setText] = useState("");
  const [todo, setTodo] = useState(saveTodo());
  const [toggleBtn, setToggleBtn] = useState(true);
  const [editItem, setEditItem] = useState(null);

  const addTasks = (e) => {
    // e.preventDefault()
    if (!text) {
      alert("please enter tasks");
    } else if (text && !toggleBtn) {
      setTodo(
        todo.map((items) => {
          if (items.id === editItem) {
            return { ...items, item: text };
          }
          return items;
        })
      );
      setToggleBtn(true);
      setText("");
      setEditItem(null);
    } else {
      const todoItems = {
        id: uuidv4(),
        item: text,
        default: false,
      };
      setTodo([...todo, todoItems]);
      setText("");
    }
  };

const handleCheck = (itemId) =>{
  let checkedTodo = todo.find((todo)=>{
    if(todo.id === itemId){
     return ({...todo,default: !text.default})
    }
    return todo
  })
   setTodo(checkedTodo)
}

  const handleDelete = (itemId) => {
    let newTodo = todo.filter((items) => items.id !== itemId);
    setTodo(newTodo);
  };


  const handleEdit = (itemId) => {
    let editTodo = todo.find((items) => items.id === itemId);
    setToggleBtn(false);
    setText(editTodo.item);
    setEditItem(itemId);
  };

// useEffect(()=>{
//   let lsItems = localStorage.getItem("todo")
//   if (lsItems) {
//          JSON.parse(localStorage.getItem("todo"));
//         setTodo(lsItems)

//        } else {
//          return [];
//        }
// })

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <div className=" pt-5">
      <img src={img1} alt="" className="w-[50px] sm:w-[70px] lg:w-[75px] mx-auto bg-slate-200 rounded-full"/>
      <h2 className="text-xl font-bold text-center text-white">Enter your todo tasks here..</h2>
        <main className="w-64  pt-3 mx-auto sm:w-80">
          <div className="input-box px-4 py-2  text-center flex justify-center items-center  ">
            <input
              type="text"
              className="px-4 py-2 rounded-lg w-80 focus:outline-none bg-gradient-to-t from-blue-200 to-yellow-100"
              placeholder="Enter Your Tasks Here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            {toggleBtn ? (
              <button
                className="bg-yellow-300 text-blue-600 font-extrabold rounded-full inline-block  pb-1 px-[10px] text-3xl hover:bg-yellow-600 hover:text-white "
                onClick={addTasks}
              >
                +
              </button>
            ) : (
              <span
                className="bg-yellow-300 text-blue-600 font-extrabold rounded-full inline-block   text-xl hover:bg-yellow-600 hover:text-white items-center "
                onClick={addTasks}
              >
                <AiFillEdit />
              </span>
            )}
          </div>
        </main>
      {/* </div> */}
     
      {todo.length === 0 && <p className="text-xl font-bold text-red-500 me-3 text-center">No todos to display</p>}
      <TodoItems
        todo={todo}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleCheck={handleCheck}
      />
     
      
      </div>
    </>
  );
}

export default ToDo;
