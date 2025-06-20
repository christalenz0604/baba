import { Question, QuestionSet } from '../types';
import { getImagePath } from '../utils/pathUtils';
//對應characters.ts 裡的 id 欄位，設定每個立委的問題內容
/*
    id: '題目的id，通常會按照順序往下1-N題',
    text: '題目內容',
    options: [
        //#isCorrect: true 才能前往下一題，其他會直接到結束頁面
      { id: '答案id', text: '答案內容', points: 答案得分, isCorrect: true },
      { id: '答案id', text: '答案內容', points: 答案得分, isCorrect: false },
      { id: '答案id', text: '答案內容', points: 答案得分, isCorrect: false },
    ],
    image: getImagePath("/images/question/common_q_pic_03"),
    description: '法案審查是立委的重要職責，每個決定都可能影響thousands of人民的生活。面對不熟悉的議題，如何在有限時間內做出正確判斷，考驗著立委的專業素養和責任心。這個時刻的選擇，將展現你是否真正重視立委的職責。',
*/

const ChangChihLunQuestions: Question[] = [
  {
    id: 'ChangChihLun1',
    text: '上班時間總召邀你一起去中國查訪',
    image: getImagePath("/images/question/common_q_pic_03.webp"),
    options: [
      { id: 'ChangChihLun1-1', text: '我們是在立法院上班，立院總召不是統戰團行程總召好嗎？', points: 0, isCorrect: false },
      { id: 'ChangChihLun1-2', text: '總召叫我去哪我就去哪，絕對服從、不問、不拖延！', points: 1450, isCorrect: true },
      { id: 'ChangChihLun1-3', text: '謝謝總召，但我還是想認真開會為民服務。', points: 0, isCorrect: false },
    ],
    explanation: {
      text: '2024/4/26在立法院開議期間，傅崐萁率領羅明才、陳雪生、鄭天財、徐欣瑩、陳玉珍、鄭正鈐、王鴻薇、林沛祥、廖先翔、張智倫、邱鎮軍、游顥、盧縣一、黃仁、翁曉玲、林倩綺訪問中國，在人民大會堂新疆廳拜見全國政協主席王滬寧；王滬寧近日才宣布去年統戰工作做得很好，2025更要做好「四個凝聚」工作，切實發揮最廣泛愛國統一戰線組織的政治作用，不斷鞏固全國各族人民大團結，加強海內外中華兒女大團結。',
      reference: 'https://www.cna.com.tw/news/aipl/202404260199.aspx'
    }
  },
  {
    id: 'ChangChihLun2',
    text: '2024/4/3環狀線軌道因地震發生錯位，身為區域立委的你會？',
    image: getImagePath("/images/question/ChangChihLun_q_pic_02.webp"),
    options: [
      { id: 'ChangChihLun2-1', text: '錯位？千斤頂頂回去就好啦，後面再來處理！', points: 300, isCorrect: true },
      { id: 'ChangChihLun2-2', text: '叫廠商來喝茶，順便看合約怎麼寫的。', points: 130, isCorrect: false },
      { id: 'ChangChihLun2-3', text: '叫捷運局出來，先別甩鍋。', points: 0, isCorrect: false },
    ],
    explanation: {
      text: '新北市中和環狀線捷運因為上午7.2強震，導致「軌道位移」而整個捷運環狀線因此癱瘓，恐怕要長期維修，但不敢確定問題，新北市立委張智倫到場視察，他表示，目前可能要先用「千斤頂」把受損的地方先恢復，其他相關交通，可能還要評估....',
      reference: 'https://www.nownews.com/news/6397578?srsltid=AfmBOopBgND3_KPMilZZbMnTPfy027oInoLrDG-zOVLgHi10T4T5YlUe'
    }
  },
  {
    id: 'ChangChihLun3',
    text: '黨團要修《立法院職權行使法》條例，你建議如何做？',
    image: getImagePath("/images/question/common_q_pic_02.webp"),
    options: [
      { id: 'ChangChihLun3-1', text: '理性討論，找到對台灣最有利的平衡點。', points: 0, isCorrect: false },
      { id: 'ChangChihLun3-2', text: '最後一秒上機密版本，一起舉手秒通過，爽。', points: 7827, isCorrect: true },
      { id: 'ChangChihLun3-3', text: '該開公聽會就開，該審慎就審慎，不然又被說是在搞立法獨裁。', points: 0, isCorrect: false },
    ],
    explanation: {
      text: '2024/5/21在場外大批民眾要求退回委員會重新審查《立法院職權行使法》狀況下，在最後一刻，藍白兩黨提出沒有被實質討論過的最高機密版本，並以舉手表決方式強行通過。被憲法法庭認定有諸多違憲的法案，該法案賦予立法院調查權，有權利要公私部門甚至個人提供這各種資訊，且設定禁止反質詢規定，問為什麼或拒絕提供就是處罰，在缺乏第三方制衡下，形同一種強力的空白授權。',
      reference: 'https://watchout.tw/reports/KK9ll6K03prNMxllAru8'
    }
  },
  {
    id: 'ChangChihLun4',
    text: '中國灰色騷擾海域頻繁，你為海巡做什麼？',
    image: getImagePath("/images/question/ChangChihLun_q_pic_01.webp"),
    options: [
      { id: 'ChangChihLun4-1', text: '哎呀，我之前好像才刪了29億⋯⋯（尷尬逃跑）', points: 1698, isCorrect: true },
      { id: 'ChangChihLun4-2', text: '立刻爭預算！讓弟兄有船、有甲、有假期。', points: 100, isCorrect: false },
      { id: 'ChangChihLun4-3', text: '加薪啦，不然怎麼冒險？', points: 0, isCorrect: false },
    ],
    explanation: {
      text: '張智倫參與多項海巡署、海委會預算相關連署，大幅度凍結相關業務，最離譜的凍結原因大概是「中國漁船越界捕撈翻覆，因海巡署為全程錄影被糾正，所以凍結...」然後再於灰色騷擾頻發期間關心海委會業務狀況。',
      reference: 'https://www.ettoday.net/news/20250130/2899990.htm'
    }
  },
  {
    id: 'ChangChihLun5',
    text: '明天要審《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
    image: getImagePath("/images/question/common_q_pic_01.webp"),
    options: [
      { id: 'ChangChihLun5-1', text: '先冷靜協商啦，不然又要演全武行，對票倉傷很大。', points: 4, isCorrect: false },
      { id: 'ChangChihLun5-2', text: '找總召討論，大家帶枕頭去守夜兼打地鋪。', points: 604, isCorrect: false },
      { id: 'ChangChihLun5-3', text: '他們敢進來，我就燒立法院，看誰比較瘋。', points: 1969, isCorrect: true },
    ],
    explanation: {
      text: '2024/12/18多位民進黨立委摸黑闖入立法院站裡主席台要對《選罷法》、《憲訴法》與《財劃法》三讀作抗爭，立法院門口爆發推擠，國民黨立委鄭天財甚至口出狂言「你們全部都進去，我就把它燒掉」',
      reference: 'https://www.ftvnews.com.tw/news/detail/2024C19W0444'
    }
  },
  {
    id: 'ChangChihLun6',
    text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
    image: getImagePath("/images/question/common_q_pic_06.webp"),
    options: [
      { id: 'ChangChihLun6-1', text: '鎖門是必要手段，太多雜音就會拖進度。', points: 1949, isCorrect: true },
      { id: 'ChangChihLun6-2', text: '法案應該要公開討論，不是玩暗黑通關。', points: 0, isCorrect: false },
      { id: 'ChangChihLun6-3', text: '不行啦，這根本戒嚴2.0，連我媽都看不下去。', points: 0, isCorrect: false },
    ],
    explanation: {
      text: '公視報導，立法院內政委員會2024/12/16排審《選罷法》修正草案，國民黨拂曉出擊佔領立院紅樓2樓，將一側的鐵門鎖上用長桌頂住；並用保鮮膜把內政委員會門口封住；另一側則是以人牆阻擋，只讓議事人員進入。9時一到，召委徐欣瑩立即宣布開會，念完相關條文宣布初審通過，全數條文保留協商。',
      reference: 'https://news.pts.org.tw/article/729015'
    }
  },
  {
    id: 'ChangChihLun7',
    text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
    image: getImagePath("/images/question/common_q_pic_07.webp"),
    options: [
      { id: 'ChangChihLun7-1', text: '法案還改個沒完，怎麼讓我們正常表決？我要去抗議。', points: 1450, isCorrect: false },
      { id: 'ChangChihLun7-2', text: '人不用醒，手能舉就好，投完再說。', points: 3838, isCorrect: true },
      { id: 'ChangChihLun7-3', text: '不怕刪預算，但連衛福部都刪到剩一塊錢，這不是亂搞是什麼？', points: 0, isCorrect: false },
    ],
    explanation: {
      text: '國民黨及民眾黨合力提出案海攻勢，出現許多理由、金額和項目都令外界匪夷所思的提案。在民意壓力下整合至 700 多案進入表決大戰並在藍白聯手優勢人數下通過。期間更出現邊表決邊改提案、沒看到修正文字就表決等荒腔走板的議事失序。',
      reference: 'https://watchout.tw/reports/tbHOpYA5buuRfEInq1Kh'
    }
  },
  {
    id: 'ChangChihLun8',
    text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
    image: getImagePath("/images/question/common_q_pic_04.webp"),
    options: [
      { id: 'ChangChihLun8-1', text: '我不能提這種幫中國洗人口的提案。', points: 0, isCorrect: false },
      { id: 'ChangChihLun8-2', text: '選票多才是真的好，以後感恩我們的中配會更多！', points: 6666, isCorrect: true },
      { id: 'ChangChihLun8-3', text: '本來就已經有特殊待遇，沒必要再開綠燈了。', points: 0, isCorrect: false },
    ],
    explanation: {
      text: '國民黨立委提案修法擬將中國籍配偶取得身分證時間從6年縮短成4年，。現有政策為中配依親滿4年、連續長居2年即可申請身分證，不像外籍配偶須先放棄原有國籍才能取得我國身分證。還能讓親人來台享用健保，國民黨為何此時要縮短時程、啟人疑竇呢？',
      reference: 'https://news.pts.org.tw/article/733781'
    }
  },
  {
    id: 'ChangChihLun9',
    text: '立法院部分黨團提出了65歲以上免健保費一案，在深入研究後，我決定',
    image: getImagePath("/images/question/common_q_pic_08.webp"),
    options: [
      { id: 'ChangChihLun9-1', text: '研究什麼啦，按鈕在哪我就按哪。 ', points: 7777, isCorrect: true },
      { id: 'ChangChihLun9-2', text: '很多65歲以上是房東收租大戶，這提案會被罵爆。', points: 88, isCorrect: false },
      { id: 'ChangChihLun9-3', text: '怎麼照顧的是來台依親的長輩，反而在地長輩被邊緣？要公平。', points: 0, isCorrect: false },
    ],
    explanation: {
      text: '藍白針對《老人福利法》修正草案提案，原本最寬鬆版本為65歲以上長者，綜合所得稅率未達20%免繳健保費，沒想到引發醫事團體反對，醫改團體更警告，全民健保是「社會保險」，而非「社會福利」，修法若通過恐怕衝擊健保永續。',
      reference: 'https://news.pts.org.tw/article/731315'
    }
  },
  {
    id: 'ChangChihLun10',
    text: '自稱金門坦克的玉珍姐說為了金門發財…發展，我們要修改離島條例18條。',
    image: getImagePath("/images/question/common_q_pic_05.webp"),
    options: [
      { id: 'ChangChihLun10-1', text: '只要玉珍開口，票一定掉，絕對不要讓我連署這種案。', points: 0, isCorrect: true },
      { id: 'ChangChihLun10-2', text: '拒絕，這提案像極了一帶一路，包裝再好也不能偷渡統戰資源。', points: 0, isCorrect: false },
      { id: 'ChangChihLun10-3', text: '姊說什麼就是金門福音，我負責幫她舉手。', points: 2666, isCorrect: true },
    ],
    explanation: {
      text: '陳玉珍日前針對「離島建設條例」第18條之1的第6項提出修正草案，明定大陸地區人民、法人、團體、機構、資金、物品、商品、勞務及服務，進出離島自由貿易示範區，相關辦法由事業主管機關擬定；並於說明欄第7點述明，為便利「並適度鬆綁相關規定」。',
      reference: 'https://www.cna.com.tw/news/aipl/202504110281.aspx'
    }
  },
];

