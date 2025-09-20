"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

const filters = {
  all: "All cabins",
  small: "1-3 guests",
  medium: "4-7 guests",
  large: "8-12 guests",
};

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function renderButtons() {
    return Object.entries(filters).map(([filter, label]) => (
      <Button
        key={filter}
        filter={filter}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        {label}
      </Button>
    ));
  }
  return (
    <div className="border border-primary-800 flex">{renderButtons()}</div>
  );
}

function Button({ children, filter, handleFilter, activeFilter }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-5 py-2 hover:bi-primary-700 ${
        activeFilter === filter ? "bg-primary-700 text-primary-50" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Filter;
