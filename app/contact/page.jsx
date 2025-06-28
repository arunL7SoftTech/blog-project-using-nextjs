export default function Contact() {
    return (
      <div className="px-5 pt-12 pb-16">
        <div className=" flex flex-col justify-center items-center">
          <div className="bg-gray-700 text-white p-12 space-y-7">
            <div>
                <h1 className="text-white text-2xl font-medium">Connect with Me</h1>
            </div>
            <div className="space-x-2.5">
              <label htmlFor="" className="text-black font-medium">Name: </label>
              <input type="text" className="border-b border-white outline-none py-1.5 w-full" name="" id="" />
            </div>
            <div className="space-x-2.5">
              <label htmlFor="" className="text-black font-medium">Email: </label>
              <input type="email" className="border-b border-white outline-none py-1.5 w-full" name="" id="" />
            </div>
            <div className="space-x-2.5">
              <label htmlFor="" className="text-black font-medium">Message: </label>
              <textarea className="border-b border-white outline-none py-1.5 w-full" rows="3" cols="22" name="" id=""></textarea>
            </div>
            <button className="bg-blue-500 px-3.5 py-1.5 rounded-md text-white font-medium text-sm">Submit</button>
          </div>
        </div>
      </div>
    );
}