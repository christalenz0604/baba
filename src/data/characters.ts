import { Character } from '../types';
import { getImagePath } from '../utils/pathUtils';

export const characters: Character[] = [
  {
    id: 'ChangChihLun',//人物id
    name: '張智倫',
    districts:'新北市第8選區',
    avatar: getImagePath('/images/character/ChangChihLun_pic_Pickup.gif'),
    portrait: getImagePath('/images/portraits/ChangChihLun_pic_small.gif'),
    description: '張家二兒子，爸爸是張慶忠AKA半分鐘通過服貿那位。媽媽是陳錦錠，有時都分不清楚政績是他的還是他媽的。',
    questionSetId: 'ChangChihLun',//對應問題系列
    score: 36140,
    //images according to the score
    resultCharacterImages: {
      success: getImagePath('/images/results/avatar/ChangChihLun_pic_Happy.gif'),
      fail: getImagePath('/images/results/avatar/ChangChihLun_pic_Sad.gif'),
    }
  },
  {
    id: 'linTeFu',//人物id
    name: '林德福',
    districts:'新北市第9選區',
    avatar: getImagePath('/images/character/linTeFu_pic_Pickup.gif'),
    portrait: getImagePath('/images/portraits/linTeFu_pic_small.gif'),
    description: '在永和經歷過市民代表、市長到立法委員已將近40個年頭，讓永和人最有感的是在國會殿堂閉目養神',
    questionSetId: 'linTeFu',//對應問題系列
    score: 29474,
    resultCharacterImages: {
      success: getImagePath('/images/results/avatar/linTeFu_pic_Happy.gif'),
      fail: getImagePath('/images/results/avatar/linTeFu_pic_Sad.gif'),
    }
  },
  //徐巧芯HSUCHIAOHSIN_題目OK
  {
    id: 'HSUCHIAOHSIN',//人物id
    name: '徐巧芯',
    districts:'臺北市第7選區',
    avatar: getImagePath('/images/character/HSUCHIAOHSIN_pic_Pickup.gif'),
    portrait: getImagePath('/images/portraits/HSUCHIAOHSIN_pic_small.gif'),
    description: '我有中指，我驕傲！',
    questionSetId: 'HSUCHIAOHSIN',//對應問題系列
    score: 41201,
    resultCharacterImages: {
      success: getImagePath('/images/results/avatar/HSUCHIAOHSIN_pic_Happy.gif'),
      fail: getImagePath('/images/results/avatar/HSUCHIAOHSIN_pic_Sad.gif'),
    }
  },
  
//賴士葆LaiShyhBao
  {
    id: 'LaiShyhBao',//人物id
    name: '賴士葆',
    districts:'臺北市第8選區',
    avatar: getImagePath('/images/character/LaiShyhBao_pic_Pickup.gif'),
    portrait: getImagePath('/images/portraits/LaiShyhBao_pic_small.gif'),
    description: '賴士葆曾高調批評「禮讓行人是白痴政策」。卻親身示範了這項政策存在的必要性——駕車撞上行人後，他將責任歸咎於天色昏暗、A柱死角，並暗指行人邊走邊聊天沒注意車輛。',
    questionSetId: 'LaiShyhBao',//對應問題系列
    score: 34040,
    resultCharacterImages: {
      success: getImagePath('/images/results/avatar/LaiShyhBao_pic_Happy.gif'),
      fail: getImagePath('/images/results/avatar/LaiShyhBao_pic_Sad.gif'),
    }
  },
//王鴻薇wanghungwei
  {
    id: 'wanghungwei',//人物id
    name: '王鴻薇',
    districts:'臺北市第3選區',
    avatar: getImagePath('/images/character/wanghungwei_pic_Pickup.gif'),
    portrait: getImagePath('/images/portraits/wanghungwei_pic_small.gif'),
    description: '曾加入新黨、擔任台北市議員時是中國央視熱門來賓、不避諱表態親中立場，專長技能：花式造謠、肉搜並曝光罷免自己的公民個資。',
    questionSetId: 'wanghungwei',//對應問題系列
    score: 45818,
    resultCharacterImages: {
      success: getImagePath('/images/results/avatar/wanghungwei_pic_Happy.gif'),
      fail: getImagePath('/images/results/avatar/wanghungwei_pic_Sad.gif'),
    }
  },
//李彥秀LEEYEHSIU
  {
    id: 'LEEYEHSIU',//人物id
    name: '李彥秀',
    districts:'臺北市第4選區',
    avatar: getImagePath('/images/character/LEEYEHSIU_pic_Pickup.gif'),
    portrait: getImagePath('/images/portraits/LEEYEHSIU_pic_small.gif'),
    description: '疑美是工作 移美是生活',
    questionSetId: 'LEEYEHSIU',//對應問題系列
    score: 45183,
    resultCharacterImages: {
      success: getImagePath('/images/results/avatar/LEEYEHSIU_pic_Happy.gif'),
      fail: getImagePath('/images/results/avatar/LEEYEHSIU_pic_Sad.gif'),
    }
  },
//葉元之YEHYUANCHIH
  {
    id: 'YEHYUANCHIH',//人物id
    name: '葉元之',
    districts:'新北市第7選區',
    avatar: getImagePath('/images/character/YEHYUANCHIH_pic_Pickup.gif'),
    portrait: getImagePath('/images/portraits/YEHYUANCHIH_pic_small.gif'),
    description: '想當我的助理嗎？你需要接受下列條件每日接受言語羞辱，不得生病請假，恩...還有什麼呢？算了，算了，我要去準備上通告了！',
    questionSetId: 'YEHYUANCHIH',//對應問題系列
    score: 32236,
    resultCharacterImages: {
      success: getImagePath('/images/results/avatar/YEHYUANCHIH_pic_Happy.gif'),
      fail: getImagePath('/images/results/avatar/YEHYUANCHIH_pic_Sad.gif'),
    }
  },
//洪孟楷
  {
    id: 'HungMongKai',//人物id
    name: '洪孟楷',
    districts:'新北市第1選區',
    avatar: getImagePath('/images/character/HungMongKai_pic_Pickup.gif'),
    portrait: getImagePath('/images/portraits/HungMongKai_pic_small.gif'),
    description: '媽寶立委;擅長跳針與甩鍋，專精無邏輯辯護術，出招自帶迷因效果',
    questionSetId: 'HungMongKai',//對應問題系列
    score: 54888,
    resultCharacterImages: {
      success: getImagePath('/images/results/avatar/HungMongKai_pic_Happy.gif'),
      fail: getImagePath('/images/results/avatar/HungMongKai_pic_Sad.gif'),
    }
  },
//羅明才
  {
    id: 'LoMingTsai',//人物id
    name: '羅明才',
    districts:'新北市第11選區',
    avatar: getImagePath('/images/character/LoMingTsai_pic_Pickup.gif'),
    portrait: getImagePath('/images/portraits/LoMingTsai_pic_small.gif'),
    description: '2024年亦成為目前立法院黨團中最資深的「八連霸」立委，其父羅福助為「台灣最大黑道幫派——天道盟」創辦人，2012年獲罪潛逃中國並被通緝至今。',
    questionSetId: 'LoMingTsai',//對應問題系列
    score: 34076,
    resultCharacterImages: {
      success: getImagePath('/images/results/avatar/LoMingTsai_pic_Happy.gif'),
      fail: getImagePath('/images/results/avatar/LoMingTsai_pic_Sad.gif'),
    }
  },
//廖先翔
  {
    id: 'LIAOHsienHsiang',//人物id
    name: '廖先翔',
    districts:'新北市第12選區',
    avatar: getImagePath('/images/character/LIAOHsienHsiang_pic_Pickup.gif'),
    portrait: getImagePath('/images/portraits/LIAOHsienHsiang_pic_small.gif'),
    description: '被稱為廖先蝦。因刪減外交部預算，用超蝦理由：「中國」未依約採購宏都拉斯白蝦。還主動提案刪除汐止當地社宅計畫。再加林林總總的疑似國土侵占疑雲，被認為不懂人間疾苦。',
    questionSetId: 'LIAOHsienHsiang',//對應問題系列
    score: 36774,
    resultCharacterImages: {
      success: getImagePath('/images/results/avatar/LIAOHsienHsiang_pic_Happy.gif'),
      fail: getImagePath('/images/results/avatar/LIAOHsienHsiang_pic_Sad.gif'),
    }
  },
//羅智強
  {
    id: 'LOCHIHCHIANG',//人物id
    name: '羅智強',
    districts:'臺北市第6選區',
    avatar: getImagePath('/images/character/LOCHIHCHIANG_pic_Pickup.gif'),
    portrait: getImagePath('/images/portraits/LOCHIHCHIANG_pic_small.gif'),
    description: '又名大安區閒人，擅長沾醬油，常運用各種話題為自己製造聲量。號稱自己日行萬步，跟著「皮克敏」散步到月球。',
    questionSetId: 'LOCHIHCHIANG',//對應問題系列
    score: 36398,
    resultCharacterImages: {
      success: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Happy.gif'),
      fail: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Sad.gif'),
    }
  },
//傅崐萁
{
  id: 'fuKungChi',//人物id
  name: '傅崐萁',
  districts:'花蓮縣選舉區',
  avatar: getImagePath('/images/character/fu_kc_Pickup.gif'),
  portrait: getImagePath('/images/portraits/LOCHIHCHIANG_pic_small.gif'),
  description: '人稱花蓮王，出場自帶BGM(不知道有沒有談授權的壇島警騎)只有我當總召才能把立法院帶成這樣',
  questionSetId: 'fuKungChi',//對應問題系列
  score: 36398,
  resultCharacterImages: {
    success: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Happy.gif'),
    fail: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Sad.gif'),
  }
},
//林沛祥
{
  id: 'linPeixiang',//人物id
  name: '林沛祥',
  districts:'基隆市選舉區',
  avatar: getImagePath('/images/character/lin_px_Pickup.gif'),
  portrait: getImagePath('/images/portraits/LOCHIHCHIANG_pic_small.gif'),
  description: '所謂的top one percent ，1%的人就是在說我..我們這些立委，持續推動國家前進，不管方向你喜不喜歡。',
  questionSetId: 'linPeixiang',//對應問題系列
  score: 36398,
  resultCharacterImages: {
    success: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Happy.gif'),
    fail: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Sad.gif'),
  }
},
//牛煦庭
{
  id: 'niuXuting',//人物id
  name: '牛煦庭',
  districts:'桃園市第1選舉區',
  avatar: getImagePath('/images/character/LOCHIHCHIANG_pic_Pickup.gif'),
  portrait: getImagePath('/images/portraits/LOCHIHCHIANG_pic_small.gif'),
  description: '立院最強菜鳥：砍預算、挺中配，還能揮拳打同事，一人包辦全場風波。',
  questionSetId: 'niuXuting',//對應問題系列
  score: 36398,
  resultCharacterImages: {
    success: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Happy.gif'),
    fail: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Sad.gif'),
  }
},
//涂權吉
{
  id: 'tuQuanji',//人物id
  name: '涂權吉',
  districts:'桃園市第2選舉區',
  avatar: getImagePath('/images/character/tu_qj_Pickup.gif'),
  portrait: getImagePath('/images/portraits/LOCHIHCHIANG_pic_small.gif'),
  description: '百分之百授權的辦公室主任說：「不用跟委員說明...」？誰才是立委？涂權吉在哪裏？',
  questionSetId: 'tuQuanji',//對應問題系列
  score: 36398,
  resultCharacterImages: {
    success: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Happy.gif'),
    fail: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Sad.gif'),
  }
},
//魯明哲
{
  id: 'luMingzhe',//人物id
  name: '魯明哲',
  districts:'桃園市第3選舉區',
  avatar: getImagePath('/images/character/lu_mc_Pickup.gif'),
  portrait: getImagePath('/images/portraits/LOCHIHCHIANG_pic_small.gif'),
  description: '父親是八二三砲戰英雄，長大後卻成了「立院小透明」，存在感極低，但親中政策，一項也沒錯過。嘴上挺中華民國，實際上卻做著背叛正藍軍的事。',
  questionSetId: 'luMingzhe',//對應問題系列
  score: 36398,
  resultCharacterImages: {
    success: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Happy.gif'),
    fail: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Sad.gif'),
  }
},
//萬美玲
{
  id: 'waMeiling',//人物id
  name: '萬美玲',
  districts:'桃園市第4選舉區',
  avatar: getImagePath('/images/character/LOCHIHCHIANG_pic_Pickup.gif'),
  portrait: getImagePath('/images/portraits/LOCHIHCHIANG_pic_small.gif'),
  description: '選舉和被罷免都用同樣的萬年照片當看板，樁腳滿桃園，一言不合就封鎖你的標準雙面人。',
  questionSetId: 'waMeiling',//對應問題系列
  score: 36398,
  resultCharacterImages: {
    success: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Happy.gif'),
    fail: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Sad.gif'),
  }
},
//呂玉玲
{
  id: 'luYuling',//人物id
  name: '呂玉玲',
  districts:'桃園市第5選舉區',
  avatar: getImagePath('/images/character/lu_yl_Pickup.gif'),
  portrait: getImagePath('/images/portraits/LOCHIHCHIANG_pic_small.gif'),
  description: '蟠踞平鎮龍潭16年的呂后，最強招式是送不完的吐司。',
  questionSetId: 'luYuling',//對應問題系列
  score: 36398,
  resultCharacterImages: {
    success: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Happy.gif'),
    fail: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Sad.gif'),
  }
},
//邱若華
{
  id: 'qiuRuohua',//人物id
  name: '邱若華',
  districts:'桃園市第6選舉區',
  avatar: getImagePath('/images/character/LOCHIHCHIANG_pic_Pickup.gif'),
  portrait: getImagePath('/images/portraits/LOCHIHCHIANG_pic_small.gif'),
  description: '桃園市議會議長的姪女，低調版的彰化謝家，空降成為立委卻毫無存在感。',
  questionSetId: 'qiuRuohua',//對應問題系列
  score: 36398,
  resultCharacterImages: {
    success: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Happy.gif'),
    fail: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Sad.gif'),
  }
},
//廖偉翔
{
  id: 'liaoWeixiang',//人物id
  name: '廖偉翔',
  districts:'台中市第4選舉區',
  avatar: getImagePath('/images/character/liao_wx_Pickup.gif'),
  portrait: getImagePath('/images/portraits/LOCHIHCHIANG_pic_small.gif'),
  description: '媽媽選輸就靠兒子復仇，專長是成功爭取藍線捷運的時空旅人收割術，以及揍人的違憲拳，不講他在新光三越氣爆搞直播+移動三角錐，還不知道他是誰。',
  questionSetId: 'liaoWeixiang',//對應問題系列
  score: 36398,
  resultCharacterImages: {
    success: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Happy.gif'),
    fail: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Sad.gif'),
  }
},
//黃健豪
{
  id: 'huangJianhao',//人物id
  name: '黃健豪',
  districts:'台中市第5選舉區',
  avatar: getImagePath('/images/character/LOCHIHCHIANG_pic_Pickup.gif'),
  portrait: getImagePath('/images/portraits/LOCHIHCHIANG_pic_small.gif'),
  description: '申請育兒津貼並反手提案刪育嬰預算的新科立委。',
  questionSetId: 'qiuRuohua',//對應問題系列
  score: 36398,
  resultCharacterImages: {
    success: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Happy.gif'),
    fail: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Sad.gif'),
  }
},
//羅廷瑋
{
  id: 'luoTingwei',//人物id
  name: '羅廷瑋',
  districts:'台中市第6選舉區',
  avatar: getImagePath('/images/character/LOCHIHCHIANG_pic_Pickup.gif'),
  portrait: getImagePath('/images/portraits/LOCHIHCHIANG_pic_small.gif'),
  description: '全副武裝、穿戴滿滿護具入議場鎖喉鍾佳濱的"戰將"。',
  questionSetId: 'luoTingwei',//對應問題系列
  score: 36398,
  resultCharacterImages: {
    success: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Happy.gif'),
    fail: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Sad.gif'),
  }
},
//鄭正鈐
{
  id: 'zhengZhengqin',//人物id
  name: '鄭正鈐',
  districts:'新竹市選舉區',
  avatar: getImagePath('/images/character/LOCHIHCHIANG_pic_Pickup.gif'),
  portrait: getImagePath('/images/portraits/LOCHIHCHIANG_pic_small.gif'),
  description: '全副武裝、穿戴滿滿護具入議場鎖喉鍾佳濱的"戰將"。',
  questionSetId: 'zhengZhengqin',//對應問題系列
  score: 36398,
  resultCharacterImages: {
    success: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Happy.gif'),
    fail: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Sad.gif'),
  }
},
//丁學忠
{
  id: 'dingXuezhong',//人物id
  name: '丁學忠',
  districts:'雲林縣第1選舉區',
  avatar: getImagePath('/images/character/LOCHIHCHIANG_pic_Pickup.gif'),
  portrait: getImagePath('/images/portraits/LOCHIHCHIANG_pic_small.gif'),
  description: '全副武裝、穿戴滿滿護具入議場鎖喉鍾佳濱的"戰將"。',
  questionSetId: 'dingXuezhong',//對應問題系列
  score: 36398,
  resultCharacterImages: {
    success: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Happy.gif'),
    fail: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Sad.gif'),
  }
},
//黃建賓
{
  id: 'huangJianbin',//人物id
  name: '黃建賓',
  districts:'台東縣選舉區',
  avatar: getImagePath('/images/character/LOCHIHCHIANG_pic_Pickup.gif'),
  portrait: getImagePath('/images/portraits/LOCHIHCHIANG_pic_small.gif'),
  description: '全副武裝、穿戴滿滿護具入議場鎖喉鍾佳濱的"戰將"。',
  questionSetId: 'huangJianbin',//對應問題系列
  score: 36398,
  resultCharacterImages: {
    success: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Happy.gif'),
    fail: getImagePath('/images/results/avatar/LOCHIHCHIANG_pic_Sad.gif'),
  }
},
];
