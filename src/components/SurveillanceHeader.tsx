import { Activity, Shield, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";

export const SurveillanceHeader = () => {
  const location = useLocation();
  return (
    <header className="bg-surveillance-panel border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">ZSE Guard AI</h1>
                <p className="text-sm text-muted-foreground">Market Surveillance & Compliance</p>
              </div>
            </div>
            
            {/* Status Badge */}
            <Badge variant="outline" className="bg-success/10 text-success border-success/30">
              <Activity className="h-3 w-3 mr-1" />
              System Active
            </Badge>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`text-foreground hover:bg-muted ${location.pathname === '/markets' ? 'bg-muted' : ''}`}
              asChild
            >
              <Link to="/markets">
                <TrendingUp className="h-4 w-4 mr-2" />
                Markets
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`text-foreground hover:bg-muted ${location.pathname === '/compliance' ? 'bg-muted' : ''}`}
              asChild
            >
              <Link to="/compliance">
                <Shield className="h-4 w-4 mr-2" />
                Compliance
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`text-foreground hover:bg-muted ${location.pathname === '/traders' ? 'bg-muted' : ''}`}
              asChild
            >
              <Link to="/traders">
                <Users className="h-4 w-4 mr-2" />
                Traders
              </Link>
            </Button>
          </nav>
          
          {/* Time Display */}
          <div className="text-right">
            <div className="text-sm font-mono text-primary">
              {new Date().toLocaleTimeString('en-US', { hour12: false })}
            </div>
            <div className="text-xs text-muted-foreground">
              {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};