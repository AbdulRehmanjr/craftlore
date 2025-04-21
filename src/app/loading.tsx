export default function LoadingPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-secondary border-b-primary border-l-secondary animate-spin"></div>
        </div>
      </div>
    </div>
  );
}