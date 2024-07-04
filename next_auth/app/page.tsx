"use client"


import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";



export default function Home() {
   const router = useRouter()
  const logoutHandler = async () =>{
    try {
      const res = await axios.get("/api/users/logout");
      router.push("/login");
      toast.success(res.data.message);
    } catch (error:any) {
      toast.error(error.response.data.message);
    }
  }


  return (
    <div>
       <h1>Home</h1>
       <button 
       className="bg-red-500 px-3 py-1 rounded-md text-white m-2"
       onClick={logoutHandler}>Logout</button>
    </div>
  );
}
