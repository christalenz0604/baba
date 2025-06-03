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
const analyticalQuestions: Question[] = [
  {
    id: 'a1',
    text: '為了保住立委席次，你決定到AB里和里民共餐，你決定送什麼東西表示親民？:',
    options: [
      { id: 'a1-1', text: '一個便當+一杯飲料', points: 0, isCorrect: false },
      { id: 'a1-2', text: '一張都更同意書', points: 0, isCorrect: false },
      { id: 'a1-3', text: '站出來投不同意宣言', points: 3, isCorrect: true },
    ],
  },
  {
    id: 'a2',
    text: '媽媽陳錦錠議員說母親節即將到來，政治獻金法說小物只能限定30元，你決定贈送＿＿＿給里民？',
    options: [
      { id: 'a2-1', text: '垃圾袋', points: 0, isCorrect: false },
      { id: 'a2-2', text: '修容組', points: 0, isCorrect: false },
      { id: 'a2-3', text: '洗衣精', points: 4, isCorrect: true },
    ],
  },
  {
    id: 'a3',
    text: '行政院警告反對覆議《總預算案》將影響地方補助，因此你想推動的中和汙水下水道工程預算也會受影響，所以你決定？',
    options: [
      { id: 'a3-1', text: '痾...對吼！我想起來了', points: 0, isCorrect: false },
      { id: 'a3-2', text: '我不知道這是什麼欸', points: 0, isCorrect: false },
      { id: 'a3-3', text: '反對啦！哪次不反！？', points: 12, isCorrect: true },
    ],
  },
  {
    id: 'a4',
    text: 'When reading, you prefer:',
    options: [
      { id: 'a4-1', text: 'Non-fiction and educational content', points: 8, isCorrect: true },
      { id: 'a4-2', text: 'Thought-provoking fiction', points: 5, isCorrect: false },
      { id: 'a4-3', text: 'Emotional and character-driven stories', points: 3, isCorrect: false },
    ],
  },
  {
    id: 'a5',
    text: 'Your workspace is usually:',
    options: [
      { id: 'a5-1', text: 'Organized and structured', points: 10, isCorrect: true },
      { id: 'a5-2', text: 'Filled with inspirational items', points: 6, isCorrect: false },
      { id: 'a5-3', text: 'Comfortable and personalized', points: 4, isCorrect: false },
    ],
  },
  {
    id: 'a6',
    text: 'You learn best through:',
    options: [
      { id: 'a6-1', text: 'Reading and analyzing information', points: 12, isCorrect: true },
      { id: 'a6-2', text: 'Visual demonstrations', points: 8, isCorrect: false },
      { id: 'a6-3', text: 'Hands-on experience', points: 5, isCorrect: false },
    ],
  },
  {
    id: 'a7',
    text: 'In a debate, you tend to:',
    options: [
      { id: 'a7-1', text: 'Present well-researched arguments', points: 15, isCorrect: true },
      { id: 'a7-2', text: 'Find unconventional perspectives', points: 7, isCorrect: false },
      { id: 'a7-3', text: 'Focus on the emotional impact', points: 4, isCorrect: false },
    ],
  },
  {
    id: 'a8',
    text: 'When faced with a challenge, you:',
    options: [
      { id: 'a8-1', text: 'Analyze all possible solutions', points: 10, isCorrect: true },
      { id: 'a8-2', text: 'Brainstorm creative approaches', points: 6, isCorrect: false },
      { id: 'a8-3', text: 'Seek advice from others', points: 3, isCorrect: false },
    ],
  },
  {
    id: 'a9',
    text: 'Your approach to time management is:',
    options: [
      { id: 'a9-1', text: 'Creating detailed schedules', points: 12, isCorrect: true },
      { id: 'a9-2', text: 'Staying flexible but goal-oriented', points: 8, isCorrect: false },
      { id: 'a9-3', text: 'Going with the flow', points: 4, isCorrect: false },
    ],
  },
  {
    id: 'a10',
    text: 'When giving feedback, you focus on:',
    options: [
      { id: 'a10-1', text: 'Providing specific, actionable points', points: 10, isCorrect: true },
      { id: 'a10-2', text: 'Suggesting innovative improvements', points: 7, isCorrect: false },
      { id: 'a10-3', text: 'Being supportive and encouraging', points: 5, isCorrect: false },
    ],
  },
  {
    id: 'a11',
    text: 'Your ideal career would involve:',
    options: [
      { id: 'a11-1', text: 'Research and analysis', points: 15, isCorrect: true },
      { id: 'a11-2', text: 'Innovation and design', points: 8, isCorrect: false },
      { id: 'a11-3', text: 'Helping and supporting others', points: 5, isCorrect: false },
    ],
  },
  {
    id: 'a12',
    text: 'You make decisions:',
    options: [
      { id: 'a12-1', text: 'After careful analysis of all factors', points: 20, isCorrect: true },
      { id: 'a12-2', text: 'By considering novel approaches', points: 10, isCorrect: false },
      { id: 'a12-3', text: 'Based on how it will affect people', points: 5, isCorrect: false },
    ],
  },
];

const creativeQuestions: Question[] = [
  {
    id: 'c1',
    text: 'When starting a new project, you first:',
    options: [
      { id: 'c1-1', text: 'Explore different possibilities', points: 10, isCorrect: true },
      { id: 'c1-2', text: 'Create a detailed plan', points: 5, isCorrect: false },
      { id: 'c1-3', text: 'Consider how it will impact others', points: 3, isCorrect: false },
    ],
  },
  {
    id: 'c2',
    text: 'You find inspiration in:',
    options: [
      { id: 'c2-1', text: 'New experiences and diverse perspectives', points: 12, isCorrect: true },
      { id: 'c2-2', text: 'Research and analysis', points: 6, isCorrect: false },
      { id: 'c2-3', text: 'Meaningful conversations', points: 4, isCorrect: false },
    ],
  },
  {
    id: 'c3',
    text: 'When faced with limitations, you:',
    options: [
      { id: 'c3-1', text: 'Find creative workarounds', points: 15, isCorrect: true },
      { id: 'c3-2', text: 'Analyze the problem systematically', points: 8, isCorrect: false },
      { id: 'c3-3', text: 'Seek support from others', points: 5, isCorrect: false },
    ],
  },
  {
    id: 'c4',
    text: 'Your workspace typically contains:',
    options: [
      { id: 'c4-1', text: 'Diverse materials and inspirational items', points: 10, isCorrect: true },
      { id: 'c4-2', text: 'Organized files and clear systems', points: 5, isCorrect: false },
      { id: 'c4-3', text: 'Comfortable, personalized touches', points: 3, isCorrect: false },
    ],
  },
  {
    id: 'c5',
    text: 'You learn best by:',
    options: [
      { id: 'c5-1', text: 'Experimenting and discovering', points: 12, isCorrect: true },
      { id: 'c5-2', text: 'Following structured instructions', points: 6, isCorrect: false },
      { id: 'c5-3', text: 'Discussing with others', points: 4, isCorrect: false },
    ],
  },
  {
    id: 'c6',
    text: 'In a group setting, you typically:',
    options: [
      { id: 'c6-1', text: 'Suggest innovative ideas', points: 10, isCorrect: true },
      { id: 'c6-2', text: 'Organize and structure the process', points: 5, isCorrect: false },
      { id: 'c6-3', text: 'Facilitate harmony and collaboration', points: 3, isCorrect: false },
    ],
  },
  {
    id: 'c7',
    text: 'When reading, you prefer:',
    options: [
      { id: 'c7-1', text: 'Fiction that sparks imagination', points: 8, isCorrect: true },
      { id: 'c7-2', text: 'Informative non-fiction', points: 4, isCorrect: false },
      { id: 'c7-3', text: 'Stories about relationships and emotions', points: 2, isCorrect: false },
    ],
  },
  {
    id: 'c8',
    text: 'You approach problems by:',
    options: [
      { id: 'c8-1', text: 'Thinking outside the box', points: 15, isCorrect: true },
      { id: 'c8-2', text: 'Breaking them down systematically', points: 8, isCorrect: false },
      { id: 'c8-3', text: 'Considering the emotional factors', points: 5, isCorrect: false },
    ],
  },
  {
    id: 'c9',
    text: 'Your ideal work environment is:',
    options: [
      { id: 'c9-1', text: 'Dynamic and ever-changing', points: 12, isCorrect: true },
      { id: 'c9-2', text: 'Structured and organized', points: 6, isCorrect: false },
      { id: 'c9-3', text: 'Supportive and harmonious', points: 4, isCorrect: false },
    ],
  },
  {
    id: 'c10',
    text: 'When giving feedback, you focus on:',
    options: [
      { id: 'c10-1', text: 'Inspiring new possibilities', points: 10, isCorrect: true },
      { id: 'c10-2', text: 'Providing clear, specific points', points: 5, isCorrect: false },
      { id: 'c10-3', text: 'Being supportive and encouraging', points: 3, isCorrect: false },
    ],
  },
  {
    id: 'c11',
    text: 'You make decisions based on:',
    options: [
      { id: 'c11-1', text: 'What feels most innovative', points: 12, isCorrect: true },
      { id: 'c11-2', text: 'Careful analysis of options', points: 6, isCorrect: false },
      { id: 'c11-3', text: 'How it will affect people', points: 4, isCorrect: false },
    ],
  },
  {
    id: 'c12',
    text: 'Your ideal career involves:',
    options: [
      { id: 'c12-1', text: 'Creating and innovating', points: 20, isCorrect: true },
      { id: 'c12-2', text: 'Analyzing and strategizing', points: 10, isCorrect: false },
      { id: 'c12-3', text: 'Supporting and connecting with others', points: 5, isCorrect: false },
    ],
  },
];

const emotionalQuestions: Question[] = [
  {
    id: 'e1',
    text: 'When meeting someone new, you first notice:',
    options: [
      { id: 'e1-1', text: 'Their emotional state and energy', points: 10, isCorrect: true },
      { id: 'e1-2', text: 'Their ideas and perspectives', points: 5, isCorrect: false },
      { id: 'e1-3', text: 'Facts about them and their background', points: 3, isCorrect: false },
    ],
  },
  {
    id: 'e2',
    text: 'In difficult situations, you rely on:',
    options: [
      { id: 'e2-1', text: 'Your intuition and feelings', points: 12, isCorrect: true },
      { id: 'e2-2', text: 'Creative problem-solving', points: 6, isCorrect: false },
      { id: 'e2-3', text: 'Logical analysis', points: 4, isCorrect: false },
    ],
  },
  {
    id: 'e3',
    text: 'Your ideal work environment is:',
    options: [
      { id: 'e3-1', text: 'Supportive and harmonious', points: 10, isCorrect: true },
      { id: 'e3-2', text: 'Innovative and stimulating', points: 5, isCorrect: false },
      { id: 'e3-3', text: 'Structured and organized', points: 3, isCorrect: false },
    ],
  },
  {
    id: 'e4',
    text: 'When making decisions, you consider:',
    options: [
      { id: 'e4-1', text: 'How it will impact others', points: 15, isCorrect: true },
      { id: 'e4-2', text: 'The most innovative approach', points: 8, isCorrect: false },
      { id: 'e4-3', text: 'The most logical solution', points: 5, isCorrect: false },
    ],
  },
  {
    id: 'e5',
    text: 'You communicate best through:',
    options: [
      { id: 'e5-1', text: 'Empathetic listening and sharing', points: 12, isCorrect: true },
      { id: 'e5-2', text: 'Animated and expressive exchanges', points: 6, isCorrect: false },
      { id: 'e5-3', text: 'Clear, direct information', points: 4, isCorrect: false },
    ],
  },
  {
    id: 'e6',
    text: 'In a group setting, you focus on:',
    options: [
      { id: 'e6-1', text: 'Creating harmony and connection', points: 10, isCorrect: true },
      { id: 'e6-2', text: 'Contributing creative ideas', points: 5, isCorrect: false },
      { id: 'e6-3', text: 'Ensuring efficiency and clarity', points: 3, isCorrect: false },
    ],
  },
  {
    id: 'e7',
    text: 'You are motivated by:',
    options: [
      { id: 'e7-1', text: 'Making a positive difference for others', points: 15, isCorrect: true },
      { id: 'e7-2', text: 'Exploring new possibilities', points: 8, isCorrect: false },
      { id: 'e7-3', text: 'Achieving goals and solving problems', points: 5, isCorrect: false },
    ],
  },
  {
    id: 'e8',
    text: 'When reading, you prefer:',
    options: [
      { id: 'e8-1', text: 'Stories about relationships and personal growth', points: 10, isCorrect: true },
      { id: 'e8-2', text: 'Imaginative and thought-provoking fiction', points: 5, isCorrect: false },
      { id: 'e8-3', text: 'Informative and educational content', points: 3, isCorrect: false },
    ],
  },
  {
    id: 'e9',
    text: 'Your approach to conflicts is:',
    options: [
      { id: 'e9-1', text: 'Finding common ground and mutual understanding', points: 12, isCorrect: true },
      { id: 'e9-2', text: 'Looking for creative solutions', points: 6, isCorrect: false },
      { id: 'e9-3', text: 'Analyzing the facts objectively', points: 4, isCorrect: false },
    ],
  },
  {
    id: 'e10',
    text: 'When giving feedback, you focus on:',
    options: [
      { id: 'e10-1', text: 'Being supportive and considerate', points: 10, isCorrect: true },
      { id: 'e10-2', text: 'Inspiring improvement', points: 5, isCorrect: false },
      { id: 'e10-3', text: 'Providing clear, specific points', points: 3, isCorrect: false },
    ],
  },
  {
    id: 'e11',
    text: 'Your workspace typically reflects:',
    options: [
      { id: 'e11-1', text: 'Personal touches and comforting elements', points: 8, isCorrect: true },
      { id: 'e11-2', text: 'Creative inspiration and variety', points: 4, isCorrect: false },
      { id: 'e11-3', text: 'Organization and functionality', points: 2, isCorrect: false },
    ],
  },
  {
    id: 'e12',
    text: 'Your ideal career involves:',
    options: [
      { id: 'e12-1', text: 'Helping and supporting others', points: 20, isCorrect: true },
      { id: 'e12-2', text: 'Creating and innovating', points: 10, isCorrect: false },
      { id: 'e12-3', text: 'Analyzing and problem-solving', points: 5, isCorrect: false },
    ],
  },
];
//對應characters.ts 裡的 id 欄位
export const questionSets: Record<string, QuestionSet> = {
  analytical: {
    id: 'analytical',
    questions: analyticalQuestions,
  },
  creative: {
    id: 'creative',
    questions: creativeQuestions,
  },
  emotional: {
    id: 'emotional',
    questions: emotionalQuestions,
  },
};