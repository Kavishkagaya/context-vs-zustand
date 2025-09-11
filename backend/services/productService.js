const products =
{
    "1": {
        "id": 1,
        "name": "Wireless Earbuds",
        "description": "Bluetooth 5.0 earbuds with noise cancellation and 24-hour battery life.",
        "price": 59.99,
        "currency": "USD",
        "category": "Electronics",
        "stock": 120,
        "image": "https://placehold.co/150x200?text=Wireless+Earbuds"
    },
    "2": {
        "id": 2,
        "name": "Smartwatch",
        "description": "Water-resistant smartwatch with heart rate monitoring and GPS.",
        "price": 149.99,
        "currency": "USD",
        "category": "Wearables",
        "stock": 75,
        "image": "https://placehold.co/150x200?text=Smartwatch"
    },
    "3": {
        "id": 3,
        "name": "Gaming Mouse",
        "description": "Ergonomic RGB gaming mouse with adjustable DPI up to 16000.",
        "price": 39.99,
        "currency": "USD",
        "category": "Accessories",
        "stock": 200,
        "image": "https://placehold.co/150x200?text=Gaming+Mouse"
    },
    "4": {
        "id": 4,
        "name": "Mechanical Keyboard",
        "description": "RGB backlit mechanical keyboard with blue switches.",
        "price": 89.99,
        "currency": "USD",
        "category": "Accessories",
        "stock": 90,
        "image": "https://placehold.co/150x200?text=Mechanical+Keyboard"
    },
    "5": {
        "id": 5,
        "name": "4K Monitor",
        "description": "27-inch 4K UHD monitor with HDR and 144Hz refresh rate.",
        "price": 329.99,
        "currency": "USD",
        "category": "Electronics",
        "stock": 45,
        "image": "https://placehold.co/150x200?text=4K+Monitor"
    },
    "6": {
        "id": 6,
        "name": "Wireless Charger",
        "description": "Fast wireless charger compatible with all Qi-enabled devices.",
        "price": 24.99,
        "currency": "USD",
        "category": "Accessories",
        "stock": 300,
        "image": "https://placehold.co/150x200?text=Wireless+Charger"
    },
    "7": {
        "id": 7,
        "name": "Laptop Stand",
        "description": "Adjustable aluminum laptop stand for better ergonomics.",
        "price": 29.99,
        "currency": "USD",
        "category": "Office",
        "stock": 150,
        "image": "https://placehold.co/150x200?text=Laptop+Stand"
    },
    "8": {
        "id": 8,
        "name": "Noise-Cancelling Headphones",
        "description": "Over-ear headphones with active noise cancellation and 40-hour battery life.",
        "price": 199.99,
        "currency": "USD",
        "category": "Electronics",
        "stock": 60,
        "image": "https://placehold.co/150x200?text=Headphones"
    },
    "9": {
        "id": 9,
        "name": "Portable SSD",
        "description": "1TB portable SSD with USB-C interface and 1000MB/s transfer speed.",
        "price": 129.99,
        "currency": "USD",
        "category": "Storage",
        "stock": 80,
        "image": "https://placehold.co/150x200?text=Portable+SSD"
    },
    "10": {
        "id": 10,
        "name": "Smart LED Bulb",
        "description": "Wi-Fi enabled smart bulb with adjustable brightness and color.",
        "price": 14.99,
        "currency": "USD",
        "category": "Home",
        "stock": 500,
        "image": "https://placehold.co/150x200?text=Smart+LED+Bulb"
    },
    "11": {
        "id": 11,
        "name": "Fitness Tracker",
        "description": "Slim fitness tracker with heart rate and sleep monitoring.",
        "price": 49.99,
        "currency": "USD",
        "category": "Wearables",
        "stock": 110,
        "image": "https://placehold.co/150x200?text=Fitness+Tracker"
    },
    "12": {
        "id": 12,
        "name": "Bluetooth Speaker",
        "description": "Portable Bluetooth speaker with deep bass and waterproof design.",
        "price": 59.99,
        "currency": "USD",
        "category": "Electronics",
        "stock": 130,
        "image": "https://placehold.co/150x200?text=Bluetooth+Speaker"
    },
    "13": {
        "id": 13,
        "name": "Smart Plug",
        "description": "Wi-Fi smart plug with voice control and scheduling features.",
        "price": 19.99,
        "currency": "USD",
        "category": "Home",
        "stock": 400,
        "image": "https://placehold.co/150x200?text=Smart+Plug"
    },
    "14": {
        "id": 14,
        "name": "VR Headset",
        "description": "All-in-one VR headset with 128GB storage and 3D audio.",
        "price": 299.99,
        "currency": "USD",
        "category": "Electronics",
        "stock": 50,
        "image": "https://placehold.co/150x200?text=VR+Headset"
    },
    "15": {
        "id": 15,
        "name": "Drone Camera",
        "description": "Compact drone with 4K camera and 30-minute flight time.",
        "price": 499.99,
        "currency": "USD",
        "category": "Electronics",
        "stock": 25,
        "image": "https://placehold.co/150x200?text=Drone+Camera"
    }
}

exports.getAllProducts = () => {
    return products;
}

exports.updateProduct = (id, updatedData) => {
    if (products[id]) {
        products[id] = { ...products[id], ...updatedData };
        return products[id];
    }
    return null;
}