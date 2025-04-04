// 示例GeoJSON数据（实际需包含所有亚欧国家）
const geoData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Germany",
                "imports": ["机械设备", "电子产品"],
                "exports": ["汽车配件", "精密仪器"]
            },
            "geometry": { /* GeoJSON坐标数据 */ }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Poland",
                "imports": ["家具", "农产品"],
                "exports": ["煤炭", "化工原料"]
            },
            "geometry": { /* GeoJSON坐标数据 */ }
        }
    ]
};