const HeadingTitle = ({
  className,
  firstTitle,
  secondTitle,
  thirdTitle,
}: {
  className?: string;
  firstTitle: string;
  secondTitle?: string;
  thirdTitle?: string;
}) => {
  return (
    <>
      <h1 className={className}>
        {firstTitle} <br /> {secondTitle}<br /> {thirdTitle}
      </h1>
    </>
  );
};

export default HeadingTitle;
