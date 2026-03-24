function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-bounce top-10 left-10"></div>

      <div className="absolute w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse bottom-10 right-10"></div>

      <div className="absolute w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-ping top-1/2 left-1/2"></div>
    </div>
  );
}

export default Background;
