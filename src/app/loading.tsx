export default function LoadingPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        {/* Loading spinner animation */}
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-secondary border-b-primary border-l-secondary animate-spin"></div>
        </div>
        
        {/* Loading text */}
        <div className="flex flex-col items-center gap-2 mt-4">
          <h2 className="text-3xl font-bold text-primary animate-pulse">
            Loading
          </h2>
          <p className="text-xl text-secondary">
            Please wait while we prepare your experience...
          </p>
        </div>
        
        {/* Progress bar - using only Tailwind animations */}
        <div className="w-64 sm:w-80 h-2 bg-gray-100 rounded-full mt-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-secondary animate-pulse w-full origin-left"></div>
        </div>
      </div>
    </div>
  );
}