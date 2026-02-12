import { startOfDay, subDays, format } from 'date-fns';

export interface Devotional {
    id: string; // "YYYY-MM-DD"
    date: string; // "YYYY.MM.DD"
    scripture: string;
    verse: string;
    content: string;
}

// 📖 Data Bank: A collection of timeless verses and reflections
const SOURCE_DATA = [
    {
        scripture: "요한복음 1:1",
        verse: "태초에 말씀이 계시니라 이 말씀이 하나님과 함께 계셨으니 이 말씀은 곧 하나님이시니라",
        content: "말씀은 우리 삶의 시작이자 끝입니다. 하나님은 말씀으로 세상을 창조하셨고, 지금도 말씀으로 우리 삶을 인도하고 계십니다. 오늘 하루, 내 생각보다 하나님의 말씀을 앞세우는 복된 날이 되기를 소망합니다."
    },
    {
        scripture: "시편 23:1",
        verse: "여호와는 나의 목자시니 내게 부족함이 없으리로다",
        content: "참된 만족은 소유의 넉넉함이 아니라 관계의 친밀함에서 옵니다. 목자 되신 주님이 나와 함께하시기에, 나는 가장 안전하고 풍요로운 삶을 살고 있음을 고백하는 하루가 되십시오."
    },
    {
        scripture: "빌립보서 4:6-7",
        verse: "아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라",
        content: "염려는 흔들의자와 같아서 계속 움직이지만 어디로도 데려다주지 못합니다. 그러나 기도는 우리를 하나님의 보좌 앞으로 인도합니다. 기도로 염려를 맡기고 평강을 누리십시오."
    },
    {
        scripture: "이사야 41:10",
        verse: "두려워하지 말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라",
        content: "두려움이 몰려올 때, 우리에게 필요한 것은 상황의 변화가 아니라 '함께하심'의 확신입니다. 전능하신 하나님이 오늘 나의 편이 되어주심을 믿고 담대히 나아가십시오."
    },
    {
        scripture: "로마서 8:28",
        verse: "우리가 알거니와 하나님을 사랑하는 자 곧 그의 뜻대로 부르심을 입은 자들에게는 모든 것이 합력하여 선을 이루느니라",
        content: "지금 당장은 이해할 수 없는 고난이나 실수조차도, 하나님의 손 안에서는 명작을 위한 재료가 됩니다. 내 인생의 퍼즐 조각을 맞추고 계신 하나님을 신뢰하십시오."
    },
    {
        scripture: "잠언 16:9",
        verse: "사람이 마음으로 자기의 길을 계획할지라도 그의 걸음을 인도하시는 이는 여호와시니라",
        content: "우리의 계획보다 하나님의 인도가 더 완전합니다. 때로는 길이 막히는 것 같아도, 그것은 더 좋은 길로 이끄시는 하나님의 섭리일 수 있습니다. 인도하심에 순종하는 하루가 되십시오."
    },
    {
        scripture: "마태복음 11:28",
        verse: "수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라",
        content: "진정한 쉼은 문제의 해결이 아니라 주님 품 안에서 발견됩니다. 삶의 무게가 느껴질 때, 혼자 버티지 말고 주님께 나아가 쉼을 얻으십시오. 주님이 당신의 짐을 대신 지십니다."
    },
    {
        scripture: "갈라디아서 2:20",
        verse: "내가 그리스도와 함께 십자가에 못 박혔나니 그런즉 이제는 내가 사는 것이 아니요 오직 내 안에 그리스도께서 사시는 것이라",
        content: "신앙생활은 나를 개선하는 것이 아니라, 내 안에 예수님이 사시게 하는 것입니다. 나의 자아는 죽고 예수님의 생명으로 살아가는 놀라운 은혜를 경험하는 하루가 되십시오."
    },
    {
        scripture: "예레미야 29:11",
        verse: "여호와의 말씀이니라 너희를 향한 나의 생각을 내가 아나니 평안이요 재앙이 아니니라 너희에게 미래와 희망을 주는 것이니라",
        content: "하나님의 계획은 언제나 선하십니다. 때로 현실이 어두워 보여도, 하나님이 예비하신 결말은 희망임을 기억하십시오. 오늘을 견딜 힘은 이 약속을 믿는 믿음에서 나옵니다."
    },
    {
        scripture: "고린도후서 5:17",
        verse: "그런즉 누구든지 그리스도 안에 있으면 새로운 피조물이라 이전 것은 지나갔으니 보라 새 것이 되었도다",
        content: "우리는 예수님 안에서 날마다 새롭게 태어납니다. 과거의 실패나 상처에 얽매이지 마십시오. 오늘 주시는 새 은혜로 다시 시작할 수 있습니다. 당신은 새로운 존재입니다."
    },
    {
        scripture: "요한복음 15:5",
        verse: "나는 포도나무요 너희는 가지라 그가 내 안에, 내가 그 안에 거하면 사람이 열매를 많이 맺나니 나를 떠나서는 너희가 아무 것도 할 수 없음이라",
        content: "가지가 나무에 붙어있기만 하면 열매는 저절로 맺힙니다. 노력하기에 앞서 주님 안에 머무르기를 힘쓰십시오. 풍성한 열매는 거함(Abiding)의 결과입니다."
    },
    {
        scripture: "시편 119:105",
        verse: "주의 말씀은 내 발에 등이요 내 길에 빛이니이다",
        content: "인생의 길이 보이지 않을 때, 멀리 보려 하지 말고 말씀이 비추는 '한 걸음'만 내디디십시오. 그 한 걸음 한 걸음이 모여 하나님의 완전한 길로 우리를 인도할 것입니다."
    },
    {
        scripture: "베드로전서 5:7",
        verse: "너희 염려를 다 주께 맡기라 이는 그가 너희를 돌보심이라",
        content: "'맡긴다'는 것은 다시 찾아오지 않는 것입니다. 염려의 보따리를 주님 발 앞에 내려놓고, 돌보심의 은혜를 가볍게 누리는 하루가 되시길 바랍니다."
    },
    {
        scripture: "여호수아 1:9",
        verse: "강하고 담대하라 두려워하지 말며 놀라지 말라 네가 어디로 가든지 네 하나님 여호와가 너와 함께 하느니라",
        content: "용기는 두려움이 없는 상태가 아니라, 하나님이 함께하심을 믿고 한 걸음 내딛는 것입니다. 당신이 걷는 그 길 위에 하나님이 동행하고 계십니다."
    },
    {
        scripture: "마태복음 6:33",
        verse: "그런즉 너희는 먼저 그의 나라와 그의 의를 구하라 그리하면 이 모든 것을 너희에게 더하시리라",
        content: "우선순위가 바로 설 때 삶의 질서가 잡힙니다. 가장 소중한 것을 가장 먼저 하십시오. 하나님을 첫 자리에 모실 때, 나머지 모든 필요도 채워질 것입니다."
    }
];

