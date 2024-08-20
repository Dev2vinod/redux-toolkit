import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeImage } from '../../redux/slices/Images.slice';
const Images = () => {
  const dispatch =useDispatch()
  const res =useSelector(res=>res.ImagesSlice)
  const{ImagesSlice} =res
  return (
    <>
     <div>
      <div className='grid grid-cols-4 gap-2 min-h-screen p-2   bg-amber-100'>

        {  ImagesSlice?.map((item,i)=>{
           return <div key={i}>
            <img src={item}
            // width={300}
            // height={300}
            onClick={()=>dispatch(removeImage(i))}
            className='bg-orange-200 w-[250px] h-[250px]
             object-cover rounded-md shadow-lg'
            alt="" />

           </div>
        }) }
      </div>
     </div>
    
  </>
  )
}

export default Images