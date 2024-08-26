export default {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // jest-dom assertions을 사용 가능하게
  testEnvironment: 'jsdom', // DOM API를 사용하기 위해 jsdom 환경 설정
};
