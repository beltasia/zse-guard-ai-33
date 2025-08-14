
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Shield, AlertCircle, CheckCircle, Eye, FileText, Clock } from "lucide-react";
import { useRealtimeData } from "@/hooks/useRealtimeData";
import { EvidenceForm } from "@/components/EvidenceForm";
import { useToast } from "@/hooks/use-toast";

export const ComplianceMonitor = () => {
  const { compliance } = useRealtimeData();
  const { toast } = useToast();
  const [evidenceFormOpen, setEvidenceFormOpen] = useState(false);
  const [selectedInvestigationId, setSelectedInvestigationId] = useState("");

  const handleViewDetails = (item: any) => {
    toast({
      title: "Compliance Details",
      description: `Viewing detailed information for: ${item.title}`,
    });
    console.log("Viewing compliance details:", item);
  };

  const handleViewCaseFile = (investigation: any) => {
    toast({
      title: "Case File Opened",
      description: `Opening case file for investigation: ${investigation.id}`,
    });
    console.log("Opening case file:", investigation);
  };

  const handleViewTimeline = (investigation: any) => {
    toast({
      title: "Investigation Timeline",
      description: `Viewing timeline for investigation: ${investigation.id}`,
    });
    console.log("Viewing timeline:", investigation);
  };

  const handleViewHistory = () => {
    toast({
      title: "Investigation History",
      description: "Opening investigation history dashboard",
    });
    console.log("Viewing investigation history");
  };

  const complianceItems = [
    {
      title: "Market Manipulation Detection",
      status: "active",
      confidence: 98,
      lastCheck: "2 minutes ago",
      description: "AI models monitoring for wash trading, spoofing, and layering",
    },
    {
      title: "Insider Trading Surveillance",
      status: "active", 
      confidence: 94,
      lastCheck: "1 minute ago",
      description: "Cross-referencing trades with corporate announcements",
    },
    {
      title: "Position Limit Monitoring",
      status: "warning",
      confidence: 87,
      lastCheck: "5 minutes ago", 
      description: "3 traders approaching position limits",
    },
    {
      title: "Trade Reporting Compliance",
      status: "active",
      confidence: 100,
      lastCheck: "30 seconds ago",
      description: "Real-time validation of trade reporting requirements",
    },
  ];

  const investigations = [
    {
      id: "INV-2024-001",
      trader: "Trader_4729",
      issue: "Potential front-running pattern",
      priority: "high",
      started: "2 hours ago",
    },
    {
      id: "INV-2024-002", 
      trader: "Institutional_A",
      issue: "Large block orders timing",
      priority: "medium",
      started: "1 day ago",
    },
  ];

  const handleAddEvidence = (investigationId: string) => {
    setSelectedInvestigationId(investigationId);
    setEvidenceFormOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compliance Monitoring */}
        <Card className="bg-surveillance-panel border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-foreground flex items-center">
              <Shield className="h-5 w-5 mr-2 text-primary" />
              Compliance Monitoring
              <Badge variant="outline" className="ml-2 bg-success/10 text-success border-success/30">
                {compliance.score}% Score
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {complianceItems.map((item, index) => (
              <div key={index} className="p-3 rounded-lg bg-muted/5 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`p-1 rounded-md ${
                      item.status === "active" ? "bg-success/20 text-success" :
                      item.status === "warning" ? "bg-warning/20 text-warning" :
                      "bg-destructive/20 text-destructive"
                    }`}>
                      {item.status === "active" ? (
                        <CheckCircle className="h-3 w-3" />
                      ) : (
                        <AlertCircle className="h-3 w-3" />
                      )}
                    </div>
                    <h4 className="text-sm font-medium text-foreground">{item.title}</h4>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {item.confidence}% AI Confidence
                  </Badge>
                </div>
                
                <Progress 
                  value={item.confidence} 
                  className="h-2 mb-2"
                />
                
                <p className="text-xs text-muted-foreground mb-2">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    Last check: {item.lastCheck}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 text-xs hover:bg-muted"
                    onClick={() => handleViewDetails(item)}
                  >
                    Details
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Active Investigations */}
        <Card className="bg-surveillance-panel border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-foreground flex items-center">
              <Eye className="h-5 w-5 mr-2 text-primary" />
              Active Investigations
              <Badge variant="outline" className="ml-2 bg-warning/10 text-warning border-warning/30">
                {investigations.length} Open
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {investigations.map((investigation, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/5 border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="font-mono text-xs">
                      {investigation.id}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        investigation.priority === "high" 
                          ? "bg-destructive/10 text-destructive border-destructive/30"
                          : "bg-warning/10 text-warning border-warning/30"
                      }`}
                    >
                      {investigation.priority.toUpperCase()}
                    </Badge>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 text-xs hover:bg-muted"
                    onClick={() => handleViewCaseFile(investigation)}
                  >
                    <FileText className="h-3 w-3 mr-1" />
                    Case File
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-xs text-muted-foreground">Trader:</span>
                    <span className="text-xs font-mono text-foreground">{investigation.trader}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-muted-foreground">Issue:</span>
                    <span className="text-xs text-foreground">{investigation.issue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-muted-foreground">Started:</span>
                    <span className="text-xs text-muted-foreground">{investigation.started}</span>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-border flex justify-between">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-xs hover:bg-muted"
                    onClick={() => handleViewTimeline(investigation)}
                  >
                    View Timeline
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-xs hover:bg-muted text-primary"
                    onClick={() => handleAddEvidence(investigation.id)}
                  >
                    Add Evidence
                  </Button>
                </div>
              </div>
            ))}
            
            {investigations.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Eye className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p className="text-sm">No active investigations</p>
                <p className="text-xs">All surveillance checks passed</p>
              </div>
            )}
            
            <Button 
              variant="outline" 
              className="w-full mt-4 bg-muted/20 hover:bg-muted/40"
              onClick={handleViewHistory}
            >
              View Investigation History
            </Button>
          </CardContent>
        </Card>
      </div>

      <EvidenceForm
        open={evidenceFormOpen}
        onOpenChange={setEvidenceFormOpen}
        investigationId={selectedInvestigationId}
      />
    </>
  );
};
