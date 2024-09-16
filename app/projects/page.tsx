// "use client";

// getAnnotationObject={(object) =>
//   console.log(object.isShowing() == false)
// }

import { RoughNotation } from "react-rough-notation";

export default function page() {
  return (
    <section className="relative flex flex-col space-y-4">
      <div>
        <RoughNotation
          type="underline"
          show={true}
          color="orange"
          animationDuration={1300}
          animationDelay={300}
        >
          <span className="inline pb-3 text-lg font-bold tracking-tight capitalize text-slate-700 md:text-2xl dark:text-white">
            Projects
          </span>
        </RoughNotation>
      </div>
      <div className="mt-8 tracking-tight text-justify">
        Next.js is built on top of
        <RoughNotation type="highlight" show={true} color="orange">
          <span> React </span>
        </RoughNotation>
        and provides a comprehensive set of tools and capabilities that simplify
        the development process, improve performance, and enhance the user
        experience.
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          perspiciatis harum natus similique, tenetur, aspernatur distinctio
          fugit voluptatum magni suscipit expedita? Hic neque architecto rerum
          cumque, sunt voluptatibus, voluptates sequi eveniet autem dolores
          dignissimos excepturi reiciendis dolorum ipsam at necessitatibus,
          porro iure veritatis animi quam aperiam possimus fugit optio ad!
          Laborum fugit doloremque, illo adipisci error soluta ab, repudiandae
          corrupti temporibus ratione dolor ad cumque doloribus eaque
          repellendus similique libero aliquam fugiat sapiente! Adipisci magnam
          aliquid beatae. Praesentium inventore vero voluptatum ullam, a
          laudantium excepturi provident. Culpa suscipit consequatur earum
          facere dignissimos quidem corrupti excepturi. Rerum necessitatibus
          dignissimos totam vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          perspiciatis harum natus similique, tenetur, aspernatur distinctio
          fugit voluptatum magni suscipit expedita? Hic neque architecto rerum
          cumque, sunt voluptatibus, voluptates sequi eveniet autem dolores
          dignissimos excepturi reiciendis dolorum ipsam at necessitatibus,
          porro iure veritatis animi quam aperiam possimus fugit optio ad!
          Laborum fugit doloremque, illo adipisci error soluta ab, repudiandae
          corrupti temporibus ratione dolor ad cumque doloribus eaque
          repellendus similique libero aliquam fugiat sapiente! Adipisci magnam
          aliquid beatae. Praesentium inventore vero voluptatum ullam, a
          laudantium excepturi provident. Culpa suscipit consequatur earum
          facere dignissimos quidem corrupti excepturi. Rerum necessitatibus
          dignissimos totam vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          perspiciatis harum natus similique, tenetur, aspernatur distinctio
          fugit voluptatum magni suscipit expedita? Hic neque architecto rerum
          cumque, sunt voluptatibus, voluptates sequi eveniet autem dolores
          dignissimos excepturi reiciendis dolorum ipsam at necessitatibus,
          porro iure veritatis animi quam aperiam possimus fugit optio ad!
          Laborum fugit doloremque, illo adipisci error soluta ab, repudiandae
          corrupti temporibus ratione dolor ad cumque doloribus eaque
          repellendus similique libero aliquam fugiat sapiente! Adipisci magnam
          aliquid beatae. Praesentium inventore vero voluptatum ullam, a
          laudantium excepturi provident. Culpa suscipit consequatur earum
          facere dignissimos quidem corrupti excepturi. Rerum necessitatibus
          dignissimos totam vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          perspiciatis harum natus similique, tenetur, aspernatur distinctio
          fugit voluptatum magni suscipit expedita? Hic neque architecto rerum
          cumque, sunt voluptatibus, voluptates sequi eveniet autem dolores
          dignissimos excepturi reiciendis dolorum ipsam at necessitatibus,
          porro iure veritatis animi quam aperiam possimus fugit optio ad!
          Laborum fugit doloremque, illo adipisci error soluta ab, repudiandae
          corrupti temporibus ratione dolor ad cumque doloribus eaque
          repellendus similique libero aliquam fugiat sapiente! Adipisci magnam
          aliquid beatae. Praesentium inventore vero voluptatum ullam, a
          laudantium excepturi provident. Culpa suscipit consequatur earum
          facere dignissimos quidem corrupti excepturi. Rerum necessitatibus
          dignissimos totam vero.
        </p>
      </div>
    </section>
  );
}
