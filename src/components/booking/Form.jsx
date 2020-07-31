import React from "react";

//images
import bottomRight from "../../images/patterns/pattern-curve-bottom-right.svg";
import lines from "../../images/patterns/pattern-lines.svg";
// import arrow from "../../images/icons/icon-arrow.svg";
import minus from "../../images/icons/icon-minus.svg";
import plus from "../../images/icons/icon-plus.svg";
import check from "../../images/icons/icon-check.svg";

export default () => {
  const [count, setCount] = React.useState(1);
  const [details, setDetails] = React.useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count === 1) {
      return;
    }

    setCount(count - 1);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const { name, email, date, time } = details;

    if (name === "" || email === "" || date === "" || time === "") {
      console.log("all fields required");
      setError("All fields are required. Try again.");
      return;
    }

    setSuccess(`See you at ${time} on ${date}`);

    setDetails({
      name: "",
      email: "",
      date: "",
      time: "",
    });

    setCount(1);
  };

  return (
    <div className="relative grid h-450 md:h-96 xl:h-80 xl:grid-cols-2 padding-h xl:gap-4">
      <div
        className="absolute hidden xl:top-0 xl:left-0 xl:block "
        style={{ zIndex: -1 }}
      >
        <img src={bottomRight} alt="" />
      </div>

      <div className="relative xl:col-start-2">
        <div
          className="absolute hidden xl:top-32 xl:-left-20 xl:block "
          style={{ zIndex: -1 }}
        >
          <img src={lines} alt="" />
        </div>
        <div className="absolute left-0 right-0 bg-white shadow-2xl -top-48 md:-top-72 xl:-top-96">
          <form className="p-10 space-y-10">
            {error && (
              <div className="z-50 flex justify-around px-3 py-3 bg-red-400">
                <p className="text-center text-red-900">{error}</p>
                <button
                  onClick={() => setError("")}
                  type="button"
                  className="text-red-900"
                >
                  x
                </button>
              </div>
            )}

            {success && (
              <div className="z-50 flex justify-around px-3 py-3 bg-green-400">
                <img src={check} alt="" className="text-green-900" />
                <p className="text-center text-green-900">{success}</p>
                <button
                  onClick={() => setError("")}
                  type="button"
                  className="text-green-900"
                >
                  x
                </button>
              </div>
            )}
            <Input
              type="text"
              placeholder="Name"
              name="name"
              onChange={onChange}
              value={details.name}
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              onChange={onChange}
              value={details.value}
            />

            <div className="md:flex md:justify-between md:items-center">
              <h1 className="text-codGray">Pick a date</h1>
              <Input
                type="date"
                className="md:w-3/4"
                name="date"
                onChange={onChange}
                value={details.date}
              />
            </div>

            <div className="md:flex md:justify-between md:items-center">
              <h1 className="text-codGray">Pick a time</h1>
              <Input
                type="time"
                className="md:w-3/4"
                name="time"
                onChange={onChange}
                value={details.time}
              />
            </div>

            <div className="flex items-center justify-around pb-3 border border-t-0 border-l-0 border-r-0 border-shuttleGray">
              <button
                onClick={decreaseCount}
                type="button"
                className="focus:outline-none"
              >
                <img src={minus} alt="" className="w-3" />
              </button>
              <p className="font-semibold">
                {count} {count > 1 ? "people" : "person"}
              </p>

              <button
                onClick={increaseCount}
                type="button"
                className="focus:outline-none"
              >
                <img src={plus} alt="" className="w-3" />
              </button>
            </div>

            <button
              className="w-full py-4 text-white bg-black focus:outline-none"
              type="submit"
              onClick={submitForm}
            >
              Make Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Input = ({ type, placeholder, className, name, onChange, value }) => {
  return (
    <div
      className={`border border-t-0 border-l-0 border-r-0 border-shuttleGray ${className}`}
    >
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-2 pb-3 border-0 focus:outline-none focus:ring-0"
        name={name}
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
};
