
const admissionPage = () => {
  return (
    <>
        <div className='top bg-green-600 h-[150px] w-full  flex text-white font-semibold items-center justify-between'>
            <img className="h-[120px] " src="/images/cropped-logoPNGYETP1.png" alt="" />
            <h1>Make a call: 0302-9898082 || 0324-9881887</h1>
        </div>

            
            
            <h1 className="text-3xl font-bold text-center mb-6">Apply Physical</h1>
            <form className="space-y-4 flex flex-col items-center   " action="">
                <h2>Name(required)</h2>
                <input className='w-full border max-w-[700px] pl-5 h-[60px]  outline-none bg-gray-100 transition ease-out focus:bg-white duration-300'  type="text" />
                
                <h2>Father Name(required)</h2>
                <input className='w-full border max-w-[700px] pl-5 h-[60px]  outline-none bg-gray-100 transition ease-out focus:bg-white duration-300' type="text" />
                
                <h2>Contact No(required)</h2>
                <input className='w-full border max-w-[700px] pl-5 h-[60px]  outline-none bg-gray-100 transition ease-out focus:bg-white duration-300' type="text" />
                
                <h2>Your email(required)</h2>
                <input className='w-full border max-w-[700px] pl-5 h-[60px]  outline-none bg-gray-100 transition ease-out focus:bg-white duration-300' type="text" />
                
                <h2>CNIC/B-Form(required)</h2>
                <input className='w-full border max-w-[700px] pl-5 h-[60px]  outline-none bg-gray-100 transition ease-out focus:bg-white duration-300' type="text" />
                
                <h2>Choose class Mode(required)</h2>
                <select name="" id="" className="w-full border max-w-[700px] pl-5 h-[60px]  outline-none bg-gray-100" >
                    <option value="">Physical Class</option>
                </select>
                <h2>Select Course (required)</h2>
                <select name="" id="" className="w-full border max-w-[700px] pl-5 h-[60px]  outline-none bg-gray-100">
                    <option value="">Full Stack Digital Marketing</option>
                    <option value="">Premium Graphic Designing</option>
                    <option value="">Full Stack Web Devlopment with React & Node Js</option>
                </select>
               
                <h2>City (required)</h2>
                <input className='w-full border max-w-[700px] pl-5 h-[60px]  outline-none bg-gray-100 transition ease-out focus:bg-white duration-300' type="text" ></input>
                
                <h2>Address (required)</h2>
                <input  className='w-full border max-w-[700px] pl-5 h-[60px]  outline-none bg-gray-100 transition ease-out focus:bg-white duration-300' type="text" ></input>
                <input  className=' border px-4 py-2 bg-green-400 text-white font-semibold  rounded-2xl'  type="submit" />
            </form>
        


    </>
  )
}

export default admissionPage