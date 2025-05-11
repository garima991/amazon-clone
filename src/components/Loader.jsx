export default function Loader () {
    return (
        <div className="flex flex-col gap-4 justify-center items-center w-screen h-screen bg-white">
          <div className="w-20 min-w-20 h-20 min-h-20 animate-spin rounded-full border-8 border-blue-600 border-r-white flex justify-center items-center" />
          <span className="text-base italic font-light animate-pulse">
            Loading...
          </span>
        </div>
    );
}