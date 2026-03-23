interface DonutChartProps {
  score: number;
  size?: number;
  strokeWidth?: number;
}

export function DonutChart({ score, size = 60, strokeWidth = 6 }: DonutChartProps) {
  // Calculate color based on score
  const getColor = (score: number) => {
    if (score >= 75) return '#0D8877';
    if (score >= 60) return '#f59e0b';
    return '#ef4444';
  };

  const color = getColor(score);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.3s ease' }}
        />
      </svg>
      {/* Score text in center */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: size * 0.35,
          fontWeight: 'bold',
          color: '#26273b',
          fontFamily: 'Nunito Sans, sans-serif',
        }}
      >
        {score}
      </div>
    </div>
  );
}