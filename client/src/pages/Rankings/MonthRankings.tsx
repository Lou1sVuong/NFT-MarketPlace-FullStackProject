import RankingLists from "../../components/rankingPage/RankingLists";
import monthRankingList from "../../mockData/Rankings/monthRankingList";

function MonthRankings() {
  return (
    <div className="">
      {monthRankingList.map((data, index) => (
        <RankingLists key={index} data={data} />
      ))}
    </div>
  );
}

export default MonthRankings;
