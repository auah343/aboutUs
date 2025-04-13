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

        <div className="h-70 mt-4 md:mt-0 mb-0  py-5 px-4 sm:px-6 lg:px-8 m-[3vh] border border-gray-500 rounded-lg md:ml-2">
        <style jsx>{`
                .paragraph-spacing p {
                  margin-bottom: 2rem; 
                  line-height: 2;
                }
              `}</style>
              <div className="flex items-center mb-4 mt-1">
            
                <h2 className="text-2xl  ">技术优势</h2>
              </div>
              <ul className="list-inside">
                <li className="mb-2">
                  <span role="img" aria-label="memo">💪</span>
                  <strong>强大算力：</strong> 依托智能科学与工程学院高性能计算集群，提供稳定、高效的算力支持&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </li>
                <li className="mb-2">
                  <span role="img" aria-label="robot">🔑</span>
                  <strong>便捷访问：</strong> 支持校园统一身份认证，全校师生无IP限制，随时随地使用
                </li>
                <li className="mb-2">
                  <span role="img" aria-label="magnifying-glass">🌐</span>
                  <strong>开放生态：</strong> 提供开发者中心与校内公共数据接口，鼓励师生自主开发智能体
                </li>
                <li className="mb-2">
                  <span role="img" aria-label="plug">🎯</span>
                  <strong>全场景支持：</strong> 覆盖教学、科研、学习和生活等多场景应用，打造智慧校园新体验
                </li>
              </ul>
        </div>
        </section>
  );
};

export default MainFunction;