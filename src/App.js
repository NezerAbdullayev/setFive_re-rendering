import "./styles.css";
import React,{useState} from "react"


const initS=0

const ChildrenC=()=>{
  console.log("children component ")
  const setConsole=()=>console.log("children new component ")
  return (
  <div onClick={setConsole}>
    children
  </div>
  )
}


const Parent=()=>{
  const [count,setCount]=useState(initS)
  const onFive=()=>{
    setCount(5)
  }
  const reset=()=>{
    setCount(initS)
  }
  const incCount=()=>{
    setCount(count=>count +1)
  }

  console.log("parent componentn")
  return (
    <div>

      <div style={{display:"flex",gap:5,justifyItems:"center"}}>
        <button onClick={onFive}>set five </button>
        <button onClick={incCount}> + </button>
        <button onClick={reset}>reset count</button>
      </div>

      <div> count : {count}</div>

      <ChildrenC />
    </div>
    )
}


export default function App() {
  const [count,setCount]=React.useState(["hesab"])

  const handleChange=()=>{
    const newCount=[...count]
    newCount.push("hs")
    setCount(newCount)
  }
  console.log("re-rendering")
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div> {count}</div>
      <button onClick={handleChange}> on App Click</button>

      <div style={{marginTop:"20px"}} />
      <Parent />
    </div>
  );
}
