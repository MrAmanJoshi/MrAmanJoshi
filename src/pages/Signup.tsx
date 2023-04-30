import Button from "../components/Button";
import Input from "../components/Input";
import * as yup from "yup";
import { withFormik } from "formik";
import axios from "axios";
import AlertHoc from "../components/withPopup";
import Popup from "../components/Popup";

  const handleSubmitForm = async (values, bag) => {
   const response = await axios.post("https://dummyjson.com/users/add", {
     firstName: values.firstName,
     lastName: values.lastName,
     username: values.profileName,
     image: values.profilePic,
     email: values.email,
     phone: values.phone,
     address: values.address,
     gender: values.gender,
     password: values.password,
        }, {headers: { 'Content-Type': 'application/json' }
});
   localStorage.setItem('userObject', JSON.stringify(response.data));
  bag.props.setPopup(true)    
  };

const schema = yup.object().shape({
  
firstName: yup.string().min(2).max(20).required(),
  
lastName: yup.string().min(2).max(20).required(),

profileName: yup.string().min(2).max(20).required(),

profilePic: yup.string().url(),

email: yup.string().email().required(),

phone: yup.string().min(10).required(),

  address: yup.string().min(10).required(),

gender: yup.string().required(),

password: yup.string().min(4).required()

});

const initialValues = {
  firstName: "",
  lastName: "",
  profileName: "",
  email: "",
  profilePic: "",
  phone: "",
  address: "",
  gender: "",
  password: "",
};

const SignUp = ({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  popup
}) => {
console.log("sing fun", popup)
  return (
    <>
      {popup === true && <Popup message="Your profile has been successfully created."/>}
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 ml-1">Create Profile</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <Input
              id="firstName"
              type="text"
              name="firstName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              error={errors.firstName}
              touched={touched.firstName}
              />
            
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <Input
              id="lastName"
              type="text"
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              error={errors.lastName}
              touched={touched.lastName}
               />
          </div>
        
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="profileName">
              Profile Name
            </label>
            <Input
              id="profileName"
              type="text"
              name="profileName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.profileName}
              error={errors.profileName}
              touched={touched.profileName}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="profilePic">
      Profile Picture Url <span className="text-xm font-medium">(*not required)</span>
            </label>
            <Input
              id="profilePic"
              type="url"
              name="profilePic"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.profilePic}
              error={errors.profilePic}
              touched={touched.profilePic}
              />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              error={errors.email}
              touched={touched.email}
              />
          </div>

<div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <Input
              id="phone"
              type="number"
              name="phone"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phone}
              error={errors.phone}
              touched={touched.phone}
              />
          </div>
                    
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
              Address
            </label>
            <Input
              id="address"
              type="text"
              name="address"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address}
              error={errors.address}
              touched={touched.address}
              />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">
              Gender
            </label>
          <div id="gender" className="flex">
            <label className="block text-gray-500 font-medium mr-2" htmlFor="male">
              Male
            </label>
            <input
              id="male"
              type="radio"
              name="gender"
              onBlur={handleBlur}
              onChange={handleChange}
              value="Male"
              />   
        
            <label className="block text-gray-500 font-medium mx-2" htmlFor="female">
             Female
            </label>
            <input
              id="female"
              type="radio"
              name="gender"
              value="Female"
               /> 
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              type="password"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              error={errors.password}
              touched={touched.password}
            />
          </div>
          <div className="flex items-center justify-between">
            
            <Button
              type="submit"
            > Sign Up
             </Button>
            
          </div>
        </form>
      </div>
    </div>
      </>
  );
};
const newSignUp  = withFormik({
  handleSubmit: handleSubmitForm,
  validationSchema: schema,
  initialValues: initialValues
})(SignUp);

export default   AlertHoc(newSignUp); 

                                      