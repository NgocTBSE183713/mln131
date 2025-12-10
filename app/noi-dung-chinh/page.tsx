"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import { X, ChevronRight, BookOpen } from "lucide-react";

type SubSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type Section = {
  id: string;
  title: string;
  summary: string;
  image: string;
  yearLabel: string;
  note: string;
  subSections: SubSection[];
};

const sections: Section[] = [
  {
    id: "section-1",
    title: "Phong trào cách mạng 1930 - 1931 và khôi phục phong trào 1932 - 1935",
    summary: "Cao trào cách mạng đầu tiên, Luận cương chính trị và quá trình đấu tranh khôi phục tổ chức Đảng.",
    image: "/1930-1931.jpg",
    yearLabel: "1930 - 1935",
    note: "Khẳng định quyền lãnh đạo",
    subSections: [
      {
        id: "1.1",
        title: "1.1. Phong trào cách mạng 1930 - 1931",
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">a. Bối cảnh lịch sử</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Khủng hoảng kinh tế (1929 - 1933):</strong> Kinh tế thế giới suy thoái. Tại Đông Dương, Pháp tăng cường bóc lột, sưu thuế làm đời sống nhân dân cực khổ.</li>
                <li><strong>Khủng bố trắng:</strong> Sau khởi nghĩa Yên Bái (2/1930), Pháp khủng bố dã man, mâu thuẫn dân tộc gay gắt.</li>
                <li><strong>Đảng ra đời (1930):</strong> Kịp thời lãnh đạo đấu tranh thống nhất trên cả nước.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">b. Diễn biến chính</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Giai đoạn đầu (2-4/1930):</strong> Bãi công, biểu tình nổ ra ở nhiều nơi (Phú Riềng, Nam Định, Bến Thủy...).</li>
                <li><strong>Giai đoạn cao trào (5/1930):</strong> Nhân ngày 1/5, phong trào lan rộng. Lần đầu tiên công - nông phối hợp đấu tranh.</li>
                <li><strong>Giai đoạn đỉnh cao (9/1930 - Xô Viết Nghệ Tĩnh):</strong>
                  <ul className="list-circle pl-5 mt-2 space-y-1">
                    <li>Biểu tình ngày 12/9/1930 tại Hưng Nguyên bị ném bom làm 171 người chết.</li>
                    <li>Chính quyền địch tan rã. Các tổ chức Đảng, Nông hội quản lý đời sống, thực hiện quyền làm chủ (chia ruộng, xóa tệ nạn...). Đây là hình thức sơ khai của chính quyền Xô viết.</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">c. Ý nghĩa lịch sử</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Khẳng định quyền lãnh đạo và năng lực của Đảng.</li>
                <li>Xây dựng khối liên minh công - nông vững chắc.</li>
                <li>Là cuộc tổng diễn tập đầu tiên cho Cách mạng Tháng Tám 1945.</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "1.2",
        title: "1.2. Luận cương chính trị (10/1930)",
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">a. Hoàn cảnh ra đời</h4>
              <p className="text-gray-700">Hội nghị Trung ương lần 1 (10/1930) tại Hương Cảng. Đổi tên Đảng thành Đảng Cộng sản Đông Dương. Bầu Trần Phú làm Tổng Bí thư.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">b. Nội dung chính</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Mâu thuẫn giai cấp:</strong> Thợ thuyền, dân cày vs Địa chủ, phong kiến, đế quốc.</li>
                <li><strong>Nhiệm vụ:</strong> Đánh đổ phong kiến và đế quốc. Nhấn mạnh "thổ địa là cái cốt của cách mạng tư sản dân quyền".</li>
                <li><strong>Lực lượng:</strong> Công nhân và nông dân là động lực chính.</li>
                <li><strong>Phương pháp:</strong> Võ trang bạo động.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">c. Hạn chế</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Không nêu rõ mâu thuẫn chủ yếu là mâu thuẫn dân tộc.</li>
                <li>Không đặt nhiệm vụ giải phóng dân tộc lên hàng đầu (nặng về đấu tranh giai cấp).</li>
                <li>Đánh giá không đúng vai trò của tiểu tư sản, tư sản dân tộc (không tập hợp được đại đoàn kết).</li>
              </ul>
              <p className="text-sm italic text-gray-500 mt-2">Nguyên nhân: Nhận thức chưa đầy đủ thực tiễn và ảnh hưởng giáo điều, tả khuynh.</p>
            </div>
          </div>
        )
      },
      {
        id: "1.3",
        title: "1.3. Khôi phục tổ chức & Đại hội I (1935)",
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">a. Đấu tranh trong nhà tù (1931-1934)</h4>
              <p className="text-gray-700 mb-2">Pháp khủng bố trắng, Tổng Bí thư Trần Phú hy sinh. Cơ quan Trung ương bị phá vỡ.</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Các đảng viên biến nhà tù thành trường học cách mạng, ra báo bí mật ("Đuốc đưa đường").</li>
                <li>1932: Ban hành Chương trình hành động.</li>
                <li>1934: Thành lập Ban Chỉ huy ở ngoài.</li>
                <li>1935: Hệ thống tổ chức cơ bản phục hồi.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">b. Đại hội Đảng lần thứ I (3/1935)</h4>
              <p className="text-gray-700 mb-2">Họp tại Ma Cao. Bầu Lê Hồng Phong làm Tổng Bí thư.</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Nhiệm vụ:</strong> Củng cố Đảng, đẩy mạnh vận động quần chúng, tuyên truyền chống đế quốc.</li>
                <li><strong>Ý nghĩa:</strong> Đánh dấu sự phục hồi tổ chức Đảng.</li>
                <li><strong>Hạn chế:</strong> Vẫn chưa đề ra chủ trương chiến lược phù hợp (chưa đặt giải phóng dân tộc lên hàng đầu).</li>
              </ul>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "section-2",
    title: "Phong trào dân chủ 1936 - 1939",
    summary: "Cuộc vận động dân chủ rộng lớn, kết hợp đấu tranh công khai và bí mật.",
    image: "/1936-1939.jpg",
    yearLabel: "1936 - 1939",
    note: "Đấu tranh đòi dân chủ",
    subSections: [
      {
        id: "2.1",
        title: "2.1. Điều kiện lịch sử & Chủ trương",
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">a. Bối cảnh</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Thế giới:</strong> Chủ nghĩa phát xít xuất hiện. Quốc tế Cộng sản chủ trương lập Mặt trận nhân dân. Mặt trận nhân dân Pháp thắng cử, nới lỏng chính sách cai trị.</li>
                <li><strong>Trong nước:</strong> Đời sống nhân dân ngột ngạt, yêu cầu dân chủ tăng cao. Tù chính trị được thả, tham gia phục hồi Đảng.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">b. Chủ trương mới</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Kẻ thù:</strong> Phản động thuộc địa và tay sai.</li>
                <li><strong>Nhiệm vụ:</strong> Chống phát xít, chiến tranh; đòi tự do, dân chủ, cơm áo, hòa bình.</li>
                <li><strong>Mặt trận:</strong> Mặt trận Dân chủ Đông Dương.</li>
                <li><strong>Hình thức:</strong> Kết hợp công khai, bí mật, hợp pháp, bất hợp pháp.</li>
                <li><strong>Nhận thức mới:</strong> Tạm gác khẩu hiệu "cách mạng điền địa" nếu cần thiết để tập trung chống phản động thuộc địa.</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "2.2",
        title: "2.2. Phong trào đấu tranh",
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">a. Các phong trào tiêu biểu</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Đông Dương Đại hội:</strong> Thu thập "dân nguyện", lập Ủy ban hành động.</li>
                <li><strong>Phong trào "đón rước" (1937):</strong> Biểu tình đưa yêu sách khi phái viên Pháp sang.</li>
                <li><strong>Đấu tranh nghị trường:</strong> Đưa người của Mặt trận vào Viện dân biểu.</li>
                <li><strong>Báo chí công khai:</strong> Tuyên truyền chủ nghĩa Mác-Lênin ("Vấn đề dân cày").</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">b. Kết quả & Ý nghĩa</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Giáo dục chính trị cho hàng triệu quần chúng.</li>
                <li>Uy tín Đảng mở rộng, tổ chức Đảng phát triển.</li>
                <li><strong>Ý nghĩa:</strong> Cuộc tập dượt thứ hai cho Cách mạng Tháng Tám.</li>
              </ul>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "section-3",
    title: "Phong trào giải phóng dân tộc 1939 - 1945",
    summary: "Chuyển hướng chỉ đạo chiến lược, đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, tiến tới Tổng khởi nghĩa.",
    image: "/1939-1945.jpeg",
    yearLabel: "1939 - 1945",
    note: "Giải phóng dân tộc",
    subSections: [
      {
        id: "3.1",
        title: "3.1. Phong trào giải phóng dân tộc 1939 - 1945 (Phần 1)",
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">a. Bối cảnh & Chủ trương chiến lược mới</h4>
              <p className="text-gray-700 mb-2">Chiến tranh thế giới II bùng nổ. Nhật vào Đông Dương (9/1940). Nhân dân chịu cảnh "một cổ hai tròng".</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Hội nghị TW 6 (11/1939):</strong> Giải phóng dân tộc là nhiệm vụ hàng đầu. Tạm gác khẩu hiệu cách mạng ruộng đất.</li>
                <li><strong>Hội nghị TW 8 (5/1941):</strong> Do Nguyễn Ái Quốc chủ trì.
                  <ul className="list-circle pl-5 mt-1 space-y-1">
                    <li>Khẳng định nhiệm vụ chủ yếu là <strong>giải phóng dân tộc</strong>.</li>
                    <li>Thành lập <strong>Mặt trận Việt Minh</strong>.</li>
                    <li>Xúc tiến chuẩn bị khởi nghĩa vũ trang.</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">b. Phong trào chống Pháp - Nhật & Chuẩn bị lực lượng</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Khởi nghĩa vũ trang đầu tiên:</strong> Bắc Sơn (9/1940), Nam Kỳ (11/1940), Binh biến Đô Lương (1/1941). Đây là những tiếng súng báo hiệu.</li>
                <li><strong>Xây dựng lực lượng:</strong>
                  <ul className="list-circle pl-5 mt-1 space-y-1">
                    <li>Chính trị: Các Hội Cứu quốc trong Việt Minh.</li>
                    <li>Vũ trang: Đội Việt Nam Tuyên truyền Giải phóng quân (22/12/1944).</li>
                    <li>Căn cứ địa: Cao - Bắc - Lạng, Khu giải phóng Việt Bắc.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "3.2",
        title: "3.2. Phong trào giải phóng dân tộc 1939 - 1945 (Phần 2)",
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">a. Cao trào kháng Nhật cứu nước</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Nhật đảo chính Pháp (9/3/1945):</strong> Pháp đầu hàng.</li>
                <li><strong>Chỉ thị "Nhật - Pháp bắn nhau và hành động của chúng ta":</strong>
                  <ul className="list-circle pl-5 mt-1 space-y-1">
                    <li>Kẻ thù duy nhất: Phát xít Nhật.</li>
                    <li>Khẩu hiệu: "Đánh đuổi phát xít Nhật", "Phá kho thóc, giải quyết nạn đói".</li>
                    <li>Hành động: Phát động cao trào kháng Nhật, khởi nghĩa từng phần.</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">b. Tổng khởi nghĩa giành chính quyền (8/1945)</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Thời cơ:</strong> Nhật đầu hàng Đồng minh (15/8). Thời cơ "ngàn năm có một".</li>
                <li><strong>Quyết định:</strong> Ủy ban Khởi nghĩa ra Quân lệnh số 1. Đại hội Quốc dân Tân Trào tán thành Tổng khởi nghĩa.</li>
                <li><strong>Diễn biến:</strong>
                  <ul className="list-circle pl-5 mt-1 space-y-1">
                    <li>19/8: Hà Nội.</li>
                    <li>23/8: Huế.</li>
                    <li>25/8: Sài Gòn.</li>
                    <li>2/9: Tuyên ngôn Độc lập.</li>
                  </ul>
                </li>
                <li><strong>Nguyên nhân thắng lợi:</strong> Sự lãnh đạo của Đảng, khối đại đoàn kết dân tộc, chớp đúng thời cơ.</li>
              </ul>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "section-4",
    title: "Tính chất, ý nghĩa và kinh nghiệm của Cách mạng Tháng Tám năm 1945",
    summary: "Đánh giá tầm vóc lịch sử và những bài học quý báu cho cách mạng Việt Nam.",
    image: "/CMT8.jpg",
    yearLabel: "1945",
    note: "Cách mạng Tháng Tám",
    subSections: [
      {
        id: "4.1",
        title: "4.1. Tính chất",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Cách mạng Tháng Tám là một cuộc <strong>cách mạng giải phóng dân tộc điển hình</strong>.</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Tập trung giải quyết mâu thuẫn chủ yếu giữa dân tộc với đế quốc.</li>
              <li>Lực lượng tham gia là toàn dân tộc.</li>
              <li>Thành lập chính quyền của chung toàn dân tộc.</li>
            </ul>
            <p className="text-gray-700">Tính dân chủ chưa đầy đủ (chưa làm xong cách mạng ruộng đất) để tập trung cho độc lập dân tộc.</p>
          </div>
        )
      },
      {
        id: "4.2",
        title: "4.2. Ý nghĩa lịch sử",
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">a. Đối với dân tộc</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Đập tan xiềng xích nô lệ, chấm dứt chế độ quân chủ.</li>
                <li>Lập nước VNDCCH, nhân dân làm chủ đất nước.</li>
                <li>Đảng trở thành đảng cầm quyền.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">b. Đối với quốc tế</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Cổ vũ phong trào giải phóng dân tộc trên thế giới.</li>
                <li>Chọc thủng hệ thống thuộc địa của chủ nghĩa đế quốc.</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "4.3",
        title: "4.3. Bài học kinh nghiệm",
        content: (
          <div className="space-y-4">
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li><strong>Chỉ đạo chiến lược:</strong> Đặt giải phóng dân tộc lên hàng đầu, giải quyết đúng đắn mối quan hệ dân tộc - giai cấp.</li>
              <li><strong>Xây dựng lực lượng:</strong> Khối đại đoàn kết toàn dân (Mặt trận Việt Minh) trên nền tảng liên minh công - nông.</li>
              <li><strong>Phương pháp:</strong> Bạo lực cách mạng, kết hợp chính trị - vũ trang, khởi nghĩa từng phần tiến tới tổng khởi nghĩa, chớp thời cơ.</li>
              <li><strong>Xây dựng Đảng:</strong> Vững mạnh về chính trị, tư tưởng, tổ chức; gắn bó mật thiết với nhân dân.</li>
            </ul>
          </div>
        )
      }
    ]
  }
];

export default function NoiDungChinh() {
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [activeSubSectionId, setActiveSubSectionId] = useState<string | null>(null);

  const handleOpenSection = (section: Section) => {
    setSelectedSection(section);
    setActiveSubSectionId(section.subSections[0].id);
  };

  const activeSubSection = selectedSection?.subSections.find(sub => sub.id === activeSubSectionId);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-12 border border-stone-100">
          <PageHeader
            title="Nội dung chính"
            description="Đảng lãnh đạo đấu tranh giành chính quyền (1930 - 1945)"
          />
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-stone-300 -translate-x-1/2 md:translate-x-0" />

          <div className="space-y-12">
            {sections.map((section, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={section.id} className={`relative flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#A61F2B] rounded-full border-4 border-[#FAFAF7] z-10 -translate-x-1/2 md:translate-x-1/2 shadow-sm" />

                  {/* Empty Space for opposite side */}
                  <div className={`hidden md:flex w-1/2 items-center justify-center ${isLeft ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="text-center">
                      <span className="text-5xl font-black text-white/40 block mb-2">{section.yearLabel}</span>
                      <span className="text-lg font-bold text-white uppercase tracking-wider text-shadow-sm">{section.note}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100 hover:border-[#A61F2B]/30 flex flex-col"
                      onClick={() => handleOpenSection(section)}
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-bold text-white leading-tight text-shadow-sm">
                            {section.title}
                          </h3>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                          {section.summary}
                        </p>
                        <div className="flex items-center text-[#A61F2B] font-medium group-hover:translate-x-2 transition-transform">
                          <span>Xem chi tiết</span>
                          <ChevronRight size={20} />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedSection && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSection(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden h-[85vh] flex flex-col md:flex-row"
            >
              {/* Close Button (Mobile) */}
              <button 
                onClick={() => setSelectedSection(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg md:hidden"
              >
                <X size={20} />
              </button>

              {/* Sidebar Navigation */}
              <div className="w-full md:w-1/3 bg-stone-50 border-r border-stone-200 flex flex-col h-full">
                <div className="p-6 border-b border-stone-200 bg-white">
                  <h3 className="text-xl font-bold text-[#A61F2B] leading-tight">
                    {selectedSection.title}
                  </h3>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-2">
                  {selectedSection.subSections.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setActiveSubSectionId(sub.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-start gap-3 ${
                        activeSubSectionId === sub.id
                          ? "bg-[#A61F2B] text-white shadow-md"
                          : "bg-white text-gray-700 hover:bg-stone-100 border border-stone-100"
                      }`}
                    >
                      <BookOpen size={20} className={`mt-0.5 shrink-0 ${activeSubSectionId === sub.id ? "text-white/90" : "text-[#A61F2B]"}`} />
                      <span className="font-medium text-sm">{sub.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col h-full bg-white relative">
                {/* Close Button (Desktop) */}
                <button 
                  onClick={() => setSelectedSection(null)}
                  className="absolute top-4 right-4 z-20 p-2 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors hidden md:block"
                >
                  <X size={20} />
                </button>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10">
                  {activeSubSection ? (
                    <motion.div
                      key={activeSubSection.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-stone-100">
                        {activeSubSection.title}
                      </h2>
                      <div className="prose prose-lg max-w-none text-gray-700">
                        {activeSubSection.content}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      Chọn một mục để xem chi tiết
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>  
  );
}


