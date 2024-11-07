import { cn } from "@/lib/utils"
import { NavLink } from "react-router-dom"

export const Header = () => {
  const items = ["home", "add", "profile"]

  const ItemList = ({ item }: any) => {
    return (
      <NavLink
        to={item}
        className={({ isActive }) =>
          cn(isActive ? "bg-white" : "", "capitalize")
        }
      >
        {item}
      </NavLink>
    )
  }

  return (
    <nav className="justify-center  bg-red-800 items-center flex">
      <ul className="gap-7 flex p-4">
        {items.map((item, index) => (
          <li key={index}>
            <ItemList item={item} key={index} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
