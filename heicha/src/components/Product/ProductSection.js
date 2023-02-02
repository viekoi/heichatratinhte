
import classes from './ProductSection.module.css'
import Item from './Item/Item';
import React, { useState } from 'react';




const DUMMY_ITEMS = {
    coffe: {
        items: [
            {
                name: "Cà Phê Đen",
                id: "cf-01",
                listedPrice: [15.000],
                baseSize: "M",
                availableToppings:
                [
            {
                name:"Trân Châu Đen",
                id:"tp-01",
                price:5.00,
                imgUrl:`/assets/img/tp-01.png`
            },
            {
                name:"Trân Hoàng Kim",
                id:"tp-02",
                price:5.00,
                imgUrl:`/assets/img/tp-02.png`
            },
            {
                name:"Khoai Dẻo",
                id:"tp-03",
                price:7.00,
                imgUrl:`/assets/img/tp-03.png`
            },
            {
                name:"Macchiato",
                id:"tp-04",
                price:10.00,
                imgUrl:`/assets/img/tp-04.png`
            },
            {
                name:"Cao Quy Linh",
                id:"tp-05",
                price:10.00,
                imgUrl:`/assets/img/tp-05.png`
            },
            {
                name:"Phô Mai Tươi",
                id:"tp-06",
                price:10.00,
                imgUrl:`/assets/img/tp-06.png`
            },
                ],
                availableIcePercent:[0,30,50,70,100],
                availableSugarPercent:[0,30,50,70,100],
                dsc: "Cà phê nguyên chất được pha từ hạt cà phê đã được rang, xay theo tiêu chuẩn.",
                imgUrl: `/assets/img/cf-01.png`
            },
            {
                name: "Bạc Xỉu",
                id: "cf-02",
                availableToppings:
                [
            {
                name:"Trân Châu Đen",
                id:"tp-01",
                price:5.00,
                imgUrl:`/assets/img/tp-01.png`
            },
            {
                name:"Trân Hoàng Kim",
                id:"tp-02",
                price:5.00,
                imgUrl:`/assets/img/tp-02.png`
            },
            {
                name:"Khoai Dẻo",
                id:"tp-03",
                price:7.00,
                imgUrl:`/assets/img/tp-03.png`
            },
            {
                name:"Macchiato",
                id:"tp-04",
                price:10.00,
                imgUrl:`/assets/img/tp-04.png`
            },
            {
                name:"Cao Quy Linh",
                id:"tp-05",
                price:10.00,
                imgUrl:`/assets/img/tp-05.png`
            },
            {
                name:"Phô Mai Tươi",
                id:"tp-06",
                price:10.00,
                imgUrl:`/assets/img/tp-06.png`
            },
                ],
                availableIcePercent:[0,30,50,70,100],
                availableSugarPercent:[0,30,50,70,100],
                dsc: "Công thức cà phê sữa, nhưng thành phần sữa sẽ nhiều hơn so với lượng cà phê.",
                listedPrice: [20.000],
                baseSize: "M",
                imgUrl: `/assets/img/cf-02.png`
            },
            {
                name: "Cà Phê Sữa",
                id: "cf-03",
                availableToppings:
                [
            {
                name:"Trân Châu Đen",
                id:"tp-01",
                price:5.00,
                imgUrl:`/assets/img/tp-01.png`
            },
            {
                name:"Trân Hoàng Kim",
                id:"tp-02",
                price:5.00,
                imgUrl:`/assets/img/tp-02.png`
            },
            {
                name:"Khoai Dẻo",
                id:"tp-03",
                price:7.00,
                imgUrl:`/assets/img/tp-03.png`
            },
            {
                name:"Macchiato",
                id:"tp-04",
                price:10.00,
                imgUrl:`/assets/img/tp-04.png`
            },
            {
                name:"Cao Quy Linh",
                id:"tp-05",
                price:10.00,
                imgUrl:`/assets/img/tp-05.png`
            },
            {
                name:"Phô Mai Tươi",
                id:"tp-06",
                price:10.00,
                imgUrl:`/assets/img/tp-06.png`
            },
                ],
                availableIcePercent:[0,30,50,70,100],
                availableSugarPercent:[0,30,50,70,100],
                dsc: "Một ly cà phê sữa ngon chính là hài hòa được cả vị đắng đặc trưng và ngọt từ sữa.",
                listedPrice: [18.000],
                baseSize: "M",
                imgUrl: `/assets/img/cf-03.png`
            },
            {
                name: "Cà Phê Sữa Tươi",
                id: "cf-04",
                availableToppings:
                [
            {
                name:"Trân Châu Đen",
                id:"tp-01",
                price:5.00,
                imgUrl:`/assets/img/tp-01.png`
            },
            {
                name:"Trân Hoàng Kim",
                id:"tp-02",
                price:5.00,
                imgUrl:`/assets/img/tp-02.png`
            },
            {
                name:"Khoai Dẻo",
                id:"tp-03",
                price:7.00,
                imgUrl:`/assets/img/tp-03.png`
            },
            {
                name:"Macchiato",
                id:"tp-04",
                price:10.00,
                imgUrl:`/assets/img/tp-04.png`
            },
            {
                name:"Cao Quy Linh",
                id:"tp-05",
                price:10.00,
                imgUrl:`/assets/img/tp-05.png`
            },
            {
                name:"Phô Mai Tươi",
                id:"tp-06",
                price:10.00,
                imgUrl:`/assets/img/tp-06.png`
            },
                ],
                availableIcePercent:[0,30,50,70,100],
                availableSugarPercent:[0,30,50,70,100],
                dsc: "Sữa tươi và cà phê nguyên chất mang hương thơm vị béo của sữa và một chút đắng nhẹ của cafe.",
                listedPrice: [20.000],
                baseSize: "M",
                imgUrl: `/assets/img/cf-04.png`
            }
        ]
    },
    milkTea: {
        items: [
            {
                name: "Trà Sữa Đài Loan",
                id: "mt-01",
                availableToppings:
                [
            {
                name:"Trân Châu Đen",
                id:"tp-01",
                price:5.00,
                imgUrl:`/assets/img/tp-01.png`
            },
            {
                name:"Trân Hoàng Kim",
                id:"tp-02",
                price:5.00,
                imgUrl:`/assets/img/tp-02.png`
            },
            {
                name:"Khoai Dẻo",
                id:"tp-03",
                price:7.00,
                imgUrl:`/assets/img/tp-03.png`
            },
            {
                name:"Macchiato",
                id:"tp-04",
                price:10.00,
                imgUrl:`/assets/img/tp-04.png`
            },
            {
                name:"Cao Quy Linh",
                id:"tp-05",
                price:10.00,
                imgUrl:`/assets/img/tp-05.png`
            },
            {
                name:"Phô Mai Tươi",
                id:"tp-06",
                price:10.00,
                imgUrl:`/assets/img/tp-06.png`
            },
                ],
                availableIcePercent:[0,30,50,70,100],
                availableSugarPercent:[0,30,50,70,100],
                dsc: "Vị trà đậm thơm nồng làm điểm nhấn nổi bật, không bị sữa lấn át mất chát trà.",
                listedPrice: [25.000, 32.000],
                baseSize: "M",
                imgUrl: `/assets/img/mt-01.png`
            },
            {
                name: "Trà Sữa Ôlong Lài",
                id: "mt-02",
                availableToppings:
                [
            {
                name:"Trân Châu Đen",
                id:"tp-01",
                price:5.00,
                imgUrl:`/assets/img/tp-01.png`
            },
            {
                name:"Trân Hoàng Kim",
                id:"tp-02",
                price:5.00,
                imgUrl:`/assets/img/tp-02.png`
            },
            {
                name:"Khoai Dẻo",
                id:"tp-03",
                price:7.00,
                imgUrl:`/assets/img/tp-03.png`
            },
            {
                name:"Macchiato",
                id:"tp-04",
                price:10.00,
                imgUrl:`/assets/img/tp-04.png`
            },
            {
                name:"Cao Quy Linh",
                id:"tp-05",
                price:10.00,
                imgUrl:`/assets/img/tp-05.png`
            },
            {
                name:"Phô Mai Tươi",
                id:"tp-06",
                price:10.00,
                imgUrl:`/assets/img/tp-06.png`
            },
                ],
                availableIcePercent:[0,30,50,70,100],
                availableSugarPercent:[0,30,50,70,100],
                dsc: "Trà Ô long thơm, màu sắc nhẹ, độ chát và ngọt hậu dễ gây nghiện.",
                listedPrice: [25.000, 30.000],
                baseSize: "M",
                imgUrl: `/assets/img/mt-02.png`
            },
            {
                name: "Trà Sữa Gạo Rang",
                id: "mt-03",
                availableToppings:
                [
            {
                name:"Trân Châu Đen",
                id:"tp-01",
                price:5.00,
                imgUrl:`/assets/img/tp-01.png`
            },
            {
                name:"Trân Hoàng Kim",
                id:"tp-02",
                price:5.00,
                imgUrl:`/assets/img/tp-02.png`
            },
            {
                name:"Khoai Dẻo",
                id:"tp-03",
                price:7.00,
                imgUrl:`/assets/img/tp-03.png`
            },
            {
                name:"Macchiato",
                id:"tp-04",
                price:10.00,
                imgUrl:`/assets/img/tp-04.png`
            },
            {
                name:"Cao Quy Linh",
                id:"tp-05",
                price:10.00,
                imgUrl:`/assets/img/tp-05.png`
            },
            {
                name:"Phô Mai Tươi",
                id:"tp-06",
                price:10.00,
                imgUrl:`/assets/img/tp-06.png`
            },
                 ],
                availableIcePercent:[0,30,50,70,100],
                availableSugarPercent:[0,30,50,70,100],
                 dsc: "Hương gạo thơm nhẹ, vị nguyên bản kết hợp cùng một số nguyên liệu đặc trưng.",
                listedPrice: [25.000, 32.000],
                baseSize: "M",
                imgUrl: `/assets/img/mt-03.png`
            },
            {
                name: "Trà Sữa Thảo Mộc",
                id: "mt-04",
                availableToppings:
                [
            {
                name:"Trân Châu Đen",
                id:"tp-01",
                price:5.00,
                imgUrl:`/assets/img/tp-01.png`
            },
            {
                name:"Trân Hoàng Kim",
                id:"tp-02",
                price:5.00,
                imgUrl:`/assets/img/tp-02.png`
            },
            {
                name:"Khoai Dẻo",
                id:"tp-03",
                price:7.00,
                imgUrl:`/assets/img/tp-03.png`
            },
            {
                name:"Macchiato",
                id:"tp-04",
                price:10.00,
                imgUrl:`/assets/img/tp-04.png`
            },
            {
                name:"Cao Quy Linh",
                id:"tp-05",
                price:10.00,
                imgUrl:`/assets/img/tp-05.png`
            },
            {
                name:"Phô Mai Tươi",
                id:"tp-06",
                price:10.00,
                imgUrl:`/assets/img/tp-06.png`
            },
                ],
                availableIcePercent:[0,30,50,70,100],
                availableSugarPercent:[0,30,50,70,100],
                dsc: "Cao quy linh hay còn gọi là quy phục linh, 1 món tráng miệng của người Hoa, màu đen, có vị đắng nhẹ.",
                listedPrice: [30.000, 37.000],
                baseSize: "M",
                imgUrl: `/assets/img/mt-04.png`
            }
        ]
    },
    tea: {
        items: [
            {
                name: "Trà Đen Macchiato",
                id: "t-01",
                availableToppings:
                [
            {
                name:"Trân Châu Đen",
                id:"tp-01",
                price:5.00,
                imgUrl:`/assets/img/tp-01.png`
            },
            {
                name:"Trân Hoàng Kim",
                id:"tp-02",
                price:5.00,
                imgUrl:`/assets/img/tp-02.png`
            },
            {
                name:"Khoai Dẻo",
                id:"tp-03",
                price:7.00,
                imgUrl:`/assets/img/tp-03.png`
            },
            {
                name:"Macchiato",
                id:"tp-04",
                price:10.00,
                imgUrl:`/assets/img/tp-04.png`
            },
            {
                name:"Cao Quy Linh",
                id:"tp-05",
                price:10.00,
                imgUrl:`/assets/img/tp-05.png`
            },
            {
                name:"Phô Mai Tươi",
                id:"tp-06",
                price:10.00,
                imgUrl:`/assets/img/tp-06.png`
            },
                ],
                availableIcePercent:[0,30,50,70,100],
                availableSugarPercent:[0,30,50,70,100],
                dsc: "Cũng như tình yêu, vị đắng chát của trà đen và vị ngọt béo của Macchiato tưởng không hợp mà lại hợp không tưởng.",
                listedPrice: [35.000],
                baseSize: "M",
                imgUrl: `/assets/img/t-01.png`
            },
            {
                name: "Trà Ôlong Macchiato",
                id: "t-02",
                availableToppings:
                [
            {
                name:"Trân Châu Đen",
                id:"tp-01",
                price:5.00,
                imgUrl:`/assets/img/tp-01.png`
            },
            {
                name:"Trân Hoàng Kim",
                id:"tp-02",
                price:5.00,
                imgUrl:`/assets/img/tp-02.png`
            },
            {
                name:"Khoai Dẻo",
                id:"tp-03",
                price:7.00,
                imgUrl:`/assets/img/tp-03.png`
            },
            {
                name:"Macchiato",
                id:"tp-04",
                price:10.00,
                imgUrl:`/assets/img/tp-04.png`
            },
            {
                name:"Cao Quy Linh",
                id:"tp-05",
                price:10.00,
                imgUrl:`/assets/img/tp-05.png`
            },
            {
                name:"Phô Mai Tươi",
                id:"tp-06",
                price:10.00,
                imgUrl:`/assets/img/tp-06.png`
            },
                ],
                availableIcePercent:[0,30,50,70,100],
                availableSugarPercent:[0,30,50,70,100],
                dsc: "Là sự kết hợp đặc biệt ở hương trà than và lớp Macchiato beo béo bồng bềnh.",
                listedPrice: [35.000],
                baseSize: "M",
                imgUrl: `/assets/img/t-02.png`
            },
            {
                name: "Trà Hạt Sen Macchiato",
                id: "t-03",
                availableToppings:
                [
            {
                name:"Trân Châu Đen",
                id:"tp-01",
                price:5.00,
                imgUrl:`/assets/img/tp-01.png`
            },
            {
                name:"Trân Hoàng Kim",
                id:"tp-02",
                price:5.00,
                imgUrl:`/assets/img/tp-02.png`
            },
            {
                name:"Khoai Dẻo",
                id:"tp-03",
                price:7.00,
                imgUrl:`/assets/img/tp-03.png`
            },
            {
                name:"Macchiato",
                id:"tp-04",
                price:10.00,
                imgUrl:`/assets/img/tp-04.png`
            },
            {
                name:"Cao Quy Linh",
                id:"tp-05",
                price:10.00,
                imgUrl:`/assets/img/tp-05.png`
            },
            {
                name:"Phô Mai Tươi",
                id:"tp-06",
                price:10.00,
                imgUrl:`/assets/img/tp-06.png`
            },
                ],
                availableIcePercent:[0,30,50,70,100],
                availableSugarPercent:[0,30,50,70,100],
                dsc: "Trà có vị ngọt dịu nhẹ của hạt sen pha lẫn chút béo mặn của lớp Macchiato",
                listedPrice: [40.000],
                baseSize: "M",
                imgUrl: `/assets/img/t-03.png`
            },
            {
                name: "Trà Trái Cây",
                id: "t-04",
                availableToppings:
                [
            {
                name:"Trân Châu Đen",
                id:"tp-01",
                price:5.00,
                imgUrl:`/assets/img/tp-01.png`
            },
            {
                name:"Trân Hoàng Kim",
                id:"tp-02",
                price:5.00,
                imgUrl:`/assets/img/tp-02.png`
            },
            {
                name:"Khoai Dẻo",
                id:"tp-03",
                price:7.00,
                imgUrl:`/assets/img/tp-03.png`
            },
            {
                name:"Macchiato",
                id:"tp-04",
                price:10.00,
                imgUrl:`/assets/img/tp-04.png`
            },
            {
                name:"Cao Quy Linh",
                id:"tp-05",
                price:10.00,
                imgUrl:`/assets/img/tp-05.png`
            },
            {
                name:"Phô Mai Tươi",
                id:"tp-06",
                price:10.00,
                imgUrl:`/assets/img/tp-06.png`
            },
                ],
                availableIcePercent:[0,30,50,70,100],
                availableSugarPercent:[0,30,50,70,100],
                dsc: "Với cái nắng oi bức của mặt trời thì trà trái cây được xem như là một cách để giải nhiệt.",
                listedPrice: [30.000],
                baseSize: "M",
                imgUrl: `/assets/img/t-04.png`
            },
            {
                name: "Trà Ổi Hồng",
                id: "t-05",
                availableToppings:
                [
            {
                name:"Trân Châu Đen",
                id:"tp-01",
                price:5.00,
                imgUrl:`/assets/img/tp-01.png`
            },
            {
                name:"Trân Hoàng Kim",
                id:"tp-02",
                price:5.00,
                imgUrl:`/assets/img/tp-02.png`
            },
            {
                name:"Khoai Dẻo",
                id:"tp-03",
                price:7.00,
                imgUrl:`/assets/img/tp-03.png`
            },
            {
                name:"Macchiato",
                id:"tp-04",
                price:10.00,
                imgUrl:`/assets/img/tp-04.png`
            },
            {
                name:"Cao Quy Linh",
                id:"tp-05",
                price:10.00,
                imgUrl:`/assets/img/tp-05.png`
            },
            {
                name:"Phô Mai Tươi",
                id:"tp-06",
                price:10.00,
                imgUrl:`/assets/img/tp-06.png`
            },
                ],
                availableIcePercent:[0,30,50,70,100],
                availableSugarPercent:[0,30,50,70,100],
                dsc: "Bổ sung vitamin, khoáng chất cần thiết, giúp bạn kiểm soát trọng lượng và thanh lọc cơ thể.",
                listedPrice: [30.000],
                baseSize: "M",
                imgUrl: `/assets/img/t-05.png`
            },
            {
                name: "Trà Đen Vải Thiều",
                id: "t-06",
                availableToppings:
                [
            {
                name:"Trân Châu Đen",
                id:"tp-01",
                price:5.00,
                imgUrl:`/assets/img/tp-01.png`
            },
            {
                name:"Trân Hoàng Kim",
                id:"tp-02",
                price:5.00,
                imgUrl:`/assets/img/tp-02.png`
            },
            {
                name:"Khoai Dẻo",
                id:"tp-03",
                price:7.00,
                imgUrl:`/assets/img/tp-03.png`
            },
            {
                name:"Macchiato",
                id:"tp-04",
                price:10.00,
                imgUrl:`/assets/img/tp-04.png`
            },
            {
                name:"Cao Quy Linh",
                id:"tp-05",
                price:10.00,
                imgUrl:`/assets/img/tp-05.png`
            },
            {
                name:"Phô Mai Tươi",
                id:"tp-06",
                price:10.00,
                imgUrl:`/assets/img/tp-06.png`
            },
                ],
                availableIcePercent:[0,30,50,70,100],
                availableSugarPercent:[0,30,50,70,100],
                dsc: "Trà đen vải thiều mang vị ngọt thanh của vải kết hợp với vị chua của chanh và hương trà đen thơm nhẹ.",
                listedPrice: [30.000],
                baseSize: "M",
                imgUrl: `/assets/img/t-06.png`
            }
        ]
    },

    dessert: {
        items: [
            {
                name: "Chè Thảo Mộc",
                id: "ds-01",
                availableToppings:
                [
            {
                name:"Trân Châu Đen",
                id:"tp-01",
                price:5.00,
                imgUrl:`/assets/img/tp-01.png`
            },
            {
                name:"Trân Hoàng Kim",
                id:"tp-02",
                price:5.00,
                imgUrl:`/assets/img/tp-02.png`
            },
            {
                name:"Khoai Dẻo",
                id:"tp-03",
                price:7.00,
                imgUrl:`/assets/img/tp-03.png`
            },
            {
                name:"Macchiato",
                id:"tp-04",
                price:10.00,
                imgUrl:`/assets/img/tp-04.png`
            },
            {
                name:"Cao Quy Linh",
                id:"tp-05",
                price:10.00,
                imgUrl:`/assets/img/tp-05.png`
            },
            {
                name:"Phô Mai Tươi",
                id:"tp-06",
                price:10.00,
                imgUrl:`/assets/img/tp-06.png`
            },
                ],
                availableIcePercent:[0,30,50,70,100],
                availableSugarPercent:[0,30,50,70,100],
                dsc: "Cùng với khoai dẻo, trân châu, mùi thơm bùi của nước cốt dừa và vị ngọt thanh của chè sẽ giảm bớt vị đắng của cao quy linh.",
                listedPrice: [35.000, 45.000],
                baseSize: "M",
                imgUrl: `/assets/img/ds-01.png`
            },
            {
                name: "Trứng Nấu Trà Đen",
                id: "ds-02",
                availableToppings:
                [
            {
                name:"Trân Châu Đen",
                id:"tp-01",
                price:5.00,
                imgUrl:`/assets/img/tp-01.png`
            },
            {
                name:"Trân Hoàng Kim",
                id:"tp-02",
                price:5.00,
                imgUrl:`/assets/img/tp-02.png`
            },
            {
                name:"Khoai Dẻo",
                id:"tp-03",
                price:7.00,
                imgUrl:`/assets/img/tp-03.png`
            },
            {
                name:"Macchiato",
                id:"tp-04",
                price:10.00,
                imgUrl:`/assets/img/tp-04.png`
            },
            {
                name:"Cao Quy Linh",
                id:"tp-05",
                price:10.00,
                imgUrl:`/assets/img/tp-05.png`
            },
            {
                name:"Phô Mai Tươi",
                id:"tp-06",
                price:10.00,
                imgUrl:`/assets/img/tp-06.png`
            },
                ],
                availableIcePercent:[0,30,50,70,100],
                availableSugarPercent:[0,30,50,70,100],
                dsc: "Trứng nấu trà đen mang hương thơm đặc trưng từ các loại thảo mộc, là một món ăn bổ dưỡng của người Đài Loan.",
                listedPrice: [20.000, 25.000],
                baseSize: "M",
                imgUrl: `/assets/img/ds-02.png`
            },
            {
                name: "Tàu Hủ Singapore",
                id: "ds-03",
                availableToppings:
                [
            {
                name:"Trân Châu Đen",
                id:"tp-01",
                price:5.00,
                imgUrl:`/assets/img/tp-01.png`
            },
            {
                name:"Trân Hoàng Kim",
                id:"tp-02",
                price:5.00,
                imgUrl:`/assets/img/tp-02.png`
            },
            {
                name:"Khoai Dẻo",
                id:"tp-03",
                price:7.00,
                imgUrl:`/assets/img/tp-03.png`
            },
            {
                name:"Macchiato",
                id:"tp-04",
                price:10.00,
                imgUrl:`/assets/img/tp-04.png`
            },
            {
                name:"Cao Quy Linh",
                id:"tp-05",
                price:10.00,
                imgUrl:`/assets/img/tp-05.png`
            },
            {
                name:"Phô Mai Tươi",
                id:"tp-06",
                price:10.00,
                imgUrl:`/assets/img/tp-06.png`
            },
                ],
                availableIcePercent:[0,30,50,70,100],
                availableSugarPercent:[0,30,50,70,100],
                dsc: "Tàu hủ Singapore mang vị đặc trưng của đậu nành ngọt nhẹ ăn kèm với topping tùy sở thích.",
                listedPrice: [18.000],
                baseSize: "M",
                imgUrl: `/assets/img/ds-03.png`
            }
        ]
    }
}



