const CONTACT_INFO = {
    zalo: "0354213785", 
    facebook: "https://www.facebook.com/share/1FyYM5saKm/",
    name: "Tổng Kho Sim & Gói Cước"
};

const PACKAGES = [   
    // GÓI THÁNG
    { id: 'sd90', name: 'SD90', price: 90000, data: '1.5GB/Ngày', duration: '30 Ngày', type: 'month', desc: '45GB/tháng. Gói cước quốc dân.', hot: true, perks: [] },
    { id: 'sd120', name: 'SD120', price: 120000, data: '2GB/Ngày', duration: '30 Ngày', type: 'month', desc: '60GB/tháng. Lướt web mượt mà.', hot: false, perks: [] },
    { id: 'mxh100', name: 'MXH100', price: 100000, data: '1GB/Ngày', duration: '30 Ngày', type: 'month', desc: '30GB/30 ngày, Free Data TikTok, YouTube, Facebook.', hot: true, perks: ['Free Social'] },
    { id: 'mxh120', name: 'MXH120', price: 120000, data: '1GB/Ngày', duration: '30 Ngày', type: 'social', desc: '30GB/30 ngày,MP 10 phút/cuộc nội, 30p ngoại, Free Data TikTok, YouTube, Facebook.', hot: true, perks: ['Free Social'] },
    { id: 'mxh150', name: 'MXH150', price: 150000, data: '1.5GB/Ngày', duration: '30 Ngày', type: 'social', desc: '45GB/30 ngày,MP 10 phút/cuộc nội, 50p ngoại, Free Data TikTok, YouTube, Facebook.', hot: true, perks: ['Free Social'] },
    { id: '5g160b', name: '5G160B', price: 160000, data: '4GB/Ngày', duration: '30 Ngày', type: 'month', desc: '120GB/tháng, MP 10 phút/cuộc nội (1000p), 200p ngoại, TV360 Basic, 20GB MyBox', hot: true, perks: [] },

    // GÓI 3 THÁNG
    { id: '3MXH100', name: '3MXH100', price: 300000, data: '1GB/Ngày', duration: '90 Ngày', type: 'month3', desc: '90GB/90 ngày, Free Data TikTok, YouTube, Facebook.', hot: true, perks: ['Data Khủng'] },
    { id: '3MXH150', name: '3MXH150', price: 450000, data: '1.5GB/Ngày', duration: '90 Ngày', type: 'month3', desc: '135GB/90 ngày, MP 10 phút/cuộc nội, 50p ngoại, Free Data TikTok, YouTube, Facebook.', hot: false, perks: [] },
    { id: '3MXH120', name: '3MXH120', price: 360000, data: '1GB/Ngày', duration: '90 Ngày', type: 'month3', desc: '90GB/90 ngày, MP 10 phút/cuộc nội, 30p ngoại, Free Data TikTok, YouTube, Facebook.', hot: true, perks: ['Ưu Đãi Tỉnh'] },
    { id: '3t5g160b', name: '3T5G160B', price: 480000, data: '4GB/Ngày', duration: '90 Ngày', type: 'month3', desc: 'MP 10 phút/cuộc nội (1000p), 200p ngoại, TV360 Basic, 20GB MyBox.', hot: false, perks: ['TV360 Sport'] },

    // GÓI 6 THÁNG
    { id: '6sd90', name: '6SD90', price: 540000, data: '1.5GB/Ngày', duration: '180 Ngày', type: 'month6', desc: 'Mua 6 tháng dùng thả ga.', hot: false, perks: [] },
    { id: '6sd120', name: '6SD120', price: 720000, data: '2GB/Ngày', duration: '180 Ngày', type: 'month6', desc: '360GB/180 ngày.', hot: false, perks: [] },
    { id: '6mxh100', name: '6MXH100', price: 600000, data: '1GB/Ngày', duration: '180 Ngày', type: 'month6', desc: 'Free TikTok, YT, FB suốt 6 tháng.', hot: true, perks: ['Free Social'] },
    { id: '6t5g160', name: '6T5G160', price: 960000, data: '6GB/Ngày', duration: '180 Ngày', type: 'month6', desc: 'Free TV360 Sport xem bóng đá.', hot: true, perks: ['TV360 Sport'] },

    // GÓI 12 THÁNG
    { id: '12sd90', name: '12SD90', price: 1080000, data: '1.5GB/Ngày', duration: '360 Ngày', type: 'year', desc: 'Mua 1 lần dùng cả năm.', hot: true, perks: [] },
    { id: '12mxh100', name: '12MXH100', price: 1200000, data: '1GB/Ngày', duration: '360 Ngày', type: 'year', desc: 'Free All Social trọn đời.', hot: true, perks: ['Free Social'] },
    { id: '12t5g160b', name: '12T5G150B', price: 1800000, data: '4GB/Ngày', duration: '360 Ngày', type: 'year', desc: 'M 10 phút/cuộc nội (1000p), 200p ngoại, TV360 Basic, 20GB MyBox.', hot: false, perks: ['Free TV360'] }
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