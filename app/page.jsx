"use client"

import { useEffect, useState } from "react";
import Apis from "../Networking/Apis"

export default function Home() {

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    Apis.blog()
    .then((res) => {
      console.log("Blog Response", res.data.data);
      setBlog(res.data.data);
    })
    .catch((err) => {
      console.log("Error fetching blog response", err);
    })
  }, [])

  return (
    <div className="px-5 pt-14 pb-32">
      <div className="space-y-3">
        <h1 className="text-3xl font-medium">Welcome to Our Blog</h1>
        <p>Here you can see the latest articles.</p>
      </div>
      <div className="flex justify-end items-center gap-x-2 py-4">
        <input type="text" placeholder="Search blog.." className="bg-white px-2 py-0.5 border-b border-black outline-none" name="" id="" />
        <button className="bg-blue-500 px-2 py-1 rounded-md text-white cursor-pointer">Search</button>
      </div>

      <div className="grid grid-cols-3 pt-14 gap-y-7">
        {blog.map((data, i) => (
          <div className="space-y-2" key={i}>
          <img src={data.imageUrl} className="h-72 w-auto" alt="Image Not found" />
          <p className="capitalize font-medium text-lg">{data.title}</p>
          <p className="text-gray-700">{data.description}</p>
        </div>
        ))}
        
      </div>
    </div>
  );
}
