import Image from "next/image";
interface FileItemPropsType {
  filename: string;
}
const getFileTypeFromFileName = (filename: string) => {
  const segments = filename.split(".");
  return segments[segments.length - 1];
};
const FileItem: React.FC<FileItemPropsType> = ({ filename }) => {
  const fileType = getFileTypeFromFileName(filename);
  return (
    <div className=" flex flex-row gap-6">
      <Image
        src={`/assets/filetypesIcons/${fileType}.png`}
        width={40}
        height={40}
        className=" h-fit"
        alt=""
      />
      <div className=" flex flex-col justify-center text-left">
        <div className="text-[16px] text-[#454545]">
          {filename}
        </div>
        <div className=" text-[12px] text-[#777D87]">{fileType} File</div>
      </div>
    </div>
  );
};
export default FileItem;
