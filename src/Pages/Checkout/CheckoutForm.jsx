import {  useLoaderData, useNavigate } from "react-router-dom";
import CheckoutBanner from "../Shared/SharedBanner";
import Swal from 'sweetalert2'
const CheckoutForm = () => {
  const nevigate = useNavigate();
  const services = useLoaderData();
  const { title, img, price,} = services;
  const handleCheckout = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const massage = form.massage.value;
    const booking = {
      name,
      email,
      date,
      phone,
      massage,
     
      title: title,
      price: price,
      img,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json ",
      },
      body: JSON.stringify(booking),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Service Added",
            showConfirmButton: false,
            timer: 1500
          });
          nevigate('/services')
        }
      });
  };

  return (
    <div>
      <CheckoutBanner title={'CHECKOUT FORM'} />
      <div className="text-center">
        <h4 className="text-[#ff3811] font-bold">Service Name</h4>
        <h4 className="text-2xl font-bold uppercase">{title}</h4>
      </div>
      <div className="card shrink-0 w-4/6 mx-auto m-8   bg-[#F3F3F3]">
        <form onSubmit={handleCheckout} className="card-body w-full  ">
          <div className="flex gap-4 mx-auto w-4/6">
            <div className="form-control w-3/6 ">
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered border-none"
                required
              />
            </div>
            <div className="form-control w-3/6">
              <input
                name="date"
                type="date"
                className="input input-bordered border-none"
                required
              />
            </div>
          </div>
          <div className="flex gap-4 mx-auto w-4/6">
            <div className="form-control w-3/6">
              <input
                name="phone"
                type="tel"
                placeholder="Your Phone"
                className="input input-bordered border-none"
                required
              />
            </div>
            <div className="form-control w-3/6">
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="input input-bordered border-none"
                required
              />
            </div>
          </div>

          <textarea
            name="massage"
            id=""
            cols="15"
            placeholder="Type Your Message"
            rows="5"
            className="w-4/6 p-4 border-none mx-auto rounded-lg"
          ></textarea>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="text-xl mx-auto w-4/6 h-16 bg-[#ff3811] rounded-lg hover:scale-95 text-white duration-300"
            >
              Order Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
