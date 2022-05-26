import { useLottie } from "lottie-react";
import imwdAnimation from "./imwd.json";



const Working = () => {

  const options = {
    animationData: imwdAnimation,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const { View } = useLottie(options);
  return View
}

export default Working;