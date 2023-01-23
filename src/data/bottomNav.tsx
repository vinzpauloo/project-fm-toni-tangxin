import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import HomeTab from "../screens/HomeTab";
import Vlog from "../screens/VlogTab";
import Chat from "../screens/ChatTab";
import Account from "../screens/AccountTab";

export const bottomNav = [
  {
    name: "Home",
    component: HomeTab,
    label: "首页",
    icon: ({ color, size }) => (
      <Feather name="home" color={color} size={size} />
    ),
  },
  {
    name: "Vlog",
    component: Vlog,
    label: "Vlog",
    icon: ({ color, size }) => (
      <MaterialCommunityIcons
        name="play-box-outline"
        color={color}
        size={size}
      />
    ),
  },
  {
    name: "Chat",
    component: Chat,
    label: "聊天",
    icon: ({ color, size }) => (
      <Ionicons name="chatbubbles-outline" color={color} size={size} />
    ),
  },
  {
    name: "Account",
    component: Account,
    label: "我的",
    icon: ({ color, size }) => (
      <Octicons name="person" color={color} size={size} />
    ),
  },
];