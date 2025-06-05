import { Question, QuestionSet } from '../types';
//對應characters.ts 裡的 id 欄位，設定每個立委的問題內容
/*
    id: '題目的id，通常會按照順序往下1-N題',
    text: '題目內容',
    options: [
      { id: '答案id', text: '答案內容', points: 答案得分, isCorrect: true },
      { id: '答案id', text: '答案內容', points: 答案得分, isCorrect: false },
      { id: '答案id', text: '答案內容', points: 答案得分, isCorrect: false },
    ],
    isCorrect: true 才能前往下一題，其他會直接到結束頁面
 */
    const ChangChihLunQuestions: Question[] = [
      {
        id: 'ChangChihLun1',
        text: '為了保住立委席次，你決定到AB里和里民共餐，你決定送什麼東西表示親民？',
        options: [
          { id: 'ChangChihLun1-1', text: '站出來投不同意宣言', points: 10, isCorrect: true },
          { id: 'ChangChihLun1-2', text: '一張都更同意書', points: 5, isCorrect: false },
          { id: 'ChangChihLun1-3', text: '一個便當+一杯飲料', points: 100, isCorrect: false },
        ],
      },
      {
        id: 'ChangChihLun2',
        text: '媽媽陳錦錠議員說母親節即將到來，政治獻金法說小物只能限定30元，你決定贈送＿＿＿給里民？',
        options: [
          { id: 'ChangChihLun2-1', text: '洗衣精', points: 10, isCorrect: true },
          { id: 'ChangChihLun2-2', text: '修容組', points: 7, isCorrect: false },
          { id: 'ChangChihLun2-3', text: '垃圾袋', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'ChangChihLun3',
        text: '行政院警告反對覆議《總預算案》將影響地方補助，因此你想推動的中和汙水下水道工程預算也會受影響，所以你決定？',
        options: [
          { id: 'ChangChihLun3-1', text: '反對啦！哪次不反！？', points: 12, isCorrect: true },
          { id: 'ChangChihLun3-2', text: '我不知道這是什麼欸', points: 6, isCorrect: false },
          { id: 'ChangChihLun3-3', text: '痾...對吼！我想起來了', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'ChangChihLun4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        options: [
          { id: 'ChangChihLun4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 8, isCorrect: true },
          { id: 'ChangChihLun4-2', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
          { id: 'ChangChihLun4-3', text: '給總召摸頭，一摸泯恩仇', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'ChangChihLun5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        options: [
          { id: 'ChangChihLun5-1', text: '增訂「藐視國會罪」', points: 10, isCorrect: true },
          { id: 'ChangChihLun5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'ChangChihLun5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'ChangChihLun6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的立委，你會？',
        options: [
          { id: 'ChangChihLun6-1', text: '動員外籍移工一起上街', points: 12, isCorrect: true },
          { id: 'ChangChihLun6-2', text: '去問問盧秀燕那天有沒有空', points: 8, isCorrect: false },
          { id: 'ChangChihLun6-3', text: '打電話給蔣萬安', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'ChangChihLun7',
        text: '上班時間總召邀你一起去中國查訪',
        options: [
          { id: 'ChangChihLun7-1', text: '好，總召說甚麼是甚麼', points: 15, isCorrect: true },
          { id: 'ChangChihLun7-2', text: '不行，我要為民服務上班', points: 7, isCorrect: false },
          { id: 'ChangChihLun7-3', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'ChangChihLun8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        options: [
          { id: 'ChangChihLun8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 10, isCorrect: true },
          { id: 'ChangChihLun8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 6, isCorrect: false },
          { id: 'ChangChihLun8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'ChangChihLun9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        options: [
          { id: 'ChangChihLun9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了 ', points: 12, isCorrect: true },
          { id: 'ChangChihLun9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 8, isCorrect: false },
          { id: 'ChangChihLun9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'ChangChihLun10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        options: [
          { id: 'ChangChihLun10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'ChangChihLun10-2', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 7, isCorrect: false },
          { id: 'ChangChihLun10-3', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'a11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        options: [
          { id: 'a11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 15, isCorrect: true },
          { id: 'a11-2', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 8, isCorrect: false },
          { id: 'a11-3', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'a12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
        options: [
          { id: 'a12-1', text: '薪水小偷我最會，跟著總召投票準沒錯！', points: 20, isCorrect: true },
          { id: 'a12-2', text: '夭壽啊，怎麼有些法案要表決了提案還在改？我要去跟總召反應', points: 10, isCorrect: false },
          { id: 'a12-3', text: '等等，好多都刪除中央的業務費，甚至有些部會刪到剩1元，政府還能運作嗎？', points: 5, isCorrect: false },
        ],
      },
    ];
    
    //林德福
    const linTeFuQuestions: Question[] = [
      {
        id: 'linTeFu1',
        text: '缺特色題1',
        options: [
          { id: 'linTeFu1-1', text: 'Explore different possibilities', points: 10, isCorrect: true },
          { id: 'linTeFu1-2', text: 'Create a detailed plan', points: 5, isCorrect: false },
          { id: 'linTeFu1-3', text: 'Consider how it will impact others', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'linTeFu2',
        text: '缺特色題2',
        options: [
          { id: 'linTeFu2-1', text: 'New experiences and diverse perspectives', points: 12, isCorrect: true },
          { id: 'linTeFu2-2', text: 'Research and analysis', points: 6, isCorrect: false },
          { id: 'linTeFu2-3', text: 'Meaningful conversations', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'linTeFu3',
        text: '缺特色題3',
        options: [
          { id: 'linTeFu3-1', text: 'Find creative workarounds', points: 15, isCorrect: true },
          { id: 'linTeFu3-2', text: 'Analyze the problem systematically', points: 8, isCorrect: false },
          { id: 'linTeFu3-3', text: 'Seek support from others', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'linTeFu4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        options: [
          { id: 'linTeFu4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 10, isCorrect: true },
          { id: 'linTeFu4-2', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
          { id: 'linTeFu4-3', text: '給總召摸頭，一摸泯恩仇', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'linTeFu5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        options: [
          { id: 'linTeFu5-1', text: '增訂「藐視國會罪」', points: 12, isCorrect: true },
          { id: 'linTeFu5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'linTeFu5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'linTeFu6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的黨團立委，你會？',
        options: [
          { id: 'linTeFu6-1', text: '動員外籍移工一起上街', points: 10, isCorrect: true },
          { id: 'linTeFu6-2', text: '去問問盧秀燕那天有沒有空', points: 5, isCorrect: false },
          { id: 'linTeFu6-3', text: '打電話給蔣萬安', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LINTEFU7',
        text: '上班時間總召邀你一起去中國查訪',
        options: [
          { id: 'linTeFu7-1', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 8, isCorrect: true },
          { id: 'linTeFu7-2', text: '不行，我要為民服務上班', points: 4, isCorrect: false },
          { id: 'linTeFu7-3', text: '好，總召說甚麼是甚麼', points: 2, isCorrect: false },
        ],
      },
      {
        id: 'linTeFu8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        options: [
          { id: 'linTeFu8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 15, isCorrect: true },
          { id: 'linTeFu8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 8, isCorrect: false },
          { id: 'linTeFu8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'linTeFu9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        options: [
          { id: 'LINTEFU9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了', points: 12, isCorrect: true },
          { id: 'LINTEFU9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 6, isCorrect: false },
          { id: 'LINTEFU9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'linTeFu10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        options: [
          { id: 'linTeFu10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'linTeFu10-2', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 5, isCorrect: false },
          { id: 'linTeFu10-3', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'linTeFu11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        options: [
          { id: 'linTeFu11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 12, isCorrect: true },
          { id: 'linTeFu11-2', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 6, isCorrect: false },
          { id: 'linTeFu11-3', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'linTeFu12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
        options: [
          { id: 'linTeFu12-1', text: '薪水小偷我最會，跟著總召投票準沒錯！', points: 20, isCorrect: true },
          { id: 'linTeFu12-2', text: '夭壽啊，怎麼有些法案要表決了提案還在改？我要去跟總召反應', points: 10, isCorrect: false },
          { id: 'linTeFu12-3', text: '等等，好多都刪除中央的業務費，甚至有些部會刪到剩1元，政府還能運作嗎？', points: 5, isCorrect: false },
        ],
      },
    ];
    
    
    //徐巧芯
    
    const HSUCHIAOHSINQuestions: Question[] = [
      {
        id: 'HSUCHIAOHSIN1',
        text: '議場門鎖住進不去 ! 許巧芯要準備工具突圍。請問小芯芯助理最後帶了什麼要勇闖議場？',
        options: [
          { id: 'HSUCHIAOHSIN1-1', text: '油壓剪', points: 10, isCorrect: true },
          { id: 'HSUCHIAOHSIN1-2', text: '打火機', points: 5, isCorrect: false },
          { id: 'HSUCHIAOHSIN1-3', text: '電鋸', points: 100, isCorrect: false },
        ],
      },
      {
        id: 'HSUCHIAOHSIN2',
        text: '我是黨意小尖兵，黨指示要大砍預算，我來刪：「某些部會功能不明，乾脆只給一元！」，該點名以下哪三個部會呢？',
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
        options: [
          { id: 'HSUCHIAOHSIN6-1', text: '動員外籍移工一起上街', points: 12, isCorrect: true },
          { id: 'HSUCHIAOHSIN6-2', text: '去問問盧秀燕那天有沒有空', points: 8, isCorrect: false },
          { id: 'HSUCHIAOHSIN6-3', text: '打電話給蔣萬安', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'HSUCHIAOHSIN7',
        text: '上班時間總召邀你一起去中國查訪',
        options: [
          { id: 'HSUCHIAOHSIN7-1', text: '好，總召說甚麼是甚麼', points: 15, isCorrect: true },
          { id: 'HSUCHIAOHSIN7-2', text: '不行，我要為民服務上班', points: 7, isCorrect: false },
          { id: 'HSUCHIAOHSIN7-3', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'HSUCHIAOHSIN8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        options: [
          { id: 'HSUCHIAOHSIN8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 10, isCorrect: true },
          { id: 'HSUCHIAOHSIN8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 6, isCorrect: false },
          { id: 'HSUCHIAOHSIN8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'HSUCHIAOHSIN9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        options: [
          { id: 'HSUCHIAOHSIN9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了 ', points: 12, isCorrect: true },
          { id: 'HSUCHIAOHSIN9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 8, isCorrect: false },
          { id: 'HSUCHIAOHSIN9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'HSUCHIAOHSIN10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        options: [
          { id: 'HSUCHIAOHSIN10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'HSUCHIAOHSIN10-2', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 7, isCorrect: false },
          { id: 'HSUCHIAOHSIN10-3', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'HSUCHIAOHSIN11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        options: [
          { id: 'HSUCHIAOHSIN11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 15, isCorrect: true },
          { id: 'HSUCHIAOHSIN11-2', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 8, isCorrect: false },
          { id: 'HSUCHIAOHSIN11-3', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'HSUCHIAOHSIN12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
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
        options: [
          { id: 'LaiShyhBao1-1', text: '嘎啦嘎啦', points: 10, isCorrect: true },
          { id: 'LaiShyhBao1-2', text: '福利熊，熊福利', points: 5, isCorrect: false },
          { id: 'LaiShyhBao1-3', text: '去去，武器走', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao2',
        text: '缺特色題2',
        options: [
          { id: 'LaiShyhBao2-1', text: 'Your intuition and feelings', points: 12, isCorrect: true },
          { id: 'LaiShyhBao2-2', text: 'Creative problem-solving', points: 6, isCorrect: false },
          { id: 'LaiShyhBao2-3', text: 'Logical analysis', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao3',
        text: '缺特色題3',
        options: [
          { id: 'LaiShyhBao3-1', text: 'Supportive and harmonious', points: 10, isCorrect: true },
          { id: 'LaiShyhBao3-2', text: 'Innovative and stimulating', points: 5, isCorrect: false },
          { id: 'LaiShyhBao3-3', text: 'Structured and organized', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        options: [
          { id: 'LaiShyhBao4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 15, isCorrect: true },
          { id: 'LaiShyhBao4-2', text: '給總召摸頭，一摸泯恩仇', points: 8, isCorrect: false },
          { id: 'LaiShyhBao4-3', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        options: [
          { id: 'LaiShyhBao5-1', text: '增訂「藐視國會罪」', points: 12, isCorrect: true },
          { id: 'LaiShyhBao5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'LaiShyhBao5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的黨團立委，你會？',
        options: [
          { id: 'LaiShyhBao6-1', text: '動員外籍移工一起上街', points: 10, isCorrect: true },
          { id: 'LaiShyhBao6-2', text: '去問問盧秀燕那天有沒有空', points: 5, isCorrect: false },
          { id: 'LaiShyhBao6-3', text: '打電話給蔣萬安', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao7',
        text: '上班時間總召邀你一起去中國查訪',
        options: [
          { id: 'LaiShyhBao7-1', text: '好，總召說甚麼是甚麼', points: 15, isCorrect: true },
          { id: 'LaiShyhBao7-2', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 8, isCorrect: false },
          { id: 'LaiShyhBao7-3', text: '不行，我要為民服務上班', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        options: [
          { id: 'LaiShyhBao8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 10, isCorrect: true },
          { id: 'LaiShyhBao8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 5, isCorrect: false },
          { id: 'LaiShyhBao8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        options: [
          { id: 'LaiShyhBao9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了', points: 12, isCorrect: true },
          { id: 'LaiShyhBao9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 6, isCorrect: false },
          { id: 'LaiShyhBao9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        options: [
          { id: 'LaiShyhBao10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'LaiShyhBao10-2', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 5, isCorrect: false },
          { id: 'LaiShyhBao10-3', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        options: [
          { id: 'LaiShyhBao11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 8, isCorrect: true },
          { id: 'LaiShyhBao11-2', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 4, isCorrect: false },
          { id: 'LaiShyhBao11-3', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 2, isCorrect: false },
        ],
      },
      {
        id: 'LaiShyhBao12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
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
        options: [
          { id: 'wanghungwei1-1', text: '油壓剪', points: 10, isCorrect: true },
          { id: 'wanghungwei1-2', text: '打火機', points: 5, isCorrect: false },
          { id: 'wanghungwei1-3', text: '電鋸', points: 100, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei2',
        text: '我是黨意小尖兵，黨指示要大砍預算，我來刪：「某些部會功能不明，乾脆只給一元！」，該點名以下哪三個部會呢？',
        options: [
          { id: 'wanghungwei2-1', text: '數位部 + NCC + 陸委會', points: 10, isCorrect: true },
          { id: 'wanghungwei2-2', text: '魔法部 + 忍者部 + 想像部', points: 7, isCorrect: false },
          { id: 'wanghungwei2-3', text: '財政部 + 國防部 + 外交部', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei3',
        text: '缺專用題？',
        options: [
          { id: 'wanghungwei3-1', text: '反對啦！哪次不反！？', points: 12, isCorrect: true },
          { id: 'wanghungwei3-2', text: '我不知道這是什麼欸', points: 6, isCorrect: false },
          { id: 'wanghungwei3-3', text: '痾...對吼！我想起來了', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        options: [
          { id: 'wanghungwei4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 8, isCorrect: true },
          { id: 'wanghungwei4-2', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
          { id: 'wanghungwei4-3', text: '給總召摸頭，一摸泯恩仇', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        options: [
          { id: 'wanghungwei5-1', text: '增訂「藐視國會罪」', points: 10, isCorrect: true },
          { id: 'wanghungwei5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'wanghungwei5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的立委，你會？',
        options: [
          { id: 'wanghungwei6-1', text: '動員外籍移工一起上街', points: 12, isCorrect: true },
          { id: 'wanghungwei6-2', text: '去問問盧秀燕那天有沒有空', points: 8, isCorrect: false },
          { id: 'wanghungwei6-3', text: '打電話給蔣萬安', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei7',
        text: '上班時間總召邀你一起去中國查訪',
        options: [
          { id: 'wanghungwei7-1', text: '好，總召說甚麼是甚麼', points: 15, isCorrect: true },
          { id: 'wanghungwei7-2', text: '不行，我要為民服務上班', points: 7, isCorrect: false },
          { id: 'wanghungwei7-3', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        options: [
          { id: 'wanghungwei8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 10, isCorrect: true },
          { id: 'wanghungwei8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 6, isCorrect: false },
          { id: 'wanghungwei8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        options: [
          { id: 'wanghungwei9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了 ', points: 12, isCorrect: true },
          { id: 'wanghungwei9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 8, isCorrect: false },
          { id: 'wanghungwei9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        options: [
          { id: 'wanghungwei10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'wanghungwei10-2', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 7, isCorrect: false },
          { id: 'wanghungwei10-3', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        options: [
          { id: 'wanghungwei11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 15, isCorrect: true },
          { id: 'wanghungwei11-2', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 8, isCorrect: false },
          { id: 'wanghungwei11-3', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'wanghungwei12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
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
        options: [
          { id: 'LEEYEHSIU1-1', text: '美國加州爾灣', points: 10, isCorrect: true },
          { id: 'LEEYEHSIU1-2', text: '上海迪士尼旁', points: 5, isCorrect: false },
          { id: 'LEEYEHSIU1-3', text: '台北市內湖區', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU2',
        text: '李彥秀推動「東區門戶計畫」需大量經費，卻同時提案砍雙北經費，請問這邏輯是？？？',
        options: [
          { id: 'LEEYEHSIU2-1', text: '管他的先砍再說，砍完之後說「啊是行政院不給錢啦」', points: 12, isCorrect: true },
          { id: 'LEEYEHSIU2-2', text: '東方計畫靠彥秀自家房產抵押', points: 6, isCorrect: false },
          { id: 'LEEYEHSIU2-3', text: '新北錢太多，砍點剛好', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU3',
        text: '缺特色題3',
        options: [
          { id: 'LEEYEHSIU3-1', text: 'Find creative workarounds', points: 15, isCorrect: true },
          { id: 'LEEYEHSIU3-2', text: 'Analyze the problem systematically', points: 8, isCorrect: false },
          { id: 'LEEYEHSIU3-3', text: 'Seek support from others', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        options: [
          { id: 'LEEYEHSIU4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 10, isCorrect: true },
          { id: 'LEEYEHSIU4-2', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
          { id: 'LEEYEHSIU4-3', text: '給總召摸頭，一摸泯恩仇', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        options: [
          { id: 'LEEYEHSIU5-1', text: '增訂「藐視國會罪」', points: 12, isCorrect: true },
          { id: 'LEEYEHSIU5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'LEEYEHSIU5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的黨團立委，你會？',
        options: [
          { id: 'LEEYEHSIU6-1', text: '動員外籍移工一起上街', points: 10, isCorrect: true },
          { id: 'LEEYEHSIU6-2', text: '去問問盧秀燕那天有沒有空', points: 5, isCorrect: false },
          { id: 'LEEYEHSIU6-3', text: '打電話給蔣萬安', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU7',
        text: '上班時間總召邀你一起去中國查訪',
        options: [
          { id: 'LEEYEHSIU7-1', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 8, isCorrect: true },
          { id: 'LEEYEHSIU7-2', text: '不行，我要為民服務上班', points: 4, isCorrect: false },
          { id: 'LEEYEHSIU7-3', text: '好，總召說甚麼是甚麼', points: 2, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        options: [
          { id: 'LEEYEHSIU8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 15, isCorrect: true },
          { id: 'LEEYEHSIU8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 8, isCorrect: false },
          { id: 'LEEYEHSIU8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        options: [
          { id: 'LEEYEHSIU9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了', points: 12, isCorrect: true },
          { id: 'LEEYEHSIU9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 6, isCorrect: false },
          { id: 'LEEYEHSIU9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        options: [
          { id: 'LEEYEHSIU10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'LEEYEHSIU10-2', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 5, isCorrect: false },
          { id: 'LEEYEHSIU10-3', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        options: [
          { id: 'LEEYEHSIU11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 12, isCorrect: true },
          { id: 'LEEYEHSIU11-2', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 6, isCorrect: false },
          { id: 'LEEYEHSIU11-3', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LEEYEHSIU12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
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
        options: [
          { id: 'ChenYuJen1-1', text: '嘎啦嘎啦', points: 10, isCorrect: true },
          { id: 'ChenYuJen1-2', text: '福利熊，熊福利', points: 5, isCorrect: false },
          { id: 'ChenYuJen1-3', text: '去去，武器走', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen2',
        text: '缺特色題2',
        options: [
          { id: 'ChenYuJen2-1', text: 'Your intuition and feelings', points: 12, isCorrect: true },
          { id: 'ChenYuJen2-2', text: 'Creative problem-solving', points: 6, isCorrect: false },
          { id: 'ChenYuJen2-3', text: 'Logical analysis', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen3',
        text: '缺特色題3',
        options: [
          { id: 'ChenYuJen3-1', text: 'Supportive and harmonious', points: 10, isCorrect: true },
          { id: 'ChenYuJen3-2', text: 'Innovative and stimulating', points: 5, isCorrect: false },
          { id: 'ChenYuJen3-3', text: 'Structured and organized', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        options: [
          { id: 'ChenYuJen4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 15, isCorrect: true },
          { id: 'ChenYuJen4-2', text: '給總召摸頭，一摸泯恩仇', points: 8, isCorrect: false },
          { id: 'ChenYuJen4-3', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        options: [
          { id: 'ChenYuJen5-1', text: '增訂「藐視國會罪」', points: 12, isCorrect: true },
          { id: 'ChenYuJen5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'ChenYuJen5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的黨團立委，你會？',
        options: [
          { id: 'ChenYuJen6-1', text: '動員外籍移工一起上街', points: 10, isCorrect: true },
          { id: 'ChenYuJen6-2', text: '去問問盧秀燕那天有沒有空', points: 5, isCorrect: false },
          { id: 'ChenYuJen6-3', text: '打電話給蔣萬安', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen7',
        text: '上班時間總召邀你一起去中國查訪',
        options: [
          { id: 'ChenYuJen7-1', text: '好，總召說甚麼是甚麼', points: 15, isCorrect: true },
          { id: 'ChenYuJen7-2', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 8, isCorrect: false },
          { id: 'ChenYuJen7-3', text: '不行，我要為民服務上班', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        options: [
          { id: 'ChenYuJen8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 10, isCorrect: true },
          { id: 'ChenYuJen8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 5, isCorrect: false },
          { id: 'ChenYuJen8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        options: [
          { id: 'ChenYuJen9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了', points: 12, isCorrect: true },
          { id: 'ChenYuJen9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 6, isCorrect: false },
          { id: 'ChenYuJen9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        options: [
          { id: 'ChenYuJen10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'ChenYuJen10-2', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 5, isCorrect: false },
          { id: 'ChenYuJen10-3', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        options: [
          { id: 'ChenYuJen11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 8, isCorrect: true },
          { id: 'ChenYuJen11-2', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 4, isCorrect: false },
          { id: 'ChenYuJen11-3', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 2, isCorrect: false },
        ],
      },
      {
        id: 'ChenYuJen12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
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
        options: [
          { id: 'YEHYUANCHIH1-1', text: '油壓剪', points: 10, isCorrect: true },
          { id: 'YEHYUANCHIH1-2', text: '打火機', points: 5, isCorrect: false },
          { id: 'YEHYUANCHIH1-3', text: '電鋸', points: 100, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH2',
        text: '我是黨意小尖兵，黨指示要大砍預算，我來刪：「某些部會功能不明，乾脆只給一元！」，該點名以下哪三個部會呢？',
        options: [
          { id: 'YEHYUANCHIH2-1', text: '數位部 + NCC + 陸委會', points: 10, isCorrect: true },
          { id: 'YEHYUANCHIH2-2', text: '魔法部 + 忍者部 + 想像部', points: 7, isCorrect: false },
          { id: 'YEHYUANCHIH2-3', text: '財政部 + 國防部 + 外交部', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH3',
        text: '缺專用題？',
        options: [
          { id: 'YEHYUANCHIH3-1', text: '反對啦！哪次不反！？', points: 12, isCorrect: true },
          { id: 'YEHYUANCHIH3-2', text: '我不知道這是什麼欸', points: 6, isCorrect: false },
          { id: 'YEHYUANCHIH3-3', text: '痾...對吼！我想起來了', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        options: [
          { id: 'YEHYUANCHIH4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 8, isCorrect: true },
          { id: 'YEHYUANCHIH4-2', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
          { id: 'YEHYUANCHIH4-3', text: '給總召摸頭，一摸泯恩仇', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        options: [
          { id: 'YEHYUANCHIH5-1', text: '增訂「藐視國會罪」', points: 10, isCorrect: true },
          { id: 'YEHYUANCHIH5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'YEHYUANCHIH5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的立委，你會？',
        options: [
          { id: 'YEHYUANCHIH6-1', text: '動員外籍移工一起上街', points: 12, isCorrect: true },
          { id: 'YEHYUANCHIH6-2', text: '去問問盧秀燕那天有沒有空', points: 8, isCorrect: false },
          { id: 'YEHYUANCHIH6-3', text: '打電話給蔣萬安', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH7',
        text: '上班時間總召邀你一起去中國查訪',
        options: [
          { id: 'YEHYUANCHIH7-1', text: '好，總召說甚麼是甚麼', points: 15, isCorrect: true },
          { id: 'YEHYUANCHIH7-2', text: '不行，我要為民服務上班', points: 7, isCorrect: false },
          { id: 'YEHYUANCHIH7-3', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        options: [
          { id: 'YEHYUANCHIH8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 10, isCorrect: true },
          { id: 'YEHYUANCHIH8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 6, isCorrect: false },
          { id: 'YEHYUANCHIH8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        options: [
          { id: 'YEHYUANCHIH9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了 ', points: 12, isCorrect: true },
          { id: 'YEHYUANCHIH9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 8, isCorrect: false },
          { id: 'YEHYUANCHIH9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        options: [
          { id: 'YEHYUANCHIH10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'YEHYUANCHIH10-2', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 7, isCorrect: false },
          { id: 'YEHYUANCHIH10-3', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        options: [
          { id: 'YEHYUANCHIH11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 15, isCorrect: true },
          { id: 'YEHYUANCHIH11-2', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 8, isCorrect: false },
          { id: 'YEHYUANCHIH11-3', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'YEHYUANCHIH12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
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
        options: [
          { id: 'FUKUNCHI1-1', text: 'Explore different possibilities', points: 10, isCorrect: true },
          { id: 'FUKUNCHI1-2', text: 'Create a detailed plan', points: 5, isCorrect: false },
          { id: 'FUKUNCHI1-3', text: 'Consider how it will impact others', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI2',
        text: '缺特色題2',
        options: [
          { id: 'FUKUNCHI2-1', text: 'New experiences and diverse perspectives', points: 12, isCorrect: true },
          { id: 'FUKUNCHI2-2', text: 'Research and analysis', points: 6, isCorrect: false },
          { id: 'FUKUNCHI2-3', text: 'Meaningful conversations', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI3',
        text: '缺特色題3',
        options: [
          { id: 'FUKUNCHI3-1', text: 'Find creative workarounds', points: 15, isCorrect: true },
          { id: 'FUKUNCHI3-2', text: 'Analyze the problem systematically', points: 8, isCorrect: false },
          { id: 'FUKUNCHI3-3', text: 'Seek support from others', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        options: [
          { id: 'FUKUNCHI4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 10, isCorrect: true },
          { id: 'FUKUNCHI4-2', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
          { id: 'FUKUNCHI4-3', text: '給總召摸頭，一摸泯恩仇', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        options: [
          { id: 'FUKUNCHI5-1', text: '增訂「藐視國會罪」', points: 12, isCorrect: true },
          { id: 'FUKUNCHI5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'FUKUNCHI5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的黨團立委，你會？',
        options: [
          { id: 'FUKUNCHI6-1', text: '動員外籍移工一起上街', points: 10, isCorrect: true },
          { id: 'FUKUNCHI6-2', text: '去問問盧秀燕那天有沒有空', points: 5, isCorrect: false },
          { id: 'FUKUNCHI6-3', text: '打電話給蔣萬安', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI7',
        text: '上班時間總召邀你一起去中國查訪',
        options: [
          { id: 'FUKUNCHI7-1', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 8, isCorrect: true },
          { id: 'FUKUNCHI7-2', text: '不行，我要為民服務上班', points: 4, isCorrect: false },
          { id: 'FUKUNCHI7-3', text: '好，總召說甚麼是甚麼', points: 2, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        options: [
          { id: 'FUKUNCHI8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 15, isCorrect: true },
          { id: 'FUKUNCHI8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 8, isCorrect: false },
          { id: 'FUKUNCHI8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        options: [
          { id: 'FUKUNCHI9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了', points: 12, isCorrect: true },
          { id: 'FUKUNCHI9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 6, isCorrect: false },
          { id: 'FUKUNCHI9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        options: [
          { id: 'FUKUNCHI10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'FUKUNCHI10-2', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 5, isCorrect: false },
          { id: 'FUKUNCHI10-3', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        options: [
          { id: 'FUKUNCHI11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 12, isCorrect: true },
          { id: 'FUKUNCHI11-2', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 6, isCorrect: false },
          { id: 'FUKUNCHI11-3', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'FUKUNCHI12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
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
        options: [
          { id: 'HungMongKai1-1', text: '委員棒棒！！Go, Taiwan  go!!', points: 10, isCorrect: true },
          { id: 'HungMongKai1-2', text: '體育噌美國 政治噌中國？', points: 5, isCorrect: false },
          { id: 'HungMongKai1-3', text: '人家寫TAIWAN,你在那邊中華隊？？？', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai2',
        text: '今天洪孟楷終於現身林口,且國民黨黨主席朱立倫與地方議員陪同掃街,宣傳反罷免;平日不太在林口走動的他,如今動作頻頻,對此,你的回應？',
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
        options: [
          { id: 'HungMongKai4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 15, isCorrect: true },
          { id: 'HungMongKai4-2', text: '給總召摸頭，一摸泯恩仇', points: 8, isCorrect: false },
          { id: 'HungMongKai4-3', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        options: [
          { id: 'HungMongKai5-1', text: '增訂「藐視國會罪」', points: 12, isCorrect: true },
          { id: 'HungMongKai5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'HungMongKai5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的黨團立委，你會？',
        options: [
          { id: 'HungMongKai6-1', text: '動員外籍移工一起上街', points: 10, isCorrect: true },
          { id: 'HungMongKai6-2', text: '去問問盧秀燕那天有沒有空', points: 5, isCorrect: false },
          { id: 'HungMongKai6-3', text: '打電話給蔣萬安', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai7',
        text: '上班時間總召邀你一起去中國查訪',
        options: [
          { id: 'HungMongKai7-1', text: '好，總召說甚麼是甚麼', points: 15, isCorrect: true },
          { id: 'HungMongKai7-2', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 8, isCorrect: false },
          { id: 'HungMongKai7-3', text: '不行，我要為民服務上班', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        options: [
          { id: 'HungMongKai8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 10, isCorrect: true },
          { id: 'HungMongKai8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 5, isCorrect: false },
          { id: 'HungMongKai8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        options: [
          { id: 'HungMongKai9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了', points: 12, isCorrect: true },
          { id: 'HungMongKai9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 6, isCorrect: false },
          { id: 'HungMongKai9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        options: [
          { id: 'HungMongKai10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'HungMongKai10-2', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 5, isCorrect: false },
          { id: 'HungMongKai10-3', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        options: [
          { id: 'HungMongKai11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 8, isCorrect: true },
          { id: 'HungMongKai11-2', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 4, isCorrect: false },
          { id: 'HungMongKai11-3', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 2, isCorrect: false },
        ],
      },
      {
        id: 'HungMongKai12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
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
        options: [
          { id: 'LoMingTsai1-1', text: '兩隻老虎', points: 10, isCorrect: true },
          { id: 'LoMingTsai1-2', text: '三劍客', points: 5, isCorrect: false },
          { id: 'LoMingTsai1-3', text: '三隻小豬', points: 100, isCorrect: false },
        ],
      },
      {
        id: 'LoMingTsai2',
        text: '立委（國）羅明才說：『我唱完團結就是力量，我往前面走的時候，你們會不會前進？』,你的回應？',
        options: [
          { id: 'LoMingTsai2-1', text: '會啊！！！哪次不會？！', points: 10, isCorrect: true },
          { id: 'LoMingTsai2-2', text: '426站出來！426站出來！426站出來！', points: 7, isCorrect: false },
          { id: 'LoMingTsai2-3', text: '微笑不語,默默退場', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LoMingTsai3',
        text: '缺專用題？',
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
        options: [
          { id: 'LOCHIHCHIANG1-1', text: '嘎啦嘎啦', points: 10, isCorrect: true },
          { id: 'LOCHIHCHIANG1-2', text: '福利熊，熊福利', points: 5, isCorrect: false },
          { id: 'LOCHIHCHIANG1-3', text: '去去，武器走', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG2',
        text: '缺特色題2',
        options: [
          { id: 'LOCHIHCHIANG2-1', text: 'Your intuition and feelings', points: 12, isCorrect: true },
          { id: 'LOCHIHCHIANG2-2', text: 'Creative problem-solving', points: 6, isCorrect: false },
          { id: 'LOCHIHCHIANG2-3', text: 'Logical analysis', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG3',
        text: '缺特色題3',
        options: [
          { id: 'LOCHIHCHIANG3-1', text: 'Supportive and harmonious', points: 10, isCorrect: true },
          { id: 'LOCHIHCHIANG3-2', text: 'Innovative and stimulating', points: 5, isCorrect: false },
          { id: 'LOCHIHCHIANG3-3', text: 'Structured and organized', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG4',
        text: '在準備強行通過《選罷法》、《憲訴法》與《財劃法》三讀前夕，民進黨立委說要摸黑闖入立法院，佔領主席台。你打算？',
        options: [
          { id: 'LOCHIHCHIANG4-1', text: '大聲放話：「你們全部進去啦，我就把它燒掉。」', points: 15, isCorrect: true },
          { id: 'LOCHIHCHIANG4-2', text: '給總召摸頭，一摸泯恩仇', points: 8, isCorrect: false },
          { id: 'LOCHIHCHIANG4-3', text: '和總召商量，號召大家一起去守夜', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG5',
        text: '關於藍白二黨所提出的《立法院職權行使法》條例，下列何者為貴黨的提案內容？',
        options: [
          { id: 'LOCHIHCHIANG5-1', text: '增訂「藐視國會罪」', points: 12, isCorrect: true },
          { id: 'LOCHIHCHIANG5-2', text: '立法院會議，須有立法委員總額三分之一出席，始得開會。', points: 6, isCorrect: false },
          { id: 'LOCHIHCHIANG5-3', text: '陽光來了，貪腐再見', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG6',
        text: '黨主席朱立倫邀請各位426上凱道「反綠共戰獨裁」，身為忠貞的黨團立委，你會？',
        options: [
          { id: 'LOCHIHCHIANG6-1', text: '動員外籍移工一起上街', points: 10, isCorrect: true },
          { id: 'LOCHIHCHIANG6-2', text: '去問問盧秀燕那天有沒有空', points: 5, isCorrect: false },
          { id: 'LOCHIHCHIANG6-3', text: '打電話給蔣萬安', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG7',
        text: '上班時間總召邀你一起去中國查訪',
        options: [
          { id: 'LOCHIHCHIANG7-1', text: '好，總召說甚麼是甚麼', points: 15, isCorrect: true },
          { id: 'LOCHIHCHIANG7-2', text: '是立院總召還是統戰團總召，我有沒聽錯，當然要拒絕。', points: 8, isCorrect: false },
          { id: 'LOCHIHCHIANG7-3', text: '不行，我要為民服務上班', points: 5, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG8',
        text: '不知道為什麼，黨團突然說要提案中配取得身分證年限從六年改為四年。',
        options: [
          { id: 'LOCHIHCHIANG8-1', text: '啊哈，正好，兩岸本一家，同意啊，以後還會多很多感恩戴德我這1%的99%選票。', points: 10, isCorrect: true },
          { id: 'LOCHIHCHIANG8-2', text: '越來越多中配在抖音宣傳要武統台灣，太可惡了，我不能提這種幫中國洗人口的提案。', points: 5, isCorrect: false },
          { id: 'LOCHIHCHIANG8-3', text: '其實中配待遇已經優於外籍配偶了，我持保留態度。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG9',
        text: '總召說不管怎樣，你們給我把預算都刪掉30%',
        options: [
          { id: 'LOCHIHCHIANG9-1', text: '阿，我看不懂那些，隨便弄個理由刪除好了', points: 12, isCorrect: true },
          { id: 'LOCHIHCHIANG9-2', text: '你腦子有洞，開班會也不是這樣舉手表決不討論阿。', points: 6, isCorrect: false },
          { id: 'LOCHIHCHIANG9-3', text: '不行，我要認真審預算', points: 4, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG10',
        text: '金門坦克，不是啦，玉珍姐說為了金門發財..發展，我們要修改離島條例18條。',
        options: [
          { id: 'LOCHIHCHIANG10-1', text: '坦克...姊對金門最熟悉了，跟著他就對了。', points: 10, isCorrect: true },
          { id: 'LOCHIHCHIANG10-2', text: '只要是陳玉珍提的，一定就會吸引砲火讓我掉支持度，拒絕啦。', points: 5, isCorrect: false },
          { id: 'LOCHIHCHIANG10-3', text: '提案怪怪的ㄟ，開放大陸醫生、資源進入金門，這不就一帶一路的套路嗎?不行啦。', points: 3, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG11',
        text: '你同事徐欣瑩用鎖住會議室大絕招，用三分鐘把超嚴格選罷法提案送出委員會，你怎麼看？',
        options: [
          { id: 'LOCHIHCHIANG11-1', text: '當然要鎖門自己審啊！懶得聽民進黨廢話，不愧是我的天才同事', points: 8, isCorrect: true },
          { id: 'LOCHIHCHIANG11-2', text: '超不爽，這麼高調的做法跟戒嚴沒兩樣，會害我回地方很難跟選民交代', points: 4, isCorrect: false },
          { id: 'LOCHIHCHIANG11-3', text: '不同聲音應經過充分討論，才是國會殿堂該有的民主精神', points: 2, isCorrect: false },
        ],
      },
      {
        id: 'LOCHIHCHIANG12',
        text: '這會期就快過了，中央政府總預算今天才要審，要熬夜表決完七百多份提案，是在哭喔⋯⋯',
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