function ProductSection() {



    const mealCategoryList = []
    for (const meal in DUMMY_ITEMS) {
        const mealList = DUMMY_ITEMS[meal].items.map((item) => {
            return (<Item key={item.id} item={item}></Item>)
        })
        mealCategoryList.push(mealList)
    }

    const [showTab, setShowTab] = useState(0)
    const setShowTabHandler = (e) => {
        if (e.currentTarget.innerText ==="Cà Phê Bọt") {
            setShowTab(0)
        } else if (e.currentTarget.innerText ==="Trà Sữa") {
            setShowTab(1)
        } else if (e.currentTarget.innerText ==="Trà") {
            setShowTab(2)
        } else if (e.currentTarget.innerText ==="Món Ăn nhẹ") {
            setShowTab(3)
        }
    }

    const productList = mealCategoryList.map((product, index) => {
        return <div className={`${showTab === index ? 'active' : ''} ${classes.tab}`} key={index} >{product}</div>
    })
    return (

        <div className={classes['product-section']} id="PDS">
            <div className="grid wide">
                <div className={classes[`available-type`]}>
                    <h1>Thực đơn</h1>
                    <ul>
                        <li className={`${showTab === 0 ? "active" : ""}`}><span onClick={setShowTabHandler}>Cà Phê Bọt</span ></li>
                        <li className={`${showTab === 1 ? "active" : ""}`}><span onClick={setShowTabHandler}>Trà Sữa</span> </li>
                        <li className={`${showTab === 2 ? "active" : ""}`}><span onClick={setShowTabHandler}>Trà</span> </li>
                        <li className={`${showTab === 3 ? "active" : ""}`}><span onClick={setShowTabHandler}>Món Ăn nhẹ</span></li>
                    </ul>
                </div>
                <div className={classes[`available-item`]}>
                    {productList}
                </div>
            </div>

        </div>
    );
}

export default ProductSection;