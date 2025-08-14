import { useState, useEffect } from "react";

interface MarketData {
  activeTrades: number;
  volume: number;
  tradeChange: number;
  volumeChange: number;
  chartData: Array<{
    time: string;
    price: number;
    volume: number;
  }>;
}

interface Alert {
  id: string;
  severity: "critical" | "warning" | "info";
  title: string;
  description: string;
  time: string;
}

interface AlertData {
  active: number;
  list: Alert[];
}

interface ComplianceData {
  score: number;
  change: number;
  violations: number;
  investigations: number;
}

interface RealtimeData {
  marketData: MarketData;
  alerts: AlertData;
  compliance: ComplianceData;
}

export const useRealtimeData = (): RealtimeData => {
  const [data, setData] = useState<RealtimeData>(() => ({
    marketData: {
      activeTrades: 1247,
      volume: 45600000,
      tradeChange: 12.5,
      volumeChange: -3.2,
      chartData: generateInitialChartData(),
    },
    alerts: {
      active: 7,
      list: [
        {
          id: "1",
          severity: "critical",
          title: "Unusual Trading Pattern Detected",
          description: "ZVHL showing 450% volume spike",
          time: "2 min ago",
        },
        {
          id: "2",
          severity: "warning", 
          title: "Price Manipulation Alert",
          description: "Potential wash trading in SMAL",
          time: "5 min ago",
        },
        {
          id: "3",
          severity: "info",
          title: "Large Block Trade",
          description: "HIPPO: 50K shares block executed",
          time: "8 min ago",
        },
        {
          id: "4",
          severity: "warning",
          title: "Insider Trading Indicator",
          description: "Pre-announcement activity in NICH",
          time: "12 min ago",
        },
        {
          id: "5",
          severity: "critical",
          title: "Circuit Breaker Triggered",
          description: "ZIMPAPERS hit upper limit",
          time: "15 min ago",
        },
      ],
    },
    compliance: {
      score: 94,
      change: 2,
      violations: 3,
      investigations: 1,
    },
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => ({
        ...prevData,
        marketData: {
          ...prevData.marketData,
          activeTrades: prevData.marketData.activeTrades + Math.floor(Math.random() * 20 - 10),
          volume: prevData.marketData.volume + Math.floor(Math.random() * 1000000 - 500000),
          tradeChange: prevData.marketData.tradeChange + (Math.random() * 2 - 1),
          volumeChange: prevData.marketData.volumeChange + (Math.random() * 2 - 1),
          chartData: updateChartData(prevData.marketData.chartData),
        },
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return data;
};

function generateInitialChartData() {
  const now = new Date();
  const data = [];
  
  for (let i = 30; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 2 * 60 * 1000);
    data.push({
      time: time.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }),
      price: 1200 + Math.random() * 200,
      volume: 1000000 + Math.random() * 500000,
    });
  }
  
  return data;
}

function updateChartData(currentData: Array<{time: string; price: number; volume: number}>) {
  const newData = [...currentData];
  const now = new Date();
  
  // Add new data point
  newData.push({
    time: now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    }),
    price: newData[newData.length - 1].price + (Math.random() * 40 - 20),
    volume: 1000000 + Math.random() * 500000,
  });
  
  // Keep only last 30 data points
  if (newData.length > 30) {
    newData.shift();
  }
  
  return newData;
}
