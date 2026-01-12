import { dottedBg } from '../../styles/Styles'
import '../../styles/css/Extra/Loader.css'

const Loader = () => {
  const size : number = 100;
  const cubeSize: number =  size/2;

  return (
    <div style={dottedBg} className={`w-full h-screen flex-mid`}>
      <div id="loaderHolder" style={{width : size , height : size}} className={`relative border border-black`}>
          <div id="topLeft" style={{width : cubeSize , height : cubeSize}} className='flex-mid'></div>
          <div id="topRight" style={{width : cubeSize , height : cubeSize}} className='flex-mid'></div>
          <div id="bottomLeft" style={{width : cubeSize , height : cubeSize}} className='flex-mid'></div>
          <div id="bottomRight" style={{width : cubeSize , height : cubeSize}} className='flex-mid'></div>
      </div>
    </div>
  )
}

export default Loader