//林德福
const linTeFuQuestions: Question[] = [
  {
    id: 'linTeFu1',
    text: '上班時間總召邀你一起去中國查訪',
    image: getImagePath("/images/question/common_q_pic_03.webp"),
    options: [
      { id: 'linTeFu1-1', text: '我們是在立法院上班，立院總召不是統戰團行程總召好嗎？', points: 0, isCorrect: false },
      { id: 'linTeFu1-2', text: '謝謝總召，但我還是想認真開會為民服務。', points: 0, isCorrect: false },
      { id: 'linTeFu1-3', text: '嗯？我睡著了，沒有注意到，他們出發了嗎？', points: 1450, isCorrect: true },
    ],
    explanation: {
      text: '2024/4/26在立法院開議期間，傅崐萁率領羅明才、陳雪生、鄭天財、徐欣瑩、陳玉珍、鄭正鈐、王鴻薇、林沛祥、廖先翔、張智倫、邱鎮軍、游顥、盧縣一、黃仁、翁曉玲、林倩綺訪問中國，在人民大會堂新疆廳拜見全國政協主席王滬寧；王滬寧近日才宣布去年統戰工作做得很好，2025更要做好「四個凝聚」工作，切實發揮最廣泛愛國統一戰線組織的政治作用，不斷鞏固全國各族人民大團結，加強海內外中華兒女大團結。',
      reference: 'https://www.cna.com.tw/news/aipl/202404260199.aspx'
    }
  },
  {
    id: 'linTeFu2',
    text: '黨團要修《立法院職權行使法》條例，你建議如何做？',
    image: getImagePath("/images/question/common_q_pic_02.webp"),
    options: [
      { id: 'linTeFu2-1', text: '最後一秒上機密版本，一起舉手秒通過，爽。', points: 7787, isCorrect: true },
      { id: 'linTeFu2-2', text: '理性討論，找到對台灣最有利的平衡點。', points: 0, isCorrect: false },
      { id: 'linTeFu2-3', text: '該開公聽會就開，該審慎就審慎，不然又被說是在搞立法獨裁。', points: 5, isCorrect: false },
    ],
    explanation: {
      text: '2024/5/21在場外大批民眾要求退回委員會重新審查《立法院職權行使法》狀況下，在最後一刻，藍白兩黨提出沒有被實質討論過的最高機密版本，並以舉手表決方式強行通過。被憲法法庭認定有諸多違憲的法案，該法案賦予立法院調查權，有權利要公私部門甚至個人提供這各種資訊，且設定禁止反質詢規定，問為什麼或拒絕提供就是處罰，在缺乏第三方制衡下，形同一種強力的空白授權。',
      reference: 'https://watchout.tw/reports/KK9ll6K03prNMxllAru8'
    }
  },
  {
    id: 'linTeFu3',
    text: '明天要審《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
    image: getImagePath("/images/question/common_q_pic_01.webp"),
    options: [
      { id: 'linTeFu3-1', text: '先冷靜協商啦，不然又要演全武行，對票倉傷很大。', points: 0, isCorrect: false },
      { id: 'linTeFu3-2', text: '他們敢進來，我就燒立法院，看誰比較瘋。', points: 1969, isCorrect: true },
      { id: 'linTeFu3-3', text: '找總召討論，大家帶枕頭去守夜兼打地鋪。', points: 604, isCorrect: false },
    ],
    explanation: {
      text: '2024/12/18多位民進黨立委摸黑闖入立法院站裡主席台要對《選罷法》、《憲訴法》與《財劃法》三讀作抗爭，立法院門口爆發推擠，國民黨立委鄭天財甚至口出狂言「你們全部都進去，我就把它燒掉」',
      reference: 'https://www.ftvnews.com.tw/news/detail/2024C19W0444'
    }
  },
  {
    id: 'linTeFu4',
    text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
    image: getImagePath("/images/question/common_q_pic_04.webp"),
    options: [
      { id: 'linTeFu4-1', text: '我不能提這種幫中國洗人口的提案。', points: 0, isCorrect: false },
      { id: 'linTeFu4-2', text: '本來就已經有特殊待遇，沒必要再開綠燈了。', points: 5, isCorrect: false },
      { id: 'linTeFu4-3', text: '選票多才是真的好，以後感恩我們的中配會更多！', points: 5166, isCorrect: true },
    ],
    explanation: {
      text: '國民黨立委提案修法擬將中國籍配偶取得身分證時間從6年縮短成4年，。現有政策為中配依親滿4年、連續長居2年即可申請身分證，不像外籍配偶須先放棄原有國籍才能取得我國身分證。還能讓親人來台享用健保，國民黨為何此時要縮短時程、啟人疑竇呢？',
      reference: 'https://news.pts.org.tw/article/733781'
    }
  },
  {
    id: 'linTeFu5',
    text: '立法院部分黨團提出了65歲以上免健保費一案，在深入研究後，我決定',
    image: getImagePath("/images/question/common_q_pic_08.webp"),
    options: [
      { id: 'linTeFu5-1', text: '怎麼照顧的是來台依親的長輩，反而在地長輩被邊緣？要公平。', points: 12, isCorrect: false },
      { id: 'linTeFu5-2', text: '研究什麼啦，按鈕在哪我就按哪。', points: 4277, isCorrect: true },
      { id: 'linTeFu5-3', text: '很多65歲以上是房東收租大戶，這提案會被罵爆。', points: 4, isCorrect: false },
    ],
    explanation: {
      text: '藍白針對《老人福利法》修正草案提案，原本最寬鬆版本為65歲以上長者，綜合所得稅率未達20%免繳健保費，沒想到引發醫事團體反對，醫改團體更警告，全民健保是「社會保險」，而非「社會福利」，修法若通過恐怕衝擊健保永續。',
      reference: 'https://news.pts.org.tw/article/731315'
    }
  },
  {
    id: 'linTeFu6',
    text: '80歲以上免醫療評估請看護被批會出事，要不要煞車？',
    image: getImagePath("/images/question/linTeFu_q_pic_01.webp"),
    options: [
      { id: 'linTeFu6-1', text: '黨說過了沒問題，我還能比黨懂醫療？', points: 1323, isCorrect: true },
      { id: 'linTeFu6-2', text: '我...我想睡一下，明天再想。', points: 555, isCorrect: false },
      { id: 'linTeFu6-3', text: '不煞會翻車，我喊暫停！', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '2024年底立法院三讀通過就業服務法條文，明定年滿80歲以上免經醫療評估（巴氏量表）即可申請外籍看護，修法後恐讓外籍看護市場供需失衡，根據中央社報導，家庭照護者關懷總會指出免平標準是另類年齡歧視，嚴重衝擊現有23萬需要外籍看護照顧重癱、臥床、多重障礙等長照家庭權益。',
      reference: 'https://www.cna.com.tw/news/aipl/202412310099.aspx'
    }
  },
  {
    id: 'linTeFu7',
    text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
    image: getImagePath("/images/question/common_q_pic_06.webp"),
    options: [
      { id: 'linTeFu7-1', text: '鎖門是必要手段，太多雜音就會拖進度。', points: 1949, isCorrect: true },
      { id: 'linTeFu7-2', text: '法案應該要公開討論，不是玩暗黑通關。', points: 4, isCorrect: false },
      { id: 'linTeFu7-3', text: '不行啦，這根本戒嚴2.0，連我媽都看不下去。', points: 6, isCorrect: false },
    ],
    explanation: {
      text: '公視報導，立法院內政委員會2024/12/16排審《選罷法》修正草案，國民黨拂曉出擊佔領立院紅樓2樓，將一側的鐵門鎖上用長桌頂住；並用保鮮膜把內政委員會門口封住；另一側則是以人牆阻擋，只讓議事人員進入。9時一到，召委徐欣瑩立即宣布開會，念完相關條文宣布初審通過，全數條文保留協商。',
      reference: 'https://news.pts.org.tw/article/729015'
    }
  },
  {
    id: 'linTeFu8',
    text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
    image: getImagePath("/images/question/common_q_pic_07.webp"),
    options: [
      { id: 'linTeFu8-1', text: '不怕刪預算，但連衛福部都刪到剩一塊錢，這不是亂搞是什麼？', points: 0, isCorrect: false },
      { id: 'linTeFu8-2', text: '法案還改個沒完，怎麼讓我們正常表決？我要去抗議。', points: 0, isCorrect: false },
      { id: 'linTeFu8-3', text: '人不用醒，手能舉就好，投完再說。', points: 3838, isCorrect: true },
    ],
    explanation: {
      text: '2024年底立法院三讀通過就業服務法條文，明定年滿80歲以上免經醫療評估（巴氏量表）即可申請外籍看護，修法後恐讓外籍看護市場供需失衡，根據中央社報導，家庭照護者關懷總會指出免平標準是另類年齡歧視，嚴重衝擊現有23萬需要外籍看護照顧重癱、臥床、多重障礙等長照家庭權益。',
      reference: 'https://www.cna.com.tw/news/aipl/202412310099.aspx'
    }
  },
  {
    id: 'linTeFu9',
    text: '大家想罷免你，說你只聽黨不聽人，你怎麼回？',
    image: getImagePath("/images/question/linTeFu_q_pic_02.webp"),
    options: [
      { id: 'linTeFu9-1', text: '我可是黨最忠誠的一把刀，這叫使命感。', points: 222, isCorrect: true },
      { id: 'linTeFu9-2', text: '跟黨投一致不是壞事，那是紀律！', points: 22, isCorrect: false },
      { id: 'linTeFu9-3', text: '修法砍預算，不是為人民，是為黨人民。', points: 22, isCorrect: false },
    ],
    explanation: {
      text: '沃草報導指出，中國國民黨立委林德福質詢除了照單全收中國國民黨的中央廚房設定的方向，也常常唸報紙社論當質詢，被許多國會助理和記者認為是沒有內涵和專業的立委，除了在國會擴權法案、選罷、憲訴、財劃等三大惡法和惡搞今年總預算都充當黨的投票部隊。',
      reference: 'https://www.cna.com.tw/news/aipl/202412310099.aspx'
    }
  },
  {
    id: 'linTeFu10',
    text: '自稱金門坦克的玉珍姐說為了金門發財…發展，我們要修改離島條例18條。',
    image: getImagePath("/images/question/common_q_pic_05.webp"),
    options: [
      { id: 'linTeFu10-1', text: '姊說什麼就是金門福音，我負責幫她舉手。', points: 1766, isCorrect: true },
      { id: 'linTeFu10-2', text: '只要玉珍開口，票一定掉，絕對不要讓我連署這種案。', points: 0, isCorrect: false },
      { id: 'linTeFu10-3', text: '拒絕，這提案像極了一帶一路，包裝再好也不能偷渡統戰資源。', points: 0, isCorrect: false },
    ],
    explanation: {
      text: '陳玉珍日前針對「離島建設條例」第18條之1的第6項提出修正草案，明定大陸地區人民、法人、團體、機構、資金、物品、商品、勞務及服務，進出離島自由貿易示範區，相關辦法由事業主管機關擬定；並於說明欄第7點述明，為便利「並適度鬆綁相關規定」。',
      reference: 'https://www.cna.com.tw/news/aipl/202504110281.aspx'
    }
  },
];


//徐巧芯

const HSUCHIAOHSINQuestions: Question[] = [
  {
    id: 'HSUCHIAOHSIN1',
    text: '黨團要修《立法院職權行使法》條例，你建議如何做？',
    image: getImagePath("/images/question/common_q_pic_02.webp"),
    options: [
      { id: 'HSUCHIAOHSIN1-1', text: '最後一秒上機密版本，一起舉手秒通過，爽。', points: 6287, isCorrect: true },
      { id: 'HSUCHIAOHSIN1-2', text: '該開公聽會就開，該審慎就審慎，不然又被說是在搞立法獨裁。', points: 0, isCorrect: false },
      { id: 'HSUCHIAOHSIN1-3', text: '理性討論，找到對台灣最有利的平衡點。', points: 0, isCorrect: false },
    ],
    explanation: {
      text: '2024/5/21在場外大批民眾要求退回委員會重新審查《立法院職權行使法》狀況下，在最後一刻，藍白兩黨提出沒有被實質討論過的最高機密版本，並以舉手表決方式強行通過。被憲法法庭認定有諸多違憲的法案，該法案賦予立法院調查權，有權利要公私部門甚至個人提供這各種資訊，且設定禁止反質詢規定，問為什麼或拒絕提供就是處罰，在缺乏第三方制衡下，形同一種強力的空白授權。',
      reference: 'https://watchout.tw/reports/KK9ll6K03prNMxllAru8'
    }
  },
  {
    id: 'HSUCHIAOHSIN2',
    text: '上班時間總召邀你一起去中國查訪',
    image: getImagePath("/images/question/common_q_pic_03.webp"),
    options: [
      { id: 'HSUCHIAOHSIN2-1', text: '我們是在立法院上班，立院總召不是統戰團行程總召好嗎？', points: 0, isCorrect: false },
      { id: 'HSUCHIAOHSIN2-2', text: '總召叫我去哪我就去哪，不問、服從、不拖延！', points: 1450, isCorrect: false },
      { id: 'HSUCHIAOHSIN2-3', text: '嗯？我睡著了，沒有注意到，他們出發了嗎？', points: 1450, isCorrect: true },
    ],
    explanation: {
      text: '2024/4/26在立法院開議期間，傅崐萁率領羅明才、陳雪生、鄭天財、徐欣瑩、陳玉珍、鄭正鈐、王鴻薇、林沛祥、廖先翔、張智倫、邱鎮軍、游顥、盧縣一、黃仁、翁曉玲、林倩綺訪問中國，在人民大會堂新疆廳拜見全國政協主席王滬寧；王滬寧近日才宣布去年統戰工作做得很好，2025更要做好「四個凝聚」工作，切實發揮最廣泛愛國統一戰線組織的政治作用，不斷鞏固全國各族人民大團結，加強海內外中華兒女大團結。',
      reference: 'https://www.cna.com.tw/news/aipl/202404260199.aspx'
    }
  },
  {
    id: 'HSUCHIAOHSIN3',
    text: '在周一國民黨團「委員會封門三分鐘修法」後，民進黨把議場鎖住不讓我們三讀，我該怎麼辦？',
    image: getImagePath("/images/question/HSUCHIAOHSIN_q_pic_01.webp"),
    options: [
      { id: 'HSUCHIAOHSIN3-1', text: '我要以理服人，畢竟我也不想再被剪片嘲笑了。', points: 0, isCorrect: false },
      { id: 'HSUCHIAOHSIN3-2', text: '先找議事人員協助看看', points: 0, isCorrect: false },
      { id: 'HSUCHIAOHSIN3-3', text: '油壓剪伺候，民主就是要剪開來用的！', points: 5121, isCorrect: true },
    ],
    explanation: {
      text: '藍綠黨團在攻防時，因會議室所有門都被民進黨鎖住，藍委試圖以各種方式破門進入，而藍委徐巧芯助理、謝龍介姪子謝克洋則背著一包油壓剪等工具想送入議場，警衛見狀隨即阻攔，指袋子內是違禁品，不能進入議場，但謝克洋表示是他老闆要他帶進去的，警衛則要求他表明身份，出示證件，場面異常緊張。',
      reference: 'https://tw.news.yahoo.com/%E8%AC%9D%E5%85%8B%E6%B4%8B%E5%B8%B6%E5%A4%A7%E5%89%AA%E5%88%80%E9%97%96%E8%AD%B0%E5%A0%B4-%E7%95%AB%E9%9D%A2%E6%9B%9D%E9%81%AD%E8%BD%9F-%E6%AE%BA%E4%BA%BA%E5%97%8E-091123660.html'
    }
  },
  {
    id: 'HSUCHIAOHSIN4',
    text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
    image: getImagePath("/images/question/common_q_pic_06.webp"),
    options: [
      { id: 'HSUCHIAOHSIN4-1', text: '不行啦，這根本戒嚴2.0，連我媽都看不下去。', points: 4, isCorrect: false },
      { id: 'HSUCHIAOHSIN4-2', text: '法案應該要公開討論，不是玩暗黑通關。', points: 60, isCorrect: false },
      { id: 'HSUCHIAOHSIN4-3', text: '鎖門是必要手段，太多雜音就會拖進度。', points: 1949, isCorrect: true },
    ],
    explanation: {
      text: '公視報導，立法院內政委員會2024/12/16排審《選罷法》修正草案，國民黨拂曉出擊佔領立院紅樓2樓，將一側的鐵門鎖上用長桌頂住；並用保鮮膜把內政委員會門口封住；另一側則是以人牆阻擋，只讓議事人員進入。9時一到，召委徐欣瑩立即宣布開會，念完相關條文宣布初審通過，全數條文保留協商。',
      reference: 'https://news.pts.org.tw/article/729015'
    }
  },
  {
    id: 'HSUCHIAOHSIN5',
    text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
    image: getImagePath("/images/question/common_q_pic_07.webp"),
    options: [
      { id: 'HSUCHIAOHSIN5-1', text: '法案還改個沒完，怎麼讓我們正常表決？我要去抗議。', points: 0, isCorrect: false },
      { id: 'HSUCHIAOHSIN5-2', text: '人不用醒，手能舉就好，投完再說。', points: 3838, isCorrect: true },
      { id: 'HSUCHIAOHSIN5-3', text: '不怕刪預算，但連衛福部都刪到剩一塊錢，這不是亂搞是什麼？', points: 0, isCorrect: false },
    ],
    explanation: {
      text: '國民黨及民眾黨合力提出案海攻勢，出現許多理由、金額和項目都令外界匪夷所思的提案。在民意壓力下整合至 700 多案進入表決大戰並在藍白聯手優勢人數下通過。期間更出現邊表決邊改提案、沒看到修正文字就表決等荒腔走板的議事失序。',
      reference: 'https://watchout.tw/reports/tbHOpYA5buuRfEInq1Kh'
    }
  },
  {
    id: 'HSUCHIAOHSIN6',
    text: '我是黨意小尖兵，要砍預算，我應該砍哪些部門？',
    image: getImagePath("/images/question/HSUCHIAOHSIN_q_pic_02.webp"),
    options: [
      { id: 'HSUCHIAOHSIN6-1', text: '財政、國防、外交，三個都硬的才有快感。', points: 12, isCorrect: false },
      { id: 'HSUCHIAOHSIN6-2', text: '魔法部、忍者部，砍起來沒壓力。', points: 8, isCorrect: false },
      { id: 'HSUCHIAOHSIN6-3', text: '數位部、NCC、陸委會，砍你們我有業績。', points: 7878, isCorrect: true },
    ],
    explanation: {
      text: '身為穿著睡衣審預算、對鏡頭比著中指、說你們潛艇浮起來就有預算了，過往反對傅崐萁回黨，現在又哭倒在他懷中。不禁讓人覺得他只是在台上表演一個舔共立委的小丑。',
      reference: 'https://tw.news.yahoo.com/%E7%BD%B7%E5%85%8D%E5%BE%90%E5%B7%A7%E8%8A%AF%E9%A0%98%E9%8A%9C%E4%BA%BA%E6%98%AF%E8%AA%B0%EF%BC%9F%E7%BD%B7%E5%85%8D%E5%BE%90%E5%B7%A7%E8%8A%AF%E7%90%86%E7%94%B1%E7%82%BA%E4%BD%95%EF%BC%9F%E5%BE%90%E5%B7%A7%E8%8A%AF%E7%BD%B7%E5%85%8D%E9%80%B2%E5%BA%A6%E5%A6%82%E4%BD%95%EF%BC%9F-094800524.html'
    }
  },
  {
    id: 'HSUCHIAOHSIN7',
    text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
    image: getImagePath("/images/question/common_q_pic_04.webp"),
    options: [
      { id: 'HSUCHIAOHSIN7-1', text: '我不能提這種幫中國洗人口的提案。', points: 1, isCorrect: false },
      { id: 'HSUCHIAOHSIN7-2', text: '選票多才是真的好，以後感恩我們的中配會更多！', points: 6666, isCorrect: true },
      { id: 'HSUCHIAOHSIN7-3', text: '本來就已經有特殊待遇，沒必要再開綠燈了。', points: 2, isCorrect: false },
    ],
    explanation: {
      text: '國民黨立委提案修法擬將中國籍配偶取得身分證時間從6年縮短成4年，。現有政策為中配依親滿4年、連續長居2年即可申請身分證，不像外籍配偶須先放棄原有國籍才能取得我國身分證。還能讓親人來台享用健保，國民黨為何此時要縮短時程、啟人疑竇呢？',
      reference: 'https://news.pts.org.tw/article/733781'
    }
  },
  {
    id: 'HSUCHIAOHSIN8',
    text: '立法院部分黨團提出了65歲以上免健保費一案，在深入研究後，我決定',
    image: getImagePath("/images/question/common_q_pic_08.webp"),
    options: [
      { id: 'HSUCHIAOHSIN8-1', text: '研究什麼啦，按鈕在哪我就按哪。', points: 4277, isCorrect: true },
      { id: 'HSUCHIAOHSIN8-2', text: '反對，沒事找事造成世代對立做啥', points: 2, isCorrect: false },
      { id: 'HSUCHIAOHSIN8-3', text: '反對，很多65歲以上是房東收租大戶，這提案會被罵爆。', points: 0, isCorrect: false },
    ],
    explanation: {
      text: '藍白針對《老人福利法》修正草案提案，原本最寬鬆版本為65歲以上長者，綜合所得稅率未達20%免繳健保費，沒想到引發醫事團體反對，醫改團體更警告，全民健保是「社會保險」，而非「社會福利」，修法若通過恐怕衝擊健保永續。',
      reference: 'https://news.pts.org.tw/article/731315'
    }
  },
  {
    id: 'HSUCHIAOHSIN9',
    text: '明天要審《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
    image: getImagePath("/images/question/common_q_pic_01.webp"),
    options: [
      { id: 'HSUCHIAOHSIN9-1', text: '他們敢進來，我就燒立法院，看誰比較瘋。', points: 1969, isCorrect: true },
      { id: 'HSUCHIAOHSIN9-2', text: '先冷靜協商啦，不然又要演全武行，對票倉傷很大。', points: 2, isCorrect: false },
      { id: 'HSUCHIAOHSIN9-3', text: '找總召討論，大家帶枕頭去守夜兼打地鋪。', points: 128, isCorrect: false },
    ],
    explanation: {
      text: '2024/12/18多位民進黨立委摸黑闖入立法院站裡主席台要對《選罷法》、《憲訴法》與《財劃法》三讀作抗爭，立法院門口爆發推擠，國民黨立委鄭天財甚至口出狂言「你們全部都進去，我就把它燒掉」',
      reference: 'https://www.ftvnews.com.tw/news/detail/2024C19W0444'
    }
  },
  {
    id: 'HSUCHIAOHSIN10',
    text: '自稱金門坦克的玉珍姐說為了金門發財…發展，我們要修改離島條例18條。',
    image: getImagePath("/images/question/common_q_pic_05.webp"),
    options: [
      { id: 'HSUCHIAOHSIN10-1', text: '只要玉珍開口，票一定掉，絕對不要讓我連署這種案。', points: 10, isCorrect: false },
      { id: 'HSUCHIAOHSIN10-2', text: '姊說什麼就是金門福音，我負責幫她舉手。', points: 1766, isCorrect: true },
      { id: 'HSUCHIAOHSIN10-3', text: '拒絕，這提案像極了一帶一路，包裝再好也不能偷渡統戰資源。', points: 5, isCorrect: false },
    ],
    explanation: {
      text: '陳玉珍日前針對「離島建設條例」第18條之1的第6項提出修正草案，明定大陸地區人民、法人、團體、機構、資金、物品、商品、勞務及服務，進出離島自由貿易示範區，相關辦法由事業主管機關擬定；並於說明欄第7點述明，為便利「並適度鬆綁相關規定」。',
      reference: 'https://www.cna.com.tw/news/aipl/202504110281.aspx'
    }
  },
];
//賴士葆

const LaiShyhBaoQuestions: Question[] = [
  {
    id: 'LaiShyhBao1',
    text: '上班時間總召邀你一起去中國查訪',
    image: getImagePath("/images/question/common_q_pic_03.webp"),
    options: [
      { id: 'LaiShyhBao1-1', text: '嗯？我睡著了，沒有注意到，他們出發了嗎？', points: 1450, isCorrect: true },
      { id: 'LaiShyhBao1-2', text: '謝謝總召，但我還是想認真開會為民服務。', points: 0, isCorrect: false },
      { id: 'LaiShyhBao1-3', text: '我們是在立法院上班，立院總召不是統戰團行程總召好嗎？', points: 0, isCorrect: false },
    ],
    explanation: {
      text: '2024/4/26在立法院開議期間，傅崐萁率領羅明才、陳雪生、鄭天財、徐欣瑩、陳玉珍、鄭正鈐、王鴻薇、林沛祥、廖先翔、張智倫、邱鎮軍、游顥、盧縣一、黃仁、翁曉玲、林倩綺訪問中國，在人民大會堂新疆廳拜見全國政協主席王滬寧；王滬寧近日才宣布去年統戰工作做得很好，2025更要做好「四個凝聚」工作，切實發揮最廣泛愛國統一戰線組織的政治作用，不斷鞏固全國各族人民大團結，加強海內外中華兒女大團結。',
      reference: 'https://www.cna.com.tw/news/aipl/202404260199.aspx'
    }
  },
  {
    id: 'LaiShyhBao2',
    text: '黨團要修《立法院職權行使法》條例，你建議如何做？',
    image: getImagePath("/images/question/common_q_pic_02.webp"),
    options: [
      { id: 'LaiShyhBao2-1', text: '該開公聽會就開，該審慎就審慎，不然又被說是在搞立法獨裁。', points: 8, isCorrect: false },
      { id: 'LaiShyhBao2-2', text: '理性討論，找到對台灣最有利的平衡點。', points: 6, isCorrect: false },
      { id: 'LaiShyhBao2-3', text: '最後一秒上機密版本，一起舉手秒通過，爽。', points: 6287, isCorrect: true },
    ],
    explanation: {
      text: '2024/5/21在場外大批民眾要求退回委員會重新審查《立法院職權行使法》狀況下，在最後一刻，藍白兩黨提出沒有被實質討論過的最高機密版本，並以舉手表決方式強行通過。被憲法法庭認定有諸多違憲的法案，該法案賦予立法院調查權，有權利要公私部門甚至個人提供這各種資訊，且設定禁止反質詢規定，問為什麼或拒絕提供就是處罰，在缺乏第三方制衡下，形同一種強力的空白授權。',
      reference: 'https://watchout.tw/reports/KK9ll6K03prNMxllAru8'
    }
  },
  {
    id: 'LaiShyhBao3',
    text: '明天要審《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
    image: getImagePath("/images/question/common_q_pic_01.webp"),
    options: [
      { id: 'LaiShyhBao3-1', text: '找總召討論，大家帶枕頭去守夜兼打地鋪。', points: 6, isCorrect: false },
      { id: 'LaiShyhBao3-2', text: '他們敢進來，我就燒立法院，看誰比較瘋。', points: 1969, isCorrect: true },
      { id: 'LaiShyhBao3-3', text: '先冷靜協商啦，不然又要演全武行，對票倉傷很大。', points: 4, isCorrect: false },
    ],
    explanation: {
      text: '2024/12/18多位民進黨立委摸黑闖入立法院站裡主席台要對《選罷法》、《憲訴法》與《財劃法》三讀作抗爭，立法院門口爆發推擠，國民黨立委鄭天財甚至口出狂言「你們全部都進去，我就把它燒掉」',
      reference: 'https://www.ftvnews.com.tw/news/detail/2024C19W0444'
    }
  },
  {
    id: 'LaiShyhBao4',
    text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
    image: getImagePath("/images/question/common_q_pic_06.webp"),
    options: [
      { id: 'LaiShyhBao4-1', text: '不行啦，這根本戒嚴2.0，連我媽都看不下去。', points: 15, isCorrect: false },
      { id: 'LaiShyhBao4-2', text: '法案應該要公開討論，不是玩暗黑通關。', points: 8, isCorrect: false },
      { id: 'LaiShyhBao4-3', text: '鎖門是必要手段，太多雜音就會拖進度。', points: 1949, isCorrect: true },
    ],
    explanation: {
      text: '公視報導，立法院內政委員會2024/12/16排審《選罷法》修正草案，國民黨拂曉出擊佔領立院紅樓2樓，將一側的鐵門鎖上用長桌頂住；並用保鮮膜把內政委員會門口封住；另一側則是以人牆阻擋，只讓議事人員進入。9時一到，召委徐欣瑩立即宣布開會，念完相關條文宣布初審通過，全數條文保留協商。',
      reference: 'https://news.pts.org.tw/article/729015'
    }
  },
  {
    id: 'LaiShyhBao5',
    text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
    image: getImagePath("/images/question/common_q_pic_04.webp"),
    options: [
      { id: 'LaiShyhBao5-1', text: '選票多才是真的好，以後感恩我們的中配會更多！', points: 6666, isCorrect: true },
      { id: 'LaiShyhBao5-2', text: '本來就已經有特殊待遇，沒必要再開綠燈了。', points: 6, isCorrect: false },
      { id: 'LaiShyhBao5-3', text: '我不能提這種幫中國洗人口的提案。', points: 4, isCorrect: false },
    ],
    explanation: {
      text: '國民黨立委提案修法擬將中國籍配偶取得身分證時間從6年縮短成4年，。現有政策為中配依親滿4年、連續長居2年即可申請身分證，不像外籍配偶須先放棄原有國籍才能取得我國身分證。還能讓親人來台享用健保，國民黨為何此時要縮短時程、啟人疑竇呢？',
      reference: 'https://news.pts.org.tw/article/733781'
    }
  },
  {
    id: 'LaiShyhBao6',
    text: '立法院部分黨團提出了65歲以上免健保費一案，在深入研究後，我決定',
    image: getImagePath("/images/question/common_q_pic_08.webp"),
    options: [
      { id: 'LaiShyhBao6-1', text: '反對，很多65歲以上是房東收租大戶，這提案會被罵爆。', points: 10, isCorrect: false },
      { id: 'LaiShyhBao6-2', text: '研究什麼啦，按鈕在哪我就按哪。', points: 4277, isCorrect: true },
      { id: 'LaiShyhBao6-3', text: '反對，沒事找事造成世代對立做啥', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '藍白針對《老人福利法》修正草案提案，原本最寬鬆版本為65歲以上長者，綜合所得稅率未達20%免繳健保費，沒想到引發醫事團體反對，醫改團體更警告，全民健保是「社會保險」，而非「社會福利」，修法若通過恐怕衝擊健保永續。',
      reference: 'https://news.pts.org.tw/article/731315'
    }
  },
  {
    id: 'LaiShyhBao7',
    text: '台灣面對中共逐步的進逼，我應該怎麼做呢？',
    image: getImagePath("/images/question/LaiShyhBao_q_pic_01.webp"),
    options: [
      { id: 'LaiShyhBao7-1', text: '先要求國安單位端出計畫，不然我們只會在新聞裡喊緊張。', points: 15, isCorrect: false },
      { id: 'LaiShyhBao7-2', text: '先把國防預算砍爆，再拿來當政績說「刪除新式戰機採購特別預算總額100%」', points: 913, isCorrect: true },
      { id: 'LaiShyhBao7-3', text: '請國防部提合理裝備預算，我們要戰力也要嘎啦嘎啦。', points: 75, isCorrect: false },
    ],
    explanation: {
      text: '賴士葆在景美捷運站2號出口對面的義美樓上刊登大篇幅的廣告，得意洋洋的宣傳他刪掉F-16購買的預算。刪除新式戰機採購特別預算總額100%',
      reference: 'https://watchout.tw/reports/Ha31rPm5TEPAEp2Xaw7K'
    }
  },
  {
    id: 'LaiShyhBao8',
    text: '自稱金門坦克的玉珍姐說為了金門發財…發展，我們要修改離島條例18條。',
    image: getImagePath("/images/question/common_q_pic_05.webp"),
    options: [
      { id: 'LaiShyhBao8-1', text: '姊說什麼就是金門福音，我負責幫她舉手。', points: 1766, isCorrect: true },
      { id: 'LaiShyhBao8-2', text: '拒絕，這提案像極了一帶一路，包裝再好也不能偷渡統戰資源。', points: 5, isCorrect: false },
      { id: 'LaiShyhBao8-3', text: '只要玉珍開口，票一定掉，絕對不要讓我連署這種案。', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '陳玉珍日前針對「離島建設條例」第18條之1的第6項提出修正草案，明定大陸地區人民、法人、團體、機構、資金、物品、商品、勞務及服務，進出離島自由貿易示範區，相關辦法由事業主管機關擬定；並於說明欄第7點述明，為便利「並適度鬆綁相關規定」。',
      reference: 'https://www.cna.com.tw/news/aipl/202504110281.aspx'
    }
  },
  {
    id: 'LaiShyhBao9',
    text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
    image: getImagePath("/images/question/common_q_pic_07.webp"),
    options: [
      { id: 'LaiShyhBao9-1', text: '不怕刪預算，但連衛福部都刪到剩一塊錢，這不是亂搞是什麼？', points: 12, isCorrect: false },
      { id: 'LaiShyhBao9-2', text: '法案還改個沒完，怎麼讓我們正常表決？我要去抗議。', points: 6, isCorrect: false },
      { id: 'LaiShyhBao9-3', text: '人不用醒，手能舉就好，投完再說。', points: 3838, isCorrect: true },
    ],
    explanation: {
      text: '國民黨及民眾黨合力提出案海攻勢，出現許多理由、金額和項目都令外界匪夷所思的提案。在民意壓力下整合至 700 多案進入表決大戰並在藍白聯手優勢人數下通過。期間更出現邊表決邊改提案、沒看到修正文字就表決等荒腔走板的議事失序。',
      reference: 'https://watchout.tw/reports/tbHOpYA5buuRfEInq1Kh'
    }
  },
  {
    id: 'LaiShyhBao10',
    text: '面對國民黨爆出「幽靈連署」事件，你怎麼看？',
    image: getImagePath("/images/question/LaiShyhBao_q_pic_02.webp"),
    options: [
      { id: 'LaiShyhBao10-1', text: '誰那麼笨，抄名冊還被發現', points: 4925, isCorrect: false },
      { id: 'LaiShyhBao10-2', text: '譴責黨內，怎麼可以抄寫死者個資', points: 2, isCorrect: false },
      { id: 'LaiShyhBao10-3', text: '只是偽造文書而已，有這麼嚴重嗎', points: 3, isCorrect: true },
    ],
    explanation: {
      text: '國民黨青年軍近日涉入多起罷免幽靈連署案件遭檢調搜索偵訊，國民黨立委賴士葆聲援時喊話，「他們即便犯了錯，那最多就偽造文書啊，你有看過過去偽造文書這麼嚴重嗎？偽造文書判非常輕啊！」',
      reference: 'https://newtalk.tw/news/view/2025-04-17/965942'
    }
  },
];
//王鴻薇
const wanghungweiQuestions: Question[] = [
  {
    id: 'wanghungwei1',
    text: '上班時間總召邀你一起去中國查訪',
    image: getImagePath("/images/question/common_q_pic_03.webp"),
    options: [
      { id: 'wanghungwei1-1', text: '我們是在立法院上班，立院總召不是統戰團行程總召好嗎？', points: 0, isCorrect: false },
      { id: 'wanghungwei1-2', text: '總召叫我去哪我就去哪，不問、服從、不拖延！', points: 1450, isCorrect: true },
      { id: 'wanghungwei1-3', text: '謝謝總召，但我還是想認真開會為民服務。', points: 0, isCorrect: false },
    ],
    explanation: {
      text: '2024/4/26在立法院開議期間，傅崐萁率領羅明才、陳雪生、鄭天財、徐欣瑩、陳玉珍、鄭正鈐、王鴻薇、林沛祥、廖先翔、張智倫、邱鎮軍、游顥、盧縣一、黃仁、翁曉玲、林倩綺訪問中國，在人民大會堂新疆廳拜見全國政協主席王滬寧；王滬寧近日才宣布去年統戰工作做得很好，2025更要做好「四個凝聚」工作，切實發揮最廣泛愛國統一戰線組織的政治作用，不斷鞏固全國各族人民大團結，加強海內外中華兒女大團結。',
      reference: 'https://www.cna.com.tw/news/aipl/202404260199.aspx'
    }
  },
  {
    id: 'wanghungwei2',
    text: '為什麼大家覺得我舔共？',
    image: getImagePath("/images/question/wanghungwei_q_pic_02.webp"),
    options: [
      { id: 'wanghungwei2-1', text: '對啊，我就是覺得兩岸一家親不行嗎？', points: 8728, isCorrect: true },
      { id: 'wanghungwei2-2', text: '我要幫亞亞說話，保障她喊武統的言論自由！', points: 7, isCorrect: false },
      { id: 'wanghungwei2-3', text: '握過王滬寧的手啦，但那次只是禮貌！', points: 4, isCorrect: false },
    ],
    explanation: {
      text: '沃草報導，王鴻薇擔任臺北市議員期間，即多次參加中國央視政論節目、並用「臺灣領導人」取代「總統」稱呼，去（2024）年也加入中國國民黨黨團總召傅崐萁的「立委統戰團」，共同赴中拜見中共統戰頭子王滬寧，近期甚至公開替宣揚武統的中國配偶抱屈，聲稱是「言論自由」。',
      reference: 'https://watchout.tw/reports/7YwLlAYBFAOBKjeZR6Rn'
    }
  },
  {
    id: 'wanghungwei3',
    text: '黨團要修《立法院職權行使法》條例，你建議如何做？',
    image: getImagePath("/images/question/common_q_pic_02.webp"),
    options: [
      { id: 'wanghungwei3-1', text: '理性討論，找到對台灣最有利的平衡點。', points: 12, isCorrect: false },
      { id: 'wanghungwei3-2', text: '該開公聽會就開，該審慎就審慎，不然又被說是在搞立法獨裁。', points: 6, isCorrect: false },
      { id: 'wanghungwei3-3', text: '最後一秒上機密版本，一起舉手秒通過，爽。', points: 6287, isCorrect: true },
    ],
    explanation: {
      text: '2024/5/21在場外大批民眾要求退回委員會重新審查《立法院職權行使法》狀況下，在最後一刻，藍白兩黨提出沒有被實質討論過的最高機密版本，並以舉手表決方式強行通過。被憲法法庭認定有諸多違憲的法案，該法案賦予立法院調查權，有權利要公私部門甚至個人提供這各種資訊，且設定禁止反質詢規定，問為什麼或拒絕提供就是處罰，在缺乏第三方制衡下，形同一種強力的空白授權。',
      reference: 'https://watchout.tw/reports/KK9ll6K03prNMxllAru8'
    }
  },
  {
    id: 'wanghungwei4',
    text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
    image: getImagePath("/images/question/common_q_pic_04.webp"),
    options: [
      { id: 'wanghungwei4-1', text: '我不能提這種幫中國洗人口的提案。', points: 8, isCorrect: false },
      { id: 'wanghungwei4-2', text: '選票多才是真的好，以後感恩我們的中配會更多！', points: 6666, isCorrect: true },
      { id: 'wanghungwei4-3', text: '本來就已經有特殊待遇，沒必要再開綠燈了。', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '國民黨立委提案修法擬將中國籍配偶取得身分證時間從6年縮短成4年，。現有政策為中配依親滿4年、連續長居2年即可申請身分證，不像外籍配偶須先放棄原有國籍才能取得我國身分證。還能讓親人來台享用健保，國民黨為何此時要縮短時程、啟人疑竇呢？',
      reference: 'https://news.pts.org.tw/article/733781'
    }
  },
  {
    id: 'wanghungwei5',
    text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
    image: getImagePath("/images/question/common_q_pic_06.webp"),
    options: [
      { id: 'wanghungwei5-1', text: '不行啦，這根本戒嚴2.0，連我媽都看不下去。', points: 228, isCorrect: false },
      { id: 'wanghungwei5-2', text: '鎖門是必要手段，太多雜音就會拖進度。', points: 1949, isCorrect: true },
      { id: 'wanghungwei5-3', text: '法案應該要公開討論，不是玩暗黑通關。', points: 2, isCorrect: false },
    ],
    explanation: {
      text: '公視報導，立法院內政委員會2024/12/16排審《選罷法》修正草案，國民黨拂曉出擊佔領立院紅樓2樓，將一側的鐵門鎖上用長桌頂住；並用保鮮膜把內政委員會門口封住；另一側則是以人牆阻擋，只讓議事人員進入。9時一到，召委徐欣瑩立即宣布開會，念完相關條文宣布初審通過，全數條文保留協商。',
      reference: 'https://news.pts.org.tw/article/729015'
    }
  },
  {
    id: 'wanghungwei6',
    text: '明天要審《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
    image: getImagePath("/images/question/common_q_pic_01.webp"),
    options: [
      { id: 'wanghungwei6-1', text: '他們敢進來，我就燒立法院，看誰比較瘋。', points: 1969, isCorrect: true },
      { id: 'wanghungwei6-2', text: '先冷靜協商啦，不然又要演全武行，對票倉傷很大。', points: 8, isCorrect: false },
      { id: 'wanghungwei6-3', text: '找總召討論，大家帶枕頭去守夜兼打地鋪。', points: 5, isCorrect: false },
    ],
    explanation: {
      text: '2024/12/18多位民進黨立委摸黑闖入立法院站裡主席台要對《選罷法》、《憲訴法》與《財劃法》三讀作抗爭，立法院門口爆發推擠，國民黨立委鄭天財甚至口出狂言「你們全部都進去，我就把它燒掉」',
      reference: 'https://www.ftvnews.com.tw/news/detail/2024C19W0444'
    }
  },
  {
    id: 'wanghungwei7',
    text: '立法院部分黨團提出了65歲以上免健保費一案，在深入研究後，我決定',
    image: getImagePath("/images/question/common_q_pic_08.webp"),
    options: [
      { id: 'wanghungwei7-1', text: '反對，沒事找事造成世代對立做啥', points: 15, isCorrect: false },
      { id: 'wanghungwei7-2', text: '研究什麼啦，按鈕在哪我就按哪。', points: 4277, isCorrect: true },
      { id: 'wanghungwei7-3', text: '反對，很多65歲以上是房東收租大戶，這提案會被罵爆。', points: 4, isCorrect: false },
    ],
    explanation: {
      text: '藍白針對《老人福利法》修正草案提案，原本最寬鬆版本為65歲以上長者，綜合所得稅率未達20%免繳健保費，沒想到引發醫事團體反對，醫改團體更警告，全民健保是「社會保險」，而非「社會福利」，修法若通過恐怕衝擊健保永續。',
      reference: 'https://news.pts.org.tw/article/731315'
    }
  },
  {
    id: 'wanghungwei8',
    text: '我要砍掉2億元消防裝備預算，我該怎麼講？',
    image: getImagePath("/images/question/wanghungwei_q_pic_01.webp"),
    options: [
      { id: 'wanghungwei8-1', text: '最近犧牲很多，我們更要審慎檢討。', points: 1, isCorrect: false },
      { id: 'wanghungwei8-2', text: '該問的是：為什麼要買那麼多？你們要打仗？', points: 8888, isCorrect: true },
      { id: 'wanghungwei8-3', text: '我不是不給，是想讓他們裝備更精準啦。', points: 377, isCorrect: false },
    ],
    explanation: {
      text: '王鴻薇提案減列中央消防預算一億元，受輿論批評後說明，當初減列理由是懷疑該預算獨惠黑熊學院。但基層消防員仍不買單，明確指出王鴻薇最初減列理由是怕戰爭，現在又拿黑熊出來救援；內政部亦提出聲明，指該項預算無與黑熊學院合作。',
      reference: 'https://www.youtube.com/watch?v=uLewv-bPnsk'
    }
  },
  {
    id: 'wanghungwei9',
    text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
    image: getImagePath("/images/question/common_q_pic_07.webp"),
    options: [
      { id: 'wanghungwei9-1', text: '法案還改個沒完，怎麼讓我們正常表決？我要去抗議。', points: 12, isCorrect: false },
      { id: 'wanghungwei9-2', text: '不怕刪預算，但連衛福部都刪到剩一塊錢，這不是亂搞是什麼？', points: 8, isCorrect: false },
      { id: 'wanghungwei9-3', text: '人不用醒，手能舉就好，投完再說。', points: 3838, isCorrect: true },
    ],
    explanation: {
      text: '國民黨及民眾黨合力提出案海攻勢，出現許多理由、金額和項目都令外界匪夷所思的提案。在民意壓力下整合至 700 多案進入表決大戰並在藍白聯手優勢人數下通過。期間更出現邊表決邊改提案、沒看到修正文字就表決等荒腔走板的議事失序。',
      reference: 'https://watchout.tw/reports/tbHOpYA5buuRfEInq1Kh'
    }
  },
  {
    id: 'wanghungwei10',
    text: '自稱金門坦克的玉珍姐說為了金門發財…發展，我們要修改離島條例18條。',
    image: getImagePath("/images/question/common_q_pic_05.webp"),
    options: [
      { id: 'wanghungwei10-1', text: '只要玉珍開口，票一定掉，絕對不要讓我連署這種案。', points: 10, isCorrect: false },
      { id: 'wanghungwei10-2', text: '拒絕，這提案像極了一帶一路，包裝再好也不能偷渡統戰資源。', points: 7, isCorrect: false },
      { id: 'wanghungwei10-3', text: '姊說什麼就是金門福音，我負責幫她舉手。', points: 1766, isCorrect: true },
    ],
    explanation: {
      text: '陳玉珍日前針對「離島建設條例」第18條之1的第6項提出修正草案，明定大陸地區人民、法人、團體、機構、資金、物品、商品、勞務及服務，進出離島自由貿易示範區，相關辦法由事業主管機關擬定；並於說明欄第7點述明，為便利「並適度鬆綁相關規定」。',
      reference: 'https://www.cna.com.tw/news/aipl/202504110281.aspx'
    }
  },
];
//李彥秀
const LEEYEHSIUQuestions: Question[] = [
  {
    id: 'LEEYEHSIU1',
    text: '上班時間總召邀你一起去中國查訪',
    image: getImagePath("/images/question/common_q_pic_03.webp"),
    options: [
      { id: 'LEEYEHSIU1-1', text: '我們是在立法院上班，立院總召不是統戰團行程總召好嗎？', points: 10, isCorrect: false },
      { id: 'LEEYEHSIU1-2', text: '嗯？我睡著了，沒有注意到，他們出發了嗎？', points: 1450, isCorrect: true },
      { id: 'LEEYEHSIU1-3', text: '謝謝總召，但我還是想認真開會為民服務。', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '2024/4/26在立法院開議期間，傅崐萁率領羅明才、陳雪生、鄭天財、徐欣瑩、陳玉珍、鄭正鈐、王鴻薇、林沛祥、廖先翔、張智倫、邱鎮軍、游顥、盧縣一、黃仁、翁曉玲、林倩綺訪問中國，在人民大會堂新疆廳拜見全國政協主席王滬寧；王滬寧近日才宣布去年統戰工作做得很好，2025更要做好「四個凝聚」工作，切實發揮最廣泛愛國統一戰線組織的政治作用，不斷鞏固全國各族人民大團結，加強海內外中華兒女大團結。',
      reference: 'https://www.cna.com.tw/news/aipl/202404260199.aspx'
    }
  },
  {
    id: 'LEEYEHSIU2',
    text: '黨團要修《立法院職權行使法》條例，你建議如何做？',
    image: getImagePath("/images/question/common_q_pic_02.webp"),
    options: [
      { id: 'LEEYEHSIU2-1', text: '最後一秒上機密版本，一起舉手秒通過，爽。', points: 6287, isCorrect: true },
      { id: 'LEEYEHSIU2-2', text: '理性討論，找到對台灣最有利的平衡點。', points: 6, isCorrect: false },
      { id: 'LEEYEHSIU2-3', text: '該開公聽會就開，該審慎就審慎，不然又被說是在搞立法獨裁。', points: 4, isCorrect: false },
    ],
    explanation: {
      text: '2024/5/21在場外大批民眾要求退回委員會重新審查《立法院職權行使法》狀況下，在最後一刻，藍白兩黨提出沒有被實質討論過的最高機密版本，並以舉手表決方式強行通過。被憲法法庭認定有諸多違憲的法案，該法案賦予立法院調查權，有權利要公私部門甚至個人提供這各種資訊，且設定禁止反質詢規定，問為什麼或拒絕提供就是處罰，在缺乏第三方制衡下，形同一種強力的空白授權。',
      reference: 'https://watchout.tw/reports/KK9ll6K03prNMxllAru8'
    }
  },
  {
    id: 'LEEYEHSIU3',
    text: '明天要審《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
    image: getImagePath("/images/question/common_q_pic_01.webp"),
    options: [
      { id: 'LEEYEHSIU3-1', text: '他們敢進來，我就燒立法院，看誰比較瘋。', points: 1969, isCorrect: true },
      { id: 'LEEYEHSIU3-2', text: '找總召討論，大家帶枕頭去守夜兼打地鋪。', points: 8, isCorrect: false },
      { id: 'LEEYEHSIU3-3', text: '先冷靜協商啦，不然又要演全武行，對票倉傷很大。', points: 5, isCorrect: false },
    ],
    explanation: {
      text: '2024/12/18多位民進黨立委摸黑闖入立法院站裡主席台要對《選罷法》、《憲訴法》與《財劃法》三讀作抗爭，立法院門口爆發推擠，國民黨立委鄭天財甚至口出狂言「你們全部都進去，我就把它燒掉」',
      reference: 'https://www.ftvnews.com.tw/news/detail/2024C19W0444'
    }
  },
  {
    id: 'LEEYEHSIU4',
    text: '我在爾灣的房產被發現沒有申報，我應該怎麼回應呢？',
    image: getImagePath("/images/question/LEEYEHSIU_q_pic_01.webp"),
    options: [
      { id: 'LEEYEHSIU4-1', text: '誠信出了問題，我願請辭負責，不推不躲。', points: 10, isCorrect: false },
      { id: 'LEEYEHSIU4-2', text: '啊！那是我爸買的啦～畢業就回來當議員了，誰記得要申報啦，要罰錢就罰沒關係。', points: 4588, isCorrect: true },
      { id: 'LEEYEHSIU4-3', text: '乾脆捐出來，給台灣學子當留美基地，做點彌補。', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '李彥秀說，26年前，她剛剛離開學校踏入政壇(畢業就當選為市議員)，對於財產申報法令瞭解不清楚，疏失未申報1994年父親購買的美國加州爾灣房產，她深感歉意，也坦然面對行政裁罰。',
      reference: 'https://www.ftvnews.com.tw/news/detail/2025214W0513'
    }
  },
  {
    id: 'LEEYEHSIU5',
    text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
    image: getImagePath("/images/question/common_q_pic_06.webp"),
    options: [
      { id: 'LEEYEHSIU5-1', text: '鎖門是必要手段，太多雜音就會拖進度。', points: 1949, isCorrect: true },
      { id: 'LEEYEHSIU5-2', text: '法案應該要公開討論，不是玩暗黑通關。', points: 6, isCorrect: false },
      { id: 'LEEYEHSIU5-3', text: '不行啦，這根本戒嚴2.0，連我媽都看不下去。', points: 4, isCorrect: false },
    ],
    explanation: {
      text: '公視報導，立法院內政委員會2024/12/16排審《選罷法》修正草案，國民黨拂曉出擊佔領立院紅樓2樓，將一側的鐵門鎖上用長桌頂住；並用保鮮膜把內政委員會門口封住；另一側則是以人牆阻擋，只讓議事人員進入。9時一到，召委徐欣瑩立即宣布開會，念完相關條文宣布初審通過，全數條文保留協商。',
      reference: 'https://news.pts.org.tw/article/729015'
    }
  },
  {
    id: 'LEEYEHSIU6',
    text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
    image: getImagePath("/images/question/common_q_pic_07.webp"),
    options: [
      { id: 'LEEYEHSIU6-1', text: '不怕刪預算，但連衛福部都刪到剩一塊錢，這不是亂搞是什麼？', points: 10, isCorrect: false },
      { id: 'LEEYEHSIU6-2', text: '法案還改個沒完，怎麼讓我們正常表決？我要去抗議。', points: 5, isCorrect: false },
      { id: 'LEEYEHSIU6-3', text: '人不用醒，手能舉就好，投完再說。', points: 3838, isCorrect: true },
    ],
    explanation: {
      text: '國民黨及民眾黨合力提出案海攻勢，出現許多理由、金額和項目都令外界匪夷所思的提案。在民意壓力下整合至 700 多案進入表決大戰並在藍白聯手優勢人數下通過。期間更出現邊表決邊改提案、沒看到修正文字就表決等荒腔走板的議事失序。',
      reference: 'https://watchout.tw/reports/tbHOpYA5buuRfEInq1Kh'
    }
  },
  {
    id: 'LEEYEHSIU7',
    text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
    image: getImagePath("/images/question/common_q_pic_04.webp"),
    options: [
      { id: 'LEEYEHSIU7-1', text: '選票多才是真的好，以後感恩我們的中配會更多！', points: 6666, isCorrect: true },
      { id: 'LEEYEHSIU7-2', text: '本來就已經有特殊待遇，沒必要再開綠燈了。', points: 4, isCorrect: false },
      { id: 'LEEYEHSIU7-3', text: '我不能提這種幫中國洗人口的提案。', points: 2, isCorrect: false },
    ],
    explanation: {
      text: '國民黨立委提案修法擬將中國籍配偶取得身分證時間從6年縮短成4年，。現有政策為中配依親滿4年、連續長居2年即可申請身分證，不像外籍配偶須先放棄原有國籍才能取得我國身分證。還能讓親人來台享用健保，國民黨為何此時要縮短時程、啟人疑竇呢？',
      reference: 'https://news.pts.org.tw/article/733781'
    }
  },
  {
    id: 'LEEYEHSIU8',
    text: '立法院部分黨團提出了65歲以上免健保費一案，在深入研究後，我決定',
    image: getImagePath("/images/question/common_q_pic_08.webp"),
    options: [
      { id: 'LEEYEHSIU8-1', text: '反對，很多65歲以上是房東收租大戶，這提案會被罵爆。', points: 12, isCorrect: false },
      { id: 'LEEYEHSIU8-2', text: '研究什麼啦，按鈕在哪我就按哪。', points: 4277, isCorrect: true },
      { id: 'LEEYEHSIU8-3', text: '反對，沒事找事造成世代對立做啥', points: 4, isCorrect: false },
    ],
    explanation: {
      text: '藍白針對《老人福利法》修正草案提案，原本最寬鬆版本為65歲以上長者，綜合所得稅率未達20%免繳健保費，沒想到引發醫事團體反對，醫改團體更警告，全民健保是「社會保險」，而非「社會福利」，修法若通過恐怕衝擊健保永續。',
      reference: 'https://news.pts.org.tw/article/731315'
    }
  },
  {
    id: 'LEEYEHSIU9',
    text: '身為國民黨副秘書長，凍結潛艦與國防預算，怎麼回應質疑？',
    image: getImagePath("/images/question/LEEYEHSIU_q_pic_02.webp"),
    options: [
      { id: 'LEEYEHSIU9-1', text: '凍結而已嘛～等報告一寫，就開水解凍囉！', points: 12393, isCorrect: true },
      { id: 'LEEYEHSIU9-2', text: '我本來就想全砍，這樣還留點面子啦。', points: 427, isCorrect: false },
      { id: 'LEEYEHSIU9-3', text: '我愛買美國房子，不等於我要買他們武器。', points: 74, isCorrect: false },
    ],
    explanation: {
      text: '2025立法院三讀中央政府總預算案，凍、刪部分國防預算引發外媒關注。國民黨副秘書長、立委李彥秀表示，凍結不是刪減，只要國防部提出報告與計畫，就可以解凍使用。',
      reference: 'https://www.worldjournal.com/wj/story/121220/8516907'
    }
  },
  {
    id: 'LEEYEHSIU10',
    text: '自稱金門坦克的玉珍姐說為了金門發財…發展，我們要修改離島條例18條。',
    image: getImagePath("/images/question/common_q_pic_05.webp"),
    options: [
      { id: 'LEEYEHSIU10-1', text: '姊說什麼就是金門福音，我負責幫她舉手。', points: 1766, isCorrect: true },
      { id: 'LEEYEHSIU10-2', text: '只要玉珍開口，票一定掉，絕對不要讓我連署這種案。', points: 5, isCorrect: false },
      { id: 'LEEYEHSIU10-3', text: '拒絕，這提案像極了一帶一路，包裝再好也不能偷渡統戰資源。', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '陳玉珍日前針對「離島建設條例」第18條之1的第6項提出修正草案，明定大陸地區人民、法人、團體、機構、資金、物品、商品、勞務及服務，進出離島自由貿易示範區，相關辦法由事業主管機關擬定；並於說明欄第7點述明，為便利「並適度鬆綁相關規定」。',
      reference: 'https://www.cna.com.tw/news/aipl/202504110281.aspx'
    }
  },
];
//葉元之YEHYUANCHIH
const YEHYUANCHIHQuestions: Question[] = [
  {
    id: 'YEHYUANCHIH1',
    text: '上班時間總召邀你一起去中國查訪',
    image: getImagePath("/images/question/common_q_pic_03.webp"),
    options: [
      { id: 'YEHYUANCHIH1-1', text: '嗯？我睡著了，沒有注意到，他們出發了嗎？', points: 1450, isCorrect: true },
      { id: 'YEHYUANCHIH1-2', text: '謝謝總召，但我還是想認真開會為民服務。', points: 5, isCorrect: false },
      { id: 'YEHYUANCHIH1-3', text: '我們是在立法院上班，立院總召不是統戰團行程總召好嗎？', points: 100, isCorrect: false },
    ],
    explanation: {
      text: '2024/4/26在立法院開議期間，傅崐萁率領羅明才、陳雪生、鄭天財、徐欣瑩、陳玉珍、鄭正鈐、王鴻薇、林沛祥、廖先翔、張智倫、邱鎮軍、游顥、盧縣一、黃仁、翁曉玲、林倩綺訪問中國，在人民大會堂新疆廳拜見全國政協主席王滬寧；王滬寧近日才宣布去年統戰工作做得很好，2025更要做好「四個凝聚」工作，切實發揮最廣泛愛國統一戰線組織的政治作用，不斷鞏固全國各族人民大團結，加強海內外中華兒女大團結。',
      reference: 'https://www.cna.com.tw/news/aipl/202404260199.aspx'
    }
  },
  {
    id: 'YEHYUANCHIH2',
    text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
    image: getImagePath("/images/question/common_q_pic_06.webp"),
    options: [
      { id: 'YEHYUANCHIH2-1', text: '法案應該要公開討論，不是玩暗黑通關。', points: 10, isCorrect: false },
      { id: 'YEHYUANCHIH2-2', text: '鎖門是必要手段，太多雜音就會拖進度。', points: 1949, isCorrect: true },
      { id: 'YEHYUANCHIH2-3', text: '不行啦，這根本戒嚴2.0，連我媽都看不下去。', points: 4, isCorrect: false },
    ],
    explanation: {
      text: '公視報導，立法院內政委員會2024/12/16排審《選罷法》修正草案，國民黨拂曉出擊佔領立院紅樓2樓，將一側的鐵門鎖上用長桌頂住；並用保鮮膜把內政委員會門口封住；另一側則是以人牆阻擋，只讓議事人員進入。9時一到，召委徐欣瑩立即宣布開會，念完相關條文宣布初審通過，全數條文保留協商。',
      reference: 'https://news.pts.org.tw/article/729015'
    }
  },
  {
    id: 'YEHYUANCHIH3',
    text: '明天要審《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
    image: getImagePath("/images/question/common_q_pic_01.webp"),
    options: [
      { id: 'YEHYUANCHIH3-1', text: '他們敢進來，我就燒立法院，看誰比較瘋。', points: 1969, isCorrect: true },
      { id: 'YEHYUANCHIH3-2', text: '找總召討論，大家帶枕頭去守夜兼打地鋪。', points: 6, isCorrect: false },
      { id: 'YEHYUANCHIH3-3', text: '先冷靜協商啦，不然又要演全武行，對票倉傷很大。', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '2024/12/18多位民進黨立委摸黑闖入立法院站裡主席台要對《選罷法》、《憲訴法》與《財劃法》三讀作抗爭，立法院門口爆發推擠，國民黨立委鄭天財甚至口出狂言「你們全部都進去，我就把它燒掉」',
      reference: 'https://www.ftvnews.com.tw/news/detail/2024C19W0444'
    }
  },
  {
    id: 'YEHYUANCHIH4',
    text: '自稱金門坦克的玉珍姐說為了金門發財…發展，我們要修改離島條例18條。',
    image: getImagePath("/images/question/common_q_pic_05.webp"),
    options: [
      { id: 'YEHYUANCHIH4-1', text: '拒絕，這提案像極了一帶一路，包裝再好也不能偷渡統戰資源。', points: 8, isCorrect: false },
      { id: 'YEHYUANCHIH4-2', text: '姊說什麼就是金門福音，我負責幫她舉手。', points: 1766, isCorrect: true },
      { id: 'YEHYUANCHIH4-3', text: '只要玉珍開口，票一定掉，絕對不要讓我連署這種案。', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '陳玉珍日前針對「離島建設條例」第18條之1的第6項提出修正草案，明定大陸地區人民、法人、團體、機構、資金、物品、商品、勞務及服務，進出離島自由貿易示範區，相關辦法由事業主管機關擬定；並於說明欄第7點述明，為便利「並適度鬆綁相關規定」。',
      reference: 'https://www.cna.com.tw/news/aipl/202504110281.aspx'
    }
  },
  {
    id: 'YEHYUANCHIH5',
    text: '助理說昨天身體不適請假看醫生，今天還想請假，你會？',
    image: getImagePath("/images/question/YEHYUANCHIH_q_pic_02.webp"),
    options: [
      { id: 'YEHYUANCHIH5-1', text: '先傳個Line：保重身體，等你回來一起作戰。', points: 10, isCorrect: false },
      { id: 'YEHYUANCHIH5-2', text: '身體是你的，行程是大家的，交接一下再睡。', points: 6, isCorrect: false },
      { id: 'YEHYUANCHIH5-3', text: '今天不來？剛好，我正想換個人試試看。', points: 657, isCorrect: true },
    ],
    explanation: {
      text: '媒體人吳崑玉爆料，日前至葉元之前助理的靈堂時，偶遇友人並得知F助理疑似在工作上被不尊重對待，今年一月因身體不適向辦公室請假就醫，第二天想請假看病，但葉元之以會期末最忙為由拒絕，更嗆聲「你今天不來就不用來了」；F姓助理遭到辭退，並被踢出所有群組。家屬日前告別式會場外擺放寫著「汪喵都歡迎、葉元之莫進、離塵遠遊去、慣老闆俱燼」的看板，暗諷意味濃厚。',
      reference: 'https://news.ltn.com.tw/news/politics/breakingnews/4983857'
    }
  },
  {
    id: 'YEHYUANCHIH6',
    text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
    image: getImagePath("/images/question/common_q_pic_04.webp"),
    options: [
      { id: 'YEHYUANCHIH6-1', text: '我不能提這種幫中國洗人口的提案。', points: 12, isCorrect: false },
      { id: 'YEHYUANCHIH6-2', text: '本來就已經有特殊待遇，沒必要再開綠燈了。', points: 8, isCorrect: false },
      { id: 'YEHYUANCHIH6-3', text: '選票多才是真的好，以後感恩我們的中配會更多！', points: 6666, isCorrect: true },
    ],
    explanation: {
      text: '國民黨立委提案修法擬將中國籍配偶取得身分證時間從6年縮短成4年，。現有政策為中配依親滿4年、連續長居2年即可申請身分證，不像外籍配偶須先放棄原有國籍才能取得我國身分證。還能讓親人來台享用健保，國民黨為何此時要縮短時程、啟人疑竇呢？',
      reference: 'https://news.pts.org.tw/article/733781'
    }
  },
  {
    id: 'YEHYUANCHIH7',
    text: '立法院部分黨團提出了65歲以上免健保費一案，在深入研究後，我決定',
    image: getImagePath("/images/question/common_q_pic_08.webp"),
    options: [
      { id: 'YEHYUANCHIH7-1', text: '研究什麼啦，按鈕在哪我就按哪。', points: 4277, isCorrect: true },
      { id: 'YEHYUANCHIH7-2', text: '反對，沒事找事造成世代對立做啥', points: 7, isCorrect: false },
      { id: 'YEHYUANCHIH7-3', text: '反對，很多65歲以上是房東收租大戶，這提案會被罵爆。', points: 4, isCorrect: false },
    ],
    explanation: {
      text: '藍白針對《老人福利法》修正草案提案，原本最寬鬆版本為65歲以上長者，綜合所得稅率未達20%免繳健保費，沒想到引發醫事團體反對，醫改團體更警告，全民健保是「社會保險」，而非「社會福利」，修法若通過恐怕衝擊健保永續。',
      reference: 'https://news.pts.org.tw/article/731315'
    }
  },
  {
    id: 'YEHYUANCHIH8',
    text: '黨團要修《立法院職權行使法》條例，你建議如何做？',
    image: getImagePath("/images/question/common_q_pic_02.webp"),
    options: [
      { id: 'YEHYUANCHIH8-1', text: '最後一秒上機密版本，一起舉手秒通過，爽。', points: 6287, isCorrect: true },
      { id: 'YEHYUANCHIH8-2', text: '理性討論，找到對台灣最有利的平衡點。', points: 6, isCorrect: false },
      { id: 'YEHYUANCHIH8-3', text: '該開公聽會就開，該審慎就審慎，不然又被說是在搞立法獨裁。', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '2024/5/21在場外大批民眾要求退回委員會重新審查《立法院職權行使法》狀況下，在最後一刻，藍白兩黨提出沒有被實質討論過的最高機密版本，並以舉手表決方式強行通過。被憲法法庭認定有諸多違憲的法案，該法案賦予立法院調查權，有權利要公私部門甚至個人提供這各種資訊，且設定禁止反質詢規定，問為什麼或拒絕提供就是處罰，在缺乏第三方制衡下，形同一種強力的空白授權。',
      reference: 'https://watchout.tw/reports/KK9ll6K03prNMxllAru8'
    }
  },
  {
    id: 'YEHYUANCHIH9',
    text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
    image: getImagePath("/images/question/common_q_pic_07.webp"),
    options: [
      { id: 'YEHYUANCHIH9-1', text: '不怕刪預算，但連衛福部都刪到剩一塊錢，這不是亂搞是什麼？', points: 12, isCorrect: false },
      { id: 'YEHYUANCHIH9-2', text: '法案還改個沒完，怎麼讓我們正常表決？我要去抗議。', points: 8, isCorrect: false },
      { id: 'YEHYUANCHIH9-3', text: '人不用醒，手能舉就好，投完再說。', points: 3838, isCorrect: true },
    ],
    explanation: {
      text: '國民黨及民眾黨合力提出案海攻勢，出現許多理由、金額和項目都令外界匪夷所思的提案。在民意壓力下整合至 700 多案進入表決大戰並在藍白聯手優勢人數下通過。期間更出現邊表決邊改提案、沒看到修正文字就表決等荒腔走板的議事失序。',
      reference: 'https://watchout.tw/reports/tbHOpYA5buuRfEInq1Kh'
    }
  },
  {
    id: 'YEHYUANCHIH10',
    text: '現在立法院的預算審查進入國防外交，主席一喊「國防機密預算審議」，你會？',
    image: getImagePath("/images/question/YEHYUANCHIH_q_pic_01.webp"),
    options: [
      { id: 'YEHYUANCHIH10-1', text: '當然謹慎啊，萬一講錯話，飛彈就飛過來了。', points: 10, isCorrect: false },
      { id: 'YEHYUANCHIH10-2', text: '快衝主席台，領資料不能輸！政治生涯靠這一包了。', points: 7, isCorrect: false },
      { id: 'YEHYUANCHIH10-3', text: '立刻開直播：「大家看，這就是他們說的秘密～」', points: 3377, isCorrect: true },
    ],
    explanation: {
      text: '葉元之竟在審查114年國防機密預算期間開直播，直到讀完條例、要進行記名表決時，立法院副院長江啟臣突然問道：「手機有沒有沒收？」他才連忙切掉畫面，讓民進黨團總召柯建銘傻眼痛批其違反刑法及國安法，「關定了！」事後，葉元之居然還在節目上公開承認，自己根本沒看機密預算提案內容就直接表決，甚至脫口：「也不是只有我」，令人髮指。',
      reference: 'https://tw.nextapple.com/politics/20250123/66B7585ABA8D3718BFEAB7C120815883'
    }
  },
];
//洪孟楷 HungMongKai
const HungMongKaiQuestions: Question[] = [
  {
    id: 'HungMongKai1',
    text: '壯促法推動被北檢調查圖利疑雲，你怎麼說？',
    image: getImagePath("/images/question/HungMongKai_q_pic_01.webp"),
    options: [
      { id: 'HungMongKai1-1', text: '又來了啦，這是綠營最愛玩的「人格毀滅遊戲」', points: 16686, isCorrect: true },
      { id: 'HungMongKai1-2', text: '先靜觀其變，反正不是第一個案子。', points: 5, isCorrect: false },
      { id: 'HungMongKai1-3', text: '啊？吳春城那天講話我其實沒聽懂啦⋯⋯', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '洪孟楷是『壯世代專法』的國民黨主連署和提案人。初審的時候（2024/10/24），蘇永富處長（行政院內政衛福勞動處）一直強調『壯世代有超過13%的失能者』，所以真的不能訂一個『壯世代專法』就把 55歲以上的人都劃進來。洪孟楷問說，『處長，你有沒有看過，有媒體報導上街頭遊行，51歲的老翁也站出來了！』洪孟楷覺得這樣的新聞報導『怪怪的』，他覺得如果體態保持良好、身體健康、肌力夠，連71歲的人都不一定可以稱老翁，所以他要行政院提『壯世代專法』的版本。」',
      reference: 'https://news.ltn.com.tw/news/politics/breakingnews/4948304'
    }
  },
  {
    id: 'HungMongKai2',
    text: '上班時間總召邀你一起去中國查訪',
    image: getImagePath("/images/question/common_q_pic_03.webp"),
    options: [
      { id: 'HungMongKai2-1', text: '嗯？我睡著了，沒有注意到，他們出發了嗎？', points: 1450, isCorrect: true },
      { id: 'HungMongKai2-2', text: '謝謝總召，但我還是想認真開會為民服務。', points: 6, isCorrect: false },
      { id: 'HungMongKai2-3', text: '我們是在立法院上班，立院總召不是統戰團行程總召好嗎？', points: 4, isCorrect: false },
    ],
    explanation: {
      text: '2024/4/26在立法院開議期間，傅崐萁率領羅明才、陳雪生、鄭天財、徐欣瑩、陳玉珍、鄭正鈐、王鴻薇、林沛祥、廖先翔、張智倫、邱鎮軍、游顥、盧縣一、黃仁、翁曉玲、林倩綺訪問中國，在人民大會堂新疆廳拜見全國政協主席王滬寧；王滬寧近日才宣布去年統戰工作做得很好，2025更要做好「四個凝聚」工作，切實發揮最廣泛愛國統一戰線組織的政治作用，不斷鞏固全國各族人民大團結，加強海內外中華兒女大團結。',
      reference: 'https://www.cna.com.tw/news/aipl/202404260199.aspx'
    }
  },
  {
    id: 'HungMongKai3',
    text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
    image: getImagePath("/images/question/common_q_pic_04.webp"),
    options: [
      { id: 'HungMongKai3-1', text: '本來就已經有特殊待遇，沒必要再開綠燈了。', points: 10, isCorrect: false },
      { id: 'HungMongKai3-2', text: '我不能提這種幫中國洗人口的提案。', points: 5, isCorrect: false },
      { id: 'HungMongKai3-3', text: '選票多才是真的好，以後感恩我們的中配會更多！', points: 6666, isCorrect: true },
    ],
    explanation: {
      text: '國民黨立委提案修法擬將中國籍配偶取得身分證時間從6年縮短成4年，。現有政策為中配依親滿4年、連續長居2年即可申請身分證，不像外籍配偶須先放棄原有國籍才能取得我國身分證。還能讓親人來台享用健保，國民黨為何此時要縮短時程、啟人疑竇呢？',
      reference: 'https://news.pts.org.tw/article/733781'
    }
  },
  {
    id: 'HungMongKai4',
    text: '立法院部分黨團提出了65歲以上免健保費一案，在深入研究後，我決定',
    image: getImagePath("/images/question/common_q_pic_08.webp"),
    options: [
      { id: 'HungMongKai4-1', text: '研究什麼啦，按鈕在哪我就按哪。', points: 4277, isCorrect: true },
      { id: 'HungMongKai4-2', text: '反對，很多65歲以上是房東收租大戶，這提案會被罵爆。', points: 8, isCorrect: false },
      { id: 'HungMongKai4-3', text: '反對，沒事找事造成世代對立做啥', points: 5, isCorrect: false },
    ],
    explanation: {
      text: '藍白針對《老人福利法》修正草案提案，原本最寬鬆版本為65歲以上長者，綜合所得稅率未達20%免繳健保費，沒想到引發醫事團體反對，醫改團體更警告，全民健保是「社會保險」，而非「社會福利」，修法若通過恐怕衝擊健保永續。',
      reference: 'https://news.pts.org.tw/article/731315'
    }
  },
  {
    id: 'HungMongKai5',
    text: '黨團要修《立法院職權行使法》條例，你建議如何做？',
    image: getImagePath("/images/question/common_q_pic_02.webp"),
    options: [
      { id: 'HungMongKai5-1', text: '該開公聽會就開，該審慎就審慎，不然又被說是在搞立法獨裁。', points: 12, isCorrect: false },
      { id: 'HungMongKai5-2', text: '最後一秒上機密版本，一起舉手秒通過，爽。', points: 6287, isCorrect: true },
      { id: 'HungMongKai5-3', text: '理性討論，找到對台灣最有利的平衡點。', points: 4, isCorrect: false },
    ],
    explanation: {
      text: '2024/5/21在場外大批民眾要求退回委員會重新審查《立法院職權行使法》狀況下，在最後一刻，藍白兩黨提出沒有被實質討論過的最高機密版本，並以舉手表決方式強行通過。被憲法法庭認定有諸多違憲的法案，該法案賦予立法院調查權，有權利要公私部門甚至個人提供這各種資訊，且設定禁止反質詢規定，問為什麼或拒絕提供就是處罰，在缺乏第三方制衡下，形同一種強力的空白授權。',
      reference: 'https://watchout.tw/reports/KK9ll6K03prNMxllAru8'
    }
  },
  {
    id: 'HungMongKai6',
    text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
    image: getImagePath("/images/question/common_q_pic_06.webp"),
    options: [
      { id: 'HungMongKai6-1', text: '法案應該要公開討論，不是玩暗黑通關。', points: 10, isCorrect: false },
      { id: 'HungMongKai6-2', text: '鎖門是必要手段，太多雜音就會拖進度。', points: 1949, isCorrect: true },
      { id: 'HungMongKai6-3', text: '不行啦，這根本戒嚴2.0，連我媽都看不下去。', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '公視報導，立法院內政委員會2024/12/16排審《選罷法》修正草案，國民黨拂曉出擊佔領立院紅樓2樓，將一側的鐵門鎖上用長桌頂住；並用保鮮膜把內政委員會門口封住；另一側則是以人牆阻擋，只讓議事人員進入。9時一到，召委徐欣瑩立即宣布開會，念完相關條文宣布初審通過，全數條文保留協商。',
      reference: 'https://news.pts.org.tw/article/729015'
    }
  },
  {
    id: 'HungMongKai7',
    text: '跟主席朱立倫掃街反罷免，民眾會怎樣？',
    image: getImagePath("/images/question/HungMongKai_q_pic_02.webp"),
    options: [
      { id: 'HungMongKai7-1', text: '有些會嗆，但還是有人搶著跟我自拍啦～', points: 15, isCorrect: false },
      { id: 'HungMongKai7-2', text: '我耶！這區我得票最高欸，會熱烈歡迎啦！', points: 7, isCorrect: false },
      { id: 'HungMongKai7-3', text: '嗚嗚，有人跑去跟主席抱怨我失聯已久⋯⋯', points: 10000, isCorrect: true },
    ],
    explanation: {
      text: '當朱立倫和洪孟楷沿著市場和攤販打招呼握手，來到其中一個攤位時，一名女子在朱立倫耳邊說「我告訴你吼！」朱立倫側身準備聆聽女子想說什麼，結果女子竟是來告狀，稱洪孟楷只有要選票時才會到我們林口，「然後從來就沒有來過」。',
      reference: 'https://www.youtube.com/watch?v=8ZacalwrDKk'
    }
  },
  {
    id: 'HungMongKai8',
    text: '明天要審《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
    image: getImagePath("/images/question/common_q_pic_01.webp"),
    options: [
      { id: 'HungMongKai8-1', text: '先冷靜協商啦，不然又要演全武行，對票倉傷很大。', points: 10, isCorrect: false },
      { id: 'HungMongKai8-2', text: '找總召討論，大家帶枕頭去守夜兼打地鋪。', points: 5, isCorrect: false },
      { id: 'HungMongKai8-3', text: '他們敢進來，我就燒立法院，看誰比較瘋。', points: 1969, isCorrect: true },
    ],
    explanation: {
      text: '2024/12/18多位民進黨立委摸黑闖入立法院站裡主席台要對《選罷法》、《憲訴法》與《財劃法》三讀作抗爭，立法院門口爆發推擠，國民黨立委鄭天財甚至口出狂言「你們全部都進去，我就把它燒掉」',
      reference: 'https://www.ftvnews.com.tw/news/detail/2024C19W0444'
    }
  },
  {
    id: 'HungMongKai9',
    text: '自稱金門坦克的玉珍姐說為了金門發財…發展，我們要修改離島條例18條。',
    image: getImagePath("/images/question/common_q_pic_05.webp"),
    options: [
      { id: 'HungMongKai9-1', text: '只要玉珍開口，票一定掉，絕對不要讓我連署這種案。', points: 12, isCorrect: false },
      { id: 'HungMongKai9-2', text: '拒絕，這提案像極了一帶一路，包裝再好也不能偷渡統戰資源。', points: 6, isCorrect: false },
      { id: 'HungMongKai9-3', text: '姊說什麼就是金門福音，我負責幫她舉手。', points: 1766, isCorrect: true },
    ],
    explanation: {
      text: '陳玉珍日前針對「離島建設條例」第18條之1的第6項提出修正草案，明定大陸地區人民、法人、團體、機構、資金、物品、商品、勞務及服務，進出離島自由貿易示範區，相關辦法由事業主管機關擬定；並於說明欄第7點述明，為便利「並適度鬆綁相關規定」。',
      reference: 'https://www.cna.com.tw/news/aipl/202504110281.aspx'
    }
  },
  {
    id: 'HungMongKai10',
    text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
    image: getImagePath("/images/question/common_q_pic_07.webp"),
    options: [
      { id: 'HungMongKai10-1', text: '人不用醒，手能舉就好，投完再說。', points: 3838, isCorrect: true },
      { id: 'HungMongKai10-2', text: '法案還改個沒完，怎麼讓我們正常表決？我要去抗議。', points: 5, isCorrect: false },
      { id: 'HungMongKai10-3', text: '不怕刪預算，但連衛福部都刪到剩一塊錢，這不是亂搞是什麼？', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '國民黨及民眾黨合力提出案海攻勢，出現許多理由、金額和項目都令外界匪夷所思的提案。在民意壓力下整合至 700 多案進入表決大戰並在藍白聯手優勢人數下通過。期間更出現邊表決邊改提案、沒看到修正文字就表決等荒腔走板的議事失序。',
      reference: 'https://watchout.tw/reports/tbHOpYA5buuRfEInq1Kh'
    }
  },
];
//羅明才 LoMingTsai
const LoMingTsaiQuestions: Question[] = [
  {
    id: 'LoMingTsai1',
    text: '上班時間總召邀你一起去中國查訪',
    image: getImagePath("/images/question/common_q_pic_03.webp"),
    options: [
      { id: 'LoMingTsai1-1', text: '總召叫我去哪我就去哪，不問、服從、不拖延！', points: 1450, isCorrect: true },
      { id: 'LoMingTsai1-2', text: '謝謝總召，但我還是想認真開會為民服務。', points: 5, isCorrect: false },
      { id: 'LoMingTsai1-3', text: '我們是在立法院上班，立院總召不是統戰團行程總召好嗎？', points: 100, isCorrect: false },
    ],
    explanation: {
      text: '國民黨及民眾黨合力提出案海攻勢，出現許多理由、金額和項目都令外界匪夷所思的提案。在民意壓力下整合至 700 多案進入表決大戰並在藍白聯手優勢人數下通過。期間更出現邊表決邊改提案、沒看到修正文字就表決等荒腔走板的議事失序。',
      reference: 'https://www.cna.com.tw/news/aipl/202404260199.aspx'
    }
  },
  {
    id: 'LoMingTsai2',
    text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
    image: getImagePath("/images/question/common_q_pic_04.webp"),
    options: [
      { id: 'LoMingTsai2-1', text: '本來就已經有特殊待遇，沒必要再開綠燈了。', points: 10, isCorrect: false },
      { id: 'LoMingTsai2-2', text: '選票多才是真的好，以後感恩我們的中配會更多！', points: 6666, isCorrect: true },
      { id: 'LoMingTsai2-3', text: '我不能提這種幫中國洗人口的提案。', points: 4, isCorrect: false },
    ],
    explanation: {
      text: '國民黨立委提案修法擬將中國籍配偶取得身分證時間從6年縮短成4年，。現有政策為中配依親滿4年、連續長居2年即可申請身分證，不像外籍配偶須先放棄原有國籍才能取得我國身分證。還能讓親人來台享用健保，國民黨為何此時要縮短時程、啟人疑竇呢？',
      reference: 'https://news.pts.org.tw/article/733781'
    }
  },
  {
    id: 'LoMingTsai3',
    text: '立法院部分黨團提出了65歲以上免健保費一案，在深入研究後，我決定',
    image: getImagePath("/images/question/common_q_pic_08.webp"),
    options: [
      { id: 'LoMingTsai3-1', text: '反對，沒事找事造成世代對立做啥', points: 12, isCorrect: true },
      { id: 'LoMingTsai3-2', text: '反對，很多65歲以上是房東收租大戶，這提案會被罵爆。', points: 6, isCorrect: false },
      { id: 'LoMingTsai3-3', text: '研究什麼啦，按鈕在哪我就按哪。', points: 4277, isCorrect: true },
    ],
    explanation: {
      text: '藍白針對《老人福利法》修正草案提案，原本最寬鬆版本為65歲以上長者，綜合所得稅率未達20%免繳健保費，沒想到引發醫事團體反對，醫改團體更警告，全民健保是「社會保險」，而非「社會福利」，修法若通過恐怕衝擊健保永續。',
      reference: 'https://news.pts.org.tw/article/731315'
    }
  },
  {
    id: 'LoMingTsai4',
    text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
    image: getImagePath("/images/question/common_q_pic_06.webp"),
    options: [
      { id: 'LoMingTsai4-1', text: '不行啦，這根本戒嚴2.0，連我媽都看不下去。', points: 28, isCorrect: false },
      { id: 'LoMingTsai4-2', text: '鎖門是必要手段，太多雜音就會拖進度。', points: 1949, isCorrect: true },
      { id: 'LoMingTsai4-3', text: '法案應該要公開討論，不是玩暗黑通關。', points: 2, isCorrect: false },
    ],
    explanation: {
      text: '公視報導，立法院內政委員會2024/12/16排審《選罷法》修正草案，國民黨拂曉出擊佔領立院紅樓2樓，將一側的鐵門鎖上用長桌頂住；並用保鮮膜把內政委員會門口封住；另一側則是以人牆阻擋，只讓議事人員進入。9時一到，召委徐欣瑩立即宣布開會，念完相關條文宣布初審通過，全數條文保留協商。',
      reference: 'https://watchout.tw/reports/tbHOpYA5buuRfEInq1Kh'
    }
  },
  {
    id: 'LoMingTsai5',
    text: '罷免我的二階段連署好像快過了，我該怎麼辦呢？',
    image: getImagePath("/images/question/LoMingTsai_q_pic_01.webp"),
    options: [  
      { id: 'LoMingTsai5-1', text: '直接開嗆！把「兩隻老虎」改成「不同意罷免」唱到他們崩潰。', points: 1994, isCorrect: true },
      { id: 'LoMingTsai5-2', text: '開始勤跑地方，誰握最多手誰活得久。', points: 6, isCorrect: false },
      { id: 'LoMingTsai5-3', text: '認真點啦，加強問政表現，至少讓中間選民猶豫一下。', points: 4, isCorrect: false },
    ],
    explanation: {
      text: '罷免羅明才的公民團體「拔羅波」今（9日）赴新北市選委會送交二階段連署書，達成率115％。罷團領銜人吳柏偉指出，這些連署書象徵著新店居民32年來對改變的渴望。對此，羅明才受訪時特別用童謠「兩隻老虎」改編成「不同意罷免」歌曲，手舞足蹈地呼籲民眾「不同意罷免」。並未對公民團體罷免連署改變的渴望做出積極正面回應。',
      reference: 'https://www.ettoday.net/news/20250509/2957515.htm'
    }
  },
  {
    id: 'LoMingTsai6',
    text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
    image: getImagePath("/images/question/common_q_pic_07.webp"),
    options: [
      { id: 'LoMingTsai6-1', text: '不怕刪預算，但連衛福部都刪到剩一塊錢，這不是亂搞是什麼？', points: 12, isCorrect: false },
      { id: 'LoMingTsai6-2', text: '法案還改個沒完，怎麼讓我們正常表決？我要去抗議。', points: 8, isCorrect: false },
      { id: 'LoMingTsai6-3', text: '人不用醒，手能舉就好，投完再說。', points: 3838, isCorrect: true },
    ],
    explanation: {
      text: '國民黨及民眾黨合力提出案海攻勢，出現許多理由、金額和項目都令外界匪夷所思的提案。在民意壓力下整合至 700 多案進入表決大戰並在藍白聯手優勢人數下通過。期間更出現邊表決邊改提案、沒看到修正文字就表決等荒腔走板的議事失序。',
      reference: 'https://watchout.tw/reports/tbHOpYA5buuRfEInq1Kh'
    }
  },
  {
    id: 'LoMingTsai7',
    text: '刪預算搞到民怨炸鍋，今天要去小學運動會致詞，你講什麼？',
    image: getImagePath("/images/question/LoMingTsai_q_pic_02.webp"),
    options: [
      { id: 'LoMingTsai7-1', text: '開心最重要，其他等長大再煩。', points: 15, isCorrect: false },
      { id: 'LoMingTsai7-2', text: '大家一人一萬，老師學生通通有獎，還我支持度(OS:不要罷免我)！', points: 3880, isCorrect: true },
      { id: 'LoMingTsai7-3', text: '祝大家未來都走得比政府順。', points: 4, isCorrect: false },
    ],
    explanation: {
      text: '新北市新店區安坑國小在五月三日舉辦校慶活動，當地選區的國民黨立委羅明才受邀到場，他致詞說「一人領一萬元，現場小朋友都有」引發爭議。推動罷免羅明才的公民團體「拔羅波」批評，「校園不是政客的秀場」，勿利用孩子的校慶活動當作政績發表會',
      reference: 'https://news.ltn.com.tw/news/politics/paper/1705072'
    }
  },
  {
    id: 'LoMingTsai8',
    text: '黨團要修《立法院職權行使法》條例，你建議如何做？',
    image: getImagePath("/images/question/common_q_pic_02.webp"),
    options: [
      { id: 'LoMingTsai8-1', text: '理性討論，找到對台灣最有利的平衡點。', points: 10, isCorrect: false },
      { id: 'LoMingTsai8-2', text: '最後一秒上機密版本，一起舉手秒通過，爽。', points: 6287, isCorrect: true },
      { id: 'LoMingTsai8-3', text: '該開公聽會就開，該審慎就審慎，不然又被說是在搞立法獨裁。', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '2024/5/21在場外大批民眾要求退回委員會重新審查《立法院職權行使法》狀況下，在最後一刻，藍白兩黨提出沒有被實質討論過的最高機密版本，並以舉手表決方式強行通過。被憲法法庭認定有諸多違憲的法案，該法案賦予立法院調查權，有權利要公私部門甚至個人提供這各種資訊，且設定禁止反質詢規定，問為什麼或拒絕提供就是處罰，在缺乏第三方制衡下，形同一種強力的空白授權。',
      reference: 'https://watchout.tw/reports/KK9ll6K03prNMxllAru8'
    }
  },
  {
    id: 'LoMingTsai9',
    text: '自稱金門坦克的玉珍姐說為了金門發財…發展，我們要修改離島條例18條。',
    image: getImagePath("/images/question/common_q_pic_05.webp"),
    options: [
      { id: 'LoMingTsai9-1', text: '拒絕，這提案像極了一帶一路，包裝再好也不能偷渡統戰資源。', points: 12, isCorrect: false },
      { id: 'LoMingTsai9-2', text: '只要玉珍開口，票一定掉，絕對不要讓我連署這種案。', points: 8, isCorrect: false },
      { id: 'LoMingTsai9-3', text: '姊說什麼就是金門福音，我負責幫她舉手。', points: 1766, isCorrect: true },
    ],
    explanation: {
      text: '陳玉珍日前針對「離島建設條例」第18條之1的第6項提出修正草案，明定大陸地區人民、法人、團體、機構、資金、物品、商品、勞務及服務，進出離島自由貿易示範區，相關辦法由事業主管機關擬定；並於說明欄第7點述明，為便利「並適度鬆綁相關規定」。',
      reference: 'https://www.cna.com.tw/news/aipl/202504110281.aspx'
    }
  },
  {
    id: 'LoMingTsai10',
    text: '明天要審《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
    image: getImagePath("/images/question/common_q_pic_01.webp"),
    options: [
      { id: 'LoMingTsai10-1', text: '先冷靜協商啦，不然又要演全武行，對票倉傷很大。', points: 10, isCorrect: false },
      { id: 'LoMingTsai10-2', text: '他們敢進來，我就燒立法院，看誰比較瘋。', points: 1969, isCorrect: true },
      { id: 'LoMingTsai10-3', text: '找總召討論，大家帶枕頭去守夜兼打地鋪。', points: 5, isCorrect: false },
    ],
    explanation: {
      text: '2024/12/18多位民進黨立委摸黑闖入立法院站裡主席台要對《選罷法》、《憲訴法》與《財劃法》三讀作抗爭，立法院門口爆發推擠，國民黨立委鄭天財甚至口出狂言「你們全部都進去，我就把它燒掉」',
      reference: 'https://www.ftvnews.com.tw/news/detail/2024C19W0444'
    }
  },
];
//廖先翔 LIAOHsienHsiang
const LIAOHsienHsiangQuestions: Question[] = [
  {
    id: 'LIAOHsienHsiang1',
    text: '立法院部分黨團提出了65歲以上免健保費一案，在深入研究後，我決定',
    image: getImagePath("/images/question/common_q_pic_08.webp"),
    options: [
      { id: 'LIAOHsienHsiang1-1', text: '反對，沒事找事造成世代對立做啥', points: 10, isCorrect: false },
      { id: 'LIAOHsienHsiang1-2', text: '反對，很多65歲以上是房東收租大戶，這提案會被罵爆。', points: 5, isCorrect: false },
      { id: 'LIAOHsienHsiang1-3', text: '研究什麼啦，按鈕在哪我就按哪。', points: 4277, isCorrect: true },
    ],
    explanation: {
      text: '藍白針對《老人福利法》修正草案提案，原本最寬鬆版本為65歲以上長者，綜合所得稅率未達20%免繳健保費，沒想到引發醫事團體反對，醫改團體更警告，全民健保是「社會保險」，而非「社會福利」，修法若通過恐怕衝擊健保永續。',
      reference: 'https://news.pts.org.tw/article/731315'
    }
  },
  {
    id: 'LIAOHsienHsiang2',
    text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
    image: getImagePath("/images/question/common_q_pic_04.webp"),
    options: [
      { id: 'LIAOHsienHsiang2-1', text: '我不能提這種幫中國洗人口的提案。', points: 12, isCorrect: false },
      { id: 'LIAOHsienHsiang2-2', text: '本來就已經有特殊待遇，沒必要再開綠燈了。', points: 6, isCorrect: false },
      { id: 'LIAOHsienHsiang2-3', text: '選票多才是真的好，以後感恩我們的中配會更多！', points: 6666, isCorrect: true },
    ],
    explanation: {
      text: '國民黨立委提案修法擬將中國籍配偶取得身分證時間從6年縮短成4年，。現有政策為中配依親滿4年、連續長居2年即可申請身分證，不像外籍配偶須先放棄原有國籍才能取得我國身分證。還能讓親人來台享用健保，國民黨為何此時要縮短時程、啟人疑竇呢？',
      reference: 'https://news.pts.org.tw/article/733781'
    }
  },
  {
    id: 'LIAOHsienHsiang3',
    text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
    image: getImagePath("/images/question/common_q_pic_07.webp"),
    options: [
      { id: 'LIAOHsienHsiang3-1', text: '人不用醒，手能舉就好，投完再說。', points: 3838, isCorrect: true },
      { id: 'LIAOHsienHsiang3-2', text: '不怕刪預算，但連衛福部都刪到剩一塊錢，這不是亂搞是什麼？', points: 8, isCorrect: false },
      { id: 'LIAOHsienHsiang3-3', text: '法案還改個沒完，怎麼讓我們正常表決？我要去抗議。', points: 5, isCorrect: false },
    ],
    explanation: {
      text: '國民黨及民眾黨合力提出案海攻勢，出現許多理由、金額和項目都令外界匪夷所思的提案。在民意壓力下整合至 700 多案進入表決大戰並在藍白聯手優勢人數下通過。期間更出現邊表決邊改提案、沒看到修正文字就表決等荒腔走板的議事失序。',
      reference: 'https://watchout.tw/reports/tbHOpYA5buuRfEInq1Kh'
    }
  },
  {
    id: 'LIAOHsienHsiang4',
    text: '我要審核汐止南港交界的白匏湖社宅基地編列1.24億相關預算，該怎麼做？',
    image: getImagePath("/images/question/LIAOHsienHsiang_q_pic_01.webp"),
    options: [
      { id: 'LIAOHsienHsiang4-1', text: '搞清楚計畫背景和編列邏輯，才知道該不該砍。', points: 10, isCorrect: false },
      { id: 'LIAOHsienHsiang4-2', text: '「連鹹酥雞都沒有，這也叫生活圈？」1.24億直接砍！', points: 4188, isCorrect: true },
      { id: 'LIAOHsienHsiang4-3', text: '先評估連外道路規劃，不然住進去會像被流放。', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '國民黨立委廖先翔提案刪除「白匏湖運動休閒生態園區暨社會住宅興建計劃」預算1億5900萬。廖先翔今天表示，他支持社宅政策，但一個連鹹酥雞都買不到的地點誰要住！',
      reference: 'https://udn.com/news/story/124338/8502406'
    }
  },
  {
    id: 'LIAOHsienHsiang5',
    text: '我是交通委員會的，但我想刪外交部預算，該怎麼做呢？',
    image: getImagePath("/images/question/LIAOHsienHsiang_q_pic_02.webp"),
    options: [
      { id: 'LIAOHsienHsiang5-1', text: '中國不買白蝦，宏都拉斯也沒回來，那我砍外交預算不是剛好而已？', points: 4354, isCorrect: true },
      { id: 'LIAOHsienHsiang5-2', text: '這根本不是我該碰的預算啦，我專業在高鐵不是外交會。', points: 6, isCorrect: false },
      { id: 'LIAOHsienHsiang5-3', text: '先檢查一下外交部預算有沒有浮編，反正審預算不分你我他。', points: 4, isCorrect: false },
    ],
    explanation: {
      text: '廖先翔表示，宏都拉斯與我國斷交後民不聊生，宏國人民與政府應非常懷念與我國建交的時光，然而幾年過去了，看不到雙方有重新締交的跡象，代表外交部的業務執行能力與經費運用都有很大的問題，因此提案刪除4億預算。而該提案在今日的立法院會，以贊成55人、反對45人表決通過。',
      reference: 'https://news.tvbs.com.tw/politics/2756100'
    }
  },
  {
    id: 'LIAOHsienHsiang6',
    text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
    image: getImagePath("/images/question/common_q_pic_06.webp"),
    options: [
      { id: 'LIAOHsienHsiang6-1', text: '不行啦，這根本戒嚴2.0，連我媽都看不下去。', points: 10, isCorrect: false },
      { id: 'LIAOHsienHsiang6-2', text: '鎖門是必要手段，太多雜音就會拖進度。', points: 1949, isCorrect: true },
      { id: 'LIAOHsienHsiang6-3', text: '法案應該要公開討論，不是玩暗黑通關。', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '公視報導，立法院內政委員會2024/12/16排審《選罷法》修正草案，國民黨拂曉出擊佔領立院紅樓2樓，將一側的鐵門鎖上用長桌頂住；並用保鮮膜把內政委員會門口封住；另一側則是以人牆阻擋，只讓議事人員進入。9時一到，召委徐欣瑩立即宣布開會，念完相關條文宣布初審通過，全數條文保留協商。',
      reference: 'https://news.pts.org.tw/article/729015'
    }
  },
  {
    id: 'LIAOHsienHsiang7',
    text: '明天要審《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
    image: getImagePath("/images/question/common_q_pic_01.webp"),
    options: [
      { id: 'LIAOHsienHsiang7-1', text: '他們敢進來，我就燒立法院，看誰比較瘋。', points: 1969, isCorrect: true },
      { id: 'LIAOHsienHsiang7-2', text: '找總召討論，大家帶枕頭去守夜兼打地鋪。', points: 4, isCorrect: false },
      { id: 'LIAOHsienHsiang7-3', text: '先冷靜協商啦，不然又要演全武行，對票倉傷很大。', points: 2, isCorrect: false },
    ],
    explanation: {
      text: '2024/12/18多位民進黨立委摸黑闖入立法院站裡主席台要對《選罷法》、《憲訴法》與《財劃法》三讀作抗爭，立法院門口爆發推擠，國民黨立委鄭天財甚至口出狂言「你們全部都進去，我就把它燒掉」',
      reference: 'https://www.ftvnews.com.tw/news/detail/2024C19W0444'
    }
  },
  {
    id: 'LIAOHsienHsiang8',
    text: '黨團要修《立法院職權行使法》條例，你建議如何做？',
    image: getImagePath("/images/question/common_q_pic_02.webp"),
    options: [
      { id: 'LIAOHsienHsiang8-1', text: '理性討論，找到對台灣最有利的平衡點。', points: 15, isCorrect: false },
      { id: 'LIAOHsienHsiang8-2', text: '該開公聽會就開，該審慎就審慎，不然又被說是在搞立法獨裁。', points: 8, isCorrect: false },
      { id: 'LIAOHsienHsiang8-3', text: '最後一秒上機密版本，一起舉手秒通過，爽。', points: 6287, isCorrect: true },
    ],
    explanation: {
      text: '2024/5/21在場外大批民眾要求退回委員會重新審查《立法院職權行使法》狀況下，在最後一刻，藍白兩黨提出沒有被實質討論過的最高機密版本，並以舉手表決方式強行通過。被憲法法庭認定有諸多違憲的法案，該法案賦予立法院調查權，有權利要公私部門甚至個人提供這各種資訊，且設定禁止反質詢規定，問為什麼或拒絕提供就是處罰，在缺乏第三方制衡下，形同一種強力的空白授權。',
      reference: 'https://watchout.tw/reports/KK9ll6K03prNMxllAru8'
    }
  },
  {
    id: 'LIAOHsienHsiang9',
    text: '自稱金門坦克的玉珍姐說為了金門發財…發展，我們要修改離島條例18條。',
    image: getImagePath("/images/question/common_q_pic_05.webp"),
    options: [
      { id: 'LIAOHsienHsiang9-1', text: '拒絕，這提案像極了一帶一路，包裝再好也不能偷渡統戰資源。', points: 12, isCorrect: false },
      { id: 'LIAOHsienHsiang9-2', text: '只要玉珍開口，票一定掉，絕對不要讓我連署這種案。', points: 6, isCorrect: false },
      { id: 'LIAOHsienHsiang9-3', text: '姊說什麼就是金門福音，我負責幫她舉手。', points: 1766, isCorrect: true },
    ],
    explanation: {
      text: '陳玉珍日前針對「離島建設條例」第18條之1的第6項提出修正草案，明定大陸地區人民、法人、團體、機構、資金、物品、商品、勞務及服務，進出離島自由貿易示範區，相關辦法由事業主管機關擬定；並於說明欄第7點述明，為便利「並適度鬆綁相關規定」。',
      reference: 'https://www.cna.com.tw/news/aipl/202504110281.aspx'
    }
  },
  {
    id: 'LIAOHsienHsiang10',
    text: '上班時間總召邀你一起去中國查訪',
    image: getImagePath("/images/question/common_q_pic_03.webp"),
    options: [
      { id: 'LIAOHsienHsiang10-1', text: '謝謝總召，但我還是想認真開會為民服務。', points: 10, isCorrect: false },
      { id: 'LIAOHsienHsiang10-2', text: '總召叫我去哪我就去哪，不問、服從、不拖延！', points: 1450, isCorrect: true },
      { id: 'LIAOHsienHsiang10-3', text: '嗯？我睡著了，沒有注意到，他們出發了嗎？', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '2024/4/26在立法院開議期間，傅崐萁率領羅明才、陳雪生、鄭天財、徐欣瑩、陳玉珍、鄭正鈐、王鴻薇、林沛祥、廖先翔、張智倫、邱鎮軍、游顥、盧縣一、黃仁、翁曉玲、林倩綺訪問中國，在人民大會堂新疆廳拜見全國政協主席王滬寧；王滬寧近日才宣布去年統戰工作做得很好，2025更要做好「四個凝聚」工作，切實發揮最廣泛愛國統一戰線組織的政治作用，不斷鞏固全國各族人民大團結，加強海內外中華兒女大團結。',
      reference: 'https://www.cna.com.tw/news/aipl/202404260199.aspx'
    }
  },
];
//羅智強 LOCHIHCHIANG
const LOCHIHCHIANGQuestions: Question[] = [
  {
    id: 'LOCHIHCHIANG1',
    text: '怎麼讓NCC主委講出「我不知道」讓我可以剪影片？',
    image: getImagePath("/images/question/LOCHIHCHIANG_q_pic_01.webp"),
    options: [
      { id: 'LOCHIHCHIANG1-1', text: '先反省一下我的道德觀。', points: 10, isCorrect: false },
      { id: 'LOCHIHCHIANG1-2', text: '你知道問什麼問題嗎？', points: 5, isCorrect: true },
      { id: 'LOCHIHCHIANG1-3', text: '出難題讓他腦袋打結。', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '2024/5/1羅智強質詢NCC主委陳耀祥：「主委今天質詢你我只問你一個問題就好，你知道問什麼問題嗎？我不知道，我就只問你這個問題你可以下台了，下台。」、「我質詢完了我已經質詢完了，你可以下去了結束了，時間暫停，他不下去就不用停了。」過程中既不尊重人也沒有提出專業質疑，僅於事後解釋他不滿陳耀祥的表現故作此表演。',
      reference: 'https://www.youtube.com/watch?v=A4FFn-DnQCk'
    }
  },
  {
    id: 'LOCHIHCHIANG2',
    text: '公督盟希望我自主提供利益迴避相關資料作為國會改革透明依據，我要怎麼回應呢？',
    image: getImagePath("/images/question/LOCHIHCHIANG_q_pic_02.webp"),
    options: [
      { id: 'LOCHIHCHIANG2-1', text: '看到公文直接寫「滾」，還拍照發文說：「透明就這麼透明！」', points: 12, isCorrect: true },
      { id: 'LOCHIHCHIANG2-2', text: '我問心無愧，資料我整理好雙手奉上。', points: 6, isCorrect: false },
      { id: 'LOCHIHCHIANG2-3', text: '他們跟我立場不同，我就婉轉拒絕，這叫政治智慧。', points: 4, isCorrect: false },
    ],
    explanation: {
      text: '2024.6公督盟行文給所有委員辦公室，希望他們能公開公費助理聘用資訊、遊說、使用公費出國狀況、兼任營利與非營利組織等資料時，羅智強還刻意把公督盟的公文拍照，在臉書上大大寫上叫公督盟「滾」等字樣',
      reference: 'https://ccw.org.tw/news/20240620'
    }
  },
  {
    id: 'LOCHIHCHIANG3',
    text: '立法院部分黨團提出了65歲以上免健保費一案，在深入研究後，我決定',
    image: getImagePath("/images/question/common_q_pic_08.webp"),
    options: [
      { id: 'LOCHIHCHIANG3-1', text: '研究什麼啦，按鈕在哪我就按哪。', points: 4277, isCorrect: true },
      { id: 'LOCHIHCHIANG3-2', text: '反對，很多65歲以上是房東收租大戶，這提案會被罵爆。', points: 5, isCorrect: false },
      { id: 'LOCHIHCHIANG3-3', text: '反對，沒事找事造成世代對立做啥', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '藍白針對《老人福利法》修正草案提案，原本最寬鬆版本為65歲以上長者，綜合所得稅率未達20%免繳健保費，沒想到引發醫事團體反對，醫改團體更警告，全民健保是「社會保險」，而非「社會福利」，修法若通過恐怕衝擊健保永續。',
      reference: 'https://news.pts.org.tw/article/731315'
    }
  },
  {
    id: 'LOCHIHCHIANG4',
    text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
    image: getImagePath("/images/question/common_q_pic_04.webp"),
    options: [
      { id: 'LOCHIHCHIANG4-1', text: '我不能提這種幫中國洗人口的提案。', points: 15, isCorrect: false },
      { id: 'LOCHIHCHIANG4-2', text: '本來就已經有特殊待遇，沒必要再開綠燈了。', points: 8, isCorrect: false },
      { id: 'LOCHIHCHIANG4-3', text: '選票多才是真的好，以後感恩我們的中配會更多！', points: 6666, isCorrect: true },
    ],
    explanation: {
      text: '國民黨立委提案修法擬將中國籍配偶取得身分證時間從6年縮短成4年，。現有政策為中配依親滿4年、連續長居2年即可申請身分證，不像外籍配偶須先放棄原有國籍才能取得我國身分證。還能讓親人來台享用健保，國民黨為何此時要縮短時程、啟人疑竇呢？',
      reference: 'https://news.pts.org.tw/article/733781'
    }
  },
  {
    id: 'LOCHIHCHIANG5',
    text: '黨團要修《立法院職權行使法》條例，你建議如何做？',
    image: getImagePath("/images/question/common_q_pic_02.webp"),
    options: [
      { id: 'LOCHIHCHIANG5-1', text: '該開公聽會就開，該審慎就審慎，不然又被說是在搞立法獨裁。', points: 12, isCorrect: false },
      { id: 'LOCHIHCHIANG5-2', text: '理性討論，找到對台灣最有利的平衡點。', points: 6, isCorrect: false },
      { id: 'LOCHIHCHIANG5-3', text: '最後一秒上機密版本，一起舉手秒通過，爽。', points: 6287, isCorrect: true },
    ],
    explanation: {
      text: '2024/5/21在場外大批民眾要求退回委員會重新審查《立法院職權行使法》狀況下，在最後一刻，藍白兩黨提出沒有被實質討論過的最高機密版本，並以舉手表決方式強行通過。被憲法法庭認定有諸多違憲的法案，該法案賦予立法院調查權，有權利要公私部門甚至個人提供這各種資訊，且設定禁止反質詢規定，問為什麼或拒絕提供就是處罰，在缺乏第三方制衡下，形同一種強力的空白授權。',
      reference: 'https://watchout.tw/reports/KK9ll6K03prNMxllAru8'
    }
  },
  {
    id: 'LOCHIHCHIANG6',
    text: '上班時間總召邀你一起去中國查訪',
    image: getImagePath("/images/question/common_q_pic_03.webp"),
    options: [
      { id: 'LOCHIHCHIANG6-1', text: '總召叫我去哪我就去哪，不問、服從、不拖延！', points: 8888, isCorrect: false },
      { id: 'LOCHIHCHIANG6-2', text: '嗯？我睡著了，沒有注意到，他們出發了嗎？', points: 1450, isCorrect: true },
      { id: 'LOCHIHCHIANG6-3', text: '謝謝總召，但我還是想認真開會為民服務。', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '2024/4/26在立法院開議期間，傅崐萁率領羅明才、陳雪生、鄭天財、徐欣瑩、陳玉珍、鄭正鈐、王鴻薇、林沛祥、廖先翔、張智倫、邱鎮軍、游顥、盧縣一、黃仁、翁曉玲、林倩綺訪問中國，在人民大會堂新疆廳拜見全國政協主席王滬寧；王滬寧近日才宣布去年統戰工作做得很好，2025更要做好「四個凝聚」工作，切實發揮最廣泛愛國統一戰線組織的政治作用，不斷鞏固全國各族人民大團結，加強海內外中華兒女大團結。',
      reference: 'https://www.cna.com.tw/news/aipl/202404260199.aspx'
    }
  },
  {
    id: 'LOCHIHCHIANG7',
    text: '自稱金門坦克的玉珍姐說為了金門發財…發展，我們要修改離島條例18條。',
    image: getImagePath("/images/question/common_q_pic_05.webp"),
    options: [
      { id: 'LOCHIHCHIANG7-1', text: '姊說什麼就是金門福音，我負責幫她舉手。', points: 1766, isCorrect: true },
      { id: 'LOCHIHCHIANG7-2', text: '拒絕，這提案像極了一帶一路，包裝再好也不能偷渡統戰資源。', points: 8, isCorrect: false },
      { id: 'LOCHIHCHIANG7-3', text: '只要玉珍開口，票一定掉，絕對不要讓我連署這種案。', points: 5, isCorrect: false },
    ],
    explanation: {
      text: '陳玉珍日前針對「離島建設條例」第18條之1的第6項提出修正草案，明定大陸地區人民、法人、團體、機構、資金、物品、商品、勞務及服務，進出離島自由貿易示範區，相關辦法由事業主管機關擬定；並於說明欄第7點述明，為便利「並適度鬆綁相關規定」。',
      reference: 'https://www.cna.com.tw/news/aipl/202504110281.aspx'
    }
  },
  {
    id: 'LOCHIHCHIANG8',
    text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
    image: getImagePath("/images/question/common_q_pic_07.webp"),
    options: [
      { id: 'LOCHIHCHIANG8-1', text: '不怕刪預算，但連衛福部都刪到剩一塊錢，這不是亂搞是什麼？', points: 10, isCorrect: true },
      { id: 'LOCHIHCHIANG8-2', text: '人不用醒，手能舉就好，投完再說。', points: 3838, isCorrect: true },
      { id: 'LOCHIHCHIANG8-3', text: '法案還改個沒完，怎麼讓我們正常表決？我要去抗議。', points: 3, isCorrect: false },
    ],
    explanation: {
      text: '國民黨及民眾黨合力提出案海攻勢，出現許多理由、金額和項目都令外界匪夷所思的提案。在民意壓力下整合至 700 多案進入表決大戰並在藍白聯手優勢人數下通過。期間更出現邊表決邊改提案、沒看到修正文字就表決等荒腔走板的議事失序。',
      reference: 'https://watchout.tw/reports/tbHOpYA5buuRfEInq1Kh'
    }
  },
  {
    id: 'LOCHIHCHIANG9',
    text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
    image: getImagePath("/images/question/common_q_pic_06.webp"),
    options: [
      { id: 'LOCHIHCHIANG9-1', text: '鎖門是必要手段，太多雜音就會拖進度。', points: 1949, isCorrect: true },
      { id: 'LOCHIHCHIANG9-2', text: '不行啦，這根本戒嚴2.0，連我媽都看不下去。', points: 6, isCorrect: false },
      { id: 'LOCHIHCHIANG9-3', text: '法案應該要公開討論，不是玩暗黑通關。', points: 4, isCorrect: false },
    ],
    explanation: {
      text: '公視報導，立法院內政委員會2024/12/16排審《選罷法》修正草案，國民黨拂曉出擊佔領立院紅樓2樓，將一側的鐵門鎖上用長桌頂住；並用保鮮膜把內政委員會門口封住；另一側則是以人牆阻擋，只讓議事人員進入。9時一到，召委徐欣瑩立即宣布開會，念完相關條文宣布初審通過，全數條文保留協商。',
      reference: 'https://news.pts.org.tw/article/729015'
    }
  },
  {
    id: 'LOCHIHCHIANG10',
    text: '明天要審《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
    image: getImagePath("/images/question/common_q_pic_01.webp"),
    options: [
      { id: 'LOCHIHCHIANG10-1', text: '找總召討論，大家帶枕頭去守夜兼打地鋪。', points: 64, isCorrect: false },
      { id: 'LOCHIHCHIANG10-2', text: '先冷靜協商啦，不然又要演全武行，對票倉傷很大。', points: 4, isCorrect: false },
      { id: 'LOCHIHCHIANG10-3', text: '他們敢進來，我就燒立法院，看誰比較瘋。', points: 1969, isCorrect: true },
    ],
    explanation: {
      text: '2024/12/18多位民進黨立委摸黑闖入立法院站裡主席台要對《選罷法》、《憲訴法》與《財劃法》三讀作抗爭，立法院門口爆發推擠，國民黨立委鄭天財甚至口出狂言「你們全部都進去，我就把它燒掉」',
      reference: 'https://www.ftvnews.com.tw/news/detail/2024C19W0444'
    }
  },
];


export const questionSets: Record<string, QuestionSet> = {
  ChangChihLun: {
    id: 'ChangChihLun',
    questions: ChangChihLunQuestions,
  },
  linTeFu: {
    id: 'linTeFu',
    questions: linTeFuQuestions,
  },
  HSUCHIAOHSIN: {
    id: 'HSUCHIAOHSIN',
    questions: HSUCHIAOHSINQuestions,
  },

  LaiShyhBao: {
    id: 'LaiShyhBao',
    questions: LaiShyhBaoQuestions,
  },

  wanghungwei: {
    id: 'wanghungwei',
    questions: wanghungweiQuestions,
  },
  LEEYEHSIU: {
    id: 'LEEYEHSIU',
    questions: LEEYEHSIUQuestions,
  },
  YEHYUANCHIH: {
    id: 'YEHYUANCHIH',
    questions: YEHYUANCHIHQuestions,
  },
  HungMongKai: {
    id: 'HungMongKai',
    questions: HungMongKaiQuestions,
  },

  LoMingTsai: {
    id: 'LoMingTsai',
    questions: LoMingTsaiQuestions,
  },
  LIAOHsienHsiang: {
    id: 'LIAOHsienHsiang',
    questions: LIAOHsienHsiangQuestions,
  },
  LOCHIHCHIANG: {
    id: 'LOCHIHCHIANG',
    questions: LOCHIHCHIANGQuestions,
  },

};
