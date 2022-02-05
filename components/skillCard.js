import Image from 'next/image';

const skillCard = ({ data }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      data-aos-anchor-placement="top-bottom"
      className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-t rounded-b-none shadow-lg aspect-square"
    >
      <h4 className="text-center dark:bg-gray-800 dark:text-white bg-white text-dark w-full pb-4 font-semibold text-lg">
        {data.name}
      </h4>
      <Image
        src={data.icon}
        className="object-contain"
        width="70px"
        height="70px"
        alt="technology-icon"
      />
    </div>
  );
};

export default skillCard;
