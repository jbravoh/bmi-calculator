type Props = {
  name: string;
  description: string;
};

const LimitationsCard = ({ name, description }: Props) => {
  return (
    <>
      <h2 className="heading-s">{name}</h2>
      <p>{description}</p>
    </>
  );
};
export default LimitationsCard;
