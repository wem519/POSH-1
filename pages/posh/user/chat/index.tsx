import { WithAuth } from "../../../../src/components/commons/hocs/WithAuth";
import ChatList from "../../../../src/components/units/user/chat/Chat.container";

const ChatListPage = () => {
  return <ChatList />;
};

export default WithAuth(ChatListPage);
