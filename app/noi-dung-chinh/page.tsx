"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const sections = [
  {
    id: 1,
    title: "Quá độ lên CNXH ở Việt Nam",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800",
    summary: "Đặc điểm nổi bật: Bỏ qua chế độ tư bản chủ nghĩa.",
    content: "Việt Nam tiến lên CNXH trong điều kiện bỏ qua chế độ tư bản chủ nghĩa. Đây là sự lựa chọn duy nhất đúng đắn, phản ánh quy luật phát triển khách quan. 'Bỏ qua' không phải là bỏ qua các thành tựu văn minh nhân loại, mà là bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa."
  },
  {
    id: 2,
    title: "Bản chất Chính trị của Dân chủ XHCN",
    image: "https://images.unsplash.com/photo-1541873676947-9ce61199a6c2?q=80&w=800",
    summary: "Nhân dân là chủ thể của quyền lực nhà nước.",
    content: "Là sự lãnh đạo của giai cấp công nhân thông qua Đảng Cộng sản đối với toàn xã hội, nhằm thực hiện quyền lực và lợi ích của nhân dân. Nhân dân thực hiện quyền làm chủ thông qua Nhà nước pháp quyền xã hội chủ nghĩa."
  },
  {
    id: 3,
    title: "Bản chất Kinh tế của Dân chủ XHCN",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800",
    summary: "Dựa trên chế độ công hữu về tư liệu sản xuất.",
    content: "Nền kinh tế dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu và thực hiện nguyên tắc phân phối theo kết quả lao động là chủ yếu. Hướng tới việc thỏa mãn nhu cầu vật chất và tinh thần ngày càng cao của nhân dân."
  },
  {
    id: 4,
    title: "Bản chất Tư tưởng - Văn hóa - Xã hội",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800",
    summary: "Lấy hệ tư tưởng Mác - Lênin làm chủ đạo.",
    content: "Kế thừa và phát huy những tinh hoa văn hóa truyền thống dân tộc và nhân loại. Sự kết hợp hài hòa giữa lợi ích cá nhân, lợi ích tập thể và lợi ích toàn xã hội."
  }
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const summaryImage = "/unnamed.png";

  return (
    <div className="min-h-screen bg-transparent text-[#1C1C1C]">
      
      {/* Header Section với Khung bảo vệ màu sắc */}
      <div className="pt-16 pb-8 flex justify-center">
        <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-8 max-w-[800px] w-full mx-4 text-center shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4 uppercase tracking-wider">
            Chủ nghĩa xã hội khoa học
          </h1>
          <p className="text-[#ffffff] font-medium">
            Hệ thống hóa kiến thức dựa trên Giáo trình và tài liệu MLN131.
          </p>
        </div>
      </div>

      {/* Swiper Section - Đã thêm Navigation (mũi tên) */}
      <div className="w-full py-10 overflow-hidden relative group">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          navigation={{
            prevEl,
            nextEl,
          }} // Bật phím điều hướng
          coverflowEffect={{
            rotate: 0,  
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full max-w-[1200px] !py-10 relative"
        >
          {sections.map((item, index) => (
            <SwiperSlide key={item.id} className="w-[300px] md:w-[500px]">
              <div className={`relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${index === activeIndex ? 'ring-4 ring-[#A61F2B]' : 'opacity-50 scale-90'}`}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div 
            ref={(node) => setPrevEl(node)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 cursor-pointer text-[#A61F2B] hover:scale-110 transition-all bg-white/70 p-2 rounded-full backdrop-blur-md border border-white/50 shadow-lg"
          >
            <ChevronLeft size={32} />
          </div>

          <div 
            ref={(node) => setNextEl(node)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 cursor-pointer text-[#A61F2B] hover:scale-110 transition-all bg-white/70 p-2 rounded-full backdrop-blur-md border border-white/50 shadow-lg"
          >
            <ChevronRight size={32} />
          </div>
        </Swiper>
      </div>

      {/* Dynamic Content Section */}
      <div className="max-w-[860px] mx-auto px-6 mb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-8 md:p-10 shadow-xl"
          >
            <div className="inline-block px-4 py-1 bg-[#A61F2B]/20 text-[#A61F2B] rounded-full text-sm font-semibold mb-4">
              Chủ đề {sections[activeIndex].id}
            </div>
            <h2 className="text-2xl font-bold mb-4 text-[#1C1C1C]">{sections[activeIndex].title}</h2>
            <p className="text-[#333] leading-relaxed text-justify">{sections[activeIndex].content}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- PHẦN TỔNG KẾT CHUNG (CỐ ĐỊNH) --- */}
      <div className="max-w-[1000px] mx-auto px-6 pb-20">
        <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch">
          
          <div className="md:w-1/2 relative group overflow-hidden cursor-zoom-in" onClick={() => setIsZoomed(true)}>
            <img src={summaryImage} alt="Tổng kết" className="w-full h-full min-h-[300px] object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                <div className="bg-white/80 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={24} className="text-[#A61F2B]" />
                </div>
            </div>
          </div>

          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-[#1C1C1C]">
            <h2 className="text-2xl font-bold text-[#A61F2B] mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#A61F2B]"></span>
              TỔNG KẾT THỰC TIỄN
            </h2>
            <p className="font-semibold italic mb-4 italic">"Con đường đi lên CNXH là sự lựa chọn duy nhất đúng đắn."</p>
            <p className="text-gray-800 text-justify">Đảng ta xác định mục tiêu đến năm 2030 là nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao; và đến năm 2045 trở thành nước phát triển, thu nhập cao.</p>
          </div>
        </div>
      </div>

      {/* Modal Phóng To */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsZoomed(false)} className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out">
            <button className="absolute top-10 right-10 text-white hover:text-[#A61F2B] transition-colors"><X size={40} /></button>
            <motion.img initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} src={summaryImage} className="max-w-full max-h-full rounded-lg shadow-2xl border-2 border-white/20" />
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        /* Tùy chỉnh mũi tên Swiper */
        .swiper-button-next, .swiper-button-prev {
          color: #A61F2B !important; /* Màu đỏ đô */
          background: rgba(255, 255, 255, 0.3); /* Nền mờ nhẹ */
          width: 50px !important;
          height: 50px !important;
          border-radius: 50%;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 20px !important;
          font-weight: bold;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background: rgba(166, 31, 43, 0.1);
          transform: scale(1.1);
        }
        .swiper-pagination-bullet-active {
          background: #A61F2B !important;
        }
      `}</style>
    </div>
  );
}