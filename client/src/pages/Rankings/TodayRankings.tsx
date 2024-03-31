import RankingLists from "../../components/rankingPage/RankingLists";
import todayRankingList from "../../mockData/Rankings/todayRankingList";

function TodayRankings() {
  return (
    <div className="">
      {todayRankingList.map((data, index) => (
        <RankingLists key={index} data={data} />
      ))}
    </div>
  );
}

export default TodayRankings;
