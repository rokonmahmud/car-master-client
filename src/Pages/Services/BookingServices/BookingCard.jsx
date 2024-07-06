/* eslint-disable react/prop-types */

// import Swal from "sweetalert2";

const BookingCard = ({ bookings, handleDelete }) => {
  const { title, img, date, price, email, _id } = bookings;

  return (
    <div className="w-12/12">
      <table className="lg:w-10/12  lg:mx-auto lg:my-8">
        {" "}
        <tr>
          <th>
            <button onClick={() => handleDelete(_id)}>
              <div className="lg:text-2xl text-xl bg-[#444] text-[#fff] px-2 lg:px-4 lg:py-1.5  text-center rounded-full mx-auto">
                <h2 className="font-light">x</h2>
              </div>
            </button>
          </th>
          <td className="">
            <div className="flex items-center gap-3 ">
              <div className="avatar">
                <div className="mask rounded-lg lg:w-24 lg:h-20 w-8 h-8">
                  <img
                    src={img}
                    alt="Avatar Tailwind CSS Component"
                    className="lg:w-16 lg:h-12 w-8 h-8"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">{title}</div>
                <div className="text-sm opacity-50">{email}</div>
              </div>
            </div>
          </td>
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <td className="font-bold">${price}</td>
            <td className="font-bold">{date}</td>
          </div>
          <th>
            <button className="text-m  p-2 rounded-lg bg-[#ff3811] hover:scale-95 text-white duration-300">
              Pending
            </button>
          </th>
        </tr>
      </table>
    </div>
  );
};

export default BookingCard;
