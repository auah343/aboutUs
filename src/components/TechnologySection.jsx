import React from 'react';
import { Code, Zap, Database, Cpu } from 'lucide-react';

const TechnologySection = () => {
  return (
    <section 
      id="page3" 
      style={{
        backgroundColor: 'white',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
      }}
    >
      <div className="py-10 px-4 sm:px-6 lg:px-8 m-[3vh] border border-gray-500 rounded-lg">
      <style jsx>{`
                .paragraph-spacing p {
                  margin-bottom: 2rem; 
                  line-height: 2;
                }
              `}</style>
        <div className="w-full h-full">
          <div className="grid grid-cols-12 gap-4 auto-rows-auto ">
            <div className="col-span-12 md:col-span-6 bg-opacity-90 rounded-lg p-4 border border-gray-300" paragraph-spacing
            style={{backgroundColor:  'rgba(239, 246, 255, 0.9)'}}>
              <div className="flex items-center mb-4 mt-1">
                <Code size={24} className="text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-blue-400">核心功能</h2>
              </div>
              <ul className="list-inside">
                <li className="mb-2">
                  <span role="img" aria-label="memo">📝</span>
                  <strong>智能对话：</strong> 提供基于DeepSeek满参数大模型的高质量对话服务，解答学术、生活等多方面问题
                </li>
                <li className="mb-2">
                  <span role="img" aria-label="robot">🤖</span>
                  <strong>智能体应用：</strong> 支持多场景智能体调用，满足不同教学与科研需求
                </li>
                <li className="mb-2">
                  <span role="img" aria-label="magnifying-glass">🔍</span>
                  <strong>知识库查询：</strong> 整合校内外资源，提供精准的知识检索服务
                </li>
                <li className="mb-2">
                  <span role="img" aria-label="plug">🔌</span>
                  <strong>API接口：</strong> 开放标准化接口，支持二次开发与系统集成
                </li>
              </ul>
            </div>
            
            <div className="col-span-12 md:col-span-6 bg-opacity-90 dark:bg-opacity-90 rounded-lg p-4 border border-gray-300" paragraph-spacing
                 style={{backgroundColor:  'rgba(239, 246, 255, 0.9)'}}>
              <div className="flex items-center mb-4 mt-1">
                <Zap size={24} className="text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-blue-400">技术优势</h2>
              </div>
              <ul className="list-inside">
                <li className="mb-2">
                  <span role="img" aria-label="memo">💪</span>
                  <strong>强大算力：</strong> 依托智能科学与工程学院高性能计算集群，提供稳定、高效的算力支持
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
            
            <div className="col-span-12 md:col-span-8 bg-opacity-90 dark:bg-opacity-90 rounded-lg p-4 border border-gray-300" paragraph-spacing
                 style={{backgroundColor: 'rgba(239, 246, 255, 0.9)'}}>
              <div className="flex items-center mb-4 mt-1">
                <Database size={24} className="text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-blue-400">技术栈</h2>
              </div>

              <p>
                <strong>平台采用全链路MIT开源技术栈，从基础设施到应用层均使用开放、透明的开源组件，确保系统安全可控、自主可控。</strong> 
              </p>
              <ul className="list-inside space-y-1 mt-2">
                <li>✓ 全部组件均采用 MIT 许可证，支持商用且无法律风险</li>
                <li>✓ 完整适配国产化基础设施，支持海光、龙芯等硬件架构</li>
                <li>✓ 兼容国产操作系统，已在统信UOS、麒麟等环境下稳定运行</li>
                <li>✓ 支持主流国产GPU及异构计算平台，可无缝替换计算资源</li>
              </ul>

              <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-4 mt-4 mb-6">
              <div className="flex flex-col items-center">
             <a href="https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor" target="_blank" className="flex flex-col items-center">
             <svg 
              t="1743507216424" 
              className="icon" 
              viewBox="0 0 1133 1024" 
              version="1.1" 
              xmlns="http://www.w3.org/2000/svg" 
              p-id="10335" 
              width="34" 
              height="31"
            >
            <path 
            d="M1016.452929 325.008051a563.029686 563.029686 0 0 1-552.102137 474.312222 408.956599 408.956599 0 0 1-80.701003-4.895699 247.31566 247.31566 0 0 1-205.677843-233.140565 240.162284 240.162284 0 0 1 480.256301-3.388954c1.009372 39.804368-16.237724 74.72279-51.682775 75.727285-37.863643 0-55.617863-27.014112-55.617864-63.429525v-101.181016a61.971544 61.971544 0 0 0-61.493676-62.025182H404.612545a147.641388 147.641388 0 1 0 109.056069 246.028345l2.969601-4.422708 2.964726 4.905451a104.443189 104.443189 0 0 0 89.063675 42.413131 117.721064 117.721064 0 0 0 109.056068-123.050744 320.200125 320.200125 0 0 0-8.7869-78.209268A299.651845 299.651845 0 0 0 116.483145 559.543208a303.406514 303.406514 0 0 0 295.711881 299.651845s22.215938 2.018744 47.260068 1.443353a639.542039 639.542039 0 0 0 342.967072-102.322045c1.453106-1.009372 2.906211 1.009372 1.940725 2.486859a503.413344 503.413344 0 0 1-392.158113 160.363377A353.875117 353.875117 0 0 1 52.029619 558.075474a366.216763 366.216763 0 0 1 147.105007-293.288413A358.702549 358.702549 0 0 1 410.746797 194.930713h113.839614a320.302525 320.302525 0 0 0 236.290586-104.321285 4.422708 4.422708 0 0 1 2.403963-1.37021 4.515355 4.515355 0 0 1 4.832308 2.106515 4.57387 4.57387 0 0 1 0.629029 2.71604 321.107097 321.107097 0 0 1-49.673783 143.642909 4.354441 4.354441 0 0 0-0.536382 2.462478 4.442212 4.442212 0 0 0 2.930593 3.827812 4.412955 4.412955 0 0 0 2.506363 0.131657 344.210502 344.210502 0 0 0 239.313826-197.3298 6.29029 6.29029 0 0 1 2.213792-2.130896 6.056232 6.056232 0 0 1 5.948956 0 6.212271 6.212271 0 0 1 2.208916 2.130896 436.224273 436.224273 0 0 1 42.793475 278.211222zM411.902454 467.748865a88.551675 88.551675 0 1 0 88.537046 88.537046V473.629554a6.382937 6.382937 0 0 0-6.061108-6.061108l-82.475938 0.180419z" 
            fill="#8867C8" 
            p-id="10336"
            ></path>
            </svg>
            <span className="text-xs flex items-center">Blazor</span>
            </a>
             </div>


                <div className="flex flex-col items-center">
                <a href="https://www.blazor.zone/" target="_blank" className="flex flex-col items-center">
                  <img src="/bootstrapblazor-icon.png" alt="BootstrapBlazor" className="w-7 h-7 mb-1" />
                  <span className="text-xs">BootstrapBlazor</span>
                  </a>
                </div>
                <div className="flex flex-col items-center">
                <a href="https://learn.microsoft.com/semantic-kernel"  target="_blank" className="flex flex-col items-center">
                  <img src="/Semantic.png" alt="Semantic Kernel" className="w-8 h-8 mb-1" />
                  <span className="text-xs">Semantic Kernel</span>
                  </a>
                </div>
                <div className="flex flex-col items-center">
                <a href="https://dotnet.microsoft.com/download/dotnet/9.0"  target="_blank" className="flex flex-col items-center">
                  <img src="/net.png" alt=".NET" className="w-8 h-8 mb-1" />
                  <span className="text-xs">.NET</span>
                  </a>
                </div>
                <div className="flex flex-col items-center">
                <a href="https://microsoft.github.io/reverse-proxy/"  target="_blank" className="flex flex-col items-center">
                  <img src="/yarp.png" alt="YARP" className="w-8 h-8 mb-1" />
                  <span className="text-xs">YARP</span>
                  </a>
                </div>
                <div className="flex flex-col items-center">
                <a href="https://202.118.184.207/#"  target="_blank" className="flex flex-col items-center">
                  <img src="/GPUStack.png" alt="GPUStack" className="w-16 h-4 mb-4" />
                  <span className="text-xs">GPUStack</span>
                  </a>
                </div>
                <div className="flex flex-col items-center">
                <a href="https://www.postgresql.org/ "  target="_blank" className="flex flex-col items-center">
                  <img src="/postgresql.png" alt="PostgreSQL" className="w-8 h-8 mb-1" />
                  <span className="text-xs">PostgreSQL</span>
                  </a>
                </div>
                <div className="flex flex-col items-center">
                <a href="https://github.com/microsoft/garnet"  target="_blank" className="flex flex-col items-center">
                  <img src="/Garnet.png" alt="Garnet" className="w-8 h-8 mb-1" />
                  <span className="text-xs">Garnet</span>
                  </a>
                </div>
                <div className="flex flex-col items-center">
                <a href="https://www.docker.com/"  target="_blank" className="flex flex-col items-center">
                  <img src="/docker_.png" alt="Docker" className="w-7 h-7 mb-2" />
                  <span className="text-xs">Docker</span>
                  </a>
                </div>
                <div className="flex flex-col items-center">
                <a href="https://gogs.io/"  target="_blank" className="flex flex-col items-center">
                  <img src="/gogs.png" alt="Gogs" className="w-7 h-7 md-2" />
                  <span className="text-xs">Gogs</span>
                  </a>
                </div>
                <div className="flex flex-col items-center">
                <a href="https://learn.microsoft.com/aspnet/core"  target="_blank" className="flex flex-col items-center">
                  <img src="/asp.net.png" alt="ASP.NET Core" className="w-8 h-8 mb-1" />
                  <span className="text-xs">ASP.NET Core</span>
                  </a>
                </div>
                <div className="flex flex-col items-center">
                <a href="https://learn.microsoft.com/dotnet/aspire"  target="_blank" className="flex flex-col items-center">
                  <img src="/aspire.png" alt=".NET Aspire" className="w-8 h-8 mb-1" />
                  <span className="text-xs">.NET Aspire</span>
                  </a>
              </div>
            </div>
            </div>
            
            <div className="col-span-12 md:col-span-4 bg-opacity-90 dark:bg-opacity-90 rounded-lg p-4 border border-gray-300" paragraph-spacing
                 style={{backgroundColor:  'rgba(239, 246, 255, 0.9)'}}>
              <div className="flex items-center mb-4 mt-1">
                <Cpu size={24} className="text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-blue-400">模型</h2>
              </div>
              

              <div className="flex items-start mb-5">
 
  <div className="ml-2"> 
    <div className="flex items-center">
        <svg t="1743352014329" class="icon" viewBox="145 0 1224 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4574" width="80" height="80"><path d="M980.736 172.527c-8.79-4.396-12.585 3.983-17.72 8.241-1.75 1.374-3.244 3.16-4.738 4.808-12.844 14.01-27.85 23.214-47.476 22.115-28.674-1.648-53.159 7.555-74.794 29.945-4.601-27.61-19.883-44.093-43.148-54.67-12.191-5.494-24.485-10.989-33.019-22.94-5.94-8.516-7.555-17.994-10.542-27.334-1.889-5.632-3.778-11.401-10.13-12.363-6.92-1.099-9.616 4.808-12.329 9.753-10.817 20.192-15.024 42.445-14.595 64.972 0.928 50.687 21.91 91.071 63.565 119.78 4.739 3.296 5.958 6.593 4.464 11.4-2.833 9.89-6.233 19.506-9.203 29.396-1.89 6.319-4.722 7.692-11.367 4.945-22.854-9.753-42.6-24.176-60.062-41.62-29.618-29.259-56.404-61.539-89.8-86.813a394.916 394.916 0 0 0-23.815-16.621c-34.083-33.791 4.464-61.538 13.393-64.835 9.323-3.434 3.245-15.247-26.923-15.11s-57.761 10.44-92.926 24.176c-5.15 2.06-10.56 3.571-16.088 4.808-31.937-6.182-65.075-7.555-99.708-3.572-65.195 7.418-117.273 38.874-155.562 92.582-45.982 64.56-56.817 137.912-43.544 214.422 13.908 80.632 54.24 147.39 116.191 199.587 64.251 54.12 138.238 80.632 222.647 75.55 51.27-3.023 108.344-10.028 172.732-65.66 16.243 8.242 33.293 11.539 61.556 14.011 21.789 2.06 42.754-1.099 58.98-4.533 25.429-5.494 23.66-29.533 14.474-33.928-74.536-35.44-58.173-21.017-73.042-32.692 37.877-45.742 94.951-93.27 117.273-247.252 1.768-12.225 0.274-19.917 0-29.807-0.138-6.044 1.201-8.38 7.984-9.066 18.664-2.198 36.796-7.418 53.434-16.758 48.282-26.923 67.77-71.154 72.372-124.176 0.687-8.104-0.137-16.483-8.534-20.741M559.911 649.722c-72.218-57.967-107.263-77.06-121.737-76.236-13.53 0.824-11.092 16.621-8.122 26.923 3.108 10.165 7.177 17.17 12.86 26.099 3.916 5.907 6.629 14.698-3.931 21.291-23.266 14.698-63.702-4.945-65.59-5.906-47.081-28.297-86.453-65.66-114.183-116.758-26.785-49.176-42.324-101.923-44.9-158.241-0.687-13.599 3.245-18.407 16.484-20.88a159.683 159.683 0 0 1 52.901-1.373c73.73 10.99 136.504 44.643 189.113 97.94 30.031 30.356 52.747 66.62 76.167 102.06 24.88 37.636 51.666 73.488 85.749 102.883 12.036 10.302 21.634 18.132 30.837 23.901-27.73 3.16-74.003 3.846-105.648-21.703m34.632-227.334c0-6.044 4.74-10.852 10.697-10.852q2.026 0.035 3.64 0.687a10.766 10.766 0 0 1 6.903 10.165 10.714 10.714 0 0 1-10.68 10.852 10.594 10.594 0 0 1-10.56-10.852m107.538 56.318c-6.886 2.885-13.788 5.358-20.433 5.632-10.268 0.55-21.497-3.708-27.575-8.928-9.478-8.105-16.244-12.638-19.077-26.786-1.219-6.044-0.55-15.384 0.533-20.741 2.438-11.539-0.275-18.956-8.242-25.687-6.49-5.495-14.75-7.006-23.815-7.006-3.383 0-6.49-1.51-8.791-2.747a9.014 9.014 0 0 1-3.915-12.637c0.944-1.923 5.546-6.594 6.628-7.418 12.31-7.143 26.51-4.807 39.628 0.55 12.174 5.082 21.36 14.423 34.633 27.61 13.53 15.934 15.968 20.33 23.66 32.28 6.096 9.34 11.642 18.956 15.42 29.944 2.317 6.869-0.67 12.5-8.654 15.934" fill="#4D6BFE" p-id="4575"></path></svg>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">DeepSeek</h2>
      <span className="text-sm text-gray-700 dark:text-gray-300 ml-2">推理模型</span> 
    </div>
    <div className="ml-0"> 
      <p className="text-sm text-gray-700 dark:text-gray-300">DeepSeek-R1-Distill-Llama-70B</p>
      <p className="text-sm text-gray-700 dark:text-gray-300">DeepSeek系列大模型，具有强大的推理能力和知识理解能力，支持中英双语对话。</p>
    </div>
  </div>
</div>

<div className="flex items-start mb-5">
<div className="ml-2 "> 
    <div className="flex items-center">
    <svg t="1743512919004" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="41574" width="50" height="50"><path d="M1019.406933 620.8l-127.573333-223.018667 54.656-104.661333a29.098667 29.098667 0 0 0 6.4-36.394667L882.702933 130.133333a30.08 30.08 0 0 0-24.576-13.653333h-260.608L539.1936 14.506667a27.349333 27.349333 0 0 0-20.906667-14.549334H380.644267a29.141333 29.141333 0 0 0-24.618667 14.549334V20.053333L225.806933 243.029333H100.9216a29.184 29.184 0 0 0-25.514667 13.653334L3.428267 384.085333a32.768 32.768 0 0 0 0 29.184l129.408 224.810667-58.325334 101.973333a32.768 32.768 0 0 0 0 29.056l66.517334 116.565334c5.376 8.96 15.061333 14.464 25.514666 14.506666h260.608l62.848 109.226667a30.08 30.08 0 0 0 22.784 14.592h147.626667a29.141333 29.141333 0 0 0 24.576-14.549333l128.469333-224.853334h114.773334a31.914667 31.914667 0 0 0 24.661333-15.445333l66.474667-117.418667a28.16 28.16 0 0 0 0-30.976l0.042666 0.042667z m-161.28 14.592l-66.517333-122.922667-273.322667 481.493334-74.752-122.88H170.254933l65.621334-119.210667h139.392L101.860267 272.213333H244.9216L380.686933 30.08 449.038933 149.333333 378.852267 272.213333h546.688L856.334933 394.154667l137.6 241.194666h-135.765333z" fill="#605BEC" p-id="25617"></path><path d="M499.982933 699.306667l174.378667-274.730667H324.708267z" fill="#605BEC" p-id="25618"></path></svg>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white ml-8">QwQ</h2>
      <span className="text-sm text-gray-700 dark:text-gray-300 ml-2">规划模型</span> 
    </div>
    <div className="ml-0"> 
      <p className="text-sm text-gray-700 dark:text-gray-300 mt-4">QwQ-32B</p>
      <p className="text-sm text-gray-700 dark:text-gray-300">基于通义千问2.5代模型，具有强大的推理能力、高效的长文本处理能力和灵活的部署选项。</p>
    </div>
  </div>
</div>     
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;