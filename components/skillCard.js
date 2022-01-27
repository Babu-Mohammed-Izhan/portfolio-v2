const skillCard = ({ data }) => {
  return (
    <div className="flex items-center justify-center bg-white dark:bg-gray-800 rounded-t rounded-b-none overflow-hidden shadow p-10 min-w-[104px]">
      <h3>{data.name}</h3>
    </div>
  );
};

export default skillCard;
