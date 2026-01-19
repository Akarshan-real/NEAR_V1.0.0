import { useState , useLayoutEffect } from "react";
import { dottedBg } from "../../styles/Styles"
import logo from "/src/assets/NEAR_LOGO-nobg.svg";

const NewLoader = () => {

  const [width, setWidth] = useState(window.innerWidth)

  useLayoutEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useLayoutEffect(() => {
    const targetWidth = width < 640 ? 200 : 287;

    const style_ = document.createElement('style');
    style_.id = 'loader-keyframes';
    style_.innerHTML = `
  @keyframes loading {
    10%{
        transform: rotate(0deg);
    }
    50% {
        width: ${targetWidth}px;
    }
    90%{
        width: ${targetWidth}px;
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }
  `;
    document.head.appendChild(style_);
    const loader = document.getElementById("loaderHolder_") as HTMLElement | null;
    if (loader) {
      loader.style.animation = "loading 800ms infinite cubic-bezier(0.33, 0.9, 0.38, 1.02)"
    }
    return () => {
      style_.remove();
    }
  }, [width])

  return (
    <div className="w-screen h-screen flex-mid overflow-hidden" style={dottedBg}>
      <div className="relative h-0.5 w-38.75 sm:w-46.75" id="loaderHolder_">
        <div className="z-20 w-20 sm:w-24 flex-mid absolute left-0 top-1/2 -translate-y-1/2">
          <img src={logo} alt="NEAR logo" />
        </div>
        <div className="absolute position-mid h-full w-[95%] z-10 rounded-3xl bg-white"></div>
        <div className="z-20 w-20 sm:w-24 flex-mid absolute right-0 top-1/2 -translate-y-1/2">
          <img src={logo} alt="NEAR logo" />
        </div>
      </div>
    </div>
  )
}

export default NewLoader