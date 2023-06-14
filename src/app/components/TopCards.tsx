export function TopCards() {
  return (
    <section className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$7,846</p>
          <p className="text-gary-600">Daily Revenue</p>
        </div>
        <div className="bg-green-200 flex items-center justify-center rounded-lg p-2">
          <span className="text-green-700 text-lg">+18%</span>
        </div>
      </div>
      <div className="lg:col-span-2 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$1,286,846</p>
          <p className="text-gary-600">YTD Revenue</p>
        </div>
        <div className="bg-green-200 flex items-center justify-center rounded-lg p-2">
          <span className="text-green-700 text-lg">+18%</span>
        </div>
      </div>
      <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$11,427</p>
          <p className="text-gary-600">Customers</p>
        </div>
        <div className="bg-green-200 flex items-center justify-center rounded-lg p-2">
          <span className="text-green-700 text-lg">+18%</span>
        </div>
      </div>
    </section>
  )
}