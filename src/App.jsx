import { Fragment } from "react";
import useGetImagesFromApi from "./hooks/useGetImagesFromApi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function App() {
  const { images, error, loading } = useGetImagesFromApi({ pageNumber: 1, limit: 10 });
  // console.log(images);

  if (loading) {
    return (
      <Fragment>
        <div>
          <h1 className="text-2xl  h-screen flex items-center justify-center">Loading...</h1>
        </div>
      </Fragment>
    );
  }
  if (error) {
    return (
      <Fragment>
        <div>
          <h1 className="text-2xl  h-screen flex items-center justify-center">Error: {error.message}</h1>
        </div>
      </Fragment>
    );
  }

  return (
    <div className="flex relative justify-center items-center w-1/2 h-96">
      <FaArrowLeft className="text-4xl h-8 absolute text-white drop-shadow-sm left-4" />

      {images?.map((images) => {
        return (
          <img
            key={images?.id}
            src={images.download_url}
            alt={images.author}
            className="rounded-lg shadow-slate-300 w-full h-full"
          />
        );
      })}

      <FaArrowRight className="text-4xl h-8 absolute text-white drop-shadow-sm right-4" />
      <span className="flex absolute bottom-5 gap-2">
        {images?.map((_, index) => {
          return <button className=" text-2xl text-red-500 z-10 h-8 w-8 rounded-full bg-gray-700" key={index}></button>;
        })}
      </span>
    </div>
  );
}

export default App;
