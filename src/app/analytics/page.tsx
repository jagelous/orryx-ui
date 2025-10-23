import Layout from "@/components/layout";
import PnlGrowthChart from "@/components/charts/PnlGrowthChart";

export default function Analytics() {
  return (
    <Layout>
      <div className="bg-[#1f1f1f] rounded-[20px] p-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[24px] font-medium text-white">Analytics</h1>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-[#242424] rounded-[16px] p-4">
            <h2 className="text-[18px] font-medium text-white mb-4">
              PnL Growth
            </h2>
            <PnlGrowthChart />
          </div>
        </div>
      </div>
    </Layout>
  );
}
