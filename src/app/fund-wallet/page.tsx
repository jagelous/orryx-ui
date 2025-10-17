import Layout from "@/components/layout";

export default function FundWallet() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Fund Wallet (USDT)</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Wallet Balance */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Current Balance</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">1,250.34</div>
                <div className="text-lg text-gray-400">USDT</div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                  Add Funds
                </button>
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  Withdraw
                </button>
              </div>
            </div>
          </div>

          {/* Deposit Methods */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Deposit Methods</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">B</span>
                  </div>
                  <span className="text-white">Bank Transfer</span>
                </div>
                <span className="text-green-400 text-sm">Available</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">C</span>
                  </div>
                  <span className="text-white">Credit Card</span>
                </div>
                <span className="text-green-400 text-sm">Available</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">C</span>
                  </div>
                  <span className="text-white">Crypto</span>
                </div>
                <span className="text-green-400 text-sm">Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Transactions</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white">Deposit</span>
                <span className="text-gray-400">Bank Transfer</span>
              </div>
              <div className="text-right">
                <div className="text-green-400 font-semibold">+500.00 USDT</div>
                <div className="text-sm text-gray-400">2 hours ago</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-white">Withdrawal</span>
                <span className="text-gray-400">Crypto</span>
              </div>
              <div className="text-right">
                <div className="text-red-400 font-semibold">-200.00 USDT</div>
                <div className="text-sm text-gray-400">1 day ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
