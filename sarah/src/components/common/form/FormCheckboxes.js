import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { enterNeeds } from "../../../state/rootSlice";

export default function FormCheckboxes(setFormStep) {
  const dispatch = useDispatch();
  const history = useHistory();
  //all of the state for checkbox fields
  const bottoms = useSelector((state) => state.needs.bottoms);
  const tops = useSelector((state) => state.needs.tops);
  const coats_jackets = useSelector((state) => state.needs.coats_jackets);
  const dresses_jumpsuits = useSelector(
    (state) => state.needs.dresses_jumpsuits
  );
  const footwear = useSelector((state) => state.needs.footwear);
  const accessories = useSelector((state) => state.needs.accessories);
  const by_outfit = useSelector((state) => state.needs.by_outfit);
  const color_sub = useSelector((state) => state.needs.color_sub);

  const { handleSubmit, errors, register } = useForm({
    defaultValues: {
      bottoms,
      tops,
      coats_jackets,
      dresses_jumpsuits,
      footwear,
      accessories,
      by_outfit,
      color_sub,
    },
  });
  //I need to come back through and fill out the errors section of this page as well as flush out the user story.

  const onSubmit = (data) => {
    dispatch(enterNeeds(data));

    console.log(data);
    history.push("/submission");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Select your needs!</h2>
        <h4>Bottoms:</h4>
        <label htmlFor="bottoms">
          Jeans
          <input
            name="bottoms"
            type="checkbox"
            value="jeans"
            ref={register()}
          />
          Pants/Trousers
          <input
            name="bottoms"
            type="checkbox"
            value="pants/trousers"
            ref={register()}
          />
          Leggings
          <input
            name="bottoms"
            type="checkbox"
            value="leggings"
            ref={register()}
          />
        </label>
        <h4>Tops:</h4>
        <label htmlFor="bottoms">
          T-Shirt
          <input name="tops" type="checkbox" value="t_shirt" ref={register()} />
          Long Sleeve casual
          <input
            name="tops"
            type="checkbox"
            value="long_sleeve_casual"
            ref={register()}
          />
          Leggings
          <input
            name="tops"
            type="checkbox"
            value="tee_shirt"
            ref={register()}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
