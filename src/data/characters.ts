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
    description: '在永和經歷過市議員市長到立法委員已超過30個年頭，讓永和人最有感的是在國會殿堂閉目養神',
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
    description: '曾加入新黨、擔任台北市議員時是中國央視熱門來賓、不避諱表態親中立場，專長技能：肉搜並曝光罷免自己的公民個資。',
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
//陳玉珍ChenYuJen
  // {
  //   id: 'ChenYuJen',//人物id
  //   name: '陳玉珍',
  //   districts:'新北市第9選區',
  //   avatar: '/images/陳玉珍_8bit.gif?auto=compress&cs=tinysrgb&w=300',
  //   description: '陳玉珍陳玉珍陳玉珍陳玉珍陳玉珍陳玉珍陳玉珍陳玉珍陳玉珍陳玉珍陳玉珍陳玉珍',
  //   questionSetId: 'ChenYuJen',//對應問題系列
  // },
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
//傅崐萁FUKUNCHI
  // {
  //   id: 'FUKUNCHI',//人物id
  //   name: '傅崐萁',
  //   districts:'花蓮縣',
  //   avatar: '/images/傅崐萁8bit.gif?auto=compress&cs=tinysrgb&w=300',
  //   description: '代表花蓮的立法委員，在0403大地震，太魯閣滿目瘡痍、搜救人員努力搜救之時，帶著國會立法委員前往敵對勢力國家接旨',
  //   questionSetId: 'FUKUNCHI',//對應問題系列
  // },
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
  
];
