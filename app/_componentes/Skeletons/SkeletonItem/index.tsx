function SkeletonItem({ className = "" }) {
  return (
    <div 
      className={`relative overflow-hidden bg-gray-300 ${className}`}
    >
      {/* Efecto de barrido */}
      <div className="absolute inset-0 -translate-x-full animate-sweep bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
    </div>
  );
}

export default SkeletonItem;

