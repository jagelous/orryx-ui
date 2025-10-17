import Layout from "@/components/layout";

export default function CopyDashboard() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Copy Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Here..."
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <span className="absolute right-3 top-2 text-xs text-gray-400">
                ⌘K
              </span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              Connect Wallet
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Latest Master Trade Card */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Latest Master Trade
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">ETH-PERP Long 5x</span>
                <span className="text-green-400 font-semibold">Open</span>
              </div>
              <div className="text-sm text-gray-300">Entry: $2,350</div>
            </div>
          </div>

          {/* Strategy Growth Chart */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Strategy Growth
            </h3>
            <div className="h-32 bg-gray-700 rounded flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">+0.25%</div>
                <div className="text-sm text-gray-400">Growth</div>
              </div>
            </div>
          </div>

          {/* General Statistics */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              General Statistics
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Ethereum</span>
                <span className="text-white">8%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Binance</span>
                <span className="text-white">30%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Bitcoin</span>
                <span className="text-white">40%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
