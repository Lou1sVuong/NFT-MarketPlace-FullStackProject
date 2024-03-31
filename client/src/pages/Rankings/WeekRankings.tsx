import RankingLists from "../../components/rankingPage/RankingLists";
import weekRankingList from "../../mockData/Rankings/weekRankingList";

function WeekRankings() {
  return (
    <div className="">
      {weekRankingList.map((data, index) => (
        <RankingLists key={index} data={data} />
      ))}
    </div>
  );
}

export default WeekRankings;
