import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
//THIS PAGE ONLY EXSISTS FOR NOW AS A PLACEHOLDER BEFORE REGISTERING USERS
import { enterLocation } from "../../../state/rootSlice";

export default function FormLocation({ setFormStep }) {
  //temporary state before implementing redux/be
  const dispatch = useDispatch();
  //const history = useHistory();
  const state = useSelector((state) => state.location.state);
  const zip_code = useSelector((state) => state.location.zip_code);
  const country = useSelector((state) => state.location.country);
  const city = useSelector((state) => state.location.city);
  const { handleSubmit, errors, register } = useForm({
    defaultValues: { state, zip_code, country, city },
  });

  const onSubmit = (data) => {
    dispatch(enterLocation(data));
    setFormStep({
      formCheckboxes: true,
    });
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>What's your location?</h2>
        <label>
          <h4>City:</h4>
          <input
            name="city"
            ref={register({ required: "Please enter a city." })}
          />
          <h4>State:</h4>
          <input
            name="state"
            ref={register({ required: "Please enter a state." })}
          />
          <h4>Zip Code:</h4>
          <input
            name="zip_code"
            ref={register({ required: "Please enter a zip code." })}
          />
          <h4>Country:</h4>
          <input
            name="country"
            ref={register({ required: "Please enter a country." })}
          />
        </label>

        <button type="submit">Next!</button>
      </form>
    </>
  );
}
