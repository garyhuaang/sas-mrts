import CartButton from './CartButton'
import ThemeToggle from './ThemeToggle'

function NavActions() {
  return (
    <div className="flex gap-4 m-0 p-0">
      <ThemeToggle />
      {localStorage.getItem('username') && <CartButton />}
    </div>
  )
}

export default NavActions
