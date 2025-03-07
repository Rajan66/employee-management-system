import ThemeToggle from './ThemeToggle'
import { SidebarTrigger } from '../ui/sidebar'
import UserDropDown from './UserDropDown'
const Navbar = () => {
  return (
    <header className='w-full mb-3 border-b border-gray-200 py-3 px-4'>
      <nav className='flex justify-between'>
        <SidebarTrigger />
        <div className='flex items-center space-x-5'>
          <ThemeToggle />
          <UserDropDown />
        </div>
      </nav>
    </header>
  )
}

export default Navbar