import Layout from "@/components/layout";

export default function MasterTrades() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Master Trades</h1>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">
              All
            </button>
            <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg">
              Active
            </button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">
              Completed
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Master Stats */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Total Followers
            </h3>
            <div className="text-3xl font-bold text-blue-400">1,245</div>
            <div className="text-sm text-gray-400 mt-2">+127 this week</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Win Rate</h3>
            <div className="text-3xl font-bold text-green-400">78.5%</div>
            <div className="text-sm text-gray-400 mt-2">
              +3.2% from last month
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Total P&L</h3>
            <div className="text-3xl font-bold text-purple-400">+$45,230</div>
            <div className="text-sm text-gray-400 mt-2">+12.5% this month</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Avg. Trade Size
            </h3>
            <div className="text-3xl font-bold text-orange-400">$3,450</div>
            <div className="text-sm text-gray-400 mt-2">
              +8.7% from last month
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Trades */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Active Trades
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div>
                    <div className="text-white">ETH-PERP Long</div>
                    <div className="text-sm text-gray-400">
                      5x Leverage • 2 hours ago
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-semibold">+$1,250</div>
                  <div className="text-sm text-gray-400">+8.5%</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div>
                    <div className="text-white">BTC-PERP Short</div>
                    <div className="text-sm text-gray-400">
                      3x Leverage • 4 hours ago
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-yellow-400 font-semibold">+$450</div>
                  <div className="text-sm text-gray-400">+2.1%</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div>
                    <div className="text-white">SOL-PERP Long</div>
                    <div className="text-sm text-gray-400">
                      2x Leverage • 6 hours ago
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-red-400 font-semibold">-$320</div>
                  <div className="text-sm text-gray-400">-1.8%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Followers */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Top Followers
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <div className="text-white">Alex Chen</div>
                    <div className="text-sm text-gray-400">
                      Following 2 months
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-semibold">+$12,450</div>
                  <div className="text-sm text-gray-400">+24.5%</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div>
                    <div className="text-white">Maria Rodriguez</div>
                    <div className="text-sm text-gray-400">
                      Following 1 month
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-semibold">+$8,750</div>
                  <div className="text-sm text-gray-400">+18.2%</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">J</span>
                  </div>
                  <div>
                    <div className="text-white">John Smith</div>
                    <div className="text-sm text-gray-400">
                      Following 3 weeks
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-semibold">+$5,230</div>
                  <div className="text-sm text-gray-400">+15.8%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trade History */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">
            Recent Trade History
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left text-gray-400 py-3">Asset</th>
                  <th className="text-left text-gray-400 py-3">Type</th>
                  <th className="text-left text-gray-400 py-3">Leverage</th>
                  <th className="text-left text-gray-400 py-3">P&L</th>
                  <th className="text-left text-gray-400 py-3">Duration</th>
                  <th className="text-left text-gray-400 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-3 text-white">ETH-PERP</td>
                  <td className="py-3 text-green-400">Long</td>
                  <td className="py-3 text-white">5x</td>
                  <td className="py-3 text-green-400">+$2,450</td>
                  <td className="py-3 text-gray-400">2h 15m</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-green-500 text-black rounded text-sm">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 text-white">BTC-PERP</td>
                  <td className="py-3 text-red-400">Short</td>
                  <td className="py-3 text-white">3x</td>
                  <td className="py-3 text-green-400">+$1,850</td>
                  <td className="py-3 text-gray-400">4h 32m</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-green-500 text-black rounded text-sm">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 text-white">SOL-PERP</td>
                  <td className="py-3 text-green-400">Long</td>
                  <td className="py-3 text-white">2x</td>
                  <td className="py-3 text-red-400">-$750</td>
                  <td className="py-3 text-gray-400">1h 45m</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-red-500 text-white rounded text-sm">
                      Stopped
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
