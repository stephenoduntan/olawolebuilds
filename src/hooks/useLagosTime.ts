import { useState, useEffect } from 'react';

export interface LagosTimeState {
  time: string;           // e.g. "04:53 AM"
  timeWithSeconds: string;// e.g. "04:53:12 AM"
  formatted: string;      // e.g. "04:53 AM GMT+1"
  full: string;           // e.g. "04:53:12 AM GMT+1"
  zone: string;           // "GMT+1"
}

export function useLagosTime(): LagosTimeState {
  const [timeState, setTimeState] = useState<LagosTimeState>({
    time: '12:00 PM',
    timeWithSeconds: '12:00:00 PM',
    formatted: '12:00 PM GMT+1',
    full: '12:00:00 PM GMT+1',
    zone: 'GMT+1'
  });

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const shortFormatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Lagos',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
        const fullFormatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Lagos',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });

        const shortStr = shortFormatter.format(now);
        const fullStr = fullFormatter.format(now);

        setTimeState({
          time: shortStr,
          timeWithSeconds: fullStr,
          formatted: `${shortStr} GMT+1`,
          full: `${fullStr} GMT+1`,
          zone: 'GMT+1'
        });
      } catch {
        const fallback = new Date().toLocaleTimeString();
        setTimeState({
          time: fallback,
          timeWithSeconds: fallback,
          formatted: `${fallback} GMT+1`,
          full: `${fallback} GMT+1`,
          zone: 'GMT+1'
        });
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return timeState;
}
