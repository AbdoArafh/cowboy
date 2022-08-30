import { useState } from "preact/hooks";

export default function ColorSelect() {
  const [index, setIndex] = useState(0);

  function handleClick(i) {
    setIndex(i);
  }

  const colors = ["bg-[#535355]", "bg-[#FFF4CC]", "bg-[#FFFFFF]"];

  return (
    <div class="flex justify-center gap-4 px-8 py-4 bg-white/10 rounded-full">
      {colors.map((color, i) => (
        <Color
          handleClick={handleClick}
          key={i}
          index={i}
          color={color}
          selected={index === i}
        />
      ))}
    </div>
  );
}

function Color({ selected, color, handleClick, index }) {
  return (
    <button
      class={`w-10 h-10 p-1 rounded-full border-2 relative ${
        selected ? "border-white" : "border-[#353535]/50"
      }`}
      onClick={() => handleClick(index)}
    >
      <span class={`${color} block w-[100%] h-[100%] rounded-full`}></span>
    </button>
  );
}
