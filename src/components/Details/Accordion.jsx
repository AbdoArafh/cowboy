import { useState, useEffect, useRef } from "preact/hooks";

// assets
import chevron from "/assets/chevron.svg";

const Accordion = ({ name, num, open = false, children }) => {
  const [isClosed, setIsClosed] = useState(false);
  const [height, setHeight] = useState();
  const bodyRef = useRef(null);
  useEffect(() => {
    if (bodyRef) {
      const styles = getComputedStyle(bodyRef.current);
      setHeight(styles.height);
      setIsClosed(!open);
    }
  }, []);
  return (
    <div class="bg-black-gray text-white rounded-2xl my-6">
      <div
        class="px-12 py-6 flex justify-between items-center cursor-pointer hover:brightness-75 active:brightness-95"
        onClick={() => setIsClosed((c) => !c)}
      >
        <div class="flex gap-4 items-center">
          <h3 class="text-xl">{name}</h3>
          <span class="bg-white/10 py-[8px] px-[5px] rounded-lg">{num}</span>
        </div>
        <button
          style={{
            transform: isClosed ? "rotate(180deg)" : "",
            transition: "transform 0.35s ease",
          }}
        >
          <img src={chevron} alt="..." />
        </button>
      </div>
      <div
        style={{
          height: isClosed ? "0px" : height,
          transition: "height 0.35s ease",
        }}
        class="px-12 overflow-hidden"
        ref={bodyRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
