import { dottedBg } from '../../../Styles'
import '../../css/Extra/newLoader.css'

const newLoader = () => {
  return (
    <div style={dottedBg} className={`w-full h-screen flex-mid`}>
      <div id='newLoadingDiv' className={`relative h-px w-[320px] overflow-visible`}>
        <div className='w-[180px] h-20 border bg-(--green) absolute left-0 top-1/2 -translate-y-1/2 skew-x-[-30deg]' id='leftLoadingDiv'></div>
        <div className='w-[180px] h-20 border bg-(--green) absolute right-0 top-1/2 -translate-y-1/2 skew-x-[30deg]' id='rightLoadingDiv'></div>
      </div>  
    </div>
  )
}

export default newLoader