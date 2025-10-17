import Layout from "@/components/layout";

export default function TopTraders() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Top Traders</h1>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">
              All Time
            </button>
            <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg">
              This Month
            </button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">
              This Week
            </button>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">
            Trading Leaderboard
          </h3>
          <div className="space-y-3">
            {/* 1st Place */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-lg border border-yellow-500/30">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">1</span>
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">TC</span>
                </div>
                <div>
                  <div className="text-white font-semibold">TraderCrypto</div>
                  <div className="text-sm text-gray-400">2,847 followers</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-yellow-400 font-bold text-xl">
                  +$125,450
                </div>
                <div className="text-sm text-gray-400">+45.2% this month</div>
              </div>
            </div>

            {/* 2nd Place */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-lg border border-gray-500/30">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">2</span>
                </div>
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">BW</span>
                </div>
                <div>
                  <div className="text-white font-semibold">BitcoinWizard</div>
                  <div className="text-sm text-gray-400">1,923 followers</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-gray-400 font-bold text-xl">+$98,750</div>
                <div className="text-sm text-gray-400">+38.7% this month</div>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-lg border border-orange-500/30">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">3</span>
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">ET</span>
                </div>
                <div>
                  <div className="text-white font-semibold">EthereumTrader</div>
                  <div className="text-sm text-gray-400">1,456 followers</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-orange-400 font-bold text-xl">
                  +$87,230
                </div>
                <div className="text-sm text-gray-400">+42.1% this month</div>
              </div>
            </div>

            {/* 4th Place */}
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">CS</span>
                </div>
                <div>
                  <div className="text-white font-semibold">
                    CryptoStrategist
                  </div>
                  <div className="text-sm text-gray-400">1,234 followers</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-bold">+$76,890</div>
                <div className="text-sm text-gray-400">+35.8% this month</div>
              </div>
            </div>

            {/* 5th Place */}
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">DT</span>
                </div>
                <div>
                  <div className="text-white font-semibold">DeFiTrader</div>
                  <div className="text-sm text-gray-400">987 followers</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-bold">+$65,420</div>
                <div className="text-sm text-gray-400">+32.4% this month</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Performers This Week */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Top Performers This Week
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">1</span>
                  </div>
                  <div>
                    <div className="text-white">TraderCrypto</div>
                    <div className="text-sm text-gray-400">
                      +$15,230 this week
                    </div>
                  </div>
                </div>
                <div className="text-green-400 font-semibold">+12.5%</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">2</span>
                  </div>
                  <div>
                    <div className="text-white">BitcoinWizard</div>
                    <div className="text-sm text-gray-400">
                      +$12,450 this week
                    </div>
                  </div>
                </div>
                <div className="text-green-400 font-semibold">+10.8%</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">3</span>
                  </div>
                  <div>
                    <div className="text-white">EthereumTrader</div>
                    <div className="text-sm text-gray-400">
                      +$9,870 this week
                    </div>
                  </div>
                </div>
                <div className="text-green-400 font-semibold">+8.7%</div>
              </div>
            </div>
          </div>

          {/* Most Followed */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Most Followed Traders
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">TC</span>
                  </div>
                  <div>
                    <div className="text-white">TraderCrypto</div>
                    <div className="text-sm text-gray-400">2,847 followers</div>
                  </div>
                </div>
                <div className="text-blue-400 font-semibold">2,847</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">BW</span>
                  </div>
                  <div>
                    <div className="text-white">BitcoinWizard</div>
                    <div className="text-sm text-gray-400">1,923 followers</div>
                  </div>
                </div>
                <div className="text-purple-400 font-semibold">1,923</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">ET</span>
                  </div>
                  <div>
                    <div className="text-white">EthereumTrader</div>
                    <div className="text-sm text-gray-400">1,456 followers</div>
                  </div>
                </div>
                <div className="text-green-400 font-semibold">1,456</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Total Volume
            </h3>
            <div className="text-3xl font-bold text-blue-400">$2.4M</div>
            <div className="text-sm text-gray-400 mt-2">+15.2% this month</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Average Win Rate
            </h3>
            <div className="text-3xl font-bold text-green-400">78.5%</div>
            <div className="text-sm text-gray-400 mt-2">
              +3.2% from last month
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Active Traders
            </h3>
            <div className="text-3xl font-bold text-purple-400">247</div>
            <div className="text-sm text-gray-400 mt-2">+23 this week</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
