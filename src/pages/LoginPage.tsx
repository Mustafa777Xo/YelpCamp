import FeedbackQuote from "@/components/specific/login_page/FeedbackQuote";
import SplitScreenLayout from "@/layouts/SpiltScreenLayout";
import loginBg from "@/assets/images/login_bg.svg";
import LoginContent from "@/components/specific/login_page/LoginContent";

const LoginPage = () => {
  return (
    <>
      <SplitScreenLayout
        leftChild={<LoginContent />}
        rightChild={<FeedbackQuote />}
        rightBgImageDesktop={loginBg}
        rightBgImageMobile={loginBg}
      />
    </>
  );
};

export default LoginPage;
