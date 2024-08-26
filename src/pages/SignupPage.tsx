import SignupContent from "@/components/specific/signup_page/SignupContent";
import SplitScreenLayout from "@/layouts/SpiltScreenLayout";
import signupBg from "@/assets/images/signup_bg.svg";

const SignupPage = () => {
  return (
    <>
      <SplitScreenLayout
        leftChild={<SignupContent />}
        rightChild={""}
        rightBgImageDesktop={signupBg}
        rightBgImageMobile={signupBg}
      />
    </>
  );
};

export default SignupPage;
