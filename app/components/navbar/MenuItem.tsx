'use client'

interface MenuItemProps {
  onСlick: () => void
  label: string
}
const MenuItem: React.FC<MenuItemProps> = ({
  onСlick, label
}) => {
  return (

    <div
      onClick={onСlick}
      className=" 
    px-4 
    py-3 
    hover:bg-neutral-100 
    transition 
    font-semibold">
      {label}
    </div>
  )
}

export default MenuItem;