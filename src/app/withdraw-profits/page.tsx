import Layout from "@/components/layout";

export default function WithdrawProfits() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Withdraw Profits</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Available Profits */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Available Profits
            </h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400">
                  2,847.50
                </div>
                <div className="text-lg text-gray-400">USDT</div>
                <div className="text-sm text-gray-500">
                  +15.2% from last month
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm text-gray-400">
                  Withdrawal Amount
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-gray-600 hover:bg-gray-500 text-white rounded text-sm">
                    25%
                  </button>
                  <button className="px-3 py-1 bg-gray-600 hover:bg-gray-500 text-white rounded text-sm">
                    50%
                  </button>
                  <button className="px-3 py-1 bg-gray-600 hover:bg-gray-500 text-white rounded text-sm">
                    100%
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Withdrawal Methods */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Withdrawal Methods
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">B</span>
                  </div>
                  <div>
                    <div className="text-white">Bank Transfer</div>
                    <div className="text-sm text-gray-400">
                      1-3 business days
                    </div>
                  </div>
                </div>
                <span className="text-green-400 text-sm">Available</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">C</span>
                  </div>
                  <div>
                    <div className="text-white">Crypto Wallet</div>
                    <div className="text-sm text-gray-400">Instant</div>
                  </div>
                </div>
                <span className="text-green-400 text-sm">Available</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">P</span>
                  </div>
                  <div>
                    <div className="text-white">PayPal</div>
                    <div className="text-sm text-gray-400">
                      1-2 business days
                    </div>
                  </div>
                </div>
                <span className="text-yellow-400 text-sm">Pending</span>
              </div>
            </div>
          </div>
        </div>

        {/* Withdrawal History */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">
            Withdrawal History
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div>
                  <div className="text-white">Bank Transfer</div>
                  <div className="text-sm text-gray-400">Completed</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-semibold">1,500.00 USDT</div>
                <div className="text-sm text-gray-400">3 days ago</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div>
                  <div className="text-white">Crypto Wallet</div>
                  <div className="text-sm text-gray-400">Processing</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-semibold">750.00 USDT</div>
                <div className="text-sm text-gray-400">1 day ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
