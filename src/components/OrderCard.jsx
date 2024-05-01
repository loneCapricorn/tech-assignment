import PropTypes from "prop-types";

const OrderCard = ({ customer, date, total, action }) => {
  return (
    <li className="flex-1 flex flex-col items-center justify-between rounded-2xl shadow-3xl px-10 py-12 transition duration-500 hover:scale-105">
      <h2 className="font-palanquin text-3xl font-bold">{customer}</h2>

      <div className="flex flex-col gap-2 mt-5 font-montserrat text-lg text-slate-gray break-words leading-none">
        <p>Total: {total}</p>
        <p>Date: {new Date(date).toLocaleDateString()}</p>
      </div>
      <div dangerouslySetInnerHTML={{__html: action}} className="text-center mt-3 py-2 px-3 rounded-md w-fit text-lg hover:bg-slate-200 active:bg-slate-400"></div>
    </li>
  );
};

OrderCard.propTypes = {
  customer: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  total: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};

export default OrderCard;
