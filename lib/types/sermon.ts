export interface Sermon {
    id: string;
    title: string;
    series: string;
    preacher: string;
    date: string;
    scripture: string;
    videoUrl: string; // YouTube Video ID
    thumbnail: string;
    description: string;
    tags: string[];
}
