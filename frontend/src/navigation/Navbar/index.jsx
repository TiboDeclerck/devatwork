import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

export default function Navbar({ open, toggleMenu }) {
	return (
		<nav className={`bg-gray-800 p-4 lg:ml-64 transition-all duration-300`}>
			<div className='container mx-auto flex items-center justify-between'>
				<div className='block lg:hidden'>
					<button onClick={toggleMenu} className='text-white focus:outline-none'>
						<svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
						</svg>
					</button>
				</div>
				<div className='text-white text-1xl font-bold'>Dev@Work - Inventory list</div>
				<DesktopNavbar />
			</div>

			<MobileNavbar />
		</nav>
	)
}
