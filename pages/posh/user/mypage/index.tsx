import Mypage from "../../../../src/components/units/user/mypage/Mypage.container";
import { WithAuth } from "../../../../src/components/commons/hocs/WithAuth";

const MypageScreen = () => {
  return <Mypage />;
};

export default WithAuth(MypageScreen);
