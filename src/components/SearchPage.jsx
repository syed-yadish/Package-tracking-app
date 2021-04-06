import React from "react";
import Header from "./Header";
import Card from "./molecules/Card";

export default function SearchPage({ information }) {
  const [userInput, setuserInput] = React.useState("");
  const [item, setitem] = React.useState("");
  console.log("information:", information);

  const onSubmit = (e) => {
    e.preventDefault();

    const matchedId = information.filter(
      (item) => item.parcel_id === userInput
    );

    //Search for User Input id in database

    matchedId.length > 0
      ? setitem(matchedId[0])
      : setitem({
          status: "No matched id",
          eta: "",
          location_name: "",
          sender: "",
          user_name: "",
          user_info: "",
        });
    //In case no search found
  };
  return (
    <div>
      <Header />
      <div className="header">
        <form className="style">
          <input
            type="text"
            placeholder="Search.."
            value={userInput}
            onChange={(e) => setuserInput(e.target.value)}
          />
          <button type="submit" onClick={onSubmit}>
            <i className="fa fa-search">Submit</i>
          </button>
        </form>
      </div>
      {item && <Card data={item} />}
    </div>
    //Print Card if search found
  );
}
