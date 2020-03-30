import Welcome from '@/pages/Layout/Welcome';
import Login from '@/pages/Layout/Login';
import Registro from '@/pages/Layout/Register'
import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import Usuarios from "@/pages/Users.vue";

const routes = [
  {
    path: "*",
    redirect: "/login",
    name:"All"
  },
  {
    path: "/",
    name:'Home',
    component: Welcome,
    meta:{
      welcomePage: true
    }
  },
  {
    path: "/login",
    component: Login,
    name:"Login",
    meta:{
      userLoged : false
    }
  },
  {
    path: "/registro",
    name: "Registro",
    component : Registro,
    meta:{
      userLoged : false
    }
  },
  {
    path: "/app",
    component: DashboardLayout,
    redirect: "maps",
    meta:{
      userLoged : true //userLoged debe ser true para poder acceder a caulquiera de sus hijos
    },
    children: [
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta:{
          admin : true 
        }
      },
      {
        path: "usuarios",
        name: "Usuarios",
        component: Usuarios,
        meta:{
          admin : true 
        }
      },
      {
        path: "crear",
        name: "Create Profile",
        component: UserProfile
      },
      {
        path: "admin",
        name: "Administración",
        component: TableList,
        meta:{
          admin : true 
        }
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      }
    ]
  }
];

export default routes;
