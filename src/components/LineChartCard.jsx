import PropTypes from "prop-types";

const LineChartCard = ({ data, label }) => {
  return (
    <li className="flex-1 flex flex-col items-center justify-between min-w-80 rounded-2xl shadow-3xl px-10 py-12 transition duration-500 hover:scale-105 cursor-pointer">
      <h3 className="font-semibold text-[#555]">{label}</h3>
      <p className="text-lg text-[#555]">{data}</p>
    </li>
  );
};

LineChartCard.propTypes = {
  data: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default LineChartCard;
