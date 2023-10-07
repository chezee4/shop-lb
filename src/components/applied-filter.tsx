export default function AppliedFilter() {
  return (
    <>
      <div className="mb-10">
        <p className="mb-3">
          Showing <span className=" font-bold leading-6 text-xl"> 9</span>{" "}
          results from total
          <span className=" font-bold leading-6 text-xl"> 50</span> for{" "}
          <span className=" font-semibold"> “shirts”</span>
        </p>
      </div>
      <div className="inline-flex flex-wrap gap-3 mb-4 items-center">
        <span className=" w-[210px] flex-2">Applied Filters:</span>
        <div className=" flex flex-wrap gap-y-4">
          <div className=" cursor-pointer inline-flex gap-x-2 shadow-custom-shadow-md text-sm rounded-[20px] px-4 py-2.5 mr-2">
            <span>Women</span> <button aria-label="delete filter">x</button>
          </div>
          <div className=" cursor-pointer inline-flex gap-x-2 shadow-custom-shadow-md text-sm rounded-[20px] px-4 py-2.5 mr-2">
            <span>Men</span> <button aria-label="delete filter">x</button>
          </div>
        </div>
      </div>
    </>
  );
}
