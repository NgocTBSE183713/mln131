'use client';

import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

// Import nội dung từ các trang cũ
const tabs = [
  {
    id: 'duong-loi-tong-quat',
    label: 'Đường lối tổng quát',
    title: 'Đường lối cách mạng 1930–1945 – Khái quát',
    description: 'Tổng quan về đường lối cách mạng của Đảng Cộng sản Việt Nam trong giai đoạn từ khi thành lập đến Cách mạng Tháng Tám 1945.',
  },
  {
    id: 'phong-trao-1930-1931',
    label: '1930–1931',
    title: 'Đường lối và phong trào cách mạng 1930–1931',
    description: 'Đảng lãnh đạo phong trào cách mạng 1930–1931, đỉnh cao là Xô Viết Nghệ Tĩnh – bài học về đường lối và phương pháp đấu tranh.',
  },
  {
    id: 'dan-chu-1936-1939',
    label: '1936–1939',
    title: 'Đường lối dân chủ 1936–1939',
    description: 'Đảng điều chỉnh đường lối và sách lược trong giai đoạn Mặt trận Dân chủ, mở rộng phong trào đấu tranh hợp pháp và nửa hợp pháp.',
  },
  {
    id: 'chuyen-huong-1939-1945',
    label: '1939–1945',
    title: 'Chuyển hướng và chuẩn bị 1939–1945',
    description: 'Đảng điều chỉnh đường lối từ đấu tranh dân chủ sang chuẩn bị khởi nghĩa vũ trang giành chính quyền.',
  },
  {
    id: 'tong-khoi-nghia-1945',
    label: 'Tháng Tám 1945',
    title: 'Đường lối Tổng khởi nghĩa Tháng Tám 1945',
    description: 'Nghệ thuật lãnh đạo của Đảng trong việc chớp thời cơ và tổ chức tổng khởi nghĩa giành chính quyền trên toàn quốc.',
  },
  {
    id: 'tong-ket-y-nghia',
    label: 'Tổng kết',
    title: 'Tổng kết đường lối cách mạng 1930–1945',
    description: 'Ý nghĩa lịch sử và bài học kinh nghiệm từ đường lối cách mạng của Đảng trong giai đoạn 1930–1945.',
  },
];

export default function NoiDungChinh() {
  const [activeTab, setActiveTab] = useState('duong-loi-tong-quat');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-[860px] mx-auto px-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl py-8">
        <PageHeader
          title="Nội dung chính"
          description="Đường lối cách mạng Việt Nam 1930–1945 qua các giai đoạn lịch sử"
        />

        {/* Tab Navigation - Sticky */}
        <div className="sticky top-[140px] md:top-[120px] z-40 bg-white/95 backdrop-blur-sm py-4 mb-8 border-b border-gray-100">
          <div className="bg-white border border-[#E5E5E5] rounded-lg p-2 shadow-sm">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#A61F2B] text-white'
                      : 'bg-gray-50 text-[#1C1C1C] hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>



        {/* Content Area */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1C1C1C] mb-3">{currentTab.title}</h2>
          <p className="text-[#585858] leading-relaxed">{currentTab.description}</p>
        </div>

        {/* Dynamic Content based on activeTab */}
        {activeTab === 'duong-loi-tong-quat' && <DuongLoiTongQuat />}
        {activeTab === 'phong-trao-1930-1931' && <PhongTrao19301931 />}
        {activeTab === 'dan-chu-1936-1939' && <DanChu19361939 />}
        {activeTab === 'chuyen-huong-1939-1945' && <ChuyenHuong19391945 />}
        {activeTab === 'tong-khoi-nghia-1945' && <TongKhoiNghia1945 />}
        {activeTab === 'tong-ket-y-nghia' && <TongKetYNghia />}
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 bg-[#A61F2B] text-white p-3 rounded-full shadow-lg hover:bg-[#8B1923] transition-all duration-200"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}

// Component cho từng tab (nội dung từ các trang cũ)
function DuongLoiTongQuat() {
  return (
    <>
      <SectionCard title="Tổng quan đường lối cách mạng 1930-1945">
        <p className="text-[#585858] leading-relaxed mb-4">
          Đường lối cách mạng Việt Nam trong giai đoạn 1930-1945 là quá trình Đảng Cộng sản Việt Nam lãnh đạo nhân dân 
          từng bước hoàn thiện đường lối chiến lược, từ cách mạng tư sản dân quyền sang cách mạng dân tộc giải phóng, 
          cuối cùng giành thắng lợi hoàn toàn trong Cách mạng Tháng Tám 1945.
        </p>
      </SectionCard>

      <SectionCard title="Mục tiêu cách mạng">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Mục tiêu chiến lược tổng quát</h3>
            <p className="text-[#585858] leading-relaxed">
              <strong>Mục tiêu dài hạn:</strong> Giành độc lập dân tộc, xây dựng chế độ dân chủ nhân dân, 
              tiến lên chủ nghĩa xã hội, bỏ qua giai đoạn tư bản chủ nghĩa.
            </p>
            <p className="text-[#585858] leading-relaxed mt-2">
              <strong>Mục tiêu trước mắt:</strong> Đánh đổ ách thống trị của đế quốc xâm lược và phong kiến tay sai, 
              giải phóng dân tộc, thành lập nhà nước của nhân dân.
            </p>
          </div>
          <div className="bg-[#EFE8E8] p-4 rounded">
            <p className="text-[#585858] text-sm leading-relaxed">
              <strong className="text-[#A61F2B]">Điểm then chốt:</strong> Đảng nhận thức rằng trong điều kiện thuộc địa nửa phong kiến, 
              nhiệm vụ giải phóng dân tộc là cấp thiết và quyết định nhất, phải được đặt lên hàng đầu.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Nhiệm vụ và đường lối qua các giai đoạn">
        <div className="space-y-4">
          <div className="border-l-4 border-[#A61F2B] pl-4">
            <h3 className="font-semibold mb-2">Giai đoạn 1930–1931: Phong trào cách mạng đầu tiên</h3>
            <p className="text-[#585858] leading-relaxed mb-2">
              <strong>Nhiệm vụ:</strong> Đánh đổ phong kiến và đế quốc thực dân Pháp. Luận cương chính trị (10/1930) 
              nhấn mạnh "vấn đề thổ địa là cái cốt của cách mạng tư sản dân quyền".
            </p>
            <p className="text-[#585858] leading-relaxed">
              <strong>Hạn chế:</strong> Chưa nêu rõ mâu thuẫn dân tộc là chủ yếu, chưa đặt giải phóng dân tộc lên hàng đầu, 
              nặng về cách mạng ruộng đất và đấu tranh giai cấp.
            </p>
          </div>
          
          <div className="border-l-4 border-[#A61F2B] pl-4">
            <h3 className="font-semibold mb-2">Giai đoạn 1932–1935: Khôi phục và Đại hội I</h3>
            <p className="text-[#585858] leading-relaxed">
              Sau đàn áp dã man của Pháp, Đảng tập trung khôi phục tổ chức. Đại hội I (3/1935) đề ra 3 nhiệm vụ: 
              củng cố Đảng, vận động quần chúng, tuyên truyền chống đế quốc. Tuy nhiên vẫn chưa có chuyển biến về chiến lược.
            </p>
          </div>

          <div className="border-l-4 border-[#A61F2B] pl-4">
            <h3 className="font-semibold mb-2">Giai đoạn 1936–1939: Mặt trận Dân chủ</h3>
            <p className="text-[#585858] leading-relaxed mb-2">
              <strong>Bối cảnh:</strong> Đại hội VII Quốc tế Cộng sản (7/1935) chủ trương chống phát xít, lập Mặt trận nhân dân. 
              Mặt trận nhân dân Pháp thắng cử (1936), chính sách dân chủ hóa thuộc địa.
            </p>
            <p className="text-[#585858] leading-relaxed">
              <strong>Đường lối mới:</strong> Kẻ thù trước mắt là phát xít. Nhiệm vụ: chống phát xít, chống chiến tranh, 
              đòi tự do, dân chủ, cơm áo, hòa bình. Hình thức: kết hợp công khai, hợp pháp với bí mật, bất hợp pháp. 
              Bắt đầu có nhận thức: "Dân tộc giải phóng không nhất định phải kết chặt với cách mạng điền địa".
            </p>
          </div>

          <div className="border-l-4 border-[#A61F2B] pl-4">
            <h3 className="font-semibold mb-2">Giai đoạn 1939–1945: Chuyển hướng quyết định</h3>
            <p className="text-[#585858] leading-relaxed mb-2">
              <strong>Hội nghị 11/1939 (Bà Điểm):</strong> Chiến tranh thế giới thứ hai bùng nổ. Đảng chuyển hướng: 
              con đường giải phóng là đánh đổ đế quốc Pháp và ách ngoại xâm. Tạm gác cách mạng ruộng đất.
            </p>
            <p className="text-[#585858] leading-relaxed mb-2">
              <strong>Hội nghị Pác Bó (5/1941):</strong> Nguyễn Ái Quốc (Hồ Chí Minh) về nước. Khẳng định cách mạng là 
              "cách mạng dân tộc giải phóng". Thành lập Mặt trận Việt Minh. Chuẩn bị khởi nghĩa vũ trang từng phần 
              dẫn đến tổng khởi nghĩa. Đây là bước hoàn thiện đường lối, khắc phục hạn chế của Luận cương 1930.
            </p>
            <p className="text-[#585858] leading-relaxed">
              <strong>Chỉ thị 12/3/1945:</strong> Sau đảo chính Nhật-Pháp, xác định kẻ thù trước mắt là phát xít Nhật. 
              Phát động cao trào kháng Nhật cứu nước làm tiền đề cho tổng khởi nghĩa.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Đặc điểm nổi bật của đường lối">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">1.</span>
            <span className="text-[#585858]"><strong>Độc lập dân tộc gắn với chủ nghĩa xã hội:</strong> Đảng kiên định mục tiêu 
            giành độc lập cho dân tộc đồng thời hướng tới xây dựng chế độ xã hội chủ nghĩa, bỏ qua giai đoạn tư bản chủ nghĩa.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">2.</span>
            <span className="text-[#585858]"><strong>Liên minh công-nông làm nền tảng:</strong> Khối liên minh công nhân-nông dân 
            là cơ sở vững chắc, giai cấp công nhân nắm quyền lãnh đạo thông qua Đảng Cộng sản.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">3.</span>
            <span className="text-[#585858]"><strong>Xây dựng mặt trận dân tộc rộng rãi:</strong> Tập hợp mọi giai cấp, tầng lớp, 
            đảng phái, dân tộc, tôn giáo yêu nước trong mặt trận thống nhất (Mặt trận Việt Minh), tạo sức mạnh tổng hợp.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">4.</span>
            <span className="text-[#585858]"><strong>Linh hoạt sáng tạo theo tình hình:</strong> Đảng biết điều chỉnh đường lối 
            phù hợp với từng giai đoạn, từ bí mật sang công khai-bí mật kết hợp, từ cách mạng ruộng đất sang giải phóng dân tộc.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">5.</span>
            <span className="text-[#585858]"><strong>Kết hợp đấu tranh chính trị và vũ trang:</strong> Phát huy sức mạnh chính trị 
            của quần chúng, đồng thời xây dựng lực lượng vũ trang, đi từ khởi nghĩa từng phần đến tổng khởi nghĩa.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">6.</span>
            <span className="text-[#585858]"><strong>Nghệ thuật chớp thời cơ:</strong> Đảng nhạy bén phát hiện và quyết đoán 
            hành động khi thời cơ "ngàn năm có một" xuất hiện (Tháng 8/1945).</span>
          </li>
        </ul>
      </SectionCard>

      <SectionCard title="Quá trình hoàn thiện đường lối">
        <div className="bg-gradient-to-r from-[#FAFAF7] to-white p-4 rounded border border-[#E5E5E5]">
          <p className="text-[#585858] leading-relaxed">
            Đường lối cách mạng 1930-1945 trải qua quá trình từ chưa hoàn thiện (Luận cương 1930 chưa đặt giải phóng dân tộc 
            lên hàng đầu) đến hoàn thiện (Hội nghị Pác Bó 1941 khẳng định cách mạng dân tộc giải phóng). Đây là quá trình 
            vận dụng sáng tạo chủ nghĩa Mác-Lênin vào thực tiễn Việt Nam, kết hợp lý luận với thực tiễn, học hỏi kinh nghiệm 
            quốc tế nhưng không giáo điều, luôn xuất phát từ lợi ích dân tộc và nguyện vọng nhân dân.
          </p>
        </div>
      </SectionCard>
    </>
  );
}

function PhongTrao19301931() {
  return (
    <>
      <SectionCard title="Bối cảnh lịch sử">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">1. Khủng hoảng kinh tế (1929-1933)</h3>
            <p className="text-[#585858] leading-relaxed">
              Cuộc khủng hoảng kinh tế thế giới làm nền kinh tế các nước tư bản suy thoái nghiêm trọng. 
              Tại Đông Dương, Pháp tăng cường bóc lột, sưu thuế để bù đắp thiệt hại cho chính quốc, 
              vơ vét tài nguyên (cao su, than, gạo), làm đời sống nhân dân vô cùng cực khổ, đói rét, bệnh tật.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">2. Khủng bố trắng</h3>
            <p className="text-[#585858] leading-relaxed">
              Sau khởi nghĩa Yên Bái (2/1930) của Việt Nam Quốc dân Đảng, thực dân Pháp tiến hành chiến dịch 
              khủng bố trắng dã man: bắt bớ, giam cầm, hành hình các chiến sĩ yêu nước, làm mâu thuẫn dân tộc 
              càng thêm gay gắt, tạo điều kiện cho phong trào cách mạng bùng nổ mạnh mẽ.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">3. Đảng Cộng sản Việt Nam ra đời</h3>
            <p className="text-[#585858] leading-relaxed">
              Sự ra đời của Đảng Cộng sản Việt Nam (3/2/1930) do Nguyễn Ái Quốc sáng lập đã kịp thời lãnh đạo 
              cuộc đấu tranh thống nhất trên cả nước, chấm dứt tình trạng phong trào cách mạng tự phát, manh mún.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Diễn biến phong trào cách mạng">
        <div className="space-y-4">
          <div className="border-l-4 border-[#A61F2B] pl-4">
            <h3 className="font-semibold mb-2">Giai đoạn đầu (Tháng 2-4/1930)</h3>
            <p className="text-[#585858] leading-relaxed">
              Nổ ra các cuộc bãi công của công nhân tại các xí nghiệp: Phú Riềng (Đồng Nai), Nam Định, Bến Thủy (Vinh). 
              Đồng thời, nông dân ở Thái Bình, Hà Nam, Nghệ An tổ chức biểu tình đòi giảm tô, giảm thuế. 
              Phong trào còn manh mún nhưng đã thể hiện tinh thần đoàn kết và quyết tâm đấu tranh cao.
            </p>
          </div>
          <div className="border-l-4 border-[#A61F2B] pl-4">
            <h3 className="font-semibold mb-2">Giai đoạn cao trào (Tháng 5/1930)</h3>
            <p className="text-[#585858] leading-relaxed">
              Nhân ngày Quốc tế Lao động 1/5, phong trào lan rộng toàn quốc với hàng chục cuộc bãi công, biểu tình. 
              Lần đầu tiên công nhân và nông dân - hai giai cấp lao động chính - cùng phối hợp đấu tranh, 
              thể hiện sức mạnh của khối liên minh công-nông dưới sự lãnh đạo của Đảng.
            </p>
          </div>
          <div className="border-l-4 border-[#A61F2B] pl-4">
            <h3 className="font-semibold mb-2">Giai đoạn đỉnh cao (Tháng 9/1930) - Xô Viết Nghệ Tĩnh</h3>
            <p className="text-[#585858] leading-relaxed mb-2">
              Phong trào phát triển mạnh nhất ở Nghệ An và Hà Tĩnh. <strong>Ngày 12/9/1930</strong>, tại Hưng Nguyên (Nghệ An), 
              hàng ngàn nông dân biểu tình đòi quyền sống bị máy bay Pháp ném bom tàn sát, làm <strong>171 người chết</strong>. 
              Vụ thảm sát này càng thổi bùng ngọn lửa phẫn nộ của quần chúng.
            </p>
            <p className="text-[#585858] leading-relaxed mb-2">
              Bộ máy chính quyền của đế quốc và tay sai ở nhiều xã, huyện bị đập tan hoặc tan rã. Các tổ chức Đảng 
              và Nông hội đứng ra quản lý đời sống, thực hiện quyền làm chủ của nhân dân:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="text-[#A61F2B] text-sm">▪</span>
                <span className="text-[#585858] text-sm">Trấn áp bọn phản cách mạng, tay sai địa chủ ác độc</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A61F2B] text-sm">▪</span>
                <span className="text-[#585858] text-sm">Chia ruộng đất của địa chủ phản động cho nông dân nghèo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A61F2B] text-sm">▪</span>
                <span className="text-[#585858] text-sm">Xóa bỏ các tệ nạn xã hội (cờ bạc, thuốc phiện...)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A61F2B] text-sm">▪</span>
                <span className="text-[#585858] text-sm">Tổ chức sản xuất, duy trì trật tự an ninh</span>
              </li>
            </ul>
            <p className="text-[#585858] leading-relaxed mt-2">
              Đây là <strong>hình thức sơ khai của chính quyền Xô viết</strong> - chính quyền của nhân dân lao động 
              do Đảng lãnh đạo, tồn tại ở một số vùng từ tháng 9/1930 đến đầu năm 1931.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Luận cương chính trị (10/1930)">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Hoàn cảnh ra đời</h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]">Hội nghị Ban Chấp hành Trung ương lần thứ nhất họp tại <strong>Hương Cảng (Hồng Kông)</strong> tháng 10/1930</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]">Quyết định đổi tên Đảng Cộng sản Việt Nam thành <strong>Đảng Cộng sản Đông Dương</strong> (theo chỉ thị Quốc tế Cộng sản)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]">Bầu đồng chí <strong>Trần Phú</strong> làm Tổng Bí thư</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Nội dung chính</h3>
            <div className="space-y-3">
              <div className="bg-[#FAFAF7] p-3 rounded border border-[#E5E5E5]">
                <p className="text-[#585858] text-sm leading-relaxed">
                  <strong>Mâu thuẫn giai cấp:</strong> Một bên là thợ thuyền, dân cày, lao khổ; một bên là địa chủ, phong kiến, tư bản và đế quốc.
                </p>
              </div>
              <div className="bg-[#FAFAF7] p-3 rounded border border-[#E5E5E5]">
                <p className="text-[#585858] text-sm leading-relaxed">
                  <strong>Phương hướng chiến lược:</strong> Lúc đầu là "cách mạng tư sản dân quyền" có tính chất thổ địa và phản đế, 
                  sau đó tiến thẳng lên xã hội chủ nghĩa, bỏ qua giai đoạn tư bản chủ nghĩa.
                </p>
              </div>
              <div className="bg-[#FAFAF7] p-3 rounded border border-[#E5E5E5]">
                <p className="text-[#585858] text-sm leading-relaxed">
                  <strong>Nhiệm vụ:</strong> Đánh đổ phong kiến và đánh đổ đế quốc. Luận cương nhấn mạnh 
                  <em>"vấn đề thổ địa là cái cốt của cách mạng tư sản dân quyền"</em>.
                </p>
              </div>
              <div className="bg-[#FAFAF7] p-3 rounded border border-[#E5E5E5]">
                <p className="text-[#585858] text-sm leading-relaxed">
                  <strong>Lực lượng:</strong> Giai cấp vô sản và nông dân là hai động lực chính. Giai cấp vô sản là động lực chính và mạnh, nắm quyền lãnh đạo.
                </p>
              </div>
              <div className="bg-[#FAFAF7] p-3 rounded border border-[#E5E5E5]">
                <p className="text-[#585858] text-sm leading-relaxed">
                  <strong>Phương pháp cách mạng:</strong> Võ trang bạo động.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#FFF3CD] border-2 border-[#FFE69C] p-4 rounded">
            <h4 className="font-semibold text-[#856404] mb-2">⚠️ Hạn chế của Luận cương</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-[#856404]">•</span>
                <span className="text-[#856404] text-sm"><strong>Không nêu rõ mâu thuẫn chủ yếu</strong> của xã hội thuộc địa là mâu thuẫn dân tộc</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#856404]">•</span>
                <span className="text-[#856404] text-sm"><strong>Không đặt nhiệm vụ giải phóng dân tộc lên hàng đầu</strong>, nặng về đấu tranh giai cấp và cách mạng ruộng đất</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#856404]">•</span>
                <span className="text-[#856404] text-sm"><strong>Đánh giá không đúng vai trò</strong> của tiểu tư sản, tư sản dân tộc, địa chủ yêu nước → không tập hợp được khối đại đoàn kết rộng rãi</span>
              </li>
            </ul>
            <p className="text-[#856404] text-sm mt-3 italic">
              <strong>Nguyên nhân:</strong> Nhận thức chưa đầy đủ về thực tiễn cách mạng thuộc địa và chịu ảnh hưởng giáo điều, tả khuynh từ Quốc tế Cộng sản.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Giai đoạn thoái trào và khôi phục (1931-1935)">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Thoái trào và đàn áp (1931-1934)</h3>
            <p className="text-[#585858] leading-relaxed mb-2">
              Từ năm 1931, thực dân Pháp tiến hành đàn áp dã man phong trào cách mạng:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">▸</span>
                <span className="text-[#585858] text-sm">Tổng Bí thư <strong>Trần Phú</strong> bị bắt và hy sinh (9/1931)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">▸</span>
                <span className="text-[#585858] text-sm">Cơ quan Trung ương Đảng bị phá vỡ, nhiều cán bộ bị bắt, hành hình</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">▸</span>
                <span className="text-[#585858] text-sm">Tổ chức Đảng và phong trào quần chúng bị tan rã nghiêm trọng</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#EFE8E8] p-4 rounded">
            <h4 className="font-semibold text-[#A61F2B] mb-2">Đấu tranh trong nhà tù</h4>
            <p className="text-[#585858] leading-relaxed mb-2">
              Các đảng viên cộng sản kiên cường, biến <strong>nhà tù thành trường học cách mạng</strong>:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-[#A61F2B] text-sm">✓</span>
                <span className="text-[#585858] text-sm">Thành lập các chi bộ Đảng trong tù</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A61F2B] text-sm">✓</span>
                <span className="text-[#585858] text-sm">Biên soạn tài liệu lý luận về chủ nghĩa Mác-Lênin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A61F2B] text-sm">✓</span>
                <span className="text-[#585858] text-sm">Ra các tờ báo bí mật: "Đuốc đưa đường", "Con đường chính"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A61F2B] text-sm">✓</span>
                <span className="text-[#585858] text-sm">Giữ vững khí tiết, bồi dưỡng lực lượng cho cách mạng</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#A61F2B] mb-2">Khôi phục tổ chức</h4>
            <div className="space-y-2">
              <p className="text-[#585858] text-sm"><strong>1932:</strong> Ban hành Chương trình hành động của Đảng</p>
              <p className="text-[#585858] text-sm"><strong>Đầu 1934:</strong> Thành lập Ban Chỉ huy ở ngoài (thay mặt Trung ương)</p>
              <p className="text-[#585858] text-sm"><strong>Đầu 1935:</strong> Hệ thống tổ chức Đảng cơ bản được phục hồi</p>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Đại hội đại biểu lần thứ I (3/1935)">
        <div className="space-y-3">
          <p className="text-[#585858] leading-relaxed">
            <strong>Địa điểm:</strong> Ma Cao (Trung Quốc) • <strong>Thời gian:</strong> Tháng 3/1935
          </p>
          <div className="bg-white border border-[#E5E5E5] p-4 rounded">
            <h4 className="font-semibold text-[#A61F2B] mb-2">Nội dung chính</h4>
            <p className="text-[#585858] text-sm mb-2"><strong>Đề ra 3 nhiệm vụ trước mắt:</strong></p>
            <ol className="space-y-2 ml-6">
              <li className="text-[#585858] text-sm">1. Củng cố và phát triển Đảng</li>
              <li className="text-[#585858] text-sm">2. Đẩy mạnh vận động quần chúng</li>
              <li className="text-[#585858] text-sm">3. Mở rộng tuyên truyền chống đế quốc, chống chiến tranh, ủng hộ Liên Xô và cách mạng Trung Quốc</li>
            </ol>
            <p className="text-[#585858] text-sm mt-3">
              <strong>Nhân sự:</strong> Bầu Ban Chấp hành Trung ương, đồng chí <strong>Lê Hồng Phong</strong> làm Tổng Bí thư
            </p>
          </div>
          <div className="bg-[#D4EDDA] border border-[#C3E6CB] p-3 rounded">
            <p className="text-[#155724] text-sm">
              <strong>✓ Ý nghĩa:</strong> Đánh dấu sự phục hồi hệ thống tổ chức Đảng và phong trào quần chúng, chuẩn bị cho giai đoạn cao trào mới.
            </p>
          </div>
          <div className="bg-[#FFF3CD] border border-[#FFE69C] p-3 rounded">
            <p className="text-[#856404] text-sm">
              <strong>⚠️ Hạn chế:</strong> Đại hội vẫn chưa đề ra được chủ trương chiến lược phù hợp - chưa đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Ý nghĩa lịch sử">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">1.</span>
            <div>
              <p className="text-[#585858] font-semibold">Khẳng định quyền lãnh đạo của Đảng</p>
              <p className="text-[#585858] text-sm mt-1">Lần đầu tiên giai cấp công nhân và Đảng Cộng sản lãnh đạo phong trào cách mạng trên phạm vi cả nước, chứng tỏ vai trò tiên phong và năng lực tổ chức, lãnh đạo của Đảng.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">2.</span>
            <div>
              <p className="text-[#585858] font-semibold">Xây dựng khối liên minh công-nông</p>
              <p className="text-[#585858] text-sm mt-1">Lần đầu tiên công nhân và nông dân cùng phối hợp đấu tranh, khẳng định khối liên minh công-nông là nền tảng vững chắc của cách mạng Việt Nam.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">3.</span>
            <div>
              <p className="text-[#585858] font-semibold">Cuộc tổng diễn tập đầu tiên</p>
              <p className="text-[#585858] text-sm mt-1">Xô Viết Nghệ Tĩnh là hình thức sơ khai của chính quyền nhân dân, là bài học quý báu về xây dựng chính quyền cách mạng, chuẩn bị cho Cách mạng Tháng Tám 1945.</p>
            </div>
          </li>
        </ul>
      </SectionCard>
    </>
  );
}

function DanChu19361939() {
  return (
    <>
      <SectionCard title="Bối cảnh lịch sử">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Thế giới</h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]">Khủng hoảng kinh tế 1929-1933 dẫn đến sự xuất hiện của chủ nghĩa phát xít (Đức, Ý, Nhật) và nguy cơ chiến tranh thế giới.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]">Đại hội VII Quốc tế Cộng sản (7/1935): Xác định kẻ thù nguy hiểm trước mắt là chủ nghĩa phát xít; nhiệm vụ là chống phát xít, chống chiến tranh, bảo vệ dân chủ và hòa bình; chủ trương thành lập Mặt trận nhân dân rộng rãi.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]">Pháp (1936): Mặt trận nhân dân Pháp thắng cử, ban hành nhiều chính sách tự do, dân chủ, thả tù chính trị ở thuộc địa.</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Trong nước</h3>
            <p className="text-[#585858] leading-relaxed">
              Hệ quả của khủng hoảng kinh tế và chính sách cai trị làm đời sống nhân dân ngột ngạt, yêu cầu cải cách dân chủ tăng cao. 
              Nhiều tù chính trị được trả tự do, nhanh chóng tham gia hoạt động, phục hồi hệ thống tổ chức Đảng.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Chủ trương của Đảng">
        <div className="space-y-4">
          <p className="text-[#585858] leading-relaxed mb-2">
            Các Hội nghị Trung ương (7/1936, 3/1937, 9/1937, 3/1938) đã định ra đường lối mới:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-3">
              <span className="text-[#A61F2B]">•</span>
              <span className="text-[#585858]"><strong>Kẻ thù trước mắt:</strong> Phát xít, bọn phản động thuộc địa và tay sai.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A61F2B]">•</span>
              <span className="text-[#585858]"><strong>Nhiệm vụ trước mắt:</strong> Chống phát xít, chống chiến tranh đế quốc, chống phản động thuộc địa; đòi tự do, dân chủ, cơm áo và hòa bình.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A61F2B]">•</span>
              <span className="text-[#585858]"><strong>Mặt trận:</strong> Thành lập Mặt trận nhân dân phản đế Đông Dương (sau đổi thành Mặt trận Dân chủ Đông Dương) để tập hợp rộng rãi các giai cấp, đảng phái, tôn giáo, dân tộc.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A61F2B]">•</span>
              <span className="text-[#585858]"><strong>Hình thức đấu tranh:</strong> Chuyển từ bí mật, bất hợp pháp sang kết hợp công khai, nửa công khai, hợp pháp, nửa hợp pháp với bí mật, bất hợp pháp.</span>
            </li>
          </ul>
          <div className="bg-[#EFE8E8] p-4 rounded border border-[#E5E5E5] mt-4">
            <p className="text-sm text-[#585858]">
              <strong className="text-[#A61F2B]">Nhận thức mới về chiến lược:</strong> "Cuộc dân tộc giải phóng không nhất định phải kết chặt với cuộc cách mạng điền địa". 
              "Nói tóm lại, nếu phát triển cuộc tranh đấu chia đất mà ngăn trở cuộc tranh đấu phản đế thì phải lựa chọn vấn đề nào quan trọng hơn mà giải quyết trước".
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Phong trào đấu tranh đòi tự do, dân chủ, cơm áo, hòa bình">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Các phong trào tiêu biểu</h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
                <span className="text-[#585858]"><strong>Phong trào Đông Dương Đại hội:</strong> Vận động thu thập "dân nguyện", lập các "Ủy ban hành động" khắp nơi để thảo luận các yêu sách đòi quyền sống, quyền dân chủ.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
                <span className="text-[#585858]"><strong>Phong trào "đón rước" (1937):</strong> Lợi dụng việc phái viên chính phủ Pháp (Gôđa) và Toàn quyền mới (Brêvié) đến Đông Dương để tổ chức mít tinh, biểu tình, đưa yêu sách ("dân nguyện").</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
                <span className="text-[#585858]"><strong>Đấu tranh nghị trường:</strong> Vận động đưa người của Mặt trận Dân chủ vào các Viện dân biểu Bắc Kỳ, Trung Kỳ, Hội đồng quản hạt Nam Kỳ...</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
                <span className="text-[#585858]"><strong>Đấu tranh trên lĩnh vực báo chí:</strong> Xuất bản công khai nhiều tờ báo của Đảng và Mặt trận và sách chính trị phổ thông để tuyên truyền chủ nghĩa Mác - Lênin và chính sách của Đảng. Tiêu biểu có tác phẩm "Vấn đề dân cày" (1938) của Qua Ninh (Trường Chinh) - Vân Đình (Võ Nguyên Giáp).</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Kết quả và ý nghĩa">
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span className="text-[#585858]"><strong>Giáo dục chính trị:</strong> Một đội quân chính trị quần chúng hàng triệu người được giác ngộ và rèn luyện.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span className="text-[#585858]"><strong>Phát triển lực lượng:</strong> Uy tín và ảnh hưởng của Đảng mở rộng, tổ chức Đảng được củng cố và phát triển mạnh mẽ từ thành thị đến nông thôn.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span className="text-[#585858]"><strong>Kinh nghiệm:</strong> Đảng tích lũy được nhiều bài học về xây dựng mặt trận thống nhất, kết hợp các hình thức đấu tranh công khai và bí mật.</span>
          </li>
        </ul>
        <div className="bg-[#D4EDDA] border border-[#C3E6CB] p-4 rounded mt-4">
          <p className="text-[#155724] text-sm">
            <strong>✓ Ý nghĩa lịch sử:</strong> Đây là cuộc tập dượt thứ hai chuẩn bị cho Cách mạng Tháng Tám năm 1945.
          </p>
        </div>
      </SectionCard>
    </>
  );
}

function ChuyenHuong19391945() {
  return (
    <>
      <SectionCard title="Bối cảnh lịch sử">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Chiến tranh thế giới thứ hai bùng nổ</h3>
            <p className="text-[#585858] leading-relaxed">
              Tháng 9/1939, Chiến tranh thế giới thứ hai bùng nổ. Pháp thi hành chính sách đàn áp khắc nghiệt, thiết quân luật, vơ vét tài nguyên phục vụ chiến tranh.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Tình trạng "một cổ hai tròng"</h3>
            <p className="text-[#585858] leading-relaxed">
              Tháng 9/1940, Nhật vào Đông Dương. Pháp đầu hàng và câu kết với Nhật. Nhân dân chịu cảnh "một cổ hai tròng" Pháp - Nhật. Nhật vơ vét gạo gây nạn đói khủng khiếp năm 1945.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Chủ trương chiến lược mới">
        <div className="space-y-4">
          <div className="border-l-4 border-[#A61F2B] pl-4">
            <h3 className="font-semibold mb-2">Hội nghị Trung ương 11/1939</h3>
            <p className="text-[#585858] leading-relaxed">
              Xác định nhiệm vụ giải phóng dân tộc là hàng đầu. Tạm gác khẩu hiệu cách mạng ruộng đất. Thành lập Mặt trận dân tộc thống nhất phản đế Đông Dương.
            </p>
          </div>
          <div className="border-l-4 border-[#A61F2B] pl-4">
            <h3 className="font-semibold mb-2">Hội nghị Pác Bó (5/1941)</h3>
            <p className="text-[#585858] leading-relaxed mb-2">
              Nguyễn Ái Quốc chủ trì. Khẳng định nhiệm vụ chủ yếu trước mắt là <strong>giải phóng dân tộc</strong>.
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]">Giải quyết mâu thuẫn dân tộc với Pháp - Nhật.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]">Thành lập <strong>Mặt trận Việt Minh</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]">Chuẩn bị khởi nghĩa vũ trang, đi từ khởi nghĩa từng phần đến tổng khởi nghĩa.</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Phong trào chống Pháp - Nhật và chuẩn bị lực lượng">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Khởi nghĩa vũ trang đầu tiên</h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]"><strong>Khởi nghĩa Bắc Sơn (9/1940):</strong> Thành lập Đội du kích Bắc Sơn.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]"><strong>Khởi nghĩa Nam Kỳ (11/1940):</strong> Nổ ra mạnh mẽ nhưng bị đàn áp khốc liệt.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]"><strong>Binh biến Đô Lương (1/1941):</strong> Bị dập tắt nhanh chóng.</span>
              </li>
            </ul>
            <p className="text-[#585858] italic mt-2 text-sm">→ "Tiếng súng báo hiệu cho cuộc khởi nghĩa toàn quốc".</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Xây dựng lực lượng</h3>
            <p className="text-[#585858] leading-relaxed">
              Thành lập Mặt trận Việt Minh (10/1941), các đoàn thể cứu quốc. Xây dựng căn cứ địa Việt Bắc (Cao Bằng, Bắc Kạn, Lạng Sơn).
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Cao trào kháng Nhật cứu nước (3/1945)">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Nhật đảo chính Pháp (9/3/1945)</h3>
            <p className="text-[#585858] leading-relaxed">
              Nhật độc chiếm Đông Dương. Ban Thường vụ Trung ương Đảng ra Chỉ thị "Nhật - Pháp bắn nhau và hành động của chúng ta" (12/3/1945).
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Nội dung cao trào</h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]">Xác định kẻ thù chính: <strong>Phát xít Nhật</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]">Khẩu hiệu: "Đánh đuổi phát xít Nhật".</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]">Phong trào: "Phá kho thóc, giải quyết nạn đói".</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#D4EDDA] border border-[#C3E6CB] p-4 rounded">
            <p className="text-[#155724] text-sm">
              <strong>✓ Ý nghĩa:</strong> Là cuộc tập dượt vĩ đại, làm lực lượng cách mạng lớn mạnh vượt bậc, tạo đà trực tiếp cho Tổng khởi nghĩa.
            </p>
          </div>
        </div>
      </SectionCard>
    </>
  );
}

