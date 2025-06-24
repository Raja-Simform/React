import { useId } from "react";

export function DemoUseId() {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Name:</label>
      <input id={id} type="text" />
    </div>
  );
}

export function RadioGroup() {
  const groupId = useId();

  return (
    <fieldset>
      <legend>Choose your favorite fruit:</legend>
      <div>
        <input
          type="radio"
          id={`${groupId}-apple`}
          name="fruit"
          value="apple"
        />
        <label htmlFor={`${groupId}-apple`}>Apple</label>
      </div>
      <div>
        <input
          type="radio"
          id={`${groupId}-banana`}
          name="fruit"
          value="banana"
        />
        <label htmlFor={`${groupId}-banana`}>Banana</label>
      </div>
      <div>
        <input
          type="radio"
          id={`${groupId}-cherry`}
          name="fruit"
          value="cherry"
        />
        <label htmlFor={`${groupId}-cherry`}>Cherry</label>
      </div>
    </fieldset>
  );
}

export default RadioGroup;
