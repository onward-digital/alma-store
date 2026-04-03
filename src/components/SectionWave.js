export default function SectionWave({ fillColor = 'var(--color-bg-secondary)', flip = false }) {
  return (
    <svg
      viewBox="0 0 1440 50"
      preserveAspectRatio="none"
      style={{
        width: '100%',
        height: '50px',
        display: 'block',
        marginTop: '-1px',
        transform: flip ? 'rotate(180deg)' : 'none',
      }}
    >
      <path
        d="M0,25 C240,45 480,5 720,25 C960,45 1200,5 1440,25 L1440,50 L0,50Z"
        fill={fillColor}
      />
    </svg>
  );
}
