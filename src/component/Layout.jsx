import { Label } from "@mui/icons-material";
import { Link } from "react-router-dom";

 const Layout =({children})=>{

    const menus =[
        {
            Label:'Home',
            to:'/'
        },
        {
            Label:'Images',
            to:'/images'
        },
        {
            Label:'Login',
            to:'/login'
        },
        // {
        //     Label:'Login',
        //     to:'/login'
        // }

    ]


    return(

        <>
         <div>

             <div>
               <div className="bg-slate-900 flex items-center justify-around h-12">
                <h1 className="text-white text-2xl font-bold">Redux</h1>
                <ul className="flex text-white gap-x-7">
                    {menus.map((item,index)=>(
                        <li key={index} className="hover:bg-violet-600 p-2 rounded font-semibold ">
                            <Link to={item.to} >
                            {item.Label}
                            </Link>

                        </li>
                    ))}
                </ul>
               </div>
             </div>

             <div>
                {children}
             </div>
             <div className="bg-slate-900 p-10">
               <h1 className=" text-4xl font-bold text-center text-cyan-500">Footer </h1> 
             </div>
         </div>
        </>
    
    )

    
 }

 export default Layout;