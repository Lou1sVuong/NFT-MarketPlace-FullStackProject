import RankingLists from "../../components/rankingPage/RankingLists";
import allRankingList from "../../mockData/Rankings/allRankingList";

function AllTimeRankings() {
  return (
    <div className="">
      {allRankingList.map((data, index) => (
        <RankingLists key={index} data={data} />
      ))}
    </div>
  );
}

export default AllTimeRankings;
