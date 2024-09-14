const Loading: React.FC = () => {
  return (
    <div className=" absolute top-0 left-0 w-[100vw] h-[100vh] bg-[#00000021]">
      <div className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-12 w-12 rounded-full bg-[rgb(197,23,209)]">
        <div className="h-12 w-12 animate-ping rounded-full bg-[rgb(37,146,217)]">
          <div className="h-12 w-12 animate-ping rounded-full bg-[rgb(197,23,209)]">
            <div className="h-12 w-12 animate-ping rounded-full bg-[rgb(37,146,217)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loading;
