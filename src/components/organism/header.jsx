import { Search, Zap } from 'lucide-react';

export default function Header(){
    return(
        <div>
            <div className="flex text-gray-300 p-2 text-xs md:text-lg bg-black ">
                <div className="flex-1/3"></div>
                <div className=""><Zap className='inline'/>Robotika <span className='text-blue-400'> Universitas Sebelas Maret </span></div>

            </div>
            <Nav />
        </div>


    )
}

function Nav(){
    return (
        <div className='flex text-gray-300 bg-black items-center'>
            <div className=' flex justify-center w-1/4'>
                    <img src='./MainLogo.jpg' className='h-14 w-auto my-1'/>
            </div>
            <nav className='flex self-stretch w-3/4'>
                <a className=' flex items-center hover:bg-gray-900 grow justify-center'>Home</a>
                <a className=' flex items-center hover:bg-gray-900 grow justify-center'>Siapa Kita</a>
                <a className=' flex items-center hover:bg-gray-900 grow justify-center'>Apa yang Kita Lakukan</a>
                <a className=' flex items-center hover:bg-gray-900 grow justify-center'>Pencapaian</a>
                <a className=' flex items-center hover:bg-gray-900 grow justify-center'>Daftar</a>
                
               
            </nav>
            
                
            
        </div>
    )
}