function TongKhoiNghia1945() {
  return (
    <>
      <SectionCard title="Bối cảnh và Thời cơ lịch sử">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Tình hình thế giới</h3>
            <p className="text-[#585858] leading-relaxed">
              Giữa tháng 8/1945, phát xít Đức đầu hàng. Liên Xô đánh tan đạo quân Quan Đông của Nhật. Mỹ ném bom nguyên tử. 
              Ngày 15/8/1945, Nhật hoàng tuyên bố đầu hàng Đồng minh không điều kiện.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Tình hình trong nước</h3>
            <p className="text-[#585858] leading-relaxed">
              Quân Nhật mất tinh thần, chính quyền tay sai rệu rã. Tuy nhiên, quân Đồng minh (Anh, Trung Hoa dân quốc, Pháp) chuẩn bị vào Đông Dương.
            </p>
          </div>
          <div className="bg-[#FFF3CD] border border-[#FFE69C] p-4 rounded">
            <p className="text-[#856404] font-semibold mb-2">⚡ Thời cơ "ngàn năm có một"</p>
            <p className="text-[#856404] text-sm">
              Từ khi Nhật đầu hàng đến trước khi quân Đồng minh vào. Kẻ thù cũ đã gục ngã, kẻ thù mới chưa đến. 
              Đây là cuộc chạy đua nước rút để giành chính quyền.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Quyết định phát động tổng khởi nghĩa">
        <div className="space-y-4">
          <div className="border-l-4 border-[#A61F2B] pl-4">
            <h3 className="font-semibold mb-2">13/8/1945: Quân lệnh số 1</h3>
            <p className="text-[#585858] leading-relaxed">
              Ủy ban Khởi nghĩa toàn quốc thành lập, phát lệnh tổng khởi nghĩa.
            </p>
          </div>
          <div className="border-l-4 border-[#A61F2B] pl-4">
            <h3 className="font-semibold mb-2">14-15/8/1945: Hội nghị toàn quốc (Tân Trào)</h3>
            <p className="text-[#585858] leading-relaxed">
              Quyết định phát động toàn dân nổi dậy giành chính quyền trước khi quân Đồng minh vào. 
              Khẩu hiệu: "Phản đối xâm lược! Hoàn toàn độc lập! Chính quyền nhân dân!".
            </p>
          </div>
          <div className="border-l-4 border-[#A61F2B] pl-4">
            <h3 className="font-semibold mb-2">16/8/1945: Đại hội Quốc dân (Tân Trào)</h3>
            <p className="text-[#585858] leading-relaxed">
              Tán thành chủ trương tổng khởi nghĩa, thông qua 10 chính sách lớn của Việt Minh.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Diễn biến Tổng khởi nghĩa">
        <div className="space-y-4">
          <div className="bg-white border border-[#A61F2B] p-4 rounded">
            <h3 className="font-semibold text-[#A61F2B] mb-2">14-18/8: Khởi nghĩa lan rộng</h3>
            <p className="text-[#585858] text-sm">
              Nhiều địa phương (Hải Dương, Bắc Giang, Hà Tĩnh, Quảng Nam) chủ động giành chính quyền sớm.
            </p>
          </div>
          <div className="bg-white border border-[#A61F2B] p-4 rounded">
            <h3 className="font-semibold text-[#A61F2B] mb-2">19/8: Hà Nội giành chính quyền</h3>
            <p className="text-[#585858] text-sm">
              Cuộc mít tinh biến thành biểu tình vũ trang, chiếm Phủ Khâm sai, Trại Bảo an binh. Tạo hiệu ứng lan tỏa.
            </p>
          </div>
          <div className="bg-white border border-[#A61F2B] p-4 rounded">
            <h3 className="font-semibold text-[#A61F2B] mb-2">23/8: Huế - Vua Bảo Đại thoái vị</h3>
            <p className="text-[#585858] text-sm">
              Nhân dân Huế nổi dậy giành chính quyền, chấm dứt chế độ phong kiến.
            </p>
          </div>
          <div className="bg-white border border-[#A61F2B] p-4 rounded">
            <h3 className="font-semibold text-[#A61F2B] mb-2">25/8: Sài Gòn giành thắng lợi</h3>
            <p className="text-[#585858] text-sm">
              Đập tan sự kháng cự của các thế lực thù địch tại miền Nam.
            </p>
          </div>
          <div className="bg-[#D4EDDA] border border-[#C3E6CB] p-4 rounded">
            <h3 className="font-semibold text-[#155724] mb-2">2/9/1945: Tuyên ngôn Độc lập</h3>
            <p className="text-[#155724] text-sm">
              Tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước <strong>Việt Nam Dân chủ Cộng hòa</strong>.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Vai trò lãnh đạo của Đảng">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">1.</span>
            <span className="text-[#585858]"><strong>Chuẩn bị chu đáo:</strong> Về đường lối và lực lượng suốt 15 năm (1930-1945), đặc biệt là chuyển hướng chiến lược từ 1939.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">2.</span>
            <span className="text-[#585858]"><strong>Đại đoàn kết dân tộc:</strong> Thông qua Mặt trận Việt Minh, khơi dậy tinh thần yêu nước.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">3.</span>
            <span className="text-[#585858]"><strong>Nghệ thuật chớp thời cơ:</strong> Nhạy bén, kiên quyết, đúng lúc (không sớm, không muộn).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">4.</span>
            <span className="text-[#585858]"><strong>Phương pháp cách mạng:</strong> Bạo lực cách mạng, kết hợp chính trị và vũ trang, nông thôn và thành thị.</span>
          </li>
        </ul>
      </SectionCard>

      <div className="mt-6 bg-gradient-to-r from-[#A61F2B] to-[#8B1923] text-white rounded-lg p-6">
        <p className="text-center text-lg leading-relaxed">
          <strong className="text-2xl">🎉 Thành công vang dội!</strong><br/>
          Cách mạng Tháng Tám giành thắng lợi hoàn toàn - Nhà nước của nhân dân đầu tiên ở Đông Nam Á!
        </p>
      </div>
    </>
  );
}

