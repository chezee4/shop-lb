import Card from "@/components/card";
import { products } from "@/components/config/products";
import Filter from "@/components/filter";

export default function Home() {
  return (
    <div className="w-full pt-20 flex flex-col items-center sm:items-start sm:flex-row gap-4">
      <aside className=" w-full sm:w-[25%] min-w-[220px] ">
        <Filter />
      </aside>
      <div className="w-full sm:w-[75%]">
        <div className="mb-10">
          <p className="mb-3">
            Showing <span className=" font-bold leading-6 text-xl"> 9</span>{" "}
            results from total
            <span className=" font-bold leading-6 text-xl"> 50</span> for{" "}
            <span className=" font-semibold"> “shirts”</span>
          </p>
          <div className="inline-flex flex-wrap gap-3 mb-4 items-center">
            <span className=" w-[210px] flex-2">Applied Filters:</span>
            <div className=" flex flex-wrap gap-y-4">
              <div className=" cursor-pointer inline-flex gap-x-2 shadow-custom-shadow-md text-sm rounded-[20px] px-4 py-2.5 mr-2">
                <span>Women</span> <button>x</button>
              </div>
              <div className=" cursor-pointer inline-flex gap-x-2 shadow-custom-shadow-md text-sm rounded-[20px] px-4 py-2.5 mr-2">
                <span>Men</span> <button>x</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-9">
          {products.map(({ title, img, id, price }) => (
            <Card key={id} title={title} img={img} price={price} />
          ))}
        </div>
      </div>
    </div>
  );
}
