import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
const [length, setlength] = useState(0)
const [numallow, setnumallow] = useState(false)
const [charallow, setcharallow] = useState(false)
const [Password, setPassword] = useState("")
const Passwordgenerator =()=>{
  let list="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let pass=""
  if(numallow) list+="1234567890"
  if(charallow) list+="@^_`{}~"
  for (let i = 0; i <=length; i++) {
    let temp=Math.floor(Math.random() *list.length+1);
    pass+=list.charAt(temp)
  }
  setPassword(pass)
}
const passref=useRef(null)
const copyClip =useCallback(()=>{
  passref.current?.select();
window.navigator.clipboard.writeText(Password);

},[Password])
useEffect(Passwordgenerator,[length,numallow,charallow])
  return (
    <>
    <ToastContainer />
    <div className=' fixed w-1/2 h-1/3 top-[50%] translate-x-[50%] translate-y-[-50%] rounded-[40px] bg-slate-800 p-10'>
    <h2 className='text-center font-mono text-5xl font-semibold'>Password generator</h2>
    <div className='flex justify-center py-3 gap-x-2'>
      <input className='w-1/3 px-4 py-2 rounded text-sm text-slate-500' readOnly ref={passref} value={Password} onChange={(e)=>{setPassword(e.target.value)}} type="text" />
      <button onClick={()=>{
        copyClip();
toast("Copied Suceessfully ");
      }} >copy</button>
    </div>
    <div className=' flex justify-center gap-3'>
      <input type="range" name="" min={6} max={30} value={length} onChange={(e)=>{setlength(e.target.value)}} id="" /> 
       Numbers<input type="checkbox" value={numallow} onChange={()=>{
        setnumallow((prev)=>!prev)
       }} name="" id="" />
       Chracter <input type="checkbox" value={charallow} onChange={()=>{setcharallow((prev)=>!prev)}} name="" id="" />
    </div>
    </div>
    </>
  )
}

export default App