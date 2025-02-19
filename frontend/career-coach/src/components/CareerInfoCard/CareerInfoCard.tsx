interface CareerInfoCardProps {
  text: string;
  tag: string;
  years?: string;
  onCardClick: (tag: string) => void;
  selected?: boolean;
}

export const CareerInfoCard: React.FC<CareerInfoCardProps> = ({
  text,
  tag,
  years,
  onCardClick,
  selected,
}) => {
  const customClass = selected
    ? "bg-purpleText text-white lg:w-[250px] w-full rounded-[10px] cursor-pointer flex flex-col justify-center items-center h-[90px] lg:min-h-[200px] text-sm lg:text-base font-medium text-center py-5"
    : "border-2 border-purpleText hover:bg-cardHover lg:w-[250px] w-full rounded-[10px] cursor-pointer flex flex-col justify-center items-center h-[90px] lg:min-h-[200px] text-purpleText text-sm lg:text-base font-medium text-center py-5 dark:bg-glass dark:text-lightPurple dark:border-lightPurple";
  return (
    <div className={customClass} onClick={() => onCardClick(tag)}>
      <p>{text}</p>
      {years && <p>{years}</p>}
    </div>
  );
};
