const CONTACT_INFO = {
    zalo: "0354213785", 
    facebook: "https://www.facebook.com/share/1FyYM5saKm/",
    name: "Tổng Kho Sim & Gói Cước"
};

const PACKAGES = [
    // GÓI THÁNG
    { id: 'sd90', name: 'SD90', price: 90000, data: '1.5GB/Ngày', duration: '30 Ngày', type: 'month', desc: '45GB/tháng. Gói cước quốc dân.', hot: true, perks: [] },
    { id: 'sd120', name: 'SD120', price: 120000, data: '2GB/Ngày', duration: '30 Ngày', type: 'month', desc: '60GB/tháng. Lướt web mượt mà.', hot: false, perks: [] },
    { id: 'mxh100', name: 'MXH100', price: 100000, data: '1GB/Ngày', duration: '30 Ngày', type: 'social', desc: 'Free Data TikTok, YouTube, Facebook.', hot: true, perks: ['Free Social'] },
    { id: 'tv95k', name: 'TV95K', price: 95000, data: '1.5GB/Ngày', duration: '30 Ngày', type: 'month', desc: 'Free xem TV360 Standard.', hot: false, perks: ['Free TV360'] },
    
    // GÓI 3 THÁNG
    { id: '3sd135', name: '3SD135', price: 405000, data: '5GB/Ngày', duration: '90 Ngày', type: 'month3', desc: '450GB/90 ngày. Data siêu khủng.', hot: true, perks: ['Data Khủng'] },
    { id: '3sd150', name: '3SD150', price: 450000, data: '3GB/Ngày', duration: '90 Ngày', type: 'month3', desc: '270GB/90 ngày. Thoải mái dùng.', hot: false, perks: [] },
    { id: '3sd125t', name: '3SD125T', price: 375000, data: '10GB/Ngày', duration: '90 Ngày', type: 'month3', desc: '7GB Tỉnh + 3GB Toàn quốc.', hot: true, perks: ['Ưu Đãi Tỉnh'] },
    { id: '3t5g160', name: '3T5G160', price: 480000, data: '6GB/Ngày', duration: '90 Ngày', type: 'month3', desc: 'Xem TV360 Sport + Phim mới.', hot: false, perks: ['TV360 Sport'] },
    { id: '3t5g150', name: '3T5G150', price: 450000, data: '6GB/Ngày', duration: '90 Ngày', type: 'month3', desc: 'Miễn phí xem TV360.', hot: false, perks: ['Free TV360'] },
    { id: '3gic125n', name: '3GIC125N', price: 375000, data: '7GB/Ngày', duration: '90 Ngày', type: 'month3', desc: 'Free Data Mydio sách nói.', hot: false, perks: ['Free Mydio'] },

    // GÓI 6 THÁNG
    { id: '6sd90', name: '6SD90', price: 540000, data: '1.5GB/Ngày', duration: '180 Ngày', type: 'month6', desc: 'Mua 6 tháng dùng thả ga.', hot: false, perks: [] },
    { id: '6sd120', name: '6SD120', price: 720000, data: '2GB/Ngày', duration: '180 Ngày', type: 'month6', desc: '360GB/180 ngày.', hot: false, perks: [] },
    { id: '6mxh100', name: '6MXH100', price: 600000, data: '1GB/Ngày', duration: '180 Ngày', type: 'month6', desc: 'Free TikTok, YT, FB suốt 6 tháng.', hot: true, perks: ['Free Social'] },
    { id: '6sd135', name: '6SD135', price: 810000, data: '5GB/Ngày', duration: '180 Ngày', type: 'month6', desc: '900GB/180 ngày. Siêu rẻ.', hot: true, perks: ['Bán Chạy'] },
    { id: '6t5g160', name: '6T5G160', price: 960000, data: '6GB/Ngày', duration: '180 Ngày', type: 'month6', desc: 'Free TV360 Sport xem bóng đá.', hot: true, perks: ['TV360 Sport'] },
    { id: '6tv95k', name: '6TV95K', price: 570000, data: '1.5GB/Ngày', duration: '180 Ngày', type: 'month6', desc: 'Free TV360 Standard.', hot: false, perks: ['Free TV360'] },
    { id: '6gic125n', name: '6GIC125N', price: 750000, data: '7GB/Ngày', duration: '180 Ngày', type: 'month6', desc: 'Free Mydio.', hot: false, perks: ['Free Mydio'] },
    { id: '6sd70', name: '6SD70', price: 420000, data: '1GB/Ngày', duration: '180 Ngày', type: 'month6', desc: 'Gói tiết kiệm nhất.', hot: false, perks: ['Giá Rẻ'] },

    // GÓI 12 THÁNG
    { id: '12sd90', name: '12SD90', price: 1080000, data: '1.5GB/Ngày', duration: '360 Ngày', type: 'year', desc: 'Mua 1 lần dùng cả năm.', hot: true, perks: [] },
    { id: '12sd70', name: '12SD70', price: 840000, data: '1GB/Ngày', duration: '360 Ngày', type: 'year', desc: 'Chỉ 70k/tháng khi mua cả năm.', hot: false, perks: ['Tiết Kiệm'] },
    { id: '12mxh100', name: '12MXH100', price: 1200000, data: '1GB/Ngày', duration: '360 Ngày', type: 'year', desc: 'Free All Social trọn đời.', hot: true, perks: ['Free Social'] },
    { id: '12sd135', name: '12SD135', price: 1620000, data: '5GB/Ngày', duration: '360 Ngày', type: 'year', desc: '1.800GB/năm. Data cực đại.', hot: true, perks: ['Best Choice'] },
    { id: '12fb50k', name: '12FB50K', price: 600000, data: 'KGH', duration: '360 Ngày', type: 'year', desc: 'Free Meta (FB, Mess, Insta) cả năm.', hot: false, perks: ['Free Meta'] },
    { id: '12t5g150', name: '12T5G150', price: 1800000, data: '6GB/Ngày', duration: '360 Ngày', type: 'year', desc: 'Data + TV360 trọn gói.', hot: false, perks: ['Free TV360'] }
];

const SIM_LIST = [
    { id: 's1', number: '0354.213.785', price: 500000, type: 'sim', cat: 'Năm sinh', desc: 'Đuôi năm sinh cực đẹp' },
    { id: 's2', number: '0988.888.999', price: 1500000, type: 'sim', cat: 'Tam hoa', desc: 'Tam hoa 8 giữa đẳng cấp' },
    { id: 's3', number: '0386.686.868', price: 2500000, type: 'sim', cat: 'Lộc phát', desc: 'Lộc phát quanh năm' },
    { id: 's4', number: '0977.111.222', price: 890000, type: 'sim', cat: 'Dễ nhớ', desc: 'Số tiến dễ nhớ, làm hotline' },
];

const FILTERS = [
    {id: 'all', label: 'Tất cả'},
    {id: 'sim', label: '🔢 Sim Số', special: true},
    {id: 'hot', label: '🔥 Hot'},
    {id: 'month', label: 'Gói Tháng'},
    {id: 'month3', label: '3 Tháng'},
    {id: 'month6', label: '6 Tháng'},
    {id: 'year', label: '12 Tháng'},
    {id: 'social', label: 'Mạng Xã Hội'}
];