import { Inter } from "next/font/google";
import { useQuery } from "urql";
import { GET_CAMPAIGN_QUERY } from "@/graphql/queries/campaign";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [result, reexecuteQuery] = useQuery({
    query: GET_CAMPAIGN_QUERY,
  });
  const { data, fetching, error } = result;
  const {
    numberID,
    name,
    description,
    thumbnail,
    numNFTMinted,
    startTime,
    endTime,
    formula,
    claimedTimes,
  } = data.campaign;
  console.log("data: ", data);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="bg-slate-50 py-12 px-24 rounded-lg">
        <div>
          <ul className="text-black font-semibold space-y-2">
            <li>Campaign ID: {numberID}</li>
            <li>name: {name}</li>
            <li>Description: {description}</li>
            <li>numNFTMinted: {numNFTMinted}</li>
            <li>startTime: {startTime}</li>
            <li>endTime: {endTime ?? "null"}</li>
            <li>formula: {formula ?? "null"}</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
