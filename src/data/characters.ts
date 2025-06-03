import { Character } from '../types';

export const characters: Character[] = [
  {
    id: 'analytical',//人物id
    name: '張智倫',
    avatar: '/baba_test/images/張智倫8bit.png?auto=compress&cs=tinysrgb&w=300',
    description: '張家二兒子，爸爸是張慶忠AKA半分鐘通過服貿那位。媽媽是陳錦錠，有時都分不清楚政績是媽媽的還是誰的。',
    questionSetId: 'analytical',//對應問題系列
  },
  {
    id: 'creative',//人物id
    name: '林德福',
    avatar: '/baba_test/images/林德福8bit.png?auto=compress&cs=tinysrgb&w=300',
    description: '在永和經歷過市議員市長到立法委員已超過30個年頭，讓永和人最有感的是在國會殿堂閉目養神',
    questionSetId: 'creative',//對應問題系列
  },
  {
    id: 'emotional',//人物id
    name: '傅崐萁',
    avatar: '/baba_test/images/傅崐萁8bit.png?auto=compress&cs=tinysrgb&w=300',
    description: '代表花蓮的立法委員，在0403大地震，太魯閣滿目瘡痍、搜救人員努力搜救之時，帶著國會立法委員前往敵對勢力國家接旨',
    questionSetId: 'emotional',//對應問題系列
  },
];