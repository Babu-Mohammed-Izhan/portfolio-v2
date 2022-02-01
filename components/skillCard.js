import Image from 'next/image';

const skillCard = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-t rounded-b-none shadow-lg aspect-square pb-5">
      <h4 className="text-center dark:bg-gray-800 dark:text-white bg-white text-dark w-full mb-4 py-2 font-semibold text-xl">
        {data.name}
      </h4>
      <Image
        src={data.icon}
        className="object-contain"
        width="90px"
        height="90px"
        alt="technology-icon"
      />
    </div>
  );
};

export default skillCard;
