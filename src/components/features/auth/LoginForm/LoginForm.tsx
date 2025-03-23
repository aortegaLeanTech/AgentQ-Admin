import * as React from "react";
import Image from "next/image";
import Link from "next/link";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData.email, formData.password);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Gradient Background */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-b from-[#FF5733] via-[#FF3366] to-[#6B46C1] p-12">
        <div className="flex flex-col text-white mt-auto">
          <h1 className="text-5xl font-bold mb-4">
            StudioQ: Creating a<br />
            new age of productivity
          </h1>
          <p className="text-xl opacity-90">
            A product by Lean Solutions Group
          </p>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 lg:px-16 xl:px-24">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center">
            <Image
              src="/images/studioq-logo.svg"
              alt="StudioQ Logo"
              width={200}
              height={80}
              priority
              className="mb-2"
            />
            <p className="text-gray-600">By Lean Solutions Group</p>
            <p className="text-gray-500 mt-2">Login to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm text-gray-600">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm text-gray-600">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1E40AF] text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign in
            </button>

            <div className="text-center">
              <Link
                href="/auth/reset-password"
                className="text-sm text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-200"
              >
                Reset password
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
