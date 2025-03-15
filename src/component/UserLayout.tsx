import Dashboard from "@/pages/Dashboard/Dashboard";
import Header from "./Header";
import ProtectedRoute from "@/Utils/ProtectedRoute";


const UserLayout = () => {
    return (
        <div>
            <Header></Header>
           <ProtectedRoute>  <Dashboard></Dashboard>  </ProtectedRoute> 
            
        </div>
    );
};

export default UserLayout;