import React from 'react';

const AboutSection = () => {
  return (
    <section
      id="page1"
      style={{
        backgroundColor: 'white',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}
    >
      <div >
        <h1 className="text-4xl  pt-10 ml-7">关于我们</h1>
      <div className=" py-5 px-4 sm:px-6 lg:px-8 m-[3vh] border border-gray-500 rounded-lg">
      <style jsx>{`
                .paragraph-spacing p {
                margin-bottom: 2rem; 
                line-height: 2;
                }
              `}</style>

         <div className="flex items-center mb-4 mt-1">
          <h1 className="text-2xl">"深蓝智算"智能体平台</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-4/5">
          

              <div className="prose prose-lg paragraph-spacing mt-4">
                <p>
                该平台是以海光DCU为代表的国产GPU采用GPGPU通用加速架构打造的智能体平台，其基于DeepSeek大模型技术并具备与主流AI生态兼容的能力。
                </p>
                <p>
                系统由哈尔滨工程大学“新玖零幺”信创工作室（拓荒者社团）与计算机科学与技术学院数据协同计算团队（高性能计算研究中心）合作，并成功在国产海光DCU（8卡Z100L）机器上完成了DeepSeek-R1-Distill-Llama-70B以及QwQ-32B大模型的本地化部署。这一成果标志着我校国产AI大模型与国产算力协同取得了重要突破。
                </p>
                <p>
                平台致力于在探索国产化自主安全可控技术，各个领域需通过本地部署实现数据不出域。
                </p>
                <p>
                未来，信创工作室将继续依托国产DCU硬件平台与DeepSeek、QwQ等开源模型的技术优势，面向船舶水声等对数据安全要求极高的领域，构建自主可控的行业知识库。通过整合领域专业知识、历史案例与实时数据，实现模型在声呐信号分析、海洋环境建模等场景中的精准推理与安全应用，为船舶工业智能化提供国产化技术支撑，加速形成覆盖“硬件-算法-场景”的全链条自主创新能力，发挥学生社团能量，助力我校科研在船海领域的高质量发展。
                </p>
              </div>
            </div>
            
            <div className="md:w-2/5 flex items-center justify-center">
              <div className="flex items-center justify-center w-full h-full py-4">
                <img 
                  src="/CollegeofScience.jpg" 
                  alt="三院一体" 
                  className="w-2/3 h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;