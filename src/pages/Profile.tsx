import { User } from "../models/User";
import withUser from "../components/withUser"

const Profile = ({ user }: { user: User }) => (

  <>
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto flex flex-col items-center m-1">
      <div className="flex flex-col items-center">
        <img
          className="w-28 h-28 rounded-full mt-4 mb-6 border border-gray-200 object-cover"
          src={user.image || "https://cdn-icons-png.flaticon.com/512/332/332704.png?w=1060&t=st=1679125718~exp=1679126318~hmac=e309cb79ec0bc3f32c014b237493e259223d00c2b0c03c2c9899170bdc912297"}
        />
        <div>
          <h2 className="text-xl font-bold">{user.username}</h2>
          <h5 className="text-lg font-normal text-slate-400">{user.firstName} {user.lastName}</h5>
          <p className="text-gray-600"><span className="text-gray-800 font-medium">Gender:</span> {user.gender}</p>

          <p className="text-gray-600"><span className="text-gray-800 font-medium">E-mail:</span> {user.email}</p>
          <p className="text-gray-600"><span className="text-gray-800 font-medium"> Phone:</span> {user.phone}</p>
          <p className="text-gray-600"><span className="text-gray-800 font-medium"> Address:</span> {user.address} </p>

        </div>
      </div>
    </div>
    {
      !user && <div className="mt-16 text-center">Create Profile First.</div>
    }
  </>
)

export default withUser(Profile); 