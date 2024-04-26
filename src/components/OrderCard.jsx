import PropTypes from "prop-types";

const OrderCard = ({ product, quantity, priceForOne, timestamp }) => {
  const date = new Date(timestamp);
  const result = date.toLocaleDateString();
  console.log(result);

  return (
    <li className="flex-1 sm:w-[350px] rounded-2xl shadow-3xl px-10 py-12">
      <h2 className="font-palanquin text-3xl leading-tight font-bold">
        {product}
      </h2>

      <div className="flex flex-col gap-2 mt-5 break-words font-montserrat text-lg leading-none text-slate-gray">
        <p>Quantity: {quantity}</p>
        <p>Price: {priceForOne}</p>
        <p>Date: {new Date(timestamp).toLocaleDateString()}</p>
      </div>
    </li>
  );
};

OrderCard.propTypes = {
  product: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  priceForOne: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired,
};

export default OrderCard;
