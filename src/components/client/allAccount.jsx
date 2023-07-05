import React from "react";

const AllAccount = () => {
  return (
    <>
        <nav>
          <label  for="touch">
            <span className="DropDownProductsData">
              <p>Id</p>
              <p>price</p>
              <p>ISPrimary</p>
              <p>ISSecondary</p>
              <p>PSPlus</p>
              <p>PSPlusEpiry</p>
              <p>Show Price</p>
              <p>ISAvailable</p>
            </span>
          </label>
          <input type="checkbox" id="touch" />
          <ul class="slide">
            <li>
              <a href="#">Game 1</a>
            </li>
            <li>
              <a href="#">Game 2</a>
            </li>
            <li>
              <a href="#">Game 3</a>
            </li>
            <li>
              <a href="#">Game 4</a>
            </li>
          </ul>
        </nav>
    </>
  );
};

export default AllAccount;
