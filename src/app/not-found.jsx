import Link from "next/link";


const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gray-400">
            <h1 className="text-7xl font-bold text-gray-800">404</h1>
            <h2 className="text-xl font-medium text-gray-600 mt-2">
                Oops! Page not found
            </h2>
            <p className="text-gray-700 mt-2 mb-6">
                The page you are looking for dosent't exist.
            </p>

            <Link
                href="/"
                className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;