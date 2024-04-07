import Canvas from "../components/Canvas";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../AppContext";

export function Review() {

    const { state , setValue} = useAppState();

    const {

        colorOfTheDay,
        stlUrl,
        setValue,
        queueSpotsLeft
      } = useContext(AppContext);

    const router = useRouter();

    const customize = () => {
        router.push('/user');
    }
    const submit = () => {
        // fetch() //TODO

        router.push('/user/waiting');
    }

  return (
    <div className="flex flex-col p-4">
      <div className="font-amogus font-bold text-2xl">
        Review Figurine
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col basis-1/2 space-y-3">
          <div className="font-medium w-full py-1">
            Review the model and either submit it to be 3D printed, or continue customizing.
          </div>
        <button className="flex flex-row font-bold transition py-2 bg-lmao-yellow dark:text-gray-800 shadow-2xl rounded-md text-center" onClick={customize}>
            <img className="m-auto" alt="customize" src="/img/customize.png" />
          </button>
          <button className="font-bold transition py-2 bg-lmao-yellow dark:text-gray-800 shadow-2xl rounded-md text-center" onClick={submit}>
            submit
          </button>

          <div className="font-medium">
            spots left in print queue: {queueSpotsLeft}
          </div>
          <a href="{stl_url}" className="transition py-2 sm:px-4 bg-lmao-yellow dark:text-gray-800 shadow-2xl rounded-md m-4 text-center">
            download STL
          </a>
        </div>
        <div className="w-1/2 lg:h-auto">
          <Canvas stlUrl={stlUrl} color={colorOfTheDay} />
        </div>
      </div>
    </div>
  );
}