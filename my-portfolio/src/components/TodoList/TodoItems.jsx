import { MdDeleteForever } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function TodoItems({ todo, handleDelete, handleEdit, handleCheck }) {
    const navigate = useNavigate()

  return (
    <>
       <div className="h-[50vh] overflow-y-scroll">
       {todo.map((items) => {
          return (
            <div
              className="flex justify-between items-center flex-wr bg-gradient-to-r from-purple-500 to-pink-700 text-black font-bold p-2 rounded-lg my-2 w-72 mx-auto sm:w-96"
              key={items.id}
            >
             
                <div  className="break-words">
                  {items.item}{" "}
                </div>
              <div className="flex space-x-3 items-center">
                <span className="text-xl" onClick={() => handleEdit(items.id)}>
                  <FaEdit />
                </span>
                <span
                  onClick={() => handleDelete(items.id)}
                  className="text-2xl"
                >
                  <MdDeleteForever />
                </span>
              </div>
            </div>
          );
        })}
        <button onClick={()=>navigate(-1)} className="bg-yellow-300 text-black font-bold rounded-lg block mx-auto px-4 py-2 mt-20">Go Back</button>
       </div>

        {/* <ul className=" w-72 mx-auto sm:w-96 ">
          {
            todo.map((items)=>{
              return (<li   className="flex justify-between items-center  bg-gradient-to-r from-purple-500 to-pink-700 text-black font-bold p-2 rounded-lg my-2 text-wrap"
              key={items.id}>
                {items.item}
                <span
                  onClick={() => handleDelete(items.id)}
                  className="text-2xl"
                >
                  <MdDeleteForever />
                </span>
              </li>)
            })
          }
        </ul> */}
    </>
  );
}

export default TodoItems;
