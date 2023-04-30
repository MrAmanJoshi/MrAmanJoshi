export type initailValueType = {
  firstName: string;
  lastName: string;
  profileName: string;
  email: string;
  profilePic?: string;
  phone: string;
  address: string;
  gender: string;
  password: string;
};

 
export type SignupProps = {
  touched: {
    user: boolean,
    isLoggedIn: boolean,
    email: boolean,
    fullName: boolean,
    password: boolean
  };
  errors: {
    fullName: string,
    email: string,
    password: string
  };
  handleChange: any;
  handleBlur: any;
  handleSubmit: any
};
