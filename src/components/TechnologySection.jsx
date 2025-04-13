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
      <div className="mt-0 mb-0 py-5 px-4 sm:px-6 lg:px-8 m-[3vh] border border-gray-500 rounded-lg">
      <style jsx>{`
                .paragraph-spacing p {
                  margin-bottom: 2rem; 
                  line-height: 2;
                }
              `}</style>
              <div className="flex items-center mb-4 mt-1">
            
            <h2 className="text-2xl  ">技术栈</h2>
          </div>

            <div className="col-span-12 md:col-span-8 bg-opacity-90 rounded-lg p-4 border border-gray-300" paragraph-spacing
                 style={{backgroundColor: 'rgba(239, 246, 255, 0.9)'}}>
             
              <div className="flex items-center  gap-1">
              <svg t="1744468544728" className="icon w-6 h-6" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="39839" ><path d="M512 88.576C278.129778 88.576 88.576 278.129778 88.576 512S278.129778 935.424 512 935.424 935.424 745.870222 935.424 512 745.870222 88.576 512 88.576z m0 158.776889a26.453333 26.453333 0 1 1 0 52.906667 26.453333 26.453333 0 1 1 0-52.906667z m78.990222 529.294222h-157.980444a26.453333 26.453333 0 1 1 0-52.906667h51.285333v-266.723555h-52.110222a26.453333 26.453333 0 1 1 0-52.935111h78.563555a26.453333 26.453333 0 0 1 26.453334 26.453333v293.176889h53.76c14.648889 0 27.306667 11.832889 27.306666 26.453333 0 14.648889-12.657778 26.481778-27.306666 26.481778z" fill="#2c5282" p-id="39840"></path></svg>
                <p className="text-blue-700 "><strong>平台采用全链路MIT开源技术栈，从基础设施到应用层均使用开放、透明的开源组件，确保系统安全可控、自主可控。</strong> </p>
              </div>
              <ul className="list-inside space-y-1 mt-2">
                <li>✓ 全部组件均采用 MIT 许可证，支持商用且无法律风险</li>
                <li>✓ 完整适配国产化基础设施，支持海光、龙芯等硬件架构</li>
                <li>✓ 兼容国产操作系统，已在统信UOS、麒麟等环境下稳定运行</li>
                <li>✓ 支持主流国产GPU及异构计算平台，可无缝替换计算资源</li>
              </ul>
              </div>

              
              <div className="gap-x-3 gap-y-0 pt-3 grid grid-cols-1  lg:grid-cols-4 ">
              <div className="mx-0 mb-0 flex flex-col items-start py-5 px-4 sm:px-6 lg:px-8 m-[3vh] border border-gray-500 rounded-lg ">
             <a href="https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor" target="_blank" className="flex flex-col items-center">
             <div className="flex ">
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
            <span className=" ml-1 text-blue-700 font-bold mt-1">Blazor Server</span>
            </div>
            </a>
            <p className="text-sm">基于 .NET 的全栈 Web 框架，使用 C# 代替 JavaScript 构建交互式 Web 应用，通过 SignalR 实现服务器端实时通信。</p>
             </div>


                <div className="mx-0 mb-0 flex flex-col items-start py-5 px-4 sm:px-6 lg:px-8 m-[3vh] border border-gray-500 rounded-lg">

                <a href="https://www.blazor.zone/" target="_blank" className="flex flex-col">
                <div className="flex ">
          
                  <img src="/bootstrapblazor-icon.png" alt="BootstrapBlazor" className="w-7 h-7 mb-1" />
                  <span className="ml-1 text-blue-700 font-bold mt-1">BootstrapBlazor</span>
                  </div>
                  </a>
                
                  <p className="text-sm">基于 Bootstrap 的 Blazor UI 组件库，提供丰富的企业级 UI 组件和现代 Web 交互体验。</p>
                </div>
                
                <div className="mx-0 mb-0 flex flex-col items-start py-5 px-4 sm:px-6 lg:px-8 m-[3vh] border border-gray-500 rounded-lg">
                <a href="https://learn.microsoft.com/semantic-kernel"  target="_blank" className="flex flex-col items-center">
                <div className="flex ">
                  <img src="/Semantic.png" alt="Semantic Kernel" className="w-8 h-8 mb-1" />
                  <span className="ml-1 text-blue-700 font-bold mt-1">Semantic Kernel</span>
                  </div>
                  </a>
                
                  <p className="text-sm">微软开源的 AI 编排框架，支持 LLM 集成、提示工程、语义函数和智能管道，简化 AI 应用开发。</p>
                </div>
                <div className="mx-0 mb-0 flex flex-col items-start py-5 px-4 sm:px-6 lg:px-8 m-[3vh] border border-gray-500 rounded-lg">
                <a href="https://dotnet.microsoft.com/download/dotnet/9.0"  target="_blank" className="flex flex-col items-center">
                <div className="flex ">
                  <img src="/net.png" alt=".NET" className="w-8 h-8 mb-1" />
                  <span className="ml-1 text-blue-700 font-bold mt-1">.NET</span>
                  </div>
                  </a>
                  <p className="text-sm">使用开源跨平台的 .NET 框架，提供高性能、跨平台的运行环境。</p>
                </div>
                <div className="mx-0 mb-0 flex flex-col items-start py-5 px-4 sm:px-6 lg:px-8 m-[3vh] border border-gray-500 rounded-lg">
                <a href="https://microsoft.github.io/reverse-proxy/"  target="_blank" className="flex flex-col items-center">
                <div className="flex ">
                  <img src="/yarp.png" alt="YARP" className="w-8 h-8 mb-1" />
                  <span className="ml-1 text-blue-700 font-bold mt-1">YARP</span>
                  </div>
                  </a>
                  <p className="text-sm">微软开源的反向代理框架，用于负载均衡和请求转发，实现多GPU节点的灵活调度。</p>
                </div>
                <div className="mx-0 mb-0 flex flex-col items-start py-5 px-4 sm:px-6 lg:px-8 m-[3vh] border border-gray-500 rounded-lg">
                <a href="https://202.118.184.207/#"  target="_blank" className="flex flex-col items-center">
                <div className="flex ">
                  <img src="/GPUStack.png" alt="GPUStack" className="w-16 h-4 mb-4" />
                  <span className="ml-1 text-blue-700 font-bold mt-1">GPUStack</span>
                  </div>
                  </a>
                  <p className="text-sm">开源GPU资源调度系统，支持多卡负载均衡和动态扩缩容。</p>
                </div>
                <div className="mx-0 mb-0 flex flex-col items-start py-5 px-4 sm:px-6 lg:px-8 m-[3vh] border border-gray-500 rounded-lg">
                <a href="https://www.postgresql.org/ "  target="_blank" className="flex flex-col items-center">
                  
                <div className="flex ">
                  <img src="/postgresql.png" alt="PostgreSQL" className="w-8 h-8 mb-1" />
                  <span className="ml-1 text-blue-700 font-bold mt-1">PostgreSQL</span>
                  </div>
                  </a>
                  <p className="text-sm">强大的开源关系型数据库，提供高可靠性和数据完整性保证。</p>
                </div>
                <div className="mx-0 mb-0 flex flex-col items-start py-5 px-4 sm:px-6 lg:px-8 m-[3vh] border border-gray-500 rounded-lg">
                <a href="https://github.com/microsoft/garnet"  target="_blank" className="flex flex-col items-center">
                <div className="flex ">
                  <img src="/Garnet.png" alt="Garnet" className="w-8 h-8 mb-1" />
                  <span className="ml-1 text-blue-700 font-bold mt-1">Garnet</span>
                  </div>
                  </a>
                  <p className="text-sm">微软开源的分布式应用存储服务，提供高性能、高可用的数据存储能力。</p>
                </div>
                <div className="mx-0 mb-0 flex flex-col items-start py-5 px-4 sm:px-6 lg:px-8 m-[3vh] border border-gray-500 rounded-lg">
                <a href="https://www.docker.com/"  target="_blank" className="flex flex-col items-center">
                <div className="flex ">
                  <img src="/docker_.png" alt="Docker" className="w-7 h-7 mb-2" />
                  <span className="ml-1 text-blue-700 font-bold mt-1">Docker</span>
                  </div>
                  </a>
                  <p className="text-sm">容器化平台，用于应用程序的构建、部署和运行，确保在不同环境中的一致性。</p>
                </div>
                <div className="mx-0 mb-0 flex flex-col items-start py-6 px-4 sm:px-6 lg:px-8 m-[3vh] border border-gray-500 rounded-lg">
                <a href="https://gogs.io/"  target="_blank" className="flex flex-col items-center">
                <div className="flex ">
                  <img src="/gogs.png" alt="Gogs" className="w-7 h-7 md-2" />
                  <span className="ml-1 text-blue-700 font-bold mt-1">Gogs</span>
                  </div>
                  </a>
                  <p className="text-sm">轻量级自托管的Git服务，提供代码版本控制和协作开发环境</p>
                </div>
                <div className="mx-0 mb-0 flex flex-col items-start py-5 px-4 sm:px-6 lg:px-8 m-[3vh] border border-gray-500 rounded-lg">
                <a href="https://learn.microsoft.com/aspnet/core"  target="_blank" className="flex flex-col items-center">
                <div className="flex ">
                  <img src="/asp.net.png" alt="ASP.NET Core" className="w-8 h-8 mb-1" />
                  <span className="ml-1 text-blue-700 font-bold mt-1">ASP.NET Core</span>
                  </div>
                  </a>
                  <p className="text-sm">跨平台的高性能 Web 开发框架，提供模块化的中间件管道和依赖注入等现代化特性。</p>
                </div>
                <div className="mx-0 mb-0 flex flex-col items-start py-5 px-4 sm:px-6 lg:px-8 m-[3vh] border border-gray-500 rounded-lg">
                <a href="https://learn.microsoft.com/dotnet/aspire"  target="_blank" className="flex flex-col items-center">
                <div className="flex ">
                  <img src="/aspire.png" alt=".NET Aspire" className="w-8 h-8 mb-1" />
                  <span className="ml-1 text-blue-700 font-bold mt-1">.NET Aspire</span>
                  </div>
                  </a>
                  <p className="text-sm">微软云原生应用开发栈，简化分布式应用程序的开发、部署和监控。</p>
              </div>
            </div>
            </div>
      
  
    </section>
  );
};

export default TechnologySection;