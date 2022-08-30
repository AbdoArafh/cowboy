import { useState } from "preact/hooks";

// assets
import profile1 from "/assets/profiles/profile1.png";
import profile2 from "/assets/profiles/profile2.png";
import profile3 from "/assets/profiles/profile3.png";
import profile4 from "/assets/profiles/profile4.png";

const Testimonials = () => {
  const reviews = [
    {
      name: "Jesse Walker",
      profission: "Professional rider",
      img: profile1,
      text: `Problems with my beltchain and I discovered a sound on my
    frontwheel…the bolt on my frontwheel was almost loose so my frontwheel
    was loose and the disk of my brakes and the brake paddles Where making
    this nose…very dangerous…luckily I discovered the problem on time`,
    },
    {
      name: "John Doe",
      profission: "Professional rider",
      img: profile2,
      text: `Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries.`,
    },
    {
      name: "Alexander Green",
      profission: "Regular Sport",
      img: profile3,
      text: `It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less normal
      distribution of letters, as opposed to using 'Content here.`,
    },
    {
      name: "Alice Brian",
      profission: "Professional writer",
      img: profile4,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
      eu dolor in velit ullamcorper fringilla nec at nisl. Praesent
      vulputate bibendum ligula, a finibus metus vulputate vitae.
      Etiam a lectus turpis. Nam non ex quis dui vestibulum tincidunt
      id quis ligula. Ut lobortis mi in risus pulvinar, cursus eleifend
      augue placerat.`,
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleClick(event) {
    const index = event.target.dataset.index;
    if (index) setSelectedIndex(Number(index));
    else event.target.parentElement.click();
  }

  return (
    <div class="mt-16 flex flex-col">
      <div class="max-w-md mx-auto flex gap-4">
        <div class="text-8xl font-serif -mt-2">&#8220;</div>
        <p>{reviews[selectedIndex].text}</p>
      </div>
      <div class="flex gap-8 mt-8 mx-auto flex-col lg:flex-row">
        {reviews.map((review, i) => (
          <div
            key={i.toString()}
            class={
              "relative h-24 w-24 py-4 px-8 rounded-full overflow-hidden flex gap-4 transition-all cursor-pointer" +
              (selectedIndex === i ? " !w-auto bg-black-gray" : "")
            }
            data-index={i}
            onClick={handleClick}
          >
            <div class={selectedIndex !== i ? "absolute inset-4" : ""}>
              <img
                class={"rounded-full block h-[100%]"}
                src={review.img}
                alt={review.name}
              />
            </div>
            <div
              class={
                "info flex flex-col my-auto" +
                (selectedIndex !== i ? " opacity-0" : "")
              }
            >
              <span class="text-white">{review.name}</span>
              <span class="text-secondary">{review.profission}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
