import { dataUser } from "../data/dataUser"
import { FaShoppingBag } from 'react-icons/fa'

export function RecentOrders() {
  return (
    <div className="w-full relative col-span-1 h-[50vh] lg:h-[70vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1 className="">Recent Orders</h1>
      <ul>
        {
          dataUser.map((order, id) => (
            <li key={id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer" >
              <div className="bg-purple-100 rounded-lg p-3">
                <FaShoppingBag className="text-purple-800" />
              </div>
              <div className="pl-4">
                <p className="text-gray-800 font-bold">{order.total}</p>
                <p className="text-gray-400 text-sm">{order.total}</p>
              </div>
              <p className="lg:flex md:hidden absolute right-6 text-sm">{order.date}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}