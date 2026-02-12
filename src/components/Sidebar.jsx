import { useState, useCallback } from "react"
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */

export default function Sidebar({ initialMenuItems }) {
  // keep track of the new menu item input value
  let [newMenuItem, setNewMenuItem] = useState("")

  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  // this state will hold the current menu items
  let [menuItems, setMenuItems] = useState(initialMenuItems)
  // state for filter input
  let [filter, setFilter] = useState("")

  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.
  let addMenuItem = useCallback(() => {
    console.log("Added menu item")

   // TODO: 3. Add a new menu item to the correct variable associated with this class.
   // This involves adding a parameter and changing a class instance variable (props).
    // check for non-empty input
    if (newMenuItem.trim() !== "") {
      // add new menu item to the state
      setMenuItems([newMenuItem, ...menuItems])
    }
  }, [newMenuItem, menuItems]) // dependencies

  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.
    // create a regex for filtering, i is case insensitive
  const filterRegex = new RegExp(filter, "i")
    // filter the menu items based on the filter input
  const filteredItems = menuItems.filter((item) => filterRegex.test(item))

  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
  // its own item.
  return (
    <div>
      {/* this is the new list; starts from the initialMenuItems prop*/}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />

      <button
        onClick={() => {
          /* TODO: 3 */
          addMenuItem();
        }}
      >
        Add Item
      </button>
      <br />

      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
    </div>
  )
}
