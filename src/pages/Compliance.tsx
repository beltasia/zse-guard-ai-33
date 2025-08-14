import { SurveillanceHeader } from "@/components/SurveillanceHeader";
import { ComplianceMonitor } from "@/components/ComplianceMonitor";
import { AlertsPanel } from "@/components/AlertsPanel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const Compliance = () => {
  return (
    <div className="min-h-screen bg-surveillance-bg">
      <SurveillanceHeader />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Compliance Monitor</h1>
            <p className="text-muted-foreground">Regulatory compliance and risk assessment</p>
          </div>
          <Badge variant="outline" className="bg-success/10 text-success border-success/30">
            <Shield className="h-3 w-3 mr-1" />
            Compliant
          </Badge>
        </div>

        {/* Compliance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-surveillance-panel border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Compliance Score</CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">98.7%</div>
              <p className="text-xs text-muted-foreground">Overall compliance</p>
            </CardContent>
          </Card>

          <Card className="bg-surveillance-panel border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Open Issues</CardTitle>
              <AlertTriangle className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">3</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>

          <Card className="bg-surveillance-panel border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Violations</CardTitle>
              <XCircle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">0</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card className="bg-surveillance-panel border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Reports Filed</CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">47</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ComplianceMonitor />
          </div>
          <div className="lg:col-span-1">
            <AlertsPanel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Compliance;