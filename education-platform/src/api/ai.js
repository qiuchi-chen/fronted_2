import axios from 'axios';

const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models';
const API_TOKEN = process.env.VUE_APP_HUGGING_FACE_TOKEN;

// 课程内容分析
export const analyzeContent = async (text) => {
  try {
    const response = await axios.post(
      `${HUGGING_FACE_API_URL}/bert-base-chinese`,
      { inputs: text },
      {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('AI analysis failed:', error);
    throw error;
  }
};

// 智能问答系统
export const getAIResponse = async (question) => {
  try {
    const response = await axios.post(
      `${HUGGING_FACE_API_URL}/chinese-roberta-wwm-ext`,
      { inputs: question },
      {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('AI response failed:', error);
    throw error;
  }
};

// 学习路径推荐
export const getPersonalizedRecommendations = async (userProfile) => {
  try {
    const response = await axios.post(
      `${HUGGING_FACE_API_URL}/chinese-bert-wwm`,
      { inputs: JSON.stringify(userProfile) },
      {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('AI recommendation failed:', error);
    throw error;
  }
}; 