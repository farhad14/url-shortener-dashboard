import toast from "react-hot-toast";
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
    <div className="space-y-4">
      {urlList.map((url, index) => {
        return (
          <div
            className="bg-white shadow p-4 rounded-lg"
            key={index}
            id={index.toString()}
          >
            {/* Title and description */}
            <div className="mb-3" dir="rtl">
              <div className="flex justify-between mb-2">
                <h2 className="text-lg font-semibold">{url.title}</h2>
                <div className="flex items-center justify-between">
                  <div className="whitespace-nowrap px-2 py-[2px] bg-gray-500/20 rounded-full text-sm">
                    clicks: {url.clicks.length}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{url.description}</p>
            </div>

            {/* Links */}
            <div className="links">
              <div className="bg-lime-50 rounded-full flex overflow-hidden">
                <button
                  type="button"
                  className="bg-lime-700 text-white px-2 font-semibold cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(`${baseUrl}/${url.urlId}`);
                    toast.success("Copied");
                  }}
                >
                  Copy
                </button>
                <div className="px-2">
                  <a href={`${baseUrl}/${url.urlId}`} className="text-lime-700">
                    {`${baseUrl}/${url.urlId}`}
                  </a>
                </div>
              </div>
              <a
                href={url.originalUrl}
                className="full-url truncate text-sm text-gray-600"
              >
                {decodeURI(url.originalUrl).slice(0, 80)}{" "}
                {decodeURI(url.originalUrl).length > 80 ? "..." : ""}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UrlList;
