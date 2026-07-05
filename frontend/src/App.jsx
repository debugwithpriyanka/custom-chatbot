import { useState } from "react"
import axios from "axios"

export default function App() {

const [message,setMessage]=useState("")
const [chat,setChat]=useState([])
const [loading,setLoading]=useState(false)

const sendMessage=async()=>{

if(!message.trim()) return

const text=message

setChat(prev=>[
...prev,
{
role:"user",
text
}
])

setMessage("")
setLoading(true)

try{

const res=
await axios.post(
"http://127.0.0.1:5000/chat",
{
message:text
}
)

setChat(prev=>[
...prev,
{
role:"ai",
text:res.data.reply
}
])

}
catch{

setChat(prev=>[
...prev,
{
role:"ai",
text:"Connection Error"
}
])

}

setLoading(false)

}

return (

<div className="h-screen bg-slate-950 flex justify-center items-center">

<div className="w-[900px] h-[85vh]
bg-slate-900 rounded-3xl
shadow-2xl
flex flex-col
overflow-hidden">

<div className="p-6 border-b border-slate-700">

<h1 className="text-3xl font-bold text-white">

🤖 Priyanka AI

</h1>

</div>

<div className="flex-1 overflow-auto p-6 space-y-5">

{

chat.map(
(item,index)=>(

<div
key={index}
className={`flex ${
item.role==="user"
?
"justify-end"
:
"justify-start"
}`}

>

<div
className={`max-w-[70%]
px-5 py-4
rounded-3xl
text-white

${
item.role==="user"
?
"bg-blue-600"
:
"bg-slate-800"
}`}

>

{item.text}

</div>

</div>

)

)

}

{
loading&&(

<div className="text-gray-400">

Thinking...

</div>

)

}

</div>

<div
className="p-5
border-t
border-slate-700
flex gap-3"
>

<input

value={message}

onChange={
(e)=>
setMessage(
e.target.value
)
}

onKeyDown={
(e)=>
e.key==="Enter"
&&
sendMessage()
}

placeholder="Ask anything..."

className="
flex-1
bg-slate-800
text-white
rounded-2xl
px-5
py-4
outline-none
"

/>

<button

onClick={
sendMessage
}

className="
bg-blue-600
hover:bg-blue-700
px-8
rounded-2xl
text-white
"

>

Send

</button>

</div>

</div>

</div>

)

}
