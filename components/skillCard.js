import Image from 'next/image';

const skillCard = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-t rounded-b-none shadow p-7">
      <h4 className="text-center">{data.name}</h4>
      <Image src={data.icon} width="60px" height="60px" alt="technology-icon" />
    </div>
  );
};

export default skillCard;