// Helper: Deterministically algorithm to pick a devotional based on the date string
// This ensures that "2026-10-12" always returns the same specific devotional, uniquely for that day.
function getDevotionalIndexForDate(dateStr: string): number {
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
        hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash) % SOURCE_DATA.length;
}

export async function getDevotionals(count: number = 30): Promise<Devotional[]> {
    const list: Devotional[] = [];
    const today = new Date(); // Use current system time

    // Generate for today + past (count-1) days
    for (let i = 0; i < count; i++) {
        const targetDate = subDays(today, i);
        const dateId = format(targetDate, 'yyyy-MM-dd'); // ID format
        const displayDate = format(targetDate, 'yyyy.MM.dd'); // Display format

        const index = getDevotionalIndexForDate(dateId);
        const source = SOURCE_DATA[index];

        list.push({
            id: dateId,
            date: displayDate,
            scripture: source.scripture,
            verse: source.verse,
            content: source.content
        });
    }

    return list;
}

export async function getDevotionalById(id: string): Promise<Devotional | undefined> {
    // id is expected to be "YYYY-MM-DD"
    // Validate if it's a valid date string simple check
    if (!/^\d{4}-\d{2}-\d{2}$/.test(id)) return undefined;

    const index = getDevotionalIndexForDate(id);
    const source = SOURCE_DATA[index];

    return {
        id: id,
        date: id.replace(/-/g, '.'),
        scripture: source.scripture,
        verse: source.verse,
        content: source.content
    };
}
