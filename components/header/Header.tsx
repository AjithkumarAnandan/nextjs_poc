"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white px-6 shadow-sm">

      {/* Logo and Application Name */}
      <Link href="/dashboard" className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-lg font-bold text-white">
          AK
        </div>

        <div>
          <h1 className="text-lg font-bold tracking-tight text-gray-900">
            AK Business Reports
          </h1>
          <p className="text-xs text-gray-500">
            Reporting & Analytics
          </p>
        </div>
      </Link>

      {/* Search */}
      <div className="mx-8 hidden max-w-md flex-1 md:block">
        <input
          type="search"
          placeholder="Search reports..."
          aria-label="Search reports"
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Actions and User Profile */}
      <div className="flex items-center gap-5">

        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-lg p-2 text-gray-600 hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 18.75a2.25 2.25 0 0 1-4.5 0m9-2.25H5.25c1.5-1.5 2.25-3 2.25-6a4.5 4.5 0 0 1 9 0c0 3 .75 4.5 2.25 6Z"
            />
          </svg>
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="hidden h-8 border-l border-gray-200 sm:block" />

        <button
          type="button"
          className="flex items-center gap-3 rounded-lg p-1.5 hover:bg-gray-50"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
            AD
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-gray-800">
              Admin User
            </p>
            <p className="text-xs text-gray-500">
              Super Admin
            </p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="hidden h-4 w-4 text-gray-500 sm:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>

      </div>
    </header>
  );
}