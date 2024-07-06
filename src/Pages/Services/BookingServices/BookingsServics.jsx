import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import BookingCard from "./BookingCard";
import SharedBanner from "../../Shared/SharedBanner";
import Swal from "sweetalert2";
import noService from "../../../assets/icons/noservices.jpg";
const BookingsServics = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  // const {title}= bookings;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = bookings.filter(
                (bookings) => bookings._id !== id
              );
              setBookings(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      
        <SharedBanner  title={"My Services"} />
      
      <div className="w-12/12 mx-auto">
        {bookings.length == 0 ? (
          <div className="h-auto w-3/6 mx-auto my-16">
            <img className="" src={noService} alt="no service img" />
            <h3 className="font-bold text-xl lg:text-4xl text-[#ff3811] text-center mb-16">
              ADD SERVICES
            </h3>
          </div>
        ) : (
          ""
        )}

        <table className="table">
          {/* head */}
          <thead></thead>
          <tbody>
            {bookings.map((bookings) => (
              <BookingCard
                key={bookings._id}
                bookings={bookings}
                handleDelete={handleDelete}
              ></BookingCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingsServics;
