import CartButton from './CartButton'
import ThemeToggle from './ThemeToggle'

function NavActions({
  onCartClick = () => null,
}: {
  onCartClick?: () => void
}) {
  return (
    <div className="m-0 flex gap-4 p-0">
      <ThemeToggle />
      {localStorage.getItem('username') && (
        <CartButton onCartClick={onCartClick} />
      )}
    </div>
  )
}

export default NavActions
