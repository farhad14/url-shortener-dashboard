import { AiOutlineLoading } from "react-icons/ai";
import { Url } from "./Home";

interface Props {
  urlList: Url[];
  isLoading: boolean;
}

const UrlList = ({ urlList, isLoading }: Props) => {
  const baseUrl = "https://ffct.ir";

  if (isLoading)
    return (
      <div className="flex justify-center">
        <AiOutlineLoading className="animate-spin text-gray-300" size={50} />
      </div>
    );

  return (
    <div className="px-5">
      {urlList.map((url, index) => {
        return (
          <div
            className="bg-gray-50 shadow mb-3 border border-gray-200 rounded-lg p-2"
            key={index}
            id={index.toString()}
          >
            {/* Title and description */}
            <div className="mb-3" dir="rtl">
              <div className="flex justify-between mb-2">
                <h2 className="text-lg font-semibold">{url.title}</h2>
                <div className="flex items-center justify-between">
                  <div className="whitespace-nowrap px-2 py-1 bg-gray-500/20 rounded-full">
                    <span className="text-sm">clicks:</span> {url.clicks.length}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{url.description}</p>
            </div>

            {/* Links */}
            <div className="links">
              <div className="bg-lime-200 rounded-full flex overflow-hidden">
                <button
                  type="button"
                  className="bg-lime-700 text-white px-2 font-semibold"
                  onClick={() =>
                    navigator.clipboard.writeText(`${baseUrl}/${url.urlId}`)
                  }
                >
                  Copy
                </button>
                <div className="px-2">
                  <a href={`${baseUrl}/${url.urlId}`} className="text-lime-700">
                    {`${baseUrl}/${url.urlId}`}
                  </a>
                </div>
              </div>
              <a href={url.originalUrl} className="full-url">
                {" "}
                {url.originalUrl.slice(0, 100)}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UrlList;
