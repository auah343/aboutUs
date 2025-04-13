import React from 'react';

const MainFunction = () => {
    return (
      <section 
        id="page5" 
        style={{
          backgroundColor: 'white',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
        }}
      >
        <div className="h-70 py-5 px-4 sm:px-6 lg:px-8 m-[3vh] mt-0 mb-0  border border-gray-500 rounded-lg md:mr-2">
        <style jsx>{`
                .paragraph-spacing p {
                  line-height: 2;
                }
              `}</style>
              <div className="flex items-center mb-4 mt-1">
            
                <h2 className="text-2xl  ">核心功能</h2>
              </div>
              <ul className="list-inside">
                <li className="mb-2">
                  <span role="img" aria-label="memo">📝</span>
                  <strong>智能对话：</strong> 提供基于DeepSeek满参数大模型的高质量对话服务，解答学术、生活等多方面问题
                </li>
                <li className="mb-2">
                  <span role="img" aria-label="robot">🤖</span>
                  <strong>智能体应用：</strong>支持多场景智能体调用，满足不同教学与科研需求&nbsp;&nbsp;&nbsp;&nbsp;
                </li>
                <li className="mb-2">
                  <span role="img" aria-label="magnifying-glass">🔍</span>
                  <strong>知识库查询：</strong> 整合校内外资源，提供精准的知识检索服务&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </li>
                <li className="mb-2">
                  <span role="img" aria-label="plug">🔌</span>
                  <strong>API接口：</strong> 开放标准化接口，支持二次开发与系统集成&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </li>
              </ul>
        </div>
        </section>
  );
};

export default MainFunction;