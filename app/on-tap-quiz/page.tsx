import PageHeader from '../components/PageHeader';

export default function OnTapQuiz() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <PageHeader
          title="Video Tổng Hợp Kiến Thức"
          description="Video tổng hợp kiến thức về đường lối cách mạng 1930–1945"
        />

        <div className="bg-white border border-[#E5E5E5] rounded-lg p-8">
          <div className="aspect-video w-full">
            <video 
              className="w-full h-full rounded-lg"
              controls
              preload="metadata"
            >
              <source src="/video.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
