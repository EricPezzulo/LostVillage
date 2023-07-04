import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

interface ElementStateProps {
  setPrevEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  setNextEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

const NavigateImageSliderButtons: React.FC<ElementStateProps> = ({
  setPrevEl,
  setNextEl,
}) => {
  return (
    <div className="flex">
      <button className="mr-1" ref={(node) => setPrevEl(node)} type="button">
        <MdOutlineNavigateBefore className="h-8 w-8 bg-black text-white" />
      </button>{" "}
      <button ref={(node) => setNextEl(node)} type="button">
        <MdOutlineNavigateNext className="h-8 w-8 bg-black text-white" />
      </button>
    </div>
  );
};
export default NavigateImageSliderButtons;
