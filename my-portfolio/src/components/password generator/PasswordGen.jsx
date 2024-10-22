import { useState, useEffect, useCallback,useRef } from "react";
import { useNavigate } from "react-router-dom";

function PasswordGenerator() {

   const navigate = useNavigate()
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [length, setLength] = useState(6);
  const [password, setPassword] = useState("");
     
     const inputRef = useRef();

  const Password = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (character) str += "`~!@#$%^&*()_+{}?|><[]/-=";
    let pass = "";
    for (let i = 1; i <= length; i++) {
      let text = Math.floor(Math.random() * str.length);
      pass += str.charAt(text);
    }
    setPassword(pass);
  }, [length, number, character, setPassword]);

  const copyPassword = useCallback(()=>{
    inputRef.current.select()
    inputRef.current.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
    alert("Password copied successfully")
  },[password])

  useEffect(() => {
    Password();
  }, [number, length, character, Password]);

  return (
    <>
      <div className="  pt-10 min-h-[80vh] max-h-full mx-auto bg-slate-800 text-white">
      <h2 className="text-xl md:text-3xl py-5 text-center font-bold text-yellow-200">Generate random password using text,number and characters</h2>
        <div className="main flex justify-center flex-col items-center ">
          <div className="input-box ">
            <input
              type="text"
              className="px-4 py-2 rounded-s-lg w-52 focus:outline-none text-black sm:w-80"
              value={password}
              ref={inputRef}
              readOnly
            />
            <button className="bg-green-400 px-4 py-2 rounded-e-lg hover:bg-green-700 text-slate-900 font-bold"
            onClick={copyPassword}
            >
              Copy
            </button>
          </div>
          <div className="flex py-5 justify-center text-center sm:flex-row sm:w-96   space-x-4 w-72 flex-col sm:items-center  font-semibold character ">
           
            <div className="length">
              <input
                type="checkbox"
                defaultChecked={number}
                onChange={(e) => setNumber((prev) => !prev)}
              />
              <label>Number</label>
            </div>
            <div className="length">
              <input
                type="checkbox"
                // className="w-14"
                defaultChecked={character}
                onChange={(e) => setCharacter((prev) => !prev)}
              />
              <label>Character</label>
            </div>
            <div className="length">
              <input
                type="range"
                min="6"
                max="20"
                value={length}
                className="w-14"
                onChange={(e) => setLength(e.target.value)}
              />
              <label>Length:{length}</label>
            </div>
          </div>
        </div>
      <button onClick={()=>navigate(-1)} className="bg-yellow-300 text-black font-bold rounded-lg block mx-auto px-4 py-2 mt-20">Go Back</button>
      </div>
    </>
  );
}

export default PasswordGenerator;
