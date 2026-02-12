"use server";

import { getSermons, PaginatedSermons } from "@/lib/data/mock-sermons";

export async function loadMoreSermons(playlistId: string | undefined, pageToken: string): Promise<PaginatedSermons> {
    return await getSermons(playlistId, pageToken);
}
