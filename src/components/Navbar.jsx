import logo from '../assets/Logo.png'
import { FaGithub, FaLinkedin,FaWhatsapp } from 'react-icons/fa'
import { FaSquareXTwitter} from 'react-icons/fa6'
function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-2">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className='h-20 ' />
        </div>
        <div className='m-8  flex items-center justify-center gap-4 text-2xl text-purple-300'>
            <a href='https://github.com/Karan-2401'><FaGithub/></a>
            <a href="https://www.linkedin.com/in/karan-yadav24/"><FaLinkedin/></a>
            <a href='https://x.com/KaranYadav55378'><FaSquareXTwitter/></a>
            <a href='#'><FaWhatsapp/></a>
        </div>
    </nav>
  )
}

export default Navbar
