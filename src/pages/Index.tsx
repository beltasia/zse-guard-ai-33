import { SurveillanceHeader } from "@/components/SurveillanceHeader";
import { MetricsOverview } from "@/components/MetricsOverview";
import { AlertsPanel } from "@/components/AlertsPanel";
import { MarketChart } from "@/components/MarketChart";
import { ComplianceMonitor } from "@/components/ComplianceMonitor";

const Index = () => {
  return (
    <div className="min-h-screen bg-surveillance-bg">
      <SurveillanceHeader />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Metrics Overview */}
        <MetricsOverview />
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Market Chart */}
          <div className="lg:col-span-2">
            <MarketChart />
          </div>
          
          {/* Alerts Panel */}
          <div className="lg:col-span-1">
            <AlertsPanel />
          </div>
        </div>
        
        {/* Compliance Monitor */}
        <ComplianceMonitor />
      </main>
    </div>
  );
};

export default Index;