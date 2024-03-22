import Image from "../../assets/Image/item1.jpg";
import IconStar from "../../assets/Icons/IconStar";
import IconHeart from "../../assets/Icons/Heart";
import IconEye from "../../assets/Icons/IconEye";
const ItemFlashSale = (props) => {
  return (
    <>
      <div className="w-[270px] h-[350px] group  ">
        <div className="w-full h-[250px] bg-[#f5f5f5] flex justify-center items-center relative">
          <img src={Image} />
          <div className="absolute top-3 left-3 py-1 px-3 rounded-md text-[#fafafa] bg-[#db4444]">
            -35%
          </div>
          <div className="flex flex-col gap-3 absolute top-3 right-3">
            <IconHeart />
            <IconEye />
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-black text-[#f4f4f4] h-10  justify-center items-center font-medium text-xl invisible group-hover:visible group-hover:display-flex flex transition ease-in-out delay-100 rounded-b-lg">
            Add To Cart
          </div>
        </div>
        <div className="mt-6 flex flex-col justify-start">
          <span className="font-medium text-[16px]">HAVIT HV-G92 Gamepad</span>
          <div className=" flex items-center gap-3">
            <span className="text-[#de5454]">$120</span>
            <span className="text-[#9c9c9c]">$160</span>
          </div>
          <div>
            <IconStar />
          </div>
          <span>(88)</span>
        </div>
      </div>
    </>
  );
};
export default ItemFlashSale;
