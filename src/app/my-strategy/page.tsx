import Layout from "@/components/layout";

export default function MyStrategy() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">My Strategy</h1>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg">
            Create New Strategy
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Strategy */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">
                Active Strategy
              </h3>
              <span className="px-2 py-1 bg-green-500 text-black rounded text-sm font-semibold">
                Running
              </span>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-2xl font-bold text-white">
                  Conservative Growth
                </div>
                <div className="text-gray-400">Low risk, steady returns</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-400">Performance</div>
                  <div className="text-lg font-semibold text-green-400">
                    +12.5%
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Win Rate</div>
                  <div className="text-lg font-semibold text-blue-400">78%</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
                  Stop Strategy
                </button>
                <button className="flex-1 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg">
                  Edit
                </button>
              </div>
            </div>
          </div>

          {/* Strategy Settings */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Strategy Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Risk Level
                </label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option>Conservative</option>
                  <option>Moderate</option>
                  <option>Aggressive</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Max Leverage
                </label>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Stop Loss (%)
                </label>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Take Profit (%)
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Strategy Templates */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">
            Strategy Templates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-semibold">Scalping</h4>
                <span className="text-green-400 text-sm">+8.2%</span>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                Quick trades for small profits
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                Use Template
              </button>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-semibold">Swing Trading</h4>
                <span className="text-green-400 text-sm">+15.7%</span>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                Medium-term position holding
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                Use Template
              </button>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-semibold">Trend Following</h4>
                <span className="text-green-400 text-sm">+22.1%</span>
              </div>
              <p className="text-gray-400 text-sm mb-3">Follow market trends</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                Use Template
              </button>
            </div>
          </div>
        </div>

        {/* Strategy History */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">
            Strategy History
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div>
                  <div className="text-white">Aggressive Growth</div>
                  <div className="text-sm text-gray-400">
                    Completed • 30 days
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-green-400 font-semibold">+18.5%</div>
                <div className="text-sm text-gray-400">2 weeks ago</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div>
                  <div className="text-white">High Risk</div>
                  <div className="text-sm text-gray-400">Stopped • 7 days</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-red-400 font-semibold">-5.2%</div>
                <div className="text-sm text-gray-400">1 month ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
