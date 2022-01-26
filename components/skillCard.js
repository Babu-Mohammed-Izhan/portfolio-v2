const skillCard = ({ data }) => {
  return (
    <div className="flex items-center justify-center bg-white dark:bg-gray-800 rounded-t rounded-b-none overflow-hidden shadow p-10">
      <h3>{data.name}</h3>
    </div>
  );
};

export default skillCard;
