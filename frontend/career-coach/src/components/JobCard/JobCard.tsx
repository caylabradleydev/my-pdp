interface JobCardProps {
  selected: boolean;
  tag: string;
  onCardClick: (tag: string) => void;
  text: string;
}

export const JobCard: React.FC<JobCardProps> = ({
  selected,
  onCardClick,
  tag,
  text,
}) => {
  const customClass = selected
    ? "bg-purpleText text-white lg:w-full h-[80px] lg:h-auto rounded-[10px] cursor-pointer flex items-center justify-center text-sm lg:text-base font-medium text-center pl-2 dark:border-2 dark:border-buttonWhite"
    : "border-2 border-purpleText lg:w-full h-[80px] lg:h-auto hover:bg-cardHover rounded-[10px] cursor-pointer flex items-center justify-center text-purpleText text-sm lg:text-base font-medium text-center pl-2 dark:bg-glass dark:border-buttonWhite dark:text-buttonWhite";
  return (
    <div className={customClass} onClick={() => onCardClick(tag)}>
      <p>{text}</p>
    </div>
  );
};
