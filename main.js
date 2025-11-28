let currentFilter = 'all';

function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

function init() {
    renderFilters();
    renderProducts('all');
}

function renderFilters() {
    const container = document.getElementById('filter-container');
    container.innerHTML = FILTERS.map(f => `
        <button 
            onclick="changeFilter('${f.id}')"
            class="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors flex-shrink-0 border 
            ${currentFilter === f.id 
                ? 'bg-[#ee0033] text-white border-[#ee0033] shadow-md' 
                : f.special 
                    ? 'bg-yellow-50 text-yellow-800 border-yellow-200 hover:bg-yellow-100' 
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}"
        >
            ${f.label}
        </button>
    `).join('');
}

function changeFilter(id) {
    currentFilter = id;
    renderFilters();
    renderProducts(id);
    const titleMap = {
        'sim': 'KHO SIM SỐ ĐẸP', 'all': 'TẤT CẢ GÓI CƯỚC', 'hot': 'GÓI CƯỚC HOT NHẤT',
        'month3': 'GÓI CHU KỲ 3 THÁNG', 'month6': 'GÓI CHU KỲ 6 THÁNG', 'year': 'GÓI CHU KỲ 1 NĂM'
    };
    document.getElementById('category-title').innerText = titleMap[id] || 'DANH SÁCH GÓI CƯỚC';
    const iconElem = document.getElementById('category-icon');
    if (id === 'sim') iconElem.setAttribute('data-lucide', 'smartphone');
    else iconElem.setAttribute('data-lucide', 'zap');
    lucide.createIcons();
}

function renderProducts(filter) {
    const grid = document.getElementById('product-grid');
    const emptyState = document.getElementById('empty-state');
    let items = [];
    if (filter === 'sim') items = SIM_LIST;
    else if (filter === 'all') items = PACKAGES;
    else if (filter === 'hot') items = PACKAGES.filter(p => p.hot);
    else items = PACKAGES.filter(p => p.type === filter);

    if (items.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }
    emptyState.classList.add('hidden');
    grid.innerHTML = items.map(item => {
        if (item.type === 'sim') {
            return `
            <div class="bg-white rounded-xl shadow-sm border border-yellow-200 overflow-hidden hover:shadow-md transition-shadow relative flex flex-col group">
                <div class="bg-gradient-to-r from-yellow-50 to-white p-2 border-b border-yellow-100 flex justify-between items-center">
                    <span class="text-xs font-bold text-yellow-700 px-2 py-1 bg-yellow-100 rounded uppercase tracking-wider">${item.cat}</span>
                    <span class="text-[#ee0033] font-bold">Viettel</span>
                </div>
                <div class="p-5 text-center">
                    <h3 class="text-2xl font-black text-gray-800 tracking-wider mb-1 group-hover:text-[#ee0033] transition-colors">${item.number}</h3>
                    <p class="text-xl font-bold text-[#ee0033]">${formatCurrency(item.price)}</p>
                    <p class="text-sm text-gray-500 mt-2 italic">"${item.desc}"</p>
                </div>
                <div class="p-4 bg-gray-50 mt-auto">
                    <button onclick='openModal(${JSON.stringify(item).replace(/'/g, "&#39;")})' class="w-full bg-white border-2 border-[#ee0033] text-[#ee0033] hover:bg-[#ee0033] hover:text-white font-bold py-2 rounded-lg transition-colors">
                        Đặt Mua Ngay
                    </button>
                </div>
            </div>`;
        } else {
            const perksHtml = (item.perks || []).map(perk => {
                let colorClass = 'text-green-600 bg-green-50 border-green-100';
                if (perk.includes('TV360')) colorClass = 'text-orange-600 bg-orange-50 border-orange-100';
                if (perk.includes('Social') || perk.includes('Meta')) colorClass = 'text-blue-600 bg-blue-50 border-blue-100';
                return `<span class="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${colorClass}">${perk}</span>`;
            }).join('');
            return `
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow relative flex flex-col">
                ${item.hot ? '<div class="absolute top-0 right-0 bg-yellow-400 text-red-700 text-xs font-bold px-3 py-1 rounded-bl-lg z-10 shadow-sm">BÁN CHẠY</div>' : ''}
                <div class="p-5 flex-grow">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-2xl font-black text-gray-800 uppercase">${item.name}</h3>
                        <div class="text-right">
                            <span class="block text-lg font-bold text-[#ee0033]">${formatCurrency(item.price)}</span>
                            <span class="text-xs text-gray-500 font-medium bg-gray-100 px-1.5 py-0.5 rounded">${item.duration}</span>
                        </div>
                    </div>
                    <div class="space-y-3 mt-4">
                        <div class="flex items-center text-gray-700">
                            <div class="bg-red-50 p-1.5 rounded-full mr-3 shrink-0">
                                <i data-lucide="wifi" class="text-red-500 w-[18px] h-[18px]"></i>
                            </div>
                            <span class="font-bold">${item.data}</span>
                        </div>
                        <div class="flex flex-wrap gap-1 mt-1">${perksHtml}</div>
                        <div class="flex items-start text-gray-500 text-sm">
                            <div class="mt-0.5 mr-3 shrink-0">
                                <i data-lucide="check-circle" class="text-gray-400 w-4 h-4"></i>
                            </div>
                            <p class="leading-tight">${item.desc}</p>
                        </div>
                    </div>
                </div>
                <div class="p-4 bg-gray-50 border-t border-gray-100">
                    <button onclick='openModal(${JSON.stringify(item).replace(/'/g, "&#39;")})' class="w-full bg-[#ee0033] hover:bg-[#cc002b] text-white font-bold py-3 rounded-lg flex items-center justify-center transition-colors shadow-sm">
                        <i data-lucide="zap" class="w-[18px] h-[18px] mr-2"></i> Đăng Ký Ngay
                    </button>
                </div>
            </div>`;
        }
    }).join('');
    lucide.createIcons();
}

function openModal(item) {
    const modal = document.getElementById('modal');
    const isSim = item.type === 'sim';
    document.getElementById('modal-title').innerText = isSim ? 'Đặt Mua Sim Số' : 'Đăng Ký Gói Cước';
    document.getElementById('modal-subtitle').innerText = isSim ? 'Bạn đang chọn Sim:' : 'Gói cước:';
    document.getElementById('modal-item-name').innerText = isSim ? item.number : item.name;
    document.getElementById('modal-item-price').innerText = formatCurrency(item.price);
    document.getElementById('modal-item-duration').innerText = isSim ? '' : `/ ${item.duration}`;
    document.getElementById('modal-note').innerText = isSim 
        ? "Vui lòng inbox để mình kiểm tra xem sim này còn trong kho không nhé!" 
        : "Vui lòng inbox để mình kiểm tra xem thuê bao của bạn có được ưu đãi gói này không nhé!";
    const messageBody = isSim 
        ? `Tôi muốn mua Sim số ${item.number} giá ${formatCurrency(item.price)}` 
        : `Tôi muốn đăng ký gói ${item.name} giá ${formatCurrency(item.price)}`;
    document.getElementById('btn-zalo').href = `https://zalo.me/${CONTACT_INFO.zalo}`;
    document.getElementById('btn-fb').href = CONTACT_INFO.facebook;
    document.getElementById('btn-sms').href = `sms:${CONTACT_INFO.zalo}?body=${encodeURIComponent(messageBody)}`;
    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

window.addEventListener('DOMContentLoaded', init);