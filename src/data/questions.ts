import { Question, QuestionSet } from '../types';
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
    image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
    description: '法案審查是立委的重要職責，每個決定都可能影響thousands of人民的生活。面對不熟悉的議題，如何在有限時間內做出正確判斷，考驗著立委的專業素養和責任心。這個時刻的選擇，將展現你是否真正重視立委的職責。',
*/

    const ChangChihLunQuestions: Question[] = [
      {
        id: 'ChangChihLun1',
        text: '上班時間總召邀你一起去中國查訪',
        options: [
          { id: 'ChangChihLun1-1', text: '我們是在立法院上班，立院總召不是統戰團行程總召好嗎？', points: 0, isCorrect: false },
          { id: 'ChangChihLun1-2', text: '總召叫我去哪我就去哪，絕對服從、不問、不拖延！', points: 1450, isCorrect: true },
          { id: 'ChangChihLun1-3', text: '謝謝總召，但我還是想認真開會為民服務。', points: 0, isCorrect: false },
        ],
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
          text: '2024/4/26在立法院開議期間，傅崐萁率領羅明才、陳雪生、鄭天財、徐欣瑩、陳玉珍、鄭正鈐、王鴻薇、林沛祥、廖先翔、張智倫、邱鎮軍、游顥、盧縣一、黃仁、翁曉玲、林倩綺訪問中國，在人民大會堂新疆廳拜見全國政協主席王滬寧；王滬寧近日才宣布去年統戰工作做得很好，2025更要做好「四個凝聚」工作，切實發揮最廣泛愛國統一戰線組織的政治作用，不斷鞏固全國各族人民大團結，加強海內外中華兒女大團結。',
          reference: 'https://www.cna.com.tw/news/aipl/202404260199.aspx'
        }
      },
      {
        id: 'ChangChihLun2',
        text: '2024/4/3環狀線軌道因地震發生錯位，身為區域立委的你會？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'ChangChihLun2-1', text: '錯位？千斤頂頂回去就好啦，後面再來處理！', points: 300, isCorrect: true },
          { id: 'ChangChihLun2-2', text: '叫廠商來喝茶，順便看合約怎麼寫的。', points: 130, isCorrect: false },
          { id: 'ChangChihLun2-3', text: '叫捷運局出來，先別甩鍋。', points: 0, isCorrect: false },
        ],
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
          text: '新北市中和環狀線捷運因為上午7.2強震，導致「軌道位移」而整個捷運環狀線因此癱瘓，恐怕要長期維修，但不敢確定問題，新北市立委張智倫到場視察，他表示，目前可能要先用「千斤頂」把受損的地方先恢復，其他相關交通，可能還要評估....',
          reference: 'https://www.nownews.com/news/6397578?srsltid=AfmBOopBgND3_KPMilZZbMnTPfy027oInoLrDG-zOVLgHi10T4T5YlUe'
        }
      },
      {
        id: 'ChangChihLun3',
        text: '黨團要修《立法院職權行使法》條例，你建議如何做？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'ChangChihLun3-1', text: '理性討論，找到對台灣最有利的平衡點。', points: 0, isCorrect: false },
          { id: 'ChangChihLun3-2', text: '最後一秒上機密版本，一起舉手秒通過，爽。', points: 7827, isCorrect: true },
          { id: 'ChangChihLun3-3', text: '該開公聽會就開，該審慎就審慎，不然又被說是在搞立法獨裁。', points: 0, isCorrect: false },
        ],
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
          text: '2024/5/21在場外大批民要求退回委員會重新審查《立法院職權行使法》狀況下，在最後一刻，藍白兩黨提出沒有被實質討論過的最高機密版本，並以舉手表決方式強行通過。被憲法法庭認定有諸多違憲的法案，該法案賦予立法院調查權，有權利要公私部門甚至個人提供這各種資訊，且設定禁止反質詢規定，問為什麼或拒絕提供就是處罰，在缺乏第三方制衡下，形同一種強力的空白授權。',
          reference: 'https://watchout.tw/reports/KK9ll6K03prNMxllAru8'
        }
      },
      {
        id: 'ChangChihLun4',
        text: '中國灰色騷擾海域頻繁，你為海巡做什麼？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'ChangChihLun4-1', text: '哎呀，我之前好像才刪了29億⋯⋯（尷尬逃跑）', points: 1698, isCorrect: true },
          { id: 'ChangChihLun4-2', text: '立刻爭預算！讓弟兄有船、有甲、有假期。', points: 100, isCorrect: false },
          { id: 'ChangChihLun4-3', text: '加薪啦，不然怎麼冒險？', points: 0, isCorrect: false },
        ],
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
          text: '張智倫參與多項海巡署、海委會預算相關連署，大幅度凍結相關業務，最離譜的凍結原因大概是「中國漁船越界捕撈翻覆，因海巡署為全程錄影被糾正，所以凍結...」然後再於灰色騷擾頻發期間關心海委會業務狀況。',
          reference: 'https://www.ettoday.net/news/20250130/2899990.htm'
        }
      },
      {
        id: 'ChangChihLun5',
        text: '明天要審《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'ChangChihLun5-1', text: '先冷靜協商啦，不然又要演全武行，對票倉傷很大。', points: 4, isCorrect: false },
          { id: 'ChangChihLun5-2', text: '找總召討論，大家帶枕頭去守夜兼打地鋪。', points: 604, isCorrect: false },
          { id: 'ChangChihLun5-3', text: '他們敢進來，我就燒立法院，看誰比較瘋。', points: 1969, isCorrect: true },
        ],
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
          text: '2024/12/18多位民進黨立委摸黑闖入立法院站裡主席台要對《選罷法》、《憲訴法》與《財劃法》三讀作抗爭，立法院門口爆發推擠，國民黨立委鄭天財甚至口出狂言「你們全部都進去，我就把它燒掉」',
          reference: 'https://www.ftvnews.com.tw/news/detail/2024C19W0444'
        }
      },
      {
        id: 'ChangChihLun6',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'ChangChihLun6-1', text: '鎖門是必要手段，太多雜音就會拖進度。', points: 1949, isCorrect: true },
          { id: 'ChangChihLun6-2', text: '法案應該要公開討論，不是玩暗黑通關。', points: 0, isCorrect: false },
          { id: 'ChangChihLun6-3', text: '不行啦，這根本戒嚴2.0，連我媽都看不下去。', points: 0, isCorrect: false },
        ],
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
          text: '公視報導，立法院內政委員會2024/12/16排審《選罷法》修正草案，國民黨拂曉出擊佔領立院紅樓2樓，將一側的鐵門鎖上用長桌頂住；並用保鮮膜把內政委員會門口封住；另一側則是以人牆阻擋，只讓議事人員進入。9時一到，召委徐欣瑩立即宣布開會，念完相關條文宣布初審通過，全數條文保留協商。',
          reference: 'https://news.pts.org.tw/article/729015'
        }
      },
      {
        id: 'ChangChihLun7',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'ChangChihLun7-1', text: '法案還改個沒完，怎麼讓我們正常表決？我要去抗議。', points: 1450, isCorrect: false },
          { id: 'ChangChihLun7-2', text: '人不用醒，手能舉就好，投完再說。', points: 3838, isCorrect: true },
          { id: 'ChangChihLun7-3', text: '不怕刪預算，但連衛福部都刪到剩一塊錢，這不是亂搞是什麼？', points: 0, isCorrect: false },
        ],
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
          text: '國民黨及民眾黨合力提出案海攻勢，出現許多理由、金額和項目都令外界匪夷所思的提案。在民意壓力下整合至 700 多案進入表決大戰並在藍白聯手優勢人數下通過。期間更出現邊表決邊改提案、沒看到修正文字就表決等荒腔走板的議事失序。',
          reference: 'https://watchout.tw/reports/tbHOpYA5buuRfEInq1Kh'
        }
      },
      {
        id: 'ChangChihLun8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'ChangChihLun8-1', text: '我不能提這種幫中國洗人口的提案。', points: 0, isCorrect: false },
          { id: 'ChangChihLun8-2', text: '選票多才是真的好，以後感恩我們的中配會更多！', points: 6666, isCorrect: true },
          { id: 'ChangChihLun8-3', text: '本來就已經有特殊待遇，沒必要再開綠燈了。', points: 0, isCorrect: false },
        ],
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
          text: '國民黨立委提案修法擬將中國籍配偶取得身分證時間從6年縮短成4年，。現有政策為中配依親滿4年、連續長居2年即可申請身分證，不像外籍配偶須先放棄原有國籍才能取得我國身分證。還能讓親人來台享用健保，國民黨為何此時要縮短時程、啟人疑竇呢？',
          reference: 'https://news.pts.org.tw/article/733781'
        }
      },
      {
        id: 'ChangChihLun9',
        text: '立法院部分黨團提出了65歲以上免健保費一案，在深入研究後，我決定',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'ChangChihLun9-1', text: '研究什麼啦，按鈕在哪我就按哪。 ', points: 7777, isCorrect: true },
          { id: 'ChangChihLun9-2', text: '很多65歲以上是房東收租大戶，這提案會被罵爆。', points: 88, isCorrect: false },
          { id: 'ChangChihLun9-3', text: '怎麼照顧的是來台依親的長輩，反而在地長輩被邊緣？要公平。', points: 0, isCorrect: false },
        ],
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
          text: '藍白針對《老人福利法》修正草案提案，原本最寬鬆版本為65歲以上長者，綜合所得稅率未達20%免繳健保費，沒想到引發醫事團體反對，醫改團體更警告，全民健保是「社會保險」，而非「社會福利」，修法若通過恐怕衝擊健保永續。',
          reference: 'https://news.pts.org.tw/article/731315'
        }
      },
      {
        id: 'ChangChihLun10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'ChangChihLun10-1', text: '只要玉珍開口，票一定掉，絕對不要讓我連署這種案。', points: 0, isCorrect: true },
          { id: 'ChangChihLun10-2', text: '拒絕，這提案像極了一帶一路，包裝再好也不能偷渡統戰資源。', points: 0, isCorrect: false },
          { id: 'ChangChihLun10-3', text: '姊說什麼就是金門福音，我負責幫她舉手。', points: 2666, isCorrect: true },
        ],
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
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
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'linTeFu1-1', text: '我們是在立法院上班，立院總召不是統戰團行程總召好嗎？', points: 0, isCorrect: false },
          { id: 'linTeFu1-2', text: '謝謝總召，但我還是想認真開會為民服務。', points: 0, isCorrect: false },
          { id: 'linTeFu1-3', text: '總召叫我去哪我就去哪，不問、服從、不拖延！', points: 1450, isCorrect: true },
        ],
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
          text: '2024/4/26在立法院開議期間，傅崐萁率領羅明才、陳雪生、鄭天財、徐欣瑩、陳玉珍、鄭正鈐、王鴻薇、林沛祥、廖先翔、張智倫、邱鎮軍、游顥、盧縣一、黃仁、翁曉玲、林倩綺訪問中國，在人民大會堂新疆廳拜見全國政協主席王滬寧；王滬寧近日才宣布去年統戰工作做得很好，2025更要做好「四個凝聚」工作，切實發揮最廣泛愛國統一戰線組織的政治作用，不斷鞏固全國各族人民大團結，加強海內外中華兒女大團結。',
          reference: 'https://www.cna.com.tw/news/aipl/202404260199.aspx'
        }
      },
      {
        id: 'linTeFu2',
        text: '黨團要修《立法院職權行使法》條例，你建議如何做？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'linTeFu2-1', text: '最後一秒上機密版本，一起舉手秒通過，爽。', points: 7787, isCorrect: true },
          { id: 'linTeFu2-2', text: '理性討論，找到對台灣最有利的平衡點。', points: 0, isCorrect: false },
          { id: 'linTeFu2-3', text: '該開公聽會就開，該審慎就審慎，不然又被說是在搞立法獨裁。', points: 5, isCorrect: false },
        ],
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
          text: '2024/5/21在場外大批民要求退回委員會重新審查《立法院職權行使法》狀況下，在最後一刻，藍白兩黨提出沒有被實質討論過的最高機密版本，並以舉手表決方式強行通過。被憲法法庭認定有諸多違憲的法案，該法案賦予立法院調查權，有權利要公私部門甚至個人提供這各種資訊，且設定禁止反質詢規定，問為什麼或拒絕提供就是處罰，在缺乏第三方制衡下，形同一種強力的空白授權。',
          reference: 'https://watchout.tw/reports/KK9ll6K03prNMxllAru8'
        }
      },
      {
        id: 'linTeFu3',
        text: '明天要審《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'linTeFu3-1', text: '先冷靜協商啦，不然又要演全武行，對票倉傷很大。', points: 0, isCorrect: false },
          { id: 'linTeFu3-2', text: '他們敢進來，我就燒立法院，看誰比較瘋。', points: 1969, isCorrect: true },
          { id: 'linTeFu3-3', text: '找總召討論，大家帶枕頭去守夜兼打地鋪。', points: 604, isCorrect: false },
        ],
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
          text: '2024/12/18多位民進黨立委摸黑闖入立法院站裡主席台要對《選罷法》、《憲訴法》與《財劃法》三讀作抗爭，立法院門口爆發推擠，國民黨立委鄭天財甚至口出狂言「你們全部都進去，我就把它燒掉」',
          reference: 'https://www.ftvnews.com.tw/news/detail/2024C19W0444'
        }
      },
      {
        id: 'linTeFu4',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'linTeFu4-1', text: '我不能提這種幫中國洗人口的提案。', points: 0, isCorrect: false },
          { id: 'linTeFu4-2', text: '本來就已經有特殊待遇，沒必要再開綠燈了。', points: 5, isCorrect: false },
          { id: 'linTeFu4-3', text: '選票多才是真的好，以後感恩我們的中配會更多！', points: 5166, isCorrect: true },
        ],
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
          text: '國民黨立委提案修法擬將中國籍配偶取得身分證時間從6年縮短成4年，。現有政策為中配依親滿4年、連續長居2年即可申請身分證，不像外籍配偶須先放棄原有國籍才能取得我國身分證。還能讓親人來台享用健保，國民黨為何此時要縮短時程、啟人疑竇呢？',
          reference: 'https://news.pts.org.tw/article/733781'
        }
      },
      {
        id: 'linTeFu5',
        text: '立法院部分黨團提出了65歲以上免健保費一案，在深入研究後，我決定',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'linTeFu5-1', text: '怎麼照顧的是來台依親的長輩，反而在地長輩被邊緣？要公平。', points: 12, isCorrect: false },
          { id: 'linTeFu5-2', text: '研究什麼啦，按鈕在哪我就按哪。', points: 4277, isCorrect: true },
          { id: 'linTeFu5-3', text: '很多65歲以上是房東收租大戶，這提案會被罵爆。', points: 4, isCorrect: false },
        ],
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
          text: '藍白針對《老人福利法》修正草案提案，原本最寬鬆版本為65歲以上長者，綜合所得稅率未達20%免繳健保費，沒想到引發醫事團體反對，醫改團體更警告，全民健保是「社會保險」，而非「社會福利」，修法若通過恐怕衝擊健保永續。',
          reference: 'https://news.pts.org.tw/article/731315'
        }
      },
      {
        id: 'linTeFu6',
        text: '80歲以上免醫療評估請看護被批會出事，要不要煞車？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'linTeFu6-1', text: '黨說過了沒問題，我還能比黨懂醫療？', points: 1323, isCorrect: true },
          { id: 'linTeFu6-2', text: '我...我想睡一下，明天再想。', points: 555, isCorrect: false },
          { id: 'linTeFu6-3', text: '不煞會翻車，我喊暫停！', points: 3, isCorrect: false },
        ],
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
          text: '2024年底立法院三讀通過就業服務法條文，明定年滿80歲以上免經醫療評估（巴氏量表）即可申請外籍看護，修法後恐讓外籍看護市場供需失衡，根據中央社報導，家庭照護者關懷總會指出免平標準是另類年齡歧視，嚴重衝擊現有23萬需要外籍看護照顧重癱、臥床、多重障礙等長照家庭權益。',
          reference: 'https://www.cna.com.tw/news/aipl/202412310099.aspx'
        }
      },
      {
        id: 'linTeFu7',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'linTeFu7-1', text: '鎖門是必要手段，太多雜音就會拖進度。', points: 1949, isCorrect: true },
          { id: 'linTeFu7-2', text: '法案應該要公開討論，不是玩暗黑通關。', points: 4, isCorrect: false },
          { id: 'linTeFu7-3', text: '不行啦，這根本戒嚴2.0，連我媽都看不下去。', points: 6, isCorrect: false },
        ],
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
          text: '公視報導，立法院內政委員會2024/12/16排審《選罷法》修正草案，國民黨拂曉出擊佔領立院紅樓2樓，將一側的鐵門鎖上用長桌頂住；並用保鮮膜把內政委員會門口封住；另一側則是以人牆阻擋，只讓議事人員進入。9時一到，召委徐欣瑩立即宣布開會，念完相關條文宣布初審通過，全數條文保留協商。',
          reference: 'https://news.pts.org.tw/article/729015'
        }
      },
      {
        id: 'linTeFu8',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'linTeFu8-1', text: '不怕刪預算，但連衛福部都刪到剩一塊錢，這不是亂搞是什麼？', points: 0, isCorrect: false },
          { id: 'linTeFu8-2', text: '法案還改個沒完，怎麼讓我們正常表決？我要去抗議。', points: 0, isCorrect: false },
          { id: 'linTeFu8-3', text: '人不用醒，手能舉就好，投完再說。', points: 3838, isCorrect: true },
        ],
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
          text: '2024年底立法院三讀通過就業服務法條文，明定年滿80歲以上免經醫療評估（巴氏量表）即可申請外籍看護，修法後恐讓外籍看護市場供需失衡，根據中央社報導，家庭照護者關懷總會指出免平標準是另類年齡歧視，嚴重衝擊現有23萬需要外籍看護照顧重癱、臥床、多重障礙等長照家庭權益。',
          reference: 'https://www.cna.com.tw/news/aipl/202412310099.aspx'
        }
      },
      {
        id: 'linTeFu9',
        text: '大家想罷免你，說你只聽黨不聽人，你怎麼回？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'linTeFu9-1', text: '我可是黨最忠誠的一把刀，這叫使命感。', points: 222, isCorrect: true },
          { id: 'linTeFu9-2', text: '跟黨投一致不是壞事，那是紀律！', points: 22, isCorrect: false },
          { id: 'linTeFu9-3', text: '修法砍預算，不是為人民，是為黨人民。', points: 22, isCorrect: false },
        ],
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
          text: '沃草報導指出，中國國民黨立委林德福質詢除了照單全收中國國民黨的中央廚房設定的方向，也常常唸報紙社論當質詢，被許多國會助理和記者認為是沒有內涵和專業的立委，除了在國會擴權法案、選罷、憲訴、財劃等三大惡法和惡搞今年總預算都充當黨的投票部隊。',
          reference: 'https://www.cna.com.tw/news/aipl/202412310099.aspx'
        }
      },
      {
        id: 'linTeFu10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'linTeFu10-1', text: '姊說什麼就是金門福音，我負責幫她舉手。', points: 1766, isCorrect: true },
          { id: 'linTeFu10-2', text: '只要玉珍開口，票一定掉，絕對不要讓我連署這種案。', points: 0, isCorrect: false },
          { id: 'linTeFu10-3', text: '拒絕，這提案像極了一帶一路，包裝再好也不能偷渡統戰資源。', points: 0, isCorrect: false },
        ],
        explanation: {
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
          text: '陳玉珍日前針對「離島建設條例」第18條之1的第6項提出修正草案，明定大陸地區人民、法人、團體、機構、資金、物品、商品、勞務及服務，進出離島自由貿易示範區，相關辦法由事業主管機關擬定；並於說明欄第7點述明，為便利「並適度鬆綁相關規定」。',
          reference: 'https://www.cna.com.tw/news/aipl/202504110281.aspx'
        }
      },
    ];
    
    
    //徐巧芯
    
    const HSUCHIAOHSINQuestions: Question[] = [
      {
        id: 'HSUCHIAOHSIN1',
        text: '議場門鎖住進不去 ! 許巧芯要準備工具突圍。請問小芯芯助理最後帶了什麼要勇闖議場？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'HSUCHIAOHSIN1-1', text: '油壓剪', points: 10, isCorrect: true },
          { id: 'HSUCHIAOHSIN1-2', text: '打火機', points: 5, isCorrect: false },
          { id: 'HSUCHIAOHSIN1-3', text: '電鋸', points: 100, isCorrect: false },
        ],
        explanation: {
          image: '/images/explanations/HSUCHIAOHSIN1.jpg',
          text: '2024年1月31日，國民黨立委許巧芯的助理帶著油壓剪到立法院，試圖剪開議場大門。這個事件引發了廣泛討論，也凸顯了立法院內部政治對立的嚴重性。',
          reference: 'https://news.ltn.com.tw/news/politics/breakingnews/4564055'
        }
      },
      {
        id: 'HSUCHIAOHSIN2',
        text: '我是黨意小尖兵，黨指示要大砍預算，我來刪：「某些部會功能不明，乾脆只給一元！」，該點名以下哪三個部會呢？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'HSUCHIAOHSIN2-1', text: '數位部 + NCC + 陸委會', points: 10, isCorrect: true },
          { id: 'HSUCHIAOHSIN2-2', text: '魔法部 + 忍者部 + 想像部', points: 7, isCorrect: false },
          { id: 'HSUCHIAOHSIN2-3', text: '財政部 + 國防部 + 外交部', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'HSUCHIAOHSIN3',
        text: '缺專用題？',
        options: [
          { id: 'HSUCHIAOHSIN3-1', text: '反對啦！哪次不反！？', points: 12, isCorrect: true },
          { id: 'HSUCHIAOHSIN3-2', text: '我不知道這是什麼欸', points: 6, isCorrect: false },
          { id: 'HSUCHIAOHSIN3-3', text: '痾...對吼！我想起來了', points: 3, isCorrect: false },
        ],
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg'
      },
      {
        id: 'HSUCHIAOHSIN4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        options: [
          { id: 'HSUCHIAOHSIN4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 8, isCorrect: true },
          { id: 'HSUCHIAOHSIN4-2', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
          { id: 'HSUCHIAOHSIN4-3', text: '給總召摸頭，一摸泯恩仇', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'HSUCHIAOHSIN5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        options: [
          { id: 'HSUCHIAOHSIN5-1', text: '增訂「藐視國會罪」', points: 10, isCorrect: true },
          { id: 'HSUCHIAOHSIN5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'HSUCHIAOHSIN5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'HSUCHIAOHSIN6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的立委，你會？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'HSUCHIAOHSIN6-1', text: '動員外籍移工一起上街', points: 12, isCorrect: true },
          { id: 'HSUCHIAOHSIN6-2', text: '去問問盧秀燕那天有沒有空', points: 8, isCorrect: false },
          { id: 'HSUCHIAOHSIN6-3', text: '打電話給蔣萬安', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'HSUCHIAOHSIN7',
        text: '上班時間總召邀你一起去中國查訪',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'HSUCHIAOHSIN7-1', text: '好，總召說甚麼是甚麼', points: 15, isCorrect: true },
          { id: 'HSUCHIAOHSIN7-2', text: '不行，我要為民服務上班', points: 7, isCorrect: false },
          { id: 'HSUCHIAOHSIN7-3', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'HSUCHIAOHSIN8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'HSUCHIAOHSIN8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 10, isCorrect: true },
          { id: 'HSUCHIAOHSIN8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 6, isCorrect: false },
          { id: 'HSUCHIAOHSIN8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'HSUCHIAOHSIN9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'HSUCHIAOHSIN9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了 ', points: 12, isCorrect: true },
          { id: 'HSUCHIAOHSIN9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 8, isCorrect: false },
          { id: 'HSUCHIAOHSIN9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'HSUCHIAOHSIN10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'HSUCHIAOHSIN10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'HSUCHIAOHSIN10-2', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 7, isCorrect: false },
          { id: 'HSUCHIAOHSIN10-3', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'HSUCHIAOHSIN11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'HSUCHIAOHSIN11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 15, isCorrect: true },
          { id: 'HSUCHIAOHSIN11-2', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 8, isCorrect: false },
          { id: 'HSUCHIAOHSIN11-3', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'HSUCHIAOHSIN12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'HSUCHIAOHSIN12-1', text: '薪水小偷我最會，跟著總召投票準沒錯！', points: 20, isCorrect: true },
          { id: 'HSUCHIAOHSIN12-2', text: '夭壽啊，怎麼有些法案要表決了提案還在改？我要去跟總召反應', points: 10, isCorrect: false },
          { id: 'HSUCHIAOHSIN12-3', text: '等等，好多都刪除中央的業務費，甚至有些部會刪到剩1元，政府還能運作嗎？', points: 5, isCorrect: false },
        ],
      },
    ];
    //賴士葆
    
    const LaiShyhBaoQuestions: Question[] = [
      {
        id: 'LaiShyhBao1',
        text: '面對執政黨各部長的強勢回應，你決定用魔法來對抗魔法。請問黑魔法的祈使句要怎麼啟動？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LaiShyhBao1-1', text: '嘎啦嘎啦', points: 10, isCorrect: true },
          { id: 'LaiShyhBao1-2', text: '福利熊，熊福利', points: 5, isCorrect: false },
          { id: 'LaiShyhBao1-3', text: '去去，武器走', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao2',
        text: '缺特色題2',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LaiShyhBao2-1', text: 'Your intuition and feelings', points: 12, isCorrect: true },
          { id: 'LaiShyhBao2-2', text: 'Creative problem-solving', points: 6, isCorrect: false },
          { id: 'LaiShyhBao2-3', text: 'Logical analysis', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao3',
        text: '缺特色題3',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LaiShyhBao3-1', text: 'Supportive and harmonious', points: 10, isCorrect: true },
          { id: 'LaiShyhBao3-2', text: 'Innovative and stimulating', points: 5, isCorrect: false },
          { id: 'LaiShyhBao3-3', text: 'Structured and organized', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LaiShyhBao4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 15, isCorrect: true },
          { id: 'LaiShyhBao4-2', text: '給總召摸頭，一摸泯恩仇', points: 8, isCorrect: false },
          { id: 'LaiShyhBao4-3', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LaiShyhBao5-1', text: '增訂「藐視國會罪」', points: 12, isCorrect: true },
          { id: 'LaiShyhBao5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'LaiShyhBao5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的黨團立委，你會？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LaiShyhBao6-1', text: '動員外籍移工一起上街', points: 10, isCorrect: true },
          { id: 'LaiShyhBao6-2', text: '去問問盧秀燕那天有沒有空', points: 5, isCorrect: false },
          { id: 'LaiShyhBao6-3', text: '打電話給蔣萬安', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao7',
        text: '上班時間總召邀你一起去中國查訪',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LaiShyhBao7-1', text: '好，總召說甚麼是甚麼', points: 15, isCorrect: true },
          { id: 'LaiShyhBao7-2', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 8, isCorrect: false },
          { id: 'LaiShyhBao7-3', text: '不行，我要為民服務上班', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LaiShyhBao8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 10, isCorrect: true },
          { id: 'LaiShyhBao8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 5, isCorrect: false },
          { id: 'LaiShyhBao8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',        
        options: [
          { id: 'LaiShyhBao9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了', points: 12, isCorrect: true },
          { id: 'LaiShyhBao9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 6, isCorrect: false },
          { id: 'LaiShyhBao9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LaiShyhBao10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'LaiShyhBao10-2', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 5, isCorrect: false },
          { id: 'LaiShyhBao10-3', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LaiShyhBao11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 8, isCorrect: true },
          { id: 'LaiShyhBao11-2', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 4, isCorrect: false },
          { id: 'LaiShyhBao11-3', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 2, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LaiShyhBao12-1', text: '薪水小偷我最會，跟著總召投票準沒錯！', points: 20, isCorrect: true },
          { id: 'LaiShyhBao12-2', text: '等等，好多都刪除中央的業務費，甚至有些部會刪到剩1元，政府還能運作嗎？', points: 10, isCorrect: false },
          { id: 'LaiShyhBao12-3', text: '夭壽啊，怎麼有些法案要表決了提案還在改？我要去跟總召反應', points: 5, isCorrect: false },
        ],
      },
    ];
    //王鴻薇
    const wanghungweiQuestions: Question[] = [
      {
        id: 'wanghungwei1',
        text: '議場門鎖住進不去 ! 許巧芯要準備工具突圍。請問小芯芯助理最後帶了什麼要勇闖議場？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'wanghungwei1-1', text: '油壓剪', points: 10, isCorrect: true },
          { id: 'wanghungwei1-2', text: '打火機', points: 5, isCorrect: false },
          { id: 'wanghungwei1-3', text: '電鋸', points: 100, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei2',
        text: '我是黨意小尖兵，黨指示要大砍預算，我來刪：「某些部會功能不明，乾脆只給一元！」，該點名以下哪三個部會呢？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'wanghungwei2-1', text: '數位部 + NCC + 陸委會', points: 10, isCorrect: true },
          { id: 'wanghungwei2-2', text: '魔法部 + 忍者部 + 想像部', points: 7, isCorrect: false },
          { id: 'wanghungwei2-3', text: '財政部 + 國防部 + 外交部', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei3',
        text: '缺專用題？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'wanghungwei3-1', text: '反對啦！哪次不反！？', points: 12, isCorrect: true },
          { id: 'wanghungwei3-2', text: '我不知道這是什麼欸', points: 6, isCorrect: false },
          { id: 'wanghungwei3-3', text: '痾...對吼！我想起來了', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'wanghungwei4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 8, isCorrect: true },
          { id: 'wanghungwei4-2', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
          { id: 'wanghungwei4-3', text: '給總召摸頭，一摸泯恩仇', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'wanghungwei5-1', text: '增訂「藐視國會罪」', points: 10, isCorrect: true },
          { id: 'wanghungwei5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'wanghungwei5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的立委，你會？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'wanghungwei6-1', text: '動員外籍移工一起上街', points: 12, isCorrect: true },
          { id: 'wanghungwei6-2', text: '去問問盧秀燕那天有沒有空', points: 8, isCorrect: false },
          { id: 'wanghungwei6-3', text: '打電話給蔣萬安', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei7',
        text: '上班時間總召邀你一起去中國查訪',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'wanghungwei7-1', text: '好，總召說甚麼是甚麼', points: 15, isCorrect: true },
          { id: 'wanghungwei7-2', text: '不行，我要為民服務上班', points: 7, isCorrect: false },
          { id: 'wanghungwei7-3', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'wanghungwei8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 10, isCorrect: true },
          { id: 'wanghungwei8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 6, isCorrect: false },
          { id: 'wanghungwei8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'wanghungwei9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了 ', points: 12, isCorrect: true },
          { id: 'wanghungwei9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 8, isCorrect: false },
          { id: 'wanghungwei9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'wanghungwei10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'wanghungwei10-2', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 7, isCorrect: false },
          { id: 'wanghungwei10-3', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'wanghungwei11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 15, isCorrect: true },
          { id: 'wanghungwei11-2', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 8, isCorrect: false },
          { id: 'wanghungwei11-3', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'wanghungwei12-1', text: '薪水小偷我最會，跟著總召投票準沒錯！', points: 20, isCorrect: true },
          { id: 'wanghungwei12-2', text: '夭壽啊，怎麼有些法案要表決了提案還在改？我要去跟總召反應', points: 10, isCorrect: false },
          { id: 'wanghungwei12-3', text: '等等，好多都刪除中央的業務費，甚至有些部會刪到剩1元，政府還能運作嗎？', points: 5, isCorrect: false },
        ],
      },
    ];
    //李彥秀
    const LEEYEHSIUQuestions: Question[] = [
      {
        id: 'LEEYEHSIU1',
        text: '「親中疑美是工作、真正移美是生活」，李彥秀被爆未申報一間國外房產，請問彥秀這棟房子在哪？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LEEYEHSIU1-1', text: '美國加州爾灣', points: 10, isCorrect: true },
          { id: 'LEEYEHSIU1-2', text: '上海迪士尼旁', points: 5, isCorrect: false },
          { id: 'LEEYEHSIU1-3', text: '台北市內湖區', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU2',
        text: '李彥秀推動「東區門戶計畫」需大量經費，卻同時提案砍雙北經費，請問這邏輯是？？？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LEEYEHSIU2-1', text: '管他的先砍再說，砍完之後說「啊是行政院不給錢啦」', points: 12, isCorrect: true },
          { id: 'LEEYEHSIU2-2', text: '東方計畫靠彥秀自家房產抵押', points: 6, isCorrect: false },
          { id: 'LEEYEHSIU2-3', text: '新北錢太多，砍點剛好', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU3',
        text: '缺特色題3',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LEEYEHSIU3-1', text: 'Find creative workarounds', points: 15, isCorrect: true },
          { id: 'LEEYEHSIU3-2', text: 'Analyze the problem systematically', points: 8, isCorrect: false },
          { id: 'LEEYEHSIU3-3', text: 'Seek support from others', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LEEYEHSIU4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 10, isCorrect: true },
          { id: 'LEEYEHSIU4-2', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
          { id: 'LEEYEHSIU4-3', text: '給總召摸頭，一摸泯恩仇', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LEEYEHSIU5-1', text: '增訂「藐視國會罪」', points: 12, isCorrect: true },
          { id: 'LEEYEHSIU5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'LEEYEHSIU5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的黨團立委，你會？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LEEYEHSIU6-1', text: '動員外籍移工一起上街', points: 10, isCorrect: true },
          { id: 'LEEYEHSIU6-2', text: '去問問盧秀燕那天有沒有空', points: 5, isCorrect: false },
          { id: 'LEEYEHSIU6-3', text: '打電話給蔣萬安', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU7',
        text: '上班時間總召邀你一起去中國查訪',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LEEYEHSIU7-1', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 8, isCorrect: true },
          { id: 'LEEYEHSIU7-2', text: '不行，我要為民服務上班', points: 4, isCorrect: false },
          { id: 'LEEYEHSIU7-3', text: '好，總召說甚麼是甚麼', points: 2, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LEEYEHSIU8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 15, isCorrect: true },
          { id: 'LEEYEHSIU8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 8, isCorrect: false },
          { id: 'LEEYEHSIU8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LEEYEHSIU9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了', points: 12, isCorrect: true },
          { id: 'LEEYEHSIU9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 6, isCorrect: false },
          { id: 'LEEYEHSIU9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
         image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
       options: [
          { id: 'LEEYEHSIU10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'LEEYEHSIU10-2', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 5, isCorrect: false },
          { id: 'LEEYEHSIU10-3', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
         image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
       options: [
          { id: 'LEEYEHSIU11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 12, isCorrect: true },
          { id: 'LEEYEHSIU11-2', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 6, isCorrect: false },
          { id: 'LEEYEHSIU11-3', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
         image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
       options: [
          { id: 'LEEYEHSIU12-1', text: '薪水小偷我最會，跟著總召投票準沒錯！', points: 20, isCorrect: true },
          { id: 'LEEYEHSIU12-2', text: '夭壽啊，怎麼有些法案要表決了提案還在改？我要去跟總召反應', points: 10, isCorrect: false },
          { id: 'LEEYEHSIU12-3', text: '等等，好多都刪除中央的業務費，甚至有些部會刪到剩1元，政府還能運作嗎？', points: 5, isCorrect: false },
        ],
      },
    ];
    //陳玉珍
    const ChenYuJenQuestions: Question[] = [
      {
        id: 'ChenYuJen1',
        text: '面對執政黨各部長的強勢回應，你決定用魔法來對抗魔法。請問黑魔法的祈使句要怎麼啟動？',
         image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
       options: [
          { id: 'ChenYuJen1-1', text: '嘎啦嘎啦', points: 10, isCorrect: true },
          { id: 'ChenYuJen1-2', text: '福利熊，熊福利', points: 5, isCorrect: false },
          { id: 'ChenYuJen1-3', text: '去去，武器走', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen2',
        text: '缺特色題2',
         image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
       options: [
          { id: 'ChenYuJen2-1', text: 'Your intuition and feelings', points: 12, isCorrect: true },
          { id: 'ChenYuJen2-2', text: 'Creative problem-solving', points: 6, isCorrect: false },
          { id: 'ChenYuJen2-3', text: 'Logical analysis', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen3',
        text: '缺特色題3',
         image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
       options: [
          { id: 'ChenYuJen3-1', text: 'Supportive and harmonious', points: 10, isCorrect: true },
          { id: 'ChenYuJen3-2', text: 'Innovative and stimulating', points: 5, isCorrect: false },
          { id: 'ChenYuJen3-3', text: 'Structured and organized', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
         image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
       options: [
          { id: 'ChenYuJen4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 15, isCorrect: true },
          { id: 'ChenYuJen4-2', text: '給總召摸頭，一摸泯恩仇', points: 8, isCorrect: false },
          { id: 'ChenYuJen4-3', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
         image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
       options: [
          { id: 'ChenYuJen5-1', text: '增訂「藐視國會罪」', points: 12, isCorrect: true },
          { id: 'ChenYuJen5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'ChenYuJen5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的黨團立委，你會？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'ChenYuJen6-1', text: '動員外籍移工一起上街', points: 10, isCorrect: true },
          { id: 'ChenYuJen6-2', text: '去問問盧秀燕那天有沒有空', points: 5, isCorrect: false },
          { id: 'ChenYuJen6-3', text: '打電話給蔣萬安', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen7',
        text: '上班時間總召邀你一起去中國查訪',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'ChenYuJen7-1', text: '好，總召說甚麼是甚麼', points: 15, isCorrect: true },
          { id: 'ChenYuJen7-2', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 8, isCorrect: false },
          { id: 'ChenYuJen7-3', text: '不行，我要為民服務上班', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
      options: [
          { id: 'ChenYuJen8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 10, isCorrect: true },
          { id: 'ChenYuJen8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 5, isCorrect: false },
          { id: 'ChenYuJen8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
      options: [
          { id: 'ChenYuJen9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了', points: 12, isCorrect: true },
          { id: 'ChenYuJen9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 6, isCorrect: false },
          { id: 'ChenYuJen9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
         image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
       options: [
          { id: 'ChenYuJen10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'ChenYuJen10-2', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 5, isCorrect: false },
          { id: 'ChenYuJen10-3', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
          image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
      options: [
          { id: 'ChenYuJen11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 8, isCorrect: true },
          { id: 'ChenYuJen11-2', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 4, isCorrect: false },
          { id: 'ChenYuJen11-3', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 2, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
         image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
       options: [
          { id: 'ChenYuJen12-1', text: '薪水小偷我最會，跟著總召投票準沒錯！', points: 20, isCorrect: true },
          { id: 'ChenYuJen12-2', text: '等等，好多都刪除中央的業務費，甚至有些部會刪到剩1元，政府還能運作嗎？', points: 10, isCorrect: false },
          { id: 'ChenYuJen12-3', text: '夭壽啊，怎麼有些法案要表決了提案還在改？我要去跟總召反應', points: 5, isCorrect: false },
        ],
      },
    ];
    //葉元之YEHYUANCHIH
    const YEHYUANCHIHQuestions: Question[] = [
      {
        id: 'YEHYUANCHIH1',
        text: '議場門鎖住進不去 ! 許巧芯要準備工具突圍。請問小芯芯助理最後帶了什麼要勇闖議場？',
        image: 'YEHYUANCHIH1.jpg',
        options: [
          { id: 'YEHYUANCHIH1-1', text: '油壓剪', points: 10, isCorrect: true },
          { id: 'YEHYUANCHIH1-2', text: '打火機', points: 5, isCorrect: false },
          { id: 'YEHYUANCHIH1-3', text: '電鋸', points: 100, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH2',
        text: '我是黨意小尖兵，黨指示要大砍預算，我來刪：「某些部會功能不明，乾脆只給一元！」，該點名以下哪三個部會呢？',
        image: 'YEHYUANCHIH2.jpg',
        options: [
          { id: 'YEHYUANCHIH2-1', text: '數位部 + NCC + 陸委會', points: 10, isCorrect: true },
          { id: 'YEHYUANCHIH2-2', text: '魔法部 + 忍者部 + 想像部', points: 7, isCorrect: false },
          { id: 'YEHYUANCHIH2-3', text: '財政部 + 國防部 + 外交部', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH3',
        text: '缺專用題？',
        image: 'YEHYUANCHIH3.jpg',
        options: [
          { id: 'YEHYUANCHIH3-1', text: '反對啦！哪次不反！？', points: 12, isCorrect: true },
          { id: 'YEHYUANCHIH3-2', text: '我不知道這是什麼欸', points: 6, isCorrect: false },
          { id: 'YEHYUANCHIH3-3', text: '痾...對吼！我想起來了', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        image: 'YEHYUANCHIH4.jpg',
        options: [
          { id: 'YEHYUANCHIH4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 8, isCorrect: true },
          { id: 'YEHYUANCHIH4-2', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
          { id: 'YEHYUANCHIH4-3', text: '給總召摸頭，一摸泯恩仇', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        image: 'YEHYUANCHIH5.jpg',
        options: [
          { id: 'YEHYUANCHIH5-1', text: '增訂「藐視國會罪」', points: 10, isCorrect: true },
          { id: 'YEHYUANCHIH5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'YEHYUANCHIH5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的立委，你會？',
        image: 'YEHYUANCHIH6.jpg',
        options: [
          { id: 'YEHYUANCHIH6-1', text: '動員外籍移工一起上街', points: 12, isCorrect: true },
          { id: 'YEHYUANCHIH6-2', text: '去問問盧秀燕那天有沒有空', points: 8, isCorrect: false },
          { id: 'YEHYUANCHIH6-3', text: '打電話給蔣萬安', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH7',
        text: '上班時間總召邀你一起去中國查訪',
        image: 'YEHYUANCHIH7.jpg',
        options: [
          { id: 'YEHYUANCHIH7-1', text: '好，總召說甚麼是甚麼', points: 15, isCorrect: true },
          { id: 'YEHYUANCHIH7-2', text: '不行，我要為民服務上班', points: 7, isCorrect: false },
          { id: 'YEHYUANCHIH7-3', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        image: 'YEHYUANCHIH8.jpg',
        options: [
          { id: 'YEHYUANCHIH8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 10, isCorrect: true },
          { id: 'YEHYUANCHIH8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 6, isCorrect: false },
          { id: 'YEHYUANCHIH8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        image: 'YEHYUANCHIH9.jpg',
        options: [
          { id: 'YEHYUANCHIH9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了 ', points: 12, isCorrect: true },
          { id: 'YEHYUANCHIH9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 8, isCorrect: false },
          { id: 'YEHYUANCHIH9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        image: 'YEHYUANCHIH10.jpg',
        options: [
          { id: 'YEHYUANCHIH10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'YEHYUANCHIH10-2', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 7, isCorrect: false },
          { id: 'YEHYUANCHIH10-3', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        image: 'YEHYUANCHIH11.jpg',
        options: [
          { id: 'YEHYUANCHIH11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 15, isCorrect: true },
          { id: 'YEHYUANCHIH11-2', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 8, isCorrect: false },
          { id: 'YEHYUANCHIH11-3', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
        image: 'YEHYUANCHIH12.jpg',
        options: [
          { id: 'YEHYUANCHIH12-1', text: '薪水小偷我最會，跟著總召投票準沒錯！', points: 20, isCorrect: true },
          { id: 'YEHYUANCHIH12-2', text: '夭壽啊，怎麼有些法案要表決了提案還在改？我要去跟總召反應', points: 10, isCorrect: false },
          { id: 'YEHYUANCHIH12-3', text: '等等，好多都刪除中央的業務費，甚至有些部會刪到剩1元，政府還能運作嗎？', points: 5, isCorrect: false },
        ],
      },
    ];
    //傅崐萁FUKUNCHI
    const FUKUNCHIQuestions: Question[] = [
      {
        id: 'FUKUNCHI1',
        text: '缺特色題1',
        image: 'FUKUNCHI1.jpg',
        options: [
          { id: 'FUKUNCHI1-1', text: 'Explore different possibilities', points: 10, isCorrect: true },
          { id: 'FUKUNCHI1-2', text: 'Create a detailed plan', points: 5, isCorrect: false },
          { id: 'FUKUNCHI1-3', text: 'Consider how it will impact others', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI2',
        text: '缺特色題2',
        image: 'FUKUNCHI2.jpg',
        options: [
          { id: 'FUKUNCHI2-1', text: 'New experiences and diverse perspectives', points: 12, isCorrect: true },
          { id: 'FUKUNCHI2-2', text: 'Research and analysis', points: 6, isCorrect: false },
          { id: 'FUKUNCHI2-3', text: 'Meaningful conversations', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI3',
        text: '缺特色題3',
        image: 'FUKUNCHI3.jpg',
        options: [
          { id: 'FUKUNCHI3-1', text: 'Find creative workarounds', points: 15, isCorrect: true },
          { id: 'FUKUNCHI3-2', text: 'Analyze the problem systematically', points: 8, isCorrect: false },
          { id: 'FUKUNCHI3-3', text: 'Seek support from others', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        image: 'FUKUNCHI4.jpg',
        options: [
          { id: 'FUKUNCHI4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 10, isCorrect: true },
          { id: 'FUKUNCHI4-2', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
          { id: 'FUKUNCHI4-3', text: '給總召摸頭，一摸泯恩仇', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        image: 'FUKUNCHI5.jpg',
        options: [
          { id: 'FUKUNCHI5-1', text: '增訂「藐視國會罪」', points: 12, isCorrect: true },
          { id: 'FUKUNCHI5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'FUKUNCHI5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的黨團立委，你會？',
        image: 'FUKUNCHI6.jpg',
        options: [
          { id: 'FUKUNCHI6-1', text: '動員外籍移工一起上街', points: 10, isCorrect: true },
          { id: 'FUKUNCHI6-2', text: '去問問盧秀燕那天有沒有空', points: 5, isCorrect: false },
          { id: 'FUKUNCHI6-3', text: '打電話給蔣萬安', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI7',
        text: '上班時間總召邀你一起去中國查訪',
        image: 'FUKUNCHI7.jpg',
        options: [
          { id: 'FUKUNCHI7-1', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 8, isCorrect: true },
          { id: 'FUKUNCHI7-2', text: '不行，我要為民服務上班', points: 4, isCorrect: false },
          { id: 'FUKUNCHI7-3', text: '好，總召說甚麼是甚麼', points: 2, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        image: 'FUKUNCHI8.jpg',
        options: [
          { id: 'FUKUNCHI8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 15, isCorrect: true },
          { id: 'FUKUNCHI8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 8, isCorrect: false },
          { id: 'FUKUNCHI8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        image: 'FUKUNCHI9.jpg',
        options: [
          { id: 'FUKUNCHI9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了 ', points: 12, isCorrect: true },
          { id: 'FUKUNCHI9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 8, isCorrect: false },
          { id: 'FUKUNCHI9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        image: 'FUKUNCHI10.jpg',
        options: [
          { id: 'FUKUNCHI10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'FUKUNCHI10-2', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 5, isCorrect: false },
          { id: 'FUKUNCHI10-3', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        image: 'FUKUNCHI11.jpg',
        options: [
          { id: 'FUKUNCHI11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 12, isCorrect: true },
          { id: 'FUKUNCHI11-2', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 6, isCorrect: false },
          { id: 'FUKUNCHI11-3', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
        image: 'FUKUNCHI12.jpg',
        options: [
          { id: 'FUKUNCHI12-1', text: '薪水小偷我最會，跟著總召投票準沒錯！', points: 20, isCorrect: true },
          { id: 'FUKUNCHI12-2', text: '夭壽啊，怎麼有些法案要表決了提案還在改？我要去跟總召反應', points: 10, isCorrect: false },
          { id: 'FUKUNCHI12-3', text: '等等，好多都刪除中央的業務費，甚至有些部會刪到剩1元，政府還能運作嗎？', points: 5, isCorrect: false },
        ],
      },
    ];
    //洪孟楷 HungMongKai
    const HungMongKaiQuestions: Question[] = [
      {
        id: 'HungMongKai1',
        text: 'WBC世界棒球經典賽資格賽昨晚（25日）落幕，美國在台協會昨天晚間在臉書發文『恭喜台灣打進2026世界棒球經典賽』;洪孟楷也寫下：「感謝AIT！希望2026WBC中華隊跟美國隊有機會碰頭』;身為洪委員的支持者,你的社群回應？',
        image: 'HungMongKai1.jpg',
        options: [
          { id: 'HungMongKai1-1', text: '委員棒棒！！Go, Taiwan  go!!', points: 10, isCorrect: true },
          { id: 'HungMongKai1-2', text: '體育噌美國 政治噌中國？', points: 5, isCorrect: false },
          { id: 'HungMongKai1-3', text: '人家寫TAIWAN,你在那邊中華隊？？？', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai2',
        text: '今天洪孟楷終於現身林口,且國民黨黨主席朱立倫與地方議員陪同掃街,宣傳反罷免;平日不太在林口走動的他,如今動作頻頻,對此,你的回應？',
        image: 'HungMongKai2.jpg',
        options: [
          { id: 'HungMongKai2-1', text: '都是賴清德害的', points: 12, isCorrect: true },
          { id: 'HungMongKai2-2', text: '你只有選舉到了才會來林口！', points: 6, isCorrect: false },
          { id: 'HungMongKai2-3', text: '不要說林口，連淡水也從來沒看過……', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai3',
        text: '缺特色題3',
        options: [
          { id: 'HungMongKai3-1', text: 'Supportive and harmonious', points: 10, isCorrect: true },
          { id: 'HungMongKai3-2', text: 'Innovative and stimulating', points: 5, isCorrect: false },
          { id: 'HungMongKai3-3', text: 'Structured and organized', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        image: 'HungMongKai4.jpg',
        options: [
          { id: 'HungMongKai4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 15, isCorrect: true },
          { id: 'HungMongKai4-2', text: '給總召摸頭，一摸泯恩仇', points: 8, isCorrect: false },
          { id: 'HungMongKai4-3', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        image: 'HungMongKai5.jpg',
        options: [
          { id: 'HungMongKai5-1', text: '增訂「藐視國會罪」', points: 12, isCorrect: true },
          { id: 'HungMongKai5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'HungMongKai5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的黨團立委，你會？',
        image: 'HungMongKai6.jpg',
        options: [
          { id: 'HungMongKai6-1', text: '動員外籍移工一起上街', points: 10, isCorrect: true },
          { id: 'HungMongKai6-2', text: '去問問盧秀燕那天有沒有空', points: 5, isCorrect: false },
          { id: 'HungMongKai6-3', text: '打電話給蔣萬安', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai7',
        text: '上班時間總召邀你一起去中國查訪',
        image: 'HungMongKai7.jpg',
        options: [
          { id: 'HungMongKai7-1', text: '好，總召說甚麼是甚麼', points: 15, isCorrect: true },
          { id: 'HungMongKai7-2', text: '不行，我要為民服務上班', points: 7, isCorrect: false },
          { id: 'HungMongKai7-3', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        image: 'HungMongKai8.jpg',
        options: [
          { id: 'HungMongKai8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 10, isCorrect: true },
          { id: 'HungMongKai8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 5, isCorrect: false },
          { id: 'HungMongKai8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        image: 'HungMongKai9.jpg',
        options: [
          { id: 'HungMongKai9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了', points: 12, isCorrect: true },
          { id: 'HungMongKai9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 6, isCorrect: false },
          { id: 'HungMongKai9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        image: 'HungMongKai10.jpg',
        options: [
          { id: 'HungMongKai10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'HungMongKai10-2', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 5, isCorrect: false },
          { id: 'HungMongKai10-3', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        image: 'HungMongKai11.jpg',
        options: [
          { id: 'HungMongKai11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 8, isCorrect: true },
          { id: 'HungMongKai11-2', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 4, isCorrect: false },
          { id: 'HungMongKai11-3', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 2, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
        image: 'HungMongKai12.jpg',
        options: [
          { id: 'HungMongKai12-1', text: '薪水小偷我最會，跟著總召投票準沒錯！', points: 20, isCorrect: true },
          { id: 'HungMongKai12-2', text: '等等，好多都刪除中央的業務費，甚至有些部會刪到剩1元，政府還能運作嗎？', points: 10, isCorrect: false },
          { id: 'HungMongKai12-3', text: '夭壽啊，怎麼有些法案要表決了提案還在改？我要去跟總召反應', points: 5, isCorrect: false },
        ],
      },
    ];
    //羅明才 LoMingTsai
    const LoMingTsaiQuestions: Question[] = [
      {
        id: 'LoMingTsai1',
        text: '羅明才委員的反罷免之歌,由哪首著名兒歌所改編？',
        image: 'LoMingTsai1.jpg',
        options: [
          { id: 'LoMingTsai1-1', text: '兩隻老虎', points: 10, isCorrect: true },
          { id: 'LoMingTsai1-2', text: '三劍客', points: 5, isCorrect: false },
          { id: 'LoMingTsai1-3', text: '三隻小豬', points: 100, isCorrect: false },
        ],
      },
      {
        id: 'LoMingTsai2',
        text: '立委（國）羅明才說：『我唱完團結就是力量，我往前面走的時候，你們會不會前進？』,你的回應？',
        image: 'LoMingTsai2.jpg',
        options: [
          { id: 'LoMingTsai2-1', text: '會啊！！！哪次不會？！', points: 10, isCorrect: true },
          { id: 'LoMingTsai2-2', text: '426站出來！426站出來！426站出來！', points: 7, isCorrect: false },
          { id: 'LoMingTsai2-3', text: '微笑不語,默默退場', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LoMingTsai3',
        text: '缺專用題？',
        image: 'LoMingTsai3.jpg',
        options: [
          { id: 'LoMingTsai3-1', text: '缺專用題？', points: 12, isCorrect: true },
          { id: 'LoMingTsai3-2', text: '缺專用題？', points: 6, isCorrect: false },
          { id: 'LoMingTsai3-3', text: '缺專用題？', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LoMingTsai4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        options: [
          { id: 'LoMingTsai4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 8, isCorrect: true },
          { id: 'LoMingTsai4-2', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
          { id: 'LoMingTsai4-3', text: '給總召摸頭，一摸泯恩仇', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LoMingTsai5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        options: [
          { id: 'LoMingTsai5-1', text: '增訂「藐視國會罪」', points: 10, isCorrect: true },
          { id: 'LoMingTsai5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'LoMingTsai5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LoMingTsai6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的立委，你會？',
        options: [
          { id: 'LoMingTsai6-1', text: '動員外籍移工一起上街', points: 12, isCorrect: true },
          { id: 'LoMingTsai6-2', text: '去問問盧秀燕那天有沒有空', points: 8, isCorrect: false },
          { id: 'LoMingTsai6-3', text: '打電話給蔣萬安', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'LoMingTsai7',
        text: '上班時間總召邀你一起去中國查訪',
        options: [
          { id: 'LoMingTsai7-1', text: '好，總召說甚麼是甚麼', points: 15, isCorrect: true },
          { id: 'LoMingTsai7-2', text: '不行，我要為民服務上班', points: 7, isCorrect: false },
          { id: 'LoMingTsai7-3', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LoMingTsai8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        options: [
          { id: 'LoMingTsai8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 10, isCorrect: true },
          { id: 'LoMingTsai8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 6, isCorrect: false },
          { id: 'LoMingTsai8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LoMingTsai9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        options: [
          { id: 'LoMingTsai9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了 ', points: 12, isCorrect: true },
          { id: 'LoMingTsai9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 8, isCorrect: false },
          { id: 'LoMingTsai9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LoMingTsai10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        options: [
          { id: 'LoMingTsai10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'LoMingTsai10-2', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 7, isCorrect: false },
          { id: 'LoMingTsai10-3', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'LoMingTsai11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        options: [
          { id: 'LoMingTsai11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 15, isCorrect: true },
          { id: 'LoMingTsai11-2', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 8, isCorrect: false },
          { id: 'LoMingTsai11-3', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'LoMingTsai12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
        options: [
          { id: 'LoMingTsai12-1', text: '薪水小偷我最會，跟著總召投票準沒錯！', points: 20, isCorrect: true },
          { id: 'LoMingTsai12-2', text: '夭壽啊，怎麼有些法案要表決了提案還在改？我要去跟總召反應', points: 10, isCorrect: false },
          { id: 'LoMingTsai12-3', text: '等等，好多都刪除中央的業務費，甚至有些部會刪到剩1元，政府還能運作嗎？', points: 5, isCorrect: false },
        ],
      },
    ];
    //廖先翔 LIAOHsienHsiang
    const LIAOHsienHsiangQuestions: Question[] = [
      {
        id: 'LIAOHsienHsiang1',
        text: '缺特色題1',
        options: [
          { id: 'LIAOHsienHsiang1-1', text: 'Explore different possibilities', points: 10, isCorrect: true },
          { id: 'LIAOHsienHsiang1-2', text: 'Create a detailed plan', points: 5, isCorrect: false },
          { id: 'LIAOHsienHsiang1-3', text: 'Consider how it will impact others', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LIAOHsienHsiang2',
        text: '缺特色題2',
        options: [
          { id: 'LIAOHsienHsiang2-1', text: 'New experiences and diverse perspectives', points: 12, isCorrect: true },
          { id: 'LIAOHsienHsiang2-2', text: 'Research and analysis', points: 6, isCorrect: false },
          { id: 'LIAOHsienHsiang2-3', text: 'Meaningful conversations', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LIAOHsienHsiang3',
        text: '缺特色題3',
        options: [
          { id: 'LIAOHsienHsiang3-1', text: 'Find creative workarounds', points: 15, isCorrect: true },
          { id: 'LIAOHsienHsiang3-2', text: 'Analyze the problem systematically', points: 8, isCorrect: false },
          { id: 'LIAOHsienHsiang3-3', text: 'Seek support from others', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'LIAOHsienHsiang4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        options: [
          { id: 'LIAOHsienHsiang4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 10, isCorrect: true },
          { id: 'LIAOHsienHsiang4-2', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
          { id: 'LIAOHsienHsiang4-3', text: '給總召摸頭，一摸泯恩仇', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LIAOHsienHsiang5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        options: [
          { id: 'LIAOHsienHsiang5-1', text: '增訂「藐視國會罪」', points: 12, isCorrect: true },
          { id: 'LIAOHsienHsiang5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'LIAOHsienHsiang5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LIAOHsienHsiang6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的黨團立委，你會？',
        options: [
          { id: 'LIAOHsienHsiang6-1', text: '動員外籍移工一起上街', points: 10, isCorrect: true },
          { id: 'LIAOHsienHsiang6-2', text: '去問問盧秀燕那天有沒有空', points: 5, isCorrect: false },
          { id: 'LIAOHsienHsiang6-3', text: '打電話給蔣萬安', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LIAOHsienHsiang7',
        text: '上班時間總召邀你一起去中國查訪',
        options: [
          { id: 'LIAOHsienHsiang7-1', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 8, isCorrect: true },
          { id: 'LIAOHsienHsiang7-2', text: '不行，我要為民服務上班', points: 4, isCorrect: false },
          { id: 'LIAOHsienHsiang7-3', text: '好，總召說甚麼是甚麼', points: 2, isCorrect: false },
        ],
      },
      {
        id: 'LIAOHsienHsiang8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        options: [
          { id: 'LIAOHsienHsiang8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 15, isCorrect: true },
          { id: 'LIAOHsienHsiang8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 8, isCorrect: false },
          { id: 'LIAOHsienHsiang8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'LIAOHsienHsiang9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        options: [
          { id: 'LIAOHsienHsiang9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了', points: 12, isCorrect: true },
          { id: 'LIAOHsienHsiang9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 6, isCorrect: false },
          { id: 'LIAOHsienHsiang9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LIAOHsienHsiang10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        options: [
          { id: 'LIAOHsienHsiang10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'LIAOHsienHsiang10-2', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 5, isCorrect: false },
          { id: 'LIAOHsienHsiang10-3', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LIAOHsienHsiang11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        options: [
          { id: 'LIAOHsienHsiang11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 12, isCorrect: true },
          { id: 'LIAOHsienHsiang11-2', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 6, isCorrect: false },
          { id: 'LIAOHsienHsiang11-3', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LIAOHsienHsiang12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
        options: [
          { id: 'LIAOHsienHsiang12-1', text: '薪水小偷我最會，跟著總召投票準沒錯！', points: 20, isCorrect: true },
          { id: 'LIAOHsienHsiang12-2', text: '夭壽啊，怎麼有些法案要表決了提案還在改？我要去跟總召反應', points: 10, isCorrect: false },
          { id: 'LIAOHsienHsiang12-3', text: '等等，好多都刪除中央的業務費，甚至有些部會刪到剩1元，政府還能運作嗎？', points: 5, isCorrect: false },
        ],
      },
    ];
    //羅智強 LOCHIHCHIANG
    const LOCHIHCHIANGQuestions: Question[] = [
      {
        id: 'LOCHIHCHIANG1',
        text: '面對執政黨各部長的強勢回應，你決定用魔法來對抗魔法。請問黑魔法的祈使句要怎麼啟動？',
        image: 'LOCHIHCHIANG1.jpg',
        options: [
          { id: 'LOCHIHCHIANG1-1', text: '嘎啦嘎啦', points: 10, isCorrect: true },
          { id: 'LOCHIHCHIANG1-2', text: '福利熊，熊福利', points: 5, isCorrect: false },
          { id: 'LOCHIHCHIANG1-3', text: '去去，武器走', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG2',
        text: '缺特色題2',
        image: 'LOCHIHCHIANG2.jpg',
        options: [
          { id: 'LOCHIHCHIANG2-1', text: 'Your intuition and feelings', points: 12, isCorrect: true },
          { id: 'LOCHIHCHIANG2-2', text: 'Creative problem-solving', points: 6, isCorrect: false },
          { id: 'LOCHIHCHIANG2-3', text: 'Logical analysis', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG3',
        text: '缺特色題3',
        image: 'LOCHIHCHIANG3.jpg',
        options: [
          { id: 'LOCHIHCHIANG3-1', text: 'Supportive and harmonious', points: 10, isCorrect: true },
          { id: 'LOCHIHCHIANG3-2', text: 'Innovative and stimulating', points: 5, isCorrect: false },
          { id: 'LOCHIHCHIANG3-3', text: 'Structured and organized', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        image: 'LOCHIHCHIANG4.jpg',
        options: [
          { id: 'LOCHIHCHIANG4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 15, isCorrect: true },
          { id: 'LOCHIHCHIANG4-2', text: '給總召摸頭，一摸泯恩仇', points: 8, isCorrect: false },
          { id: 'LOCHIHCHIANG4-3', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        image: 'HungMongKai5.jpg',
        options: [
          { id: 'LOCHIHCHIANG5-1', text: '增訂「藐視國會罪」', points: 12, isCorrect: true },
          { id: 'LOCHIHCHIANG5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'LOCHIHCHIANG5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的黨團立委，你會？',
        image: 'HungMongKai6.jpg',
        options: [
          { id: 'LOCHIHCHIANG6-1', text: '動員外籍移工一起上街', points: 10, isCorrect: true },
          { id: 'LOCHIHCHIANG6-2', text: '去問問盧秀燕那天有沒有空', points: 5, isCorrect: false },
          { id: 'LOCHIHCHIANG6-3', text: '打電話給蔣萬安', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG7',
        text: '上班時間總召邀你一起去中國查訪',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LOCHIHCHIANG7-1', text: '好，總召說甚麼是甚麼', points: 15, isCorrect: true },
          { id: 'LOCHIHCHIANG7-2', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 8, isCorrect: false },
          { id: 'LOCHIHCHIANG7-3', text: '不行，我要為民服務上班', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LOCHIHCHIANG8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 10, isCorrect: true },
          { id: 'LOCHIHCHIANG8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 5, isCorrect: false },
          { id: 'LOCHIHCHIANG8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LOCHIHCHIANG9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了', points: 12, isCorrect: true },
          { id: 'LOCHIHCHIANG9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 6, isCorrect: false },
          { id: 'LOCHIHCHIANG9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LOCHIHCHIANG10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'LOCHIHCHIANG10-2', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 5, isCorrect: false },
          { id: 'LOCHIHCHIANG10-3', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LOCHIHCHIANG11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 8, isCorrect: true },
          { id: 'LOCHIHCHIANG11-2', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 4, isCorrect: false },
          { id: 'LOCHIHCHIANG11-3', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 2, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        options: [
          { id: 'LOCHIHCHIANG12-1', text: '薪水小偷我最會，跟著總召投票準沒錯！', points: 20, isCorrect: true },
          { id: 'LOCHIHCHIANG12-2', text: '等等，好多都刪除中央的業務費，甚至有些部會刪到剩1元，政府還能運作嗎？', points: 10, isCorrect: false },
          { id: 'LOCHIHCHIANG12-3', text: '夭壽啊，怎麼有些法案要表決了提案還在改？我要去跟總召反應', points: 5, isCorrect: false },
        ],
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
       ChenYuJen: {
        id: 'ChenYuJen',
        questions: ChenYuJenQuestions,
      },  
       YEHYUANCHIH: {
        id: 'YEHYUANCHIH',
        questions: YEHYUANCHIHQuestions,
      },
       FUKUNCHI: {
        id: 'FUKUNCHI',
        questions: FUKUNCHIQuestions,
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