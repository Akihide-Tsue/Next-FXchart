import AssetChart from "./Chart/AssetChart";
import CompoundInterest from "./Chart/CompoundInterest";

const Asset = () => {

  return (
    <>
      <div>チャート</div>
      <AssetChart />
      <div>複利計算</div>
      <CompoundInterest />
    </>
  )
}

export default Asset;
