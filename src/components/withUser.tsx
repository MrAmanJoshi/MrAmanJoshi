import { User } from "../models/User";

const withUser = (IncomingComponent: any) => {
  const OutgoingComponent = (props: any) => {
    const user: User = JSON.parse(localStorage.getItem('userObject') || "{}")
    return <IncomingComponent {...props} user={user} />
  };
  return OutgoingComponent
};

export default withUser;