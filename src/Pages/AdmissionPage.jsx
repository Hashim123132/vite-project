import { useState, useContext } from "react";
import AlertContext from '../Context/AlertContext'
const admissionPage = () => {
    const {showAlert} = useContext(AlertContext);
    const [info, setInfo] = useState({
        
        name: '',
        FatherName: '',
        ContactNo: '',
        email: '',
        CNIC: '',
        ChooseClassMode: 'Physical Class', 
        SelectCourse: 'Full Stack Digital Marketing',
        City: '',
        Address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

    
        try {
            const response = await fetch('http://localhost:5000/api/auth/createuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(info), 
            });
    
            const result = await response.json();
          
            if (response.ok) {
                showAlert('Form submitted successfully', 'success');
                setInfo({
                    name:'',
                    FatherName:'',
                    ContactNo:'',
                    email:'',
                    CNIC:'',
                    ChooseClassMode:'',
                    SelectCourse:'',
                    City:'',
                    Address:'',
                })
            } else {
                showAlert(`Error: ${result.errors.map(err => err.msg).join(', ')}`);
            }
        } catch (error) {
            console.error('Error:', error);
            showAlert('There was an error submitting the form', "danger");
        }
    };

    return (
        <>
            <div className='top bg-green-600 h-[150px] w-full  text-white font-semibold items-center flex justify-between '>
                <img className="h-[120px]" src="/images/cropped-logoPNGYETP1.png" alt="" />
                <h1>Make a call: 0302-9898082 || 0324-9881887</h1>
            </div>

            <h1 className="text-3xl font-bold text-center mb-6">Apply Physical</h1>
            <form className="space-y-4 flex flex-col items-center " onSubmit={handleSubmit}>
                <h2>Name (required)</h2>
                <input
                    className='xsm:w-[85%] xsm:h-[40px] sm:h-[60px] sm:rounded-md w-full border max-w-[700px] pl-5 h-[60px] outline-none bg-gray-100 transition ease-out focus:bg-white duration-300'
                    name="name"
                    type="text"
                    value={info.name}
                    onChange={handleChange}
                />

                <h2>Father Name (required)</h2>
                <input
                    className='xsm:w-[85%] xsm:h-[40px] sm:h-[60px] sm:rounded-md w-full border max-w-[700px] pl-5 h-[60px] outline-none bg-gray-100 transition ease-out focus:bg-white duration-300'
                    name="FatherName"
                    type="text"
                    value={info.FatherName}
                    onChange={handleChange}
                />

                <h2>Contact No (required)</h2>
                <input
                    className='xsm:w-[85%] xsm:h-[40px] sm:h-[60px] sm:rounded-md w-full border max-w-[700px] pl-5 h-[60px] outline-none bg-gray-100 transition ease-out focus:bg-white duration-300'
                    name="ContactNo"
                    type="text"
                    value={info.ContactNo}
                    onChange={handleChange}
                />

                <h2>Your email (required)</h2>
                <input
                    className='xsm:w-[85%] xsm:h-[40px] sm:h-[60px] sm:rounded-md w-full border max-w-[700px] pl-5 h-[60px] outline-none bg-gray-100 transition ease-out focus:bg-white duration-300'
                    name="email"
                    type="email"
                    value={info.email}
                    onChange={handleChange}
                />

                <h2>CNIC/B-Form (required)</h2>
                <input
                    className='xsm:w-[85%] xsm:h-[40px] sm:h-[60px] sm:rounded-md w-full border max-w-[700px] pl-5 h-[60px] outline-none bg-gray-100 transition ease-out focus:bg-white duration-300'
                    name="CNIC"
                    type="text"
                    value={info.CNIC}
                    onChange={handleChange}
                />

                <h2>Choose Class Mode (required)</h2>
                <select
                    name="ChooseClassMode"
                    className="xsm:w-[85%] xsm:h-[40px] sm:h-[60px] sm:rounded-md w-full border max-w-[700px] pl-5 h-[60px] outline-none bg-gray-100"
                    value={info.ChooseClassMode}
                    onChange={handleChange}
                >
                    <option value="Physical Class">Physical Class</option>
                    <option value="Online Class">Online Class</option>
                </select>

                <h2>Select Course (required)</h2>
                <select
                    name="SelectCourse"
                    className="xsm:w-[85%] xsm:h-[40px] sm:h-[60px] sm:rounded-md w-full border max-w-[700px] pl-5 h-[60px] outline-none bg-gray-100"
                    value={info.SelectCourse}
                    onChange={handleChange}
                >
                    <option value="Full Stack Digital Marketing">Full Stack Digital Marketing</option>
                    <option value="Premium Graphic Designing">Premium Graphic Designing</option>
                    <option value="Full Stack Web Devlopment with React & Node Js">Full Stack Web Development with React & Node Js</option>
                </select>

                <h2>City (required)</h2>
                <input
                    className='xsm:w-[85%] xsm:h-[40px] sm:h-[60px] sm:rounded-md w-full border max-w-[700px] pl-5 h-[60px] outline-none bg-gray-100 transition ease-out focus:bg-white duration-300'
                    name="City"
                    type="text"
                    value={info.City}
                    onChange={handleChange}
                />

                <h2>Address (required)</h2>
                <input
                    className='xsm:w-[85%] xsm:h-[40px] sm:h-[60px] sm:rounded-md w-full border max-w-[700px] pl-5 h-[60px] outline-none bg-gray-100 transition ease-out focus:bg-white duration-300'
                    name="Address"
                    type="text"
                    value={info.Address}
                    onChange={handleChange}
                />

                <input
                    className='  border px-4 py-2 bg-green-400 cursor-pointer text-white font-semibold rounded-2xl hover:transito ease-out duration-300 hover:opacity-70'
                    type="submit"
                    value="Submit"
                />
            </form>
        </>
    );
};

export default admissionPage;
