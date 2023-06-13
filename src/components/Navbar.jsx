import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../images/logo.jpg'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line react/prop-types
export default function Navbar({search}) {
  const onSearch = (word)=>{
    search(word)
  }
  return (
    <div style={{backgroundColor:"#111827"}}>
    <div className="container flex items-center justify-between p-4 mx-auto">
        <div className="">
        <img className="logo" src={logo} alt="dfs" width={"50px"} height={"50px"}/>
        </div>
        <nav>
          <ul className='flex justify-between gap-6 text-white'>
            <li><a href='#' className='duration-300 hover:text-red-600'>Popular</a></li>
            <li><a href='#' className='duration-300 hover:text-red-600'>Top Rated</a></li>
            <li><a href='#' className='duration-300 hover:text-red-600'>Upcoming</a></li>
            <li><a href='#'className='duration-300 hover:text-red-600'>People</a></li>
          </ul>
        </nav>
        <div className='p-2 bg-white rounded-md shrink'>
            <input type='text' className='outline-none' placeholder='Search...' onChange={(e) => onSearch(e.target.value)} />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
    </div>
    </div>
  )
}
