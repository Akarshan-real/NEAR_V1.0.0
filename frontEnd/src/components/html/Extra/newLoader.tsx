import { dottedBg } from "../../../Styles"
import logo from "/src/assets/NEAR_LOGO-nobg.svg" ;

const newLoader = () => {
  return (
    <div className="w-screen h-screen flex-mid" style={dottedBg}>
      <div className="relative h-px w-36">
        <div className="w-12 h-8 flex-mid absolute left-0 top-1/2 -translate-y-1/2">
          <img src={logo} alt="NEAR logo"/>
          </div>
          <div className="h-full w-16 bg-white"></div>
        <div className="w-12 h-8 flex-mid absolute right-0 top-1/2 -translate-y-1/2">
          <img src={logo} alt="NEAR logo" />
          </div>
      </div>
    </div>
  )
}

export default newLoader