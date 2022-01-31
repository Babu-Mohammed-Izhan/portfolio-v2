import Image from 'next/image';

const skillCard = ({ data }) => {
  return (
    <div className="h-28  flex items-center justify-center bg-white dark:bg-gray-800 rounded-t rounded-b-none overflow-hidden shadow p-10 w-full sm:w-40">
      <h3 className="text-center">{data.name}</h3>
      {/* <Image src={data.icon}  /> */}
    </div>
  );
};

export default skillCard;
