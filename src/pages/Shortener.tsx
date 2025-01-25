import { useState } from "react";

const base = "https://ffct.ir";

interface Props {
  onAdd(): void;
}

const Shortener = (props: Props) => {
  const [url, setUrl] = useState({
    title: "",
    description: "",
    originalUrl: "",
  });

  async function handleClick() {
    if (url.originalUrl === "") return;

    try {
      const response = await fetch(`${base}/api/short-url`, {
        method: "POST",
        body: JSON.stringify(url),
        headers: {
          "Content-type": "application/json",
        },
      });

      const resObject = await response.json();
      if (!response.ok) {
        console.log("response object", resObject);
        alert(resObject.msg);
        setUrl({
          title: "",
          description: "",
          originalUrl: "",
        });
        return;
      }

      props.onAdd();
      setUrl({
        title: "",
        description: "",
        originalUrl: "",
      });
    } catch (err) {
      console.log(err);
      alert("Server Error");
      setUrl({
        title: "",
        description: "",
        originalUrl: "",
      });
    }
  }

  return (
    <div className="shortener rounded-lg">
      <form className="">
        <div className="flex">
          <input
            type="url"
            placeholder="Shorten a link here..."
            id="originalUrl"
            value={url.originalUrl}
            onChange={(e) => setUrl({ ...url, originalUrl: e.target.value })}
            className="border w-full px-4 py-2 rounded-l-lg border-gray-300 focus:border-gray-500 outline-none"
          />

          <button
            className="bg-lime-500 text-white whitespace-nowrap rounded-r-lg px-2 font-bold cursor-pointer"
            type="button"
            onClick={handleClick}
          >
            Shorten it!
          </button>
        </div>
        <div className="flex my-2 gap-2">
          <input
            type="url"
            placeholder="Title"
            id="title"
            value={url.title}
            onChange={(e) => setUrl({ ...url, title: e.target.value })}
            className="border w-full px-4 py-2 rounded-lg border-gray-300 focus:border-gray-500 outline-none"
          />
          <input
            type="url"
            placeholder="Description"
            id="description"
            value={url.description}
            onChange={(e) => setUrl({ ...url, description: e.target.value })}
            className="border w-full px-4 py-2 rounded-lg border-gray-300 focus:border-gray-500 outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default Shortener;
