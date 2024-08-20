import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import { IconButton } from '@mui/joy';
// import Button from '@mui/joy/Button';
// import Add from '@mui/icons-material/Add';

import { useDispatch, useSelector } from 'react-redux';
import { addImage ,removeImage,resetImage} from '../../redux/slices/Images.slice';

const Home = () => {
    const dispatch =useDispatch()
    const res =useSelector(res=>res)

    const{ImagesSlice} =res
    console.log("response wala",res,ImagesSlice)
    
        


        const sumbitUrl =(e)=>{
                e.preventDefault()
                // console.log(e.target[0].value)
                
                const url =e.target[0].value
                dispatch(addImage(url))

                // e.target[0].value =''
        }

  return (
   <>
   
    <div className='bg-amber-100 min-h-screen flex flex-col items-center justify-center  '>
            <div >
                <h1 className='text-4xl text-blue-500 font-bold rounded w-96 p-3'>Paste Image URL</h1>
            </div> 
                    
                     <div className='flex gap-y-5 w-full  items-center justify-center gap-x-4'>
                        <form onSubmit={sumbitUrl} >
                            <input type="url" placeholder='http://localhost:5173/'
                            required

                            className='p-2 w-[400px] rounded-md'
                            
                            />
                            <div className='flex gap-x-4'>
                                <button type='sumbit'
                                    className='bg-blue-500 px-6 py-1 m-2 rounded hover:bg-blue-400 text-white'
                                >❤ SUMBIT</button>
                                <button type='button'
                                    className='bg-blue-500 px-6 py-1 m-2 rounded hover:bg-blue-400 text-white'
                                    onClick={()=>dispatch(resetImage())}
                                >Reset</button>
                                <Link to='/images' 
                                 className='bg-green-500 px-6 py-1 m-2 rounded hover:bg-green-400  text-white' >
                                 View
                                </Link>
                            </div>
                        </form>
       

            {/* slider part or image part  */}
           

                     </div>


                   
           
                     <div className='grid 
                     grid-cols-1 sm:grid-cols-3 ml-3   gap-2 rounded-md pt-2 p-2 '>
          {

                        ImagesSlice.length >0 ? ImagesSlice.map((item,i)=> (

                            <div >
                                    
                          <img src={item} alt=""
                          key={item}
                        //   width={300}
                        //   height={300}
                         onClick={()=>dispatch(removeImage(i))}
                          

                          className='bg-orange-200 w-[200px] h-[200px]
                         object-cover rounded-md shadow-lg'
                          
                          />  
                          </div>
                        )): <h1> please Paste url</h1>
                     }

                 </div>


     

     
     </div>

 
   
   </>
  )
}

export default Home