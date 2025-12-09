'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[860px] mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#1C1C1C] mb-6 leading-tight">
            ĐƯỜNG LỐI CÁCH MẠNG 1930–1945
          </h1>
          <p className="text-lg text-[#585858] leading-relaxed mb-8 max-w-[680px] mx-auto">
            Tìm hiểu đường lối cách mạng của Đảng Cộng sản Việt Nam trong giai đoạn lịch sử quan trọng, 
            từ khi thành lập đến Cách mạng Tháng Tám thành công.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/noi-dung-chinh"
              className="px-6 py-3 bg-[#A61F2B] text-white rounded-lg hover:bg-[#8B1923] transition-colors duration-200"
            >
              Khám phá nội dung chính
            </Link>
            <button
              onClick={() => document.querySelector('.fixed.bottom-6.right-6 button')?.click()}
              className="px-6 py-3 border border-[#E5E5E5] text-[#1C1C1C] rounded-lg hover:border-[#A61F2B] hover:text-[#A61F2B] transition-colors duration-200"
            >
              Hỏi nhanh AI
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-[860px] mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1C1C1C] mb-8 text-center">
          Nội dung website
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/noi-dung-chinh"
            className="bg-white border border-[#E5E5E5] rounded-lg p-6 hover:border-[#A61F2B] transition-colors duration-200 group"
          >
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2 group-hover:text-[#A61F2B]">
              Nội dung chính
            </h3>
            <p className="text-[#585858] text-sm leading-relaxed">
              6 chủ đề về đường lối cách mạng từ 1930–1945, chuyển đổi bằng tab
            </p>
          </Link>
          
          <Link
            href="/on-tap-quiz"
            className="bg-white border border-[#E5E5E5] rounded-lg p-6 hover:border-[#A61F2B] transition-colors duration-200 group"
          >
            <div className="text-3xl mb-4">📹</div>
            <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2 group-hover:text-[#A61F2B]">
              Video Tổng Hợp Kiến Thức
            </h3>
            <p className="text-[#585858] text-sm leading-relaxed">
              Xem video tổng hợp kiến thức về các giai đoạn lịch sử
            </p>
          </Link>

          <div className="bg-white border border-[#E5E5E5] rounded-lg p-6">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">
              Trợ lý AI
            </h3>
            <p className="text-[#585858] text-sm leading-relaxed">
              Chatbox thông minh giúp giải đáp thắc mắc về nội dung học
            </p>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="max-w-[860px] mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1C1C1C] mb-8 text-center">
          Gợi ý sử dụng website
        </h2>
        <div className="bg-white border border-[#E5E5E5] rounded-lg p-8">
          <ul className="space-y-4 text-[#1C1C1C] leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
              <span>Truy cập trang <strong>Nội dung chính</strong> và sử dụng tab để chuyển đổi giữa 6 chủ đề lịch sử</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
              <span>Đọc theo thứ tự từ "Đường lối tổng quát" đến "Tổng kết" để hiểu logic đường lối một cách hệ thống</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
              <span>Sử dụng Trợ lý AI ở góc phải màn hình để hỏi lại phần chưa rõ hoặc cần giải thích thêm</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
              <span>Truy cập trang <strong>Video Tổng Hợp Kiến Thức</strong> để xem video tổng hợp kiến thức về các giai đoạn lịch sử</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
              <span>Ghi chú những điểm quan trọng về chủ trương, phương pháp và ý nghĩa của từng giai đoạn</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

