import ItemFlashSale from "./ItemFlashSale";
import IconArrowRight from "../../assets/Icons/ArrowRight";
import IconArrowLeft from "../../assets/Icons/ArrowLeft";
import "./FlashSale.css";
const FlashSale = () => {
  const time = [
    { time: "Days", value: "03" },
    { time: "Hours", value: "23" },
    { time: "Minutes", value: "19" },
    { time: "Seconds", value: "56" },
  ];
  return (
    <>
      <div className="container mx-auto mt-11 flex flex-col ">
        <div className="h-10 flex items-center gap-5 mb-6">
          <div className="h-full w-5 bg-[#db4444] rounded"></div>
          <div className="text-[#db4444]">Today’s</div>
        </div>
        <div className="flex justify-between ">
          <div className="flex md:gap-20 gap:15  md:flex-row flex-col">
            <div className="text-4xl">Flash Sales</div>
            <div className="w-12 flex gap-9 ">
              {time.map((item, index) => {
                return (
                  <>
                    <div className="flex flex-col">
                      <span className=" text-sm">{item.time}</span>
                      <span className=" font-bold text-2xl">{item.value}</span>
                    </div>
                    {index != time.length - 1 ? (
                      <span className="text-[#db4444] font-bold">:</span>
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </div>
          </div>
          <div className="flex ">
            <div className="arrow">
              <IconArrowRight color="black" />
            </div>
            <div className="arrow">
              <IconArrowLeft color="black" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden gap-8 container mx-auto mt-10">
        <ItemFlashSale />
        <ItemFlashSale />
        <ItemFlashSale />
        <ItemFlashSale />
        <ItemFlashSale />
      </div>
    </>
  );
};
export default FlashSale;
