import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { IconButton } from '@mui/joy';
// import Button from '@mui/joy/Button';
// import Add from '@mui/icons-material/Add';

import { useDispatch, useSelector } from 'react-redux';
import { addImage } from '../../redux/slices/Images.slice';

const Home = () => {
    const dispatch =useDispatch()
    const res =useSelector((abc)=>{
        return abc
    })

    const{imagesSlice} =res
    console.log("response wala",res)
    const[imgUrl,setImgUrl] =useState(res.ImagesSlice)
    
    console.log("abc hello",imgUrl)
    



        const sumbitUrl =(e)=>{
                e.preventDefault()
                // console.log(e.target[0].value)
                
                const url =e.target[0].value
                dispatch(addImage(url))

                e.target[0].value =''
        }

  return (
   <>
   
    <div className='bg-amber-100 min-h-screen flex flex-col items-center justify-center'>
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
                                <Link to='/images' 
                                 className='bg-green-500 px-6 py-1 m-2 rounded hover:bg-green-400  text-white' >
                                 View
                                </Link>
                            </div>
                        </form>
       

            {/* slider part or image part  */}
           

                     </div>


                   
           
                     <div className='flex ml-3 bg-pink-300  gap-2 rounded-md flex-wrap '>
          {

                        imgUrl.length >0 ? imgUrl.map((item,i)=> (

                            <div >
                                    
                          <img src={item} alt=""
                          key={item}
                          width={300}
                          height={300}
                          

                          className=' rounded-md cursor-pointer w-[300px]
                           object-contain h-[300px]'
                          
                          />  
                          </div>
                        )): null
                     }

     </div>


     

     
     </div>

 
   
   </>
  )
}

export default Home