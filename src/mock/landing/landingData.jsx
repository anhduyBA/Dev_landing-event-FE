// ======================================
// MOCK DATA - LANDING PAGE
// TODO: Thay bằng API call khi nối BE
// ======================================

import {
  CloudServerOutlined,
  BarChartOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import React from "react";

// Templates/Products data
export const templatesData = [
  {
    id: 1,
    category: "SAAS & STARTUPS",
    rating: 4.9,
    title: "Nexus SaaS Launch Kit",
    description:
      "Hệ sinh thái hoàn chỉnh cho sản phẩm SaaS với landing page, pricing table và dashboard.",
    tags: ["REACT", "TAILWIND"],
    price: "$49",
    bgColor: "#e8d0c4",
  },
  {
    id: 2,
    category: "DIGITAL PRODUCTS",
    rating: 5,
    title: "Minimal E-Book Sales",
    description:
      "Layout sạch để tập trung vào chuyển đổi, tối ưu cho sản phẩm số.",
    tags: ["HTML5", "CSS3"],
    price: "$29",
    bgColor: "#d4e8d4",
    badge: "BESTSELLER",
  },
  {
    id: 3,
    category: "EVENTS",
    rating: 4.8,
    title: "Summit Event Page",
    description:
      "Template sự kiện chuyên nghiệp với countdown, speakers và schedule.",
    tags: ["VUE.JS"],
    price: "$39",
    bgColor: "#dcc9bb",
  },
];

// Features/Services data
export const featuresData = [
  {
    id: 1,
    title: "Triển Khai Cloud",
    description:
      "Hosting hiệu suất cao với phân phối CDN toàn cầu, đảm bảo tốc độ tải trang nhanh nhất.",
    icon: <CloudServerOutlined style={{ fontSize: 28 }} />,
    iconBgColor: "#ecfdf5",
  },
  {
    id: 2,
    title: "Phân Tích Thời Gian Thực",
    description:
      "Phân tích sâu hành vi khách truy cập với heatmap tích hợp và tracking chuyển đổi.",
    icon: <BarChartOutlined style={{ fontSize: 28 }} />,
    iconBgColor: "#f0f9ff",
  },
  {
    id: 3,
    title: "Bảo Mật Doanh Nghiệp",
    description:
      "SSL bảo vệ toàn bộ, bảo vệ DDoS và công cụ tuân thủ GDPR sẵn sàng cho mọi trang web.",
    icon: <SafetyCertificateOutlined style={{ fontSize: 28 }} />,
    iconBgColor: "#fefce8",
  },
];

// Testimonials data
export const testimonialsData = [
  {
    id: 1,
    name: "Nguyễn Thị Mai",
    title: "Trưởng Phòng Tăng Trưởng, TechFlow",
    text: "TemplateStation đã thay đổi cách chúng tôi tiếp cận khách hàng. Các module game tương tác thực sự làm tăng tỷ lệ chuyển đổi.",
    rating: 5,
  },
  {
    id: 2,
    name: "Trần Văn Hùng",
    title: "CEO, Enterprise Digital",
    text: "Tốc độ phát triển tăng lên rõ rệt. Chúng tôi đã có toàn bộ funnel lên sống trong vòng chưa đầy một giờ.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lê Hoàng Anh",
    title: "Lead Developer, SkyHub",
    text: "Code sạch nhất tôi từng thấy trong bất kỳ marketplace nào. Các developer của chúng tôi đánh giá rất cao.",
    rating: 5,
  },
];

// Navigation links
export const navLinks = [
  { label: "Templates", href: "#products" },
  { label: "Games", href: "#interactive" },
  { label: "Dịch Vụ", href: "#features" },
  { label: "Đánh Giá", href: "#testimonials" },
];

// Footer links
export const footerLinks = {
  products: [
    { label: "Templates", href: "#" },
    { label: "Marketing Games", href: "#" },
    { label: "Minigame", href: "#" },
    { label: "Flash Sales", href: "#" },
  ],
  support: [
    { label: "Tài Liệu", href: "#" },
    { label: "Hướng Dẫn Tích Hợp", href: "#" },
    { label: "Hỗ Trợ", href: "#" },
    { label: "API References", href: "#" },
  ],
};
