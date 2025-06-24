import { memo } from "react";

const meomizedComponent = memo(
  ({ prop1, prop2 }: { prop1: number; prop2: number }) => {
    console.log("meomized");
    return (
      <>
        Hello new Component--{prop1}---{prop2}
      </>
    );
  }
);
export default meomizedComponent;
