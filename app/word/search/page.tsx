import { getSermons } from "@/lib/data/mock-sermons";
import SearchClient from "./SearchClient";

export const metadata = {
    title: "AI 설교 검색 | House Of Worship",
    description: "상황과 감정에 맞는 설교를 찾아드립니다.",
};

export default async function SearchPage() {
    // Fetch initial sermons to search against
    // In a real app, this might be a full-text search API call
    // Here we load the latest sermons to filter client-side for immediate response
    const sermonsData = await getSermons();

    return <SearchClient initialSermons={sermonsData.items} />;
}
