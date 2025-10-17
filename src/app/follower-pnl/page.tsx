import Layout from "@/components/layout";

export default function FollowerPnL() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Follower P&L</h1>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">
              7D
            </button>
            <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg">
              30D
            </button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">
              All Time
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Follower Stats */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Total Followers
            </h3>
            <div className="text-3xl font-bold text-blue-400">1,245</div>
            <div className="text-sm text-gray-400 mt-2">+127 this week</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Avg. Follower P&L
            </h3>
            <div className="text-3xl font-bold text-green-400">+$2,450</div>
            <div className="text-sm text-gray-400 mt-2">+15.2% this month</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Total Copied Trades
            </h3>
            <div className="text-3xl font-bold text-purple-400">3,247</div>
            <div className="text-sm text-gray-400 mt-2">+312 this week</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Success Rate
            </h3>
            <div className="text-3xl font-bold text-orange-400">78.5%</div>
            <div className="text-sm text-gray-400 mt-2">
              +3.2% from last month
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Follower Performance Chart */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Follower Performance
            </h3>
            <div className="h-64 bg-gray-700 rounded flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">+15.2%</div>
                <div className="text-sm text-gray-400">
                  Average Follower Return
                </div>
              </div>
            </div>
          </div>

          {/* Top Performing Followers */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Top Performing Followers
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

        {/* Follower Activity */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">
            Recent Follower Activity
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div>
                  <div className="text-white">
                    Alex Chen copied ETH-PERP Long
                  </div>
                  <div className="text-sm text-gray-400">
                    2 hours ago • 5x Leverage
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
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div>
                  <div className="text-white">
                    Maria Rodriguez started following
                  </div>
                  <div className="text-sm text-gray-400">
                    4 hours ago • $5,000 initial
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-blue-400 font-semibold">New Follower</div>
                <div className="text-sm text-gray-400">+1 follower</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div>
                  <div className="text-white">
                    John Smith copied BTC-PERP Short
                  </div>
                  <div className="text-sm text-gray-400">
                    6 hours ago • 3x Leverage
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-yellow-400 font-semibold">+$450</div>
                <div className="text-sm text-gray-400">+2.1%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Follower Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Geographic Distribution
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">United States</span>
                <span className="text-white">35%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Europe</span>
                <span className="text-white">28%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Asia</span>
                <span className="text-white">22%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Others</span>
                <span className="text-white">15%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Investment Ranges
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">$1K - $5K</span>
                <span className="text-white">45%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">$5K - $10K</span>
                <span className="text-white">30%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">$10K - $25K</span>
                <span className="text-white">20%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">$25K+</span>
                <span className="text-white">5%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Retention Rate
            </h3>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">87.5%</div>
              <div className="text-sm text-gray-400 mt-2">Active Followers</div>
              <div className="text-xs text-gray-500 mt-1">
                1,089 out of 1,245
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
