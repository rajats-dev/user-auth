import calculateDate from "../utils/calculateDate";
import { BiSolidUpvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";

const MovieUi = ({ resData }) => {
  return (
    <>
      <div className="flex flex-col m-3 items-center ">
        {resData.map((item) => (
          <div
            className="flex flex-col justify-center border-4 border-black border-solid rounded-lg w-[35rem]"
            key={item._id}
          >
            <div className="flex gap-3 ">
              <div className="m-3 text-xl">
                <span>
                  <BiSolidUpvote />
                </span>
                <span>{item.voted.length}</span>
                <span>
                  <BiSolidDownvote />
                </span>
              </div>
              <img src={item.poster} className="w-24 rounded-lg" />
              <div className="flex flex-col text-sm overflow-hidden">
                <span className="text-xl font-bold">{item.title}</span>
                <span className="flex">
                  <h3 className="text-gray-500 font-bold">Genre:</h3>
                  {item.genre}
                </span>
                <span className="flex">
                  <h3 className="text-gray-500 font-bold">Director:</h3>
                  {item.director.map((director, i) => (
                    <p key={i} className="truncate">
                      {director},
                    </p>
                  ))}
                </span>
                <span className="flex">
                  <h3 className="text-gray-500 font-bold"> Starring: </h3>
                  {item.stars.map((actors, i) => (
                    <p key={i} className="truncate">
                      {actors},
                    </p>
                  ))}
                </span>
                <span className="text-xs">
                  {item.language} | {calculateDate(item.releasedDate)}
                </span>
                <span className="text-xs text-cyan-500">
                  {item.pageViews} views | Voted by {item.totalVoted} People
                </span>
              </div>
            </div>
            <button className="bg-blue-500 m-2 p-1 rounded-lg text-cyan-50 font-bold">
              Watch Trailer
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieUi;
