import Image, { StaticImageData } from "next/image";

interface FabButtonPropsType {
  icon: string | StaticImageData;
  width?: number; //Pixel
  height?: number;
  onClick?: (e: React.MouseEvent) => void;
}
const FabButton: React.FC<FabButtonPropsType> = ({
  icon,
  width = 20,
  height = 20,
  onClick
}) => {
  return (
    <>
      <button onClick={onClick}>
        <Image
          src={icon}
          alt=""
          width={width}
          height={height}
          className=" outline-none border-none hover:opacity-70"
        />
      </button>
    </>
  );
};
export default FabButton;
