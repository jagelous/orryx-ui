import Layout from "@/components/layout";

export default function Analytics() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Analytics</h1>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">
              7D
            </button>
            <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg">
              30D
            </button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">
              90D
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Performance Metrics */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Total P&L</h3>
            <div className="text-3xl font-bold text-green-400">+$12,450</div>
            <div className="text-sm text-gray-400 mt-2">+24.5% this month</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Win Rate</h3>
            <div className="text-3xl font-bold text-blue-400">68.5%</div>
            <div className="text-sm text-gray-400 mt-2">
              +5.2% from last month
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Total Trades
            </h3>
            <div className="text-3xl font-bold text-purple-400">1,247</div>
            <div className="text-sm text-gray-400 mt-2">+127 this month</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Avg. Trade Size
            </h3>
            <div className="text-3xl font-bold text-orange-400">$2,340</div>
            <div className="text-sm text-gray-400 mt-2">
              +12.3% from last month
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance Chart */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Performance Chart
            </h3>
            <div className="h-64 bg-gray-700 rounded flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">+24.5%</div>
                <div className="text-sm text-gray-400">30-Day Performance</div>
              </div>
            </div>
          </div>

          {/* Asset Allocation */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Asset Allocation
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span className="text-white">Bitcoin</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold">45%</div>
                  <div className="text-sm text-gray-400">$5,625</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-white">Ethereum</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold">30%</div>
                  <div className="text-sm text-gray-400">$3,750</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="text-white">Solana</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold">15%</div>
                  <div className="text-sm text-gray-400">$1,875</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-white">Others</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold">10%</div>
                  <div className="text-sm text-gray-400">$1,250</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Trades */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">
            Recent Trades
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div>
                  <div className="text-white">ETH-PERP Long</div>
                  <div className="text-sm text-gray-400">5x Leverage</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-green-400 font-semibold">+$450.00</div>
                <div className="text-sm text-gray-400">2 hours ago</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div>
                  <div className="text-white">BTC-PERP Short</div>
                  <div className="text-sm text-gray-400">3x Leverage</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-red-400 font-semibold">-$120.00</div>
                <div className="text-sm text-gray-400">5 hours ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
