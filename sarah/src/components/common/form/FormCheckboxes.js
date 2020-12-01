import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import updateAction from "./updateAction";
import {
  enterBottomNeeds,
  enterTopNeeds,
  enterFootwareNeeds,
  enterAccessoriesNeeds,
  enterCoats_JacketsNeeds,
  enterDresses_JumpSuitsNeeds,
  enterColorSubNeeds,
  enterByOutfitNeeds,
} from "../../../state/rootSlice";

export default function FormCheckboxes(setFormStep) {
  const dispatch = useDispatch();
  const history = useHistory();
  //all checkbox fields
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
  console.log("finding out what state is from checkbox", bottoms);

  const onSubmit = (data) => {
    dispatch(enterBottomNeeds(data.bottoms));
    console.log("Checkboxes", data.bottoms);
  };

  //

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Select your needs!</h2>
        <label>
          <input name="shorts" type="checkbox" value="shorts" />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
