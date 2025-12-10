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
                <li><strong>Khủng hoảng kinh tế (1929 - 1933):</strong> Cuộc khủng hoảng kinh tế thế giới làm nền kinh tế các nước tư bản suy thoái nghiêm trọng. Tại Đông Dương, Pháp tăng cường bóc lột, sưu thuế để bù đắp thiệt hại cho chính quốc, làm đời sống nhân dân vô cùng cực khổ</li>
                <li><strong>Khủng bố trắng:</strong> Sau khởi nghĩa Yên Bái (2/1930), thực dân Pháp tiến hành chiến dịch khủng bố trắng dã man, làm mâu thuẫn dân tộc càng thêm gay gắt</li>
                <li><strong>Đảng ra đời (1930):</strong>  Sự ra đời của Đảng Cộng sản Việt Nam (đầu năm 1930) đã kịp thời lãnh đạo cuộc đấu tranh thống nhất trên cả nước.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">b. Diễn biến chính</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Giai đoạn đầu (2-4/1930):</strong> Nổ ra các cuộc bãi công của công nhân (Phú Riềng, Nam Định, Bến Thủy...) và biểu tình của nông dân (Thái Bình, Hà Nam, Nghệ An...).</li>
                <li><strong>Giai đoạn cao trào (5/1930):</strong> Nhân ngày Quốc tế Lao động 1/5, phong trào lan rộng toàn quốc. Lần đầu tiên công - nông cùng phối hợp đấu tranh.</li>
                <li><strong>Giai đoạn đỉnh cao (9/1930 - Xô Viết Nghệ Tĩnh):</strong>
                  <ul className="list-circle pl-5 mt-2 space-y-1">
                    <li>Phong trào phát triển mạnh nhất ở Nghệ An và Hà Tĩnh. Tiêu biểu là cuộc biểu tình ngày 12/9/1930 tại Hưng Nguyên bị máy bay Pháp ném bom làm 171 người chết.</li>
                    <li>Bộ máy chính quyền của đế quốc và tay sai ở nhiều nơi tan rã. Các tổ chức Đảng và Nông hội đứng ra quản lý đời sống, thực hiện quyền làm chủ của nhân dân (trấn áp phản cách mạng, chia ruộng đất, xóa bỏ tệ nạn...). Đây là hình thức sơ khai của chính quyền Xô viết.</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">c. Ý nghĩa lịch sử</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Khẳng định quyền lãnh đạo và năng lực lãnh đạo của giai cấp công nhân và Đảng.</li>
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
              <p className="text-gray-700">Hội nghị Ban Chấp hành Trung ương lần thứ nhất họp tại Hương Cảng (Hồng Kông) tháng 10/1930. Quyết định đổi tên Đảng Cộng sản Việt Nam thành Đảng Cộng sản Đông Dương. Bầu đồng chí Trần Phú làm Tổng Bí thư.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">b. Nội dung chính</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Mâu thuẫn giai cấp:</strong> Một bên là thợ thuyền, dân cày, lao khổ; một bên là địa chủ, phong kiến, tư bản và đế quốc.</li>
                <li><strong>Phương hướng chiến lược:</strong>Lúc đầu là "cách mạng tư sản dân quyền" có tính chất thổ địa và phản đế, sau đó tiến thẳng lên xã hội chủ nghĩa, bỏ qua giai đoạn tư bản chủ nghĩa.</li>
                <li><strong>Nhiệm vụ:</strong> Đánh đổ phong kiến và đánh đổ đế quốc. Luận cương nhấn mạnh "vấn đề thổ địa là cái cốt của cách mạng tư sản dân quyền".</li>
                <li><strong>Lực lượng:</strong> Giai cấp vô sản và nông dân là hai động lực chính. Giai cấp vô sản là động lực chính và mạnh, nắm quyền lãnh đạo.</li>
                <li><strong>Phương pháp cách mạng:</strong> Võ trang bạo động.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">c. Hạn chế</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Không nêu rõ mâu thuẫn chủ yếu của xã hội thuộc địa (mâu thuẫn dân tộc).</li>
                <li>Không nhấn mạnh nhiệm vụ giải phóng dân tộc lên hàng đầu (nặng về đấu tranh giai cấp và cách mạng ruộng đất).</li>
                <li>Đánh giá không đúng vai trò của các tầng lớp tiểu tư sản, tư sản dân tộc, địa chủ yêu nước (không tập hợp được khối đại đoàn kết dân tộc rộng rãi) .</li>
              </ul>
              <p className="text-sm italic text-gray-500 mt-2">Nguyên nhân hạn chế: Nhận thức chưa đầy đủ về thực tiễn cách mạng thuộc địa và chịu ảnh hưởng giáo điều, tả khuynh từ Quốc tế Cộng sản.</p>
            </div>
          </div>
        )
      },
      {
        id: "1.3",
        title: "1.3. Cuộc đấu tranh khôi phục tổ chức và phong trào cách mạng, Đại hội Đảng lần thứ I (3/1935)",
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">a. Giai đoạn thoái trào và đấu tranh trong nhà tù (1931 - 1934)</h4>
              <p className="text-gray-700 mb-2">Thực dân Pháp khủng bố: Từ 1931, Pháp đàn áp dã man. Tổng Bí thư Trần Phú bị bắt và hy sinh (1931). Cơ quan Trung ương Đảng bị phá vỡ.</p>
              <p className="text-gray-700 mb-2">Đấu tranh trong tù: Các đảng viên biến nhà tù thành trường học cách mạng. Thành lập các chi bộ nhà tù, biên soạn tài liệu lý luận, ra báo bí mật (như tờ "Đuốc đưa đường", "Con đường chính") để giữ vững khí tiết và bồi dưỡng lực lượng</p>
              <p className="text-gray-700 mb-2">Khôi phục phong trào:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>1932: Ban hành Chương trình hành động.</li>
                <li>1934: Thành lập Ban Chỉ huy ở ngoài.</li>
                <li>1935: Hệ thống tổ chức cơ bản phục hồi.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">b. Đại hội Đảng lần thứ I (3/1935)</h4>
              <p className="text-gray-700 mb-2"><strong>Địa điểm:</strong> Họp tại Ma Cao.</p>
              <p className="text-gray-700 mb-2">Bầu Lê Hồng Phong làm Tổng Bí thư.</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Nhiệm vụ:</strong> Củng cố Đảng, đẩy mạnh vận động quần chúng, tuyên truyền chống đế quốc, chống chiến tranh, ủng hộ Liên Xô và ủng hộ cách mạng Trung Quốc.</li>
                <li><strong>Ý nghĩa:</strong> Đánh dấu sự phục hồi hệ thống tổ chức của Đảng và phong trào quần chúng, chuẩn bị cho giai đoạn cao trào mới.</li>
                <li><strong>Hạn chế:</strong> Đại hội vẫn chưa đề ra được chủ trương chiến lược phù hợp (chưa đặt nhiệm vụ giải phóng dân tộc lên hàng đầu).</li>
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
        title: "2.1. Điều kiện lịch sử và chủ trương của Đảng",
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">a. Bối cảnh</h4>
              <p className="text-gray-700 mb-2">Thế giới:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Khủng hoảng kinh tế 1929 - 1933 dẫn đến sự xuất hiện của chủ nghĩa phát xít (Đức, Ý, Nhật) và nguy cơ chiến tranh thế giới.</li>
                <li><strong>Đại hội VII Quốc tế Cộng sản (7/1935):</strong> Xác định kẻ thù nguy hiểm trước mắt là chủ nghĩa phát xít; nhiệm vụ là chống phát xít, chống chiến tranh, bảo vệ dân chủ và hòa bình; chủ trương thành lập Mặt trận nhân dân rộng rãi.</li>
                <li>Pháp (1936): Mặt trận nhân dân Pháp thắng cử, ban hành nhiều chính sách tự do, dân chủ, thả tù chính trị ở thuộc địa.</li>
              </ul>
              <p className="text-gray-700 mb-2">Trong nước:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Hệ quả của khủng hoảng kinh tế và chính sách cai trị làm đời sống nhân dân ngột ngạt, yêu cầu cải cách dân chủ tăng cao.</li>
                <li>Nhiều tù chính trị được trả tự do, nhanh chóng tham gia hoạt động, phục hồi hệ thống tổ chức Đảng.</li>
                </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">b. Chủ trương của Đảng</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Các Hội nghị Trung ương:</strong> Hội nghị tháng 7/1936 (Thượng Hải), tháng 3/1937, tháng 9/1937 và tháng 3/1938 đã định ra đường lối mới.</li>
                <li><strong>Kẻ thù trước mắt:</strong> Phản động thuộc địa và tay sai.</li>
                <li><strong>Nhiệm vụ trước mắt:</strong> Chống phát xít, chống chiến tranh đế quốc, chống phản động thuộc địa; đòi tự do, dân chủ, cơm áo và hòa bình.</li>
                <li><strong>Mặt trận:</strong> Thành lập Mặt trận nhân dân phản đế Đông Dương (sau đổi thành Mặt trận Dân chủ Đông Dương) để tập hợp rộng rãi các giai cấp, đảng phái, tôn giáo, dân tộc.</li>
                <li><strong>Hình thức đấu tranh:</strong> Chuyển từ bí mật, bất hợp pháp sang kết hợp công khai, nửa công khai, hợp pháp, nửa hợp pháp với bí mật, bất hợp pháp.</li>
                <li><strong>Nhận thức mới về chiến lược:</strong> “Cuộc dân tộc giải phóng không nhất định phải kết chặt với cuộc cách mạng điền địa”. “Nói tóm lại, nếu phát triển cuộc tranh đấu chia đất mà ngăn trở cuộc tranh đấu phản đế thì phải lựa chọn vấn đề nào quan trọng hơn mà giải quyết trước”.</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "2.2",
        title: "2.2.  Phong trào đấu tranh đòi tự do, dân chủ, cơm áo, hòa bình",
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">a. Các phong trào tiêu biểu</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Phong trào Đông Dương Đại hội:</strong> Vận động thu thập "dân nguyện", lập các "Ủy ban hành động" khắp nơi để thảo luận các yêu sách đòi quyền sống, quyền dân chủ.</li>
                <li><strong>Phong trào "đón rước" (1937):</strong> Lợi dụng việc phái viên chính phủ Pháp (Gôđa) và Toàn quyền mới (Brêvié) đến Đông Dương để tổ chức mít tinh, biểu tình, đưa yêu sách ("dân nguyện").</li>
                <li><strong>Đấu tranh nghị trường:</strong> Vận động đưa người của Mặt trận Dân chủ vào các Viện dân biểu Bắc Kỳ, Trung Kỳ, Hội đồng quản hạt Nam Kỳ...</li>
                <li><strong>Đấu tranh trên lĩnh vực báo chí:</strong> Xuất bản công khai nhiều tờ báo của Đảng và Mặt trận và sách chính trị phổ thông để tuyên truyền chủ nghĩa Mác - Lênin và chính sách của Đảng . Tiêu biểu có tác phẩm "Vấn đề dân cày" (1938) của Qua Ninh (Trường Chinh)  - Vân Đình (Võ Nguyên Giáp).</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">b. Kết quả & Ý nghĩa</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Giáo dục chính trị:</strong> Một đội quân chính trị quần chúng hàng triệu người được giác ngộ và rèn luyện.</li>
                <li><strong>Phát triển lực lượng:</strong> Uy tín và ảnh hưởng của Đảng mở rộng, tổ chức Đảng được củng cố và phát triển mạnh mẽ từ thành thị đến nông thôn.</li>
                <li><strong>Kinh nghiệm:</strong> Đảng tích lũy được nhiều bài học về xây dựng mặt trận thống nhất, kết hợp các hình thức đấu tranh công khai và bí mật.</li>
                <li><strong>Ý nghĩa:</strong> Đây là cuộc tập dượt thứ hai chuẩn bị cho Cách mạng Tháng Tám năm 1945.</li>
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
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">a. Bối cảnh và chuyển hướng chiến lược của Đảng</h4>
              <p className="text-gray-700 mb-2">Từ năm 1939, phong trào giải phóng dân tộc diễn ra trong bối cảnh Thế chiến II bùng nổ. Pháp thi hành chính sách đàn áp thẳng tay: thiết quân luật, cấm tuyên truyền, bắt bớ cán bộ, vơ vét tài nguyên và bắt lính, khiến đời sống nhân dân cực khổ. Đảng chuyển vào hoạt động bí mật nhưng vẫn duy trì phong trào ở đô thị.</p>
              <p className="text-gray-700 mb-2">Năm 1940, Nhật kéo vào Đông Dương và câu kết với Pháp, tạo ra tình cảnh “một cổ hai tròng”. Nhật kiểm soát kinh tế, vơ vét lương thực dẫn tới nạn đói 1945. Mâu thuẫn giữa các đế quốc tạo thời cơ cho cách mạng.</p>
              <p className="text-gray-700 mb-2">Trước tình hình đó, Đảng có chủ trương chiến lược mới:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Thông báo 29/9/1939 dự báo nhiệm vụ trung tâm sẽ là giải phóng dân tộc.</li>
                <li><strong>Hội nghị TW 6 (11/1939):</strong> Xác định con đường cứu nước là đánh đổ ách ngoại xâm; tạm gác cách mạng ruộng đất, tập trung chống Pháp – Nhật; lập Mặt trận phản đế Đông Dương.</li>
                <li><strong>Hội nghị TW 8 (5/1941):</strong> Tại Pác Bó do Nguyễn Ái Quốc chủ trì:
                  <ul className="list-circle pl-5 mt-1 space-y-1">
                    <li>Khẳng định nhiệm vụ hàng đầu là <strong>cách mạng dân tộc giải phóng</strong>.</li>
                    <li>Thành lập <strong>Mặt trận Việt Minh</strong>.</li>
                    <li>Chủ trương <strong>giảm tô giảm tức</strong>.</li>
                    <li>Xúc tiến chuẩn bị khởi nghĩa vũ trang và xây dựng nhà nước dân chủ cộng hòa sau khi giành chính quyền.</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">b. Phong trào chống Pháp - Nhật & Chuẩn bị lực lượng</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Khởi nghĩa vũ trang đầu tiên:</strong>
                  <ul className="list-circle pl-5 mt-1 space-y-1">
                    <li><strong>Bắc Sơn (9/1940):</strong> thành lập đội du kích Bắc Sơn, mở đầu đấu tranh vũ trang.</li>
                    <li><strong>Nam Kỳ (11/1940):</strong> lan rộng nhưng bị đàn áp.</li>
                    <li><strong>Binh biến Đô Lương (1/1941):</strong> thất bại nhưng có ý nghĩa cổ vũ.</li>
                  </ul>
                </li>
                <li><strong>Xây dựng lực lượng:</strong>
                  <ul className="list-circle pl-5 mt-1 space-y-1">
                    <li><strong>Chính trị:</strong> Các Hội Cứu quốc trong Việt Minh.</li>
                    <li><strong>Vũ trang:</strong> Đội Việt Nam Tuyên truyền Giải phóng quân (22/12/1944).</li>
                    <li><strong>Căn cứ địa:</strong> Cao - Bắc - Lạng, Khu giải phóng Việt Bắc.</li>
                  </ul>
                </li>
              </ul>
              <p className="text-gray-700 mb-2">Đảng tích cực chuẩn bị lực lượng: thành lập Việt Minh (10/1941), xây dựng các đoàn thể cứu quốc; phát triển căn cứ địa Việt Bắc; duy trì lực lượng Cứu quốc quân. Năm 1942 Nguyễn Ái Quốc bị bắt ở Trung Quốc, đến 1943 mới được thả.</p>
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
                <li>Ngày 9/3/1945, Nhật đảo chính Pháp để độc chiếm Đông Dương. Ban Thường vụ Trung ương Đảng ra Chỉ thị "Nhật – Pháp bắn nhau và hành động của chúng ta” (12/3/1945), xác định <strong>kẻ thù duy nhất trước mắt là Nhật</strong> và phát động <strong>cao trào kháng Nhật cứu nước</strong>.</li>
                <li>Phong trào diễn ra mạnh mẽ: chiến tranh du kích, khởi nghĩa từng phần, trừ gian diệt ác ở đô thị, đặc biệt phong trào <strong>“phá kho thóc, giải quyết nạn đói”</strong> lôi cuốn hàng triệu người tham gia. Cao trào này là cuộc “tập dượt lớn” chuẩn bị cho tổng khởi nghĩa.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">b. Tổng khởi nghĩa giành chính quyền (8/1945)</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Thời cơ:</strong> Thời điểm tháng 8/1945, Nhật đầu hàng Đồng minh; bộ máy cai trị ở Đông Dương tan rã; quân Đồng minh chưa kéo vào → thời cơ <strong>“ngàn năm có một”</strong>.</li>
                <li><strong>Quyết định(13/8-16/8):</strong> Ủy ban Khởi nghĩa ra Quân lệnh số 1. Đại hội Quốc dân Tân Trào tán thành Tổng khởi nghĩa.</li>
                <li><strong>Diễn biến:</strong>
                  <ul className="list-circle pl-5 mt-1 space-y-1">
                    <li><strong>19/8:</strong> Hà Nội giành chính quyền.</li>
                    <li><strong>23/8:</strong> Huế giành chính quyền, vua Bảo Đại thoái vị.</li>
                    <li><strong>25/8:</strong> Khởi nghĩa thành công ở Sài Gòn.</li>
                    <li><strong>2/9/1945:</strong> Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.</li>
                  </ul>
                </li>
                <li><strong>Vai trò lãnh đạo của Đảng:</strong> 
                  <ul className="list-circle pl-5 mt-1 space-y-1">
                    <li><strong>Chuẩn bị đường lối và lực lượng lâu dài</strong> (1930–1945); chuyển hướng chiến lược kịp thời từ 1939.</li>
                    <li><strong>Xây dựng khối đại đoàn kết dân tộc</strong> qua Việt Minh, phát huy sức mạnh toàn dân.</li>
                    <li><strong>Nghệ thuật nắm bắt thời cơ xuất sắc:</strong> khởi nghĩa đúng lúc, hạn chế đổ máu.</li>
                    <li><strong>Kết hợp đấu tranh chính trị – vũ trang, nông thôn – thành thị,</strong> tạo sức mạnh tổng hợp đánh bại kẻ thù.</li>
                  </ul>
                </li>
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
        title: "4.1. Tính chất của Cách mạng Tháng Tám: Một cuộc cách mạng giải phóng dân tộc điển hình",
        content: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">a. Tính chất và mục tiêu chủ yếu của Cách mạng Tháng Tám 1945</h4>
              <p className="text-gray-700">Cách mạng Tháng Tám năm 1945 được xác định là một cuộc cách mạng giải phóng dân tộc mang tính chất dân chủ mới, là một bộ phận khăng khít của cách mạng dân tộc dân chủ nhân dân Việt Nam. Tính chất "điển hình" của cuộc cách mạng này thể hiện trước hết ở việc nó tập trung giải quyết mâu thuẫn chủ yếu nhất của xã hội Việt Nam lúc bấy giờ là <strong>mâu thuẫn giữa toàn thể dân tộc với đế quốc xâm lược và tay sai</strong>. Nhiệm vụ hàng đầu và cấp bách nhất được đặt ra là giải phóng dân tộc, đáp ứng đúng yêu cầu khách quan của lịch sử và nguyện vọng cháy bỏng về độc lập, tự do của quần chúng nhân dân.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">b. Tính chất dân tộc thể hiện ở lực lượng tham gia và chính quyền mới</h4>
              <p className="text-gray-700">Tính chất dân tộc điển hình còn được thể hiện rõ nét qua lực lượng tham gia và chính quyền được thiết lập sau cách mạng. Lực lượng cách mạng không chỉ giới hạn trong một giai cấp nào mà bao gồm <strong>toàn dân tộc</strong>, đoàn kết chặt chẽ trong Mặt trận Việt Minh với các tổ chức "cứu quốc", tạo nên sức mạnh tổng hợp của sự vùng dậy toàn dân.</p>
              <p className="text-gray-700">Chính quyền nhà nước được thành lập là chính quyền <strong>"của chung toàn dân tộc"</strong> theo hình thức cộng hòa dân chủ, trong đó mọi người dân sống trên đất nước Việt Nam (trừ tay sai và phản quốc) đều được tham gia và có trách nhiệm bảo vệ . Bên cạnh đó, cuộc cách mạng còn mang đậm tính <strong>nhân văn sâu sắc</strong> khi giải phóng con người Việt Nam khỏi mọi sự áp bức về dân tộc, bóc lột về giai cấp và nô dịch về tinh thần.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">c. Hạn chế về tính dân chủ và nguyên nhân</h4>
              <p className="text-gray-700">Tuy nhiên, tính chất dân chủ của Cách mạng Tháng Tám <strong>chưa đầy đủ và sâu sắc</strong>. Mặc dù cách mạng đã đem lại các quyền tự do, dân chủ cho nhân dân, xóa bỏ chế độ quân chủ, và thực hiện một số chính sách kinh tế như giảm tô, tịch thu ruộng đất của đế quốc, Việt gian chia cho dân cày, nhưng cuộc cách mạng này chưa làm xong cách mạng ruộng đất. Khẩu hiệu "người cày có ruộng" chưa được thực hiện triệt để, chế độ chiếm hữu ruộng đất phong kiến chưa bị xóa bỏ hoàn toàn. Nhưng đây là sự lựa chọn chiến lược đúng đắn của Đảng lúc bấy giờ nhằm tập trung tối đa cho mục tiêu giải phóng dân tộc.</p>
            </div>
          </div>
        )
      },
      {
        id: "4.2",
        title: "4.2. Ý nghĩa lịch sử: Bước ngoặt vĩ đại của dân tộc và thời đại",
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">a. Tầm vóc lịch sử đối với dân tộc Việt Nam</h4>
              <ul className="list-circle pl-5 mt-1 space-y-1">
              <li>Thắng lợi của Cách mạng Tháng Tám mang tầm vóc lịch sử to lớn đối với dân tộc Việt Nam. Cuộc cách mạng đã đập tan xiềng xích nô lệ của chủ nghĩa đế quốc tồn tại gần một thế kỷ và chấm dứt sự tồn tại của chế độ quân chủ chuyên chế kéo dài hàng nghìn năm. Sự ra đời của nước Việt Nam Dân chủ Cộng hòa - nhà nước của nhân dân đầu tiên ở Đông Nam Á - đã giải quyết thành công vấn đề cơ bản của một cuộc cách mạng xã hội là vấn đề chính quyền. </li>
              <li>Với thắng lợi này, nhân dân Việt Nam đã thực hiện một cuộc đổi đời chưa từng có: từ thân phận nô lệ, bị áp bức bước lên địa vị người chủ đất nước, nắm quyền quyết định vận mệnh của mình. Đất nước ta từ một xứ thuộc địa đã trở thành một quốc gia độc lập có chủ quyền, sánh vai cùng các dân tộc trên thế giới. </li>
              <li>Đặc biệt, sự kiện này đánh dấu bước chuyển mình căn bản của Đảng Cộng sản Đông Dương, từ một đảng hoạt động bí mật, bất hợp pháp trở thành một đảng cầm quyền, lãnh đạo nhân dân xây dựng và bảo vệ đất nước .</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#A61F2B] text-xl mb-3">b. Ý nghĩa quốc tế và tầm vóc thời đại</h4>
              <ul className="list-circle pl-5 mt-1 space-y-1">
              <li>Về mặt quốc tế, Cách mạng Tháng Tám có ý nghĩa thời đại sâu sắc. Đây là lần đầu tiên trong lịch sử phong trào giải phóng dân tộc, một cuộc cách mạng do Đảng Cộng sản lãnh đạo đã giành thắng lợi hoàn toàn ở một nước thuộc địa, lật đổ ách thống trị của thực dân phong kiến trước khi giai cấp công nhân ở "chính quốc" lên nắm chính quyền.</li>
              <li>Thắng lợi này đã chọc thủng một khâu quan trọng trong hệ thống thuộc địa của chủ nghĩa đế quốc, mở đầu cho thời kỳ suy sụp và tan rã của chủ nghĩa thực dân cũ trên toàn thế giới.</li>
              <li>Do đó, Cách mạng Tháng Tám không chỉ là chiến công của riêng dân tộc Việt Nam mà còn là nguồn cổ vũ mạnh mẽ, là tấm gương sáng cho các dân tộc bị áp bức ở châu Á, châu Phi và Mỹ Latinh trong cuộc đấu tranh giành độc lập, tự do.</li>
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
            <p className="text-gray-700">Thắng lợi của Cách mạng Tháng Tám đã để lại cho Đảng và nhân dân ta kho tàng kinh nghiệm phong phú, có giá trị trường tồn.</p>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li><strong>Thứ nhất là bài học về chỉ đạo chiến lược:</strong> Đảng đã giải quyết đúng đắn mối quan hệ giữa hai nhiệm vụ chiến lược là chống đế quốc và chống phong kiến. Trong hoàn cảnh cụ thể của một nước thuộc địa, Đảng đã kiên quyết đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, tạm gác nhiệm vụ cách mạng ruộng đất, thực hiện từng bước thích hợp để phục vụ cho mục tiêu cao nhất là giành độc lập.</li>
              <li><strong>Thứ hai là bài học về xây dựng lực lượng:</strong> Trên nền tảng khối liên minh công nông vững chắc, Đảng đã khơi dậy mạnh mẽ tinh thần dân tộc, tập hợp mọi giai cấp, tầng lớp yêu nước trong Mặt trận Việt Minh rộng rãi. Chính sách đại đoàn kết dân tộc này đã biến Việt Minh thành một "lò lửa khởi nghĩa", động viên đến mức cao nhất sức người, sức của của toàn dân cho trận quyết chiến lược cuối cùng.</li>
              <li><strong>Thứ ba là bài học về phương pháp cách mạng:</strong>  Đảng đã quán triệt sâu sắc quan điểm bạo lực cách mạng, kết hợp nhuần nhuyễn giữa đấu tranh chính trị với đấu tranh vũ trang, giữa lực lượng chính trị và lực lượng vũ trang. Quá trình cách mạng đi từ khởi nghĩa từng phần, chiến tranh du kích cục bộ để giành chính quyền ở những nơi có điều kiện, tiến tới chớp đúng thời cơ "ngàn năm có một" để phát động tổng khởi nghĩa đồng loạt trên cả nước, giành thắng lợi nhanh gọn, ít đổ máu.</li>
              <li><strong>Thứ tư là bài học về xây dựng Đảng:</strong> Thắng lợi này khẳng định vai trò tiên phong của một Đảng Mác - Lênin có đường lối chính trị đúng đắn, tư tưởng thống nhất và tổ chức chặt chẽ. Đảng đã biết vận dụng sáng tạo chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh vào thực tiễn Việt Nam, xây dựng đội ngũ cán bộ, đảng viên kiên trung, gắn bó mật thiết với nhân dân. Sự lãnh đạo sáng suốt, nhạy bén của Trung ương Đảng kết hợp với tính chủ động, sáng tạo của các đảng bộ địa phương là nhân tố quyết định đưa cách mạng đến thành công.</li>
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


