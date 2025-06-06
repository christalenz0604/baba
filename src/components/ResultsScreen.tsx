import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import ScoreTree from './ScoreTree';
import { motion } from 'framer-motion';
import ShareDropdown from '../components/ShareDropdown.jsx';

const ResultsScreen: React.FC = () => {
  const { gameState, restartGame } = useGame();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const character = gameState.selectedCharacter;
  
  if (!character) return null;
  
  // Maximum possible score (for the tree visualization)
  const maxScore = 200;
  
  // Determine result message based on score
  const getResultMessage = () => {
    const score = gameState.score;
    
    if (score < 30) return "你獲得了被罷免的資格";
    if (score < 60) return "雖然你好像還有點良心，但還是聽黨的只有被罷免的結局";
    if (score < 90) return "阿罷之，不罷你罷誰";
    if (score < 120) return "很棒，黨說甚麼，你就做甚麼，這樣真的是好的嗎？看看那堆積如山的連署書";
    return "罷免不適任立委，讓國會回歸正軌";
  };
  
  // Get personality trait based on character type and score
  // 需要跟 角色id 對照
  const getPersonalityTrait = () => {
    const characterType = character.id;
    const score = gameState.score;
    //根據最終分數給予的頭銜
    if (characterType === 'ChangChihLun') {
      if (score < 50) return "好好罷罷";
      if (score < 100) return "妖精罷";
      return "天罷王！";
    }
    
    if (characterType === 'linTeFu') {
      if (score < 50) return "Budding Creator";
      if (score < 100) return "Innovative Mind";
      return "Visionary Genius";
    }
    
    if (characterType === 'HSUCHIAOHSIN') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }

    if (characterType === 'LaiShyhBao') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }
    
    if (characterType === 'wanghungwei') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }
    if (characterType === 'LEEYEHSIU') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }

    if (characterType === 'ChenYuJen') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }

    if (characterType === 'YEHYUANCHIH') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }

    if (characterType === 'FUKUNCHI') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }

    if (characterType === 'HungMongKai') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }

    if (characterType === 'LoMingTsai') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }

    if (characterType === 'LIAOHsienHsiang') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }

    if (characterType === 'LOCHIHCHIANG') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }
    return "罷免不適任立委才能換得正常的國會";
  };

  const handleSubmitEmail = async () => {
    if (!email || !character) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyF2RBHz_E88v6rEV1cZ3Rys7KOdWIXR8lqHcH94_o12OTAhCPKM6-pkEn8aOBRTUej1A/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          character: character.name,
          score: gameState.score,
          timestamp: new Date().toISOString()
        })
      });
      
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const shareText = `Ba Party 好玩！\n一起來玩小遊戲吧！`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-white rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <ScoreTree score={gameState.score} maxScore={maxScore} />
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  你的立委生涯結束了！
                </h1>
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500 mr-4">
                    <img 
                      src={character.avatar} 
                      alt={character.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600">你扮演的立委是：</p>
                    <h3 className="font-semibold text-lg text-gray-800">{character.name}</h3>
                  </div>
                </div>
                
                <div className="bg-indigo-50 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium text-gray-700">累積人民的怒氣值</p>
                    <p className="text-2xl font-bold text-indigo-600">{gameState.score}</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min((gameState.score / maxScore) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                    {getPersonalityTrait()}
                  </h3>
                  <p className="text-gray-700">{getResultMessage()}</p>
                </motion.div>

                {/* Email subscription form */}
                <div className="mb-6">
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      想收到更多相關資訊嗎？
                    </h4>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="輸入你的 Email"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <button
                        onClick={handleSubmitEmail}
                        disabled={isSubmitting || !email}
                        className={`px-4 py-2 rounded-lg font-medium ${
                          isSubmitting || !email
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700'
                        }`}
                      >
                        {isSubmitting ? '提交中...' : '訂閱'}
                      </button>
                    </div>
                    {submitStatus === 'success' && (
                      <p className="mt-2 text-sm text-green-600">
                        感謝訂閱！我們會寄送相關資訊給你。
                      </p>
                    )}
                    {submitStatus === 'error' && (
                      <p className="mt-2 text-sm text-red-600">
                        抱歉，發生錯誤。請稍後再試。
                      </p>
                    )}
                  </div>
                </div>
                
                <motion.button
                  onClick={restartGame}
                  className="w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  再試一次
                </motion.button>

                <ShareDropdown
                    shareUrl="https://bettertaiwan.goodwordstudio.com/share/"
                    shareText={shareText}
                />

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultsScreen;