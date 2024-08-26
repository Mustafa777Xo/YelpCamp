import FeedbackQuote from "@/components/specific/login_page/FeedbackQuote";
import SplitScreenLayout from "@/layouts/SpiltScreenLayout";
import loginBg from "@/assets/images/login_bg.svg";

const LoginPage = () => {
  return (
    <>
      <SplitScreenLayout
        leftChild={<h1>form here</h1>}
        rightChild={<FeedbackQuote />}
        rightBgImageDesktop={loginBg}
        rightBgImageMobile={loginBg}
      />
    </>
  );
};

export default LoginPage;
