import PersonIcon from "@/components/icons/PersonIcon";
import PlatformIcon from "@/components/icons/PlatformIcon";
import UserIcon from "@/components/icons/UserIcon";
import WorkIcon from "@/components/icons/WorkIcon";

const navMenus = [
    {
        label:"Home",
        path:"/",
        icon:<UserIcon />
    },
    {
        label:"Platform",
        path:"/platform",
        icon:<PlatformIcon />
    },
    {
        label:"About Us",
        path:"/about-us",
        icon:<PersonIcon />
    },
    {
        label:"Services",
        path:"/services",
        icon:<WorkIcon />
    },
];



export {
    navMenus
}