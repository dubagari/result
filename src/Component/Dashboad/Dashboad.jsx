import { Link } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import './Dashboad.css'
import { IoSchool } from 'react-icons/io5'
import { MdClass } from 'react-icons/md'
import { SiProcesswire } from 'react-icons/si'
import {FcStatistics} from 'react-icons/fc'
import { AiFillSetting } from 'react-icons/ai'
const Dashboad = () => {
  return (
    <>
      <div className="aside-header">
        <nav >
            <Link to='/home'><li className='uppercase nav-list'><AiFillHome size={15}/> home</li></Link>
            <Link to='/student'><li className='uppercase nav-list'> <IoSchool/> student</li></Link>
            <Link to='/classes'><li className='uppercase nav-list'><MdClass/> classes</li></Link>
            <Link to='/records'><li className='uppercase nav-list'><SiProcesswire/> records</li></Link>
            <Link to='/statistics'><li className='uppercase nav-list'><FcStatistics/> statistics</li></Link>
            <Link to='/settings'><li className='uppercase nav-list'><AiFillSetting/> settings</li></Link>
        </nav>
      </div>
    </>
  )
}

export default Dashboad
