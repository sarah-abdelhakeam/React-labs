import { useState } from "react";
import Component2 from "./Comp2";

function Component1() {
  const [user, setUser] = useState("Sarah Hakeam");

  return (
    <>
      <h1>{`Hello ${user}! from comp 1`}</h1>
      <Component2 user={user} />
    </>
  );
}
export default Component1;