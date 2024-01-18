import { ComponentType } from "react";
import { User } from "../models/User";

const withUser = (IncomingComponent: ComponentType) => {
  const OutgoingComponent = (props) => {
    const user: User = JSON.parse(localStorage.getItem('userObject') || "{}")
    return <IncomingComponent {...props} user={user} />
  };
  return OutgoingComponent
};

export default withUser;