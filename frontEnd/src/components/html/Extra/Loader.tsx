import { dottedBg } from '../../../Styles'
import '../../css/Extra/Loader.css'

const Loader = () => {
  return (
    <div style={dottedBg} className={`w-full h-screen flex-mid`}>
      <div id="loaderHolder" className={`w-[100px] h-[100px] relative border border-black`}>
          <div id="topLeft"></div>
          <div id="topRight"></div>
          <div id="bottomLeft"></div>
          <div id="bottomRight"></div>
      </div>
    </div>
  )
}

export default Loader