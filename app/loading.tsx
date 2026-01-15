export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-neon-blue animate-spin"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-4 border-b-4 border-neon-purple animate-spin animation-delay-150"></div>
      </div>
    </div>
  );
}
