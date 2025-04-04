// 初始化地图，中心点设为亚欧大陆中部
const map = L.map('map').setView([48.0, 80.0], 3);

// 添加底图（可选卫星图或简约风格）
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

// 加载自定义GeoJSON数据
L.geoJSON(geoData, {
    style: {
        color: "#4a4a4a",  // 国家边界颜色
        weight: 1,
        fillOpacity: 0.2
    },
    onEachFeature: onEachCountry  // 为每个国家绑定交互事件
}).addTo(map);

// 每个国家的交互处理函数
function onEachCountry(feature, layer) {
    // 鼠标悬停时高亮国家
    layer.on('mouseover', () => {
        layer.setStyle({ fillColor: '#ff7f50', fillOpacity: 0.5 });
    });
    layer.on('mouseout', () => {
        layer.setStyle({ fillColor: '#4a4a4a', fillOpacity: 0.2 });
    });

    // 点击国家弹出贸易信息
    layer.on('click', () => {
        const popupContent = `
            <div class="custom-popup">
                <h3>${feature.properties.name}</h3>
                <p>👉 中国进口：${feature.properties.imports.join(', ')}</p>
                <p>👉 中国出口：${feature.properties.exports.join(', ')}</p>
            </div>
        `;
        layer.bindPopup(popupContent).openPopup();
    });
}