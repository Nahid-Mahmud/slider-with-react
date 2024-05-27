import { Fragment } from "react";
import useGetImagesFromApi from "./hooks/useGetImagesFromApi";

function App() {
  const { images } = useGetImagesFromApi({ pageNumber: 1, limit: 5 });
  console.log(images);
  return (
    <Fragment>
      <div>
        <h1 className="text-2xl  h-screen flex items-center justify-center">HEllo WOrld</h1>
      </div>
    </Fragment>
  );
}

export default App;
