import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center">
      <h1 className="text-5xl font-bold text-error mb-4">404</h1>
      <p className="text-lg mb-4">Page Not Found</p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
}
