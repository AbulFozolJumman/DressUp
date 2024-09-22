"use client";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="mt-10 text-center">
      <p className="text-4xl bg-red-500 text-white p-5 w-[50%] mx-auto rounded-xl">
        Something went wrong!!!
      </p>
      <p className="text-4xl bg-red-500 text-white p-5 w-[50%] mx-auto rounded-xl mt-2">
        {error.message}
      </p>
      <button
        onClick={() => reset()}
        className="mt-5 px-6 py-2 bg-red-500 text-white border border-red-700 hover:bg-red-600 rounded-full"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