function TongKetYNghia() {
  return (
    <>
      <SectionCard title="Tính chất của Cách mạng Tháng Tám">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Cách mạng giải phóng dân tộc điển hình</h3>
            <p className="text-[#585858] leading-relaxed">
              Tập trung giải quyết mâu thuẫn chủ yếu: toàn thể dân tộc với đế quốc xâm lược và tay sai. Nhiệm vụ hàng đầu là giải phóng dân tộc.
            </p>
          </div>
          <div className="bg-[#FAFAF7] p-4 rounded border border-[#E5E5E5]">
            <h4 className="font-semibold text-[#A61F2B] mb-2">Tính chất dân tộc</h4>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858] text-sm">Lực lượng: Toàn dân tộc đoàn kết trong Mặt trận Việt Minh.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858] text-sm">Chính quyền: Của chung toàn dân tộc (cộng hòa dân chủ).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858] text-sm">Giải phóng con người khỏi áp bức dân tộc, bóc lột giai cấp.</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#FFF3CD] border border-[#FFE69C] p-4 rounded">
            <h4 className="font-semibold text-[#856404] mb-2">⚠️ Tính chất dân chủ chưa đầy đủ</h4>
            <p className="text-[#856404] text-sm">
              Chưa làm xong cách mạng ruộng đất (khẩu hiệu "người cày có ruộng" chưa thực hiện triệt để). Đây là lựa chọn chiến lược đúng đắn để tập trung cho giải phóng dân tộc.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Ý nghĩa lịch sử">
        <div className="space-y-4">
          <div className="bg-white border-l-4 border-[#A61F2B] p-4">
            <h4 className="font-semibold mb-2">Đối với dân tộc Việt Nam</h4>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858] text-sm">Đập tan xiềng xích nô lệ của đế quốc, chấm dứt chế độ quân chủ.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858] text-sm">Lập nên nước Việt Nam Dân chủ Cộng hòa - nhà nước của nhân dân.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858] text-sm">Nhân dân từ nô lệ trở thành người chủ đất nước.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858] text-sm">Đảng từ hoạt động bí mật trở thành đảng cầm quyền.</span>
              </li>
            </ul>
          </div>
          <div className="bg-white border-l-4 border-[#A61F2B] p-4">
            <h4 className="font-semibold mb-2">Đối với thế giới</h4>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858] text-sm">Lần đầu tiên cách mạng do Đảng Cộng sản lãnh đạo thắng lợi ở một nước thuộc địa.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858] text-sm">Chọc thủng hệ thống thuộc địa của chủ nghĩa đế quốc.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858] text-sm">Cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên thế giới.</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Bài học kinh nghiệm">
        <div className="space-y-4">
          <div className="border-l-4 border-[#A61F2B] pl-4">
            <h4 className="font-semibold mb-2">1. Chỉ đạo chiến lược</h4>
            <p className="text-[#585858] text-sm leading-relaxed">
              Giải quyết đúng đắn mối quan hệ chống đế quốc và chống phong kiến. Kiên quyết đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.
            </p>
          </div>
          <div className="border-l-4 border-[#A61F2B] pl-4">
            <h4 className="font-semibold mb-2">2. Xây dựng lực lượng</h4>
            <p className="text-[#585858] text-sm leading-relaxed">
              Dựa trên liên minh công - nông, xây dựng Mặt trận Việt Minh, thực hiện đại đoàn kết dân tộc.
            </p>
          </div>
          <div className="border-l-4 border-[#A61F2B] pl-4">
            <h4 className="font-semibold mb-2">3. Phương pháp cách mạng</h4>
            <p className="text-[#585858] text-sm leading-relaxed">
              Kết hợp đấu tranh chính trị và vũ trang, khởi nghĩa từng phần tiến tới tổng khởi nghĩa. Chớp đúng thời cơ.
            </p>
          </div>
          <div className="border-l-4 border-[#A61F2B] pl-4">
            <h4 className="font-semibold mb-2">4. Xây dựng Đảng</h4>
            <p className="text-[#585858] text-sm leading-relaxed">
              Đảng có đường lối đúng đắn, tổ chức chặt chẽ, gắn bó với nhân dân.
            </p>
          </div>
        </div>
      </SectionCard>

      <div className="mt-6 bg-gradient-to-r from-[#A61F2B] to-[#8B1923] text-white rounded-lg p-6">
        <p className="text-center leading-relaxed">
          <span className="text-xl font-bold block mb-2">📜 Kết luận</span>
          "Đường lối đúng đắn là nhân tố hàng đầu quyết định thắng lợi của cách mạng. 
          Bài học từ giai đoạn 1930–1945 vẫn còn nguyên giá trị cho công cuộc xây dựng 
          và bảo vệ Tổ quốc ngày nay."
        </p>
      </div>
    </>
  );
}
