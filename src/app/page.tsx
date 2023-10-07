import Card from "@/components/card";
import { products } from "@/components/config/products";
import Filter from "@/components/filter";
import AppliedFilter from "@/components/applied-filter";
export default function Home() {
  return (
    <div className="w-full pt-20 flex flex-col items-center sm:items-start sm:flex-row gap-4">
      <aside className=" w-full sm:w-[25%] min-w-[220px] ">
        <Filter />
      </aside>
      <div className="w-full sm:w-[75%]">
        <AppliedFilter/>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-9">
          {products.map(({ title, img, id, price },index) => (
            <Card key={id} title={title} img={img} price={price} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
