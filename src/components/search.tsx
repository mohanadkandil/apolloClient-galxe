import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

export function Search() {
  return (
    <div className="flex w-full max-w-md items-center space-x-2">
      <div className="relative flex-1">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
        <Input
          className="w-full rounded-full border border-gray-200 bg-white px-10 py-2 text-sm shadow-sm transition-colors focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:focus:border-gray-600 dark:focus:ring-gray-600 dark:border-gray-800"
          placeholder="Search for a Campaign..."
          type="search"
        />
      </div>
      <Button
        className="rounded-full px-4 py-2 text-sm font-medium"
        type="submit"
      >
        Search
      </Button>
    </div>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
