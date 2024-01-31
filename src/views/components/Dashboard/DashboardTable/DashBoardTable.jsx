export default function DashBoardTable() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
              <div className="bg-white flex gap-4 px-4 py-4 justify-end">
                <input
                  type="text"
                  className="border-2 rounded-3xl py-3 px-10 border-gray-200"
                  placeholder="search"
                />
                <select
                  className="w-[290px]  bg-transparent  px-4 border-2 border-gray-200 rounded-3xl py-3 "
                  name="cars"
                  id="cars"
                >
                  <option
                    value="volvo"
                    className="text-text_secondary_colour rounded-3xl"
                    selected
                  >
                    10
                  </option>
                  <option
                    className="text-text_secondary_colour rounded-3xl"
                    value="saab"
                  >
                    5
                  </option>
                  <option
                    className="text-text_secondary_colour rounded-3xl"
                    value="mercedes"
                  >
                    7
                  </option>
                </select>
              </div>
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                    <th className="px-6 py-3 text-left font-medium">
                      <input
                        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        type="checkbox"
                      />
                    </th>
                    <th className="px-6 py-3 text-left font-medium">Sl. No.</th>
                    <th className="px-6 py-3 text-left font-medium">Region</th>
                    <th className="px-6 py-3 text-left font-medium">Area</th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  <tr>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <input
                        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        type="checkbox"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-900">
                        ghjhgjhgj
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-900">
                        hgjhgjghj
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
                        published
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
