"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    username:"",
    email:"",
    password:"",
  });
  const [disable, setDisable] = useState(true);

  const submitHandler = async () =>{
    try {
      const response = await axios.post("/api/users/signup",user);  // In user you get all the data
      router.push("/login");
      toast.success(response.data.message)
    } catch (error:any) {
      console.log(error);
     toast.error(error.response.data.message);
    }
  }

  useEffect(() => {
   if(user.username.length > 0 && user.email.length>0 && user.password.length>0){
    setDisable(false)
   }else{
    setDisable(true)
   }
  },[user]);

  return (
    <div className="flex bg-[#669bbc] min-h-screen justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="font-bold">Signup</h1>
        <div className="flex flex-col my-4">
          <label>Username</label>
          <input
            type="email"
            className="border-2 outline-none border-zinc-600 rounded-md px-2 py-1"
            value={user.username}
            onChange={(e)=>setUser({...user,username:e.target.value})}
          />
        </div>
        <div className="flex flex-col my-4">
          <label>Email</label>
          <input
            type="password"
            className="border-2 outline-none border-zinc-600 rounded-md px-2 py-1"
            value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}
          />
        </div>

        <div className="flex flex-col my-4">
          <label>Password</label>
          <input
            type="password"
            className="border-2 outline-none border-zinc-600 rounded-md px-2 py-1"
            value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})}
          />
        </div>

        <button
          className={`${
            disable ? "" : ""
          }w-full bg-pink-400 rounded-lg py-1 my-2 text-white`}
          onClick={submitHandler}
        >
          Signup
        </button>
        <p className="mt-4">
         Already have an account <Link href={"/login"} className="font-bold">login</Link>
        </p>
      </div>
    </div>
  );
}
