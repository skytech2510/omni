import UnderlineInput from "../../UnderlineInput";
import Image from "next/image";
import Button from "../../Button";
import Data from "@/db/data.json"
import axios from "axios";
interface SubHeadderPropsType {
  isEdit?: boolean;
  onClickEdit?: () => void;
  onClickAdd?: () => void;
}
const SubHeadder: React.FC<SubHeadderPropsType> = ({
  isEdit,
  onClickEdit,
  onClickAdd,
}) => {
  const handleFromJson = () => {
    axios.get("/api/scrap").then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error)
    })
  }
  return (
    <div className="w-full flex flex-row justify-between">
      <div className="flex flex-row gap-5">
        <UnderlineInput
          placeholder="Opportunity"
          classNames=" flex flex-col justify-end"
        />
        <UnderlineInput
          placeholder="Provider"
          classNames=" flex flex-col justify-end"
        />
        <Button
          color="#5B56EF"
          variant="outline"
          onClick={() => {}}
        >
          <div className="flex gap-3 flex-row justify-center">
            <Image
              src={"/assets/icons/search.svg"}
              width={15}
              height={15}
              alt=""
            />
            <div>Search</div>
          </div>
        </Button>
      </div>
      <div className="flex flex-row justify-end gap-5">
        {/* {isEdit && (
          <>
            <Button
              variant="outline"
              color="#5B56EF"
              onClick={onClickEdit??}
              width="w-[150px]"
            >
              Edit
            </Button>
            <Button
              variant="fill"
              color="#EF567B"
              onClick={() => {}}
              width="w-[150px]"
            >
              Delete
            </Button>
          </>
        )}
        <Button
          variant="fill"
          color="#5B56EF"
          onClick={onClickAdd}
          width="w-[150px]"
        >
          +Add
        </Button> */}
        <Button
          variant="fill"
          color="#5B56EF"
          onClick={handleFromJson}
          width="w-[150px]"
        >
          From Scrapping
        </Button>
      </div>
    </div>
  );
};
export default SubHeadder;
