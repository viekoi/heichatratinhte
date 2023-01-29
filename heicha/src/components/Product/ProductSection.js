
import classes from './ProductSection.module.css'
import Item from './Item/Item';
import React, {useState} from 'react';




const DUMMY_ITEMS = {
    coffe:{
        items:[
            {
                name: "Cà Phê Đen",
                id: "cf-01",
                listedPrice:[15.000],
                dsc:"Cà phê nguyên chất được pha từ hạt cà phê đã được rang, xay theo tiêu chuẩn.",
                imgUrl:`/assets/img/cf-01.png`
            },
            {
                name: "Bạc Xỉu",
                id: "cf-02",
                dsc:"Công thức cà phê sữa, nhưng thành phần sữa sẽ nhiều hơn so với lượng cà phê.",
                listedPrice:[20.000],
                imgUrl:`/assets/img/cf-02.png`
            },
            {
                name: "Cà Phê Sữa",
                id: "cf-03",
                dsc:"Một ly cà phê sữa ngon chính là hài hòa được cả vị đắng đặc trưng và ngọt từ sữa.",
                listedPrice:[18.000],
                imgUrl: `/assets/img/cf-03.png`
            },
            {
                name: "Cà Phê Sữa Tươi",
                id: "cf-04",
                dsc:"Sữa tươi và cà phê nguyên chất mang hương thơm vị béo của sữa và một chút đắng nhẹ của cafe.",
                listedPrice:[20.000],
                imgUrl: `/assets/img/cf-04.png`
            }
        ]
    },
    milkTea:{
        items:[
            {
                name: "Trà Sữa Đài Loan",
                id: "mt-01",
                dsc:"Vị trà đậm thơm nồng làm điểm nhấn nổi bật, không bị sữa lấn át mất chát trà.",
                listedPrice:[25.000,32.000],
                imgUrl:`/assets/img/mt-01.png`
            },
            {
                name: "Trà Sữa Ôlong Lài",
                id: "mt-02",
                dsc:"Trà Ô long thơm, màu sắc nhẹ, độ chát và ngọt hậu dễ gây nghiện.",
                listedPrice:[25.000,30.000],
                imgUrl:`/assets/img/mt-02.png`
            },
            {
                name: "Trà Sữa Gạo Rang",
                id: "mt-03",
                dsc:"Hương gạo thơm nhẹ, vị nguyên bản kết hợp cùng một số nguyên liệu đặc trưng.",
                listedPrice: [25.000,32.000],
                imgUrl: `/assets/img/mt-03.png`
            },
            {
                name: "Trà Sữa Thảo Mộc",
                id: "mt-04",
                dsc:"Cao quy linh hay còn gọi là quy phục linh, 1 món tráng miệng của người Hoa, màu đen, có vị đắng nhẹ.",
                listedPrice:[30.000,37.000],
                imgUrl: `/assets/img/mt-04.png`
            }
        ]
    },
    tea:{
        items:[
            {
                name: "Trà Đen Macchiato",
                id: "t-01",
                dsc:"Cũng như tình yêu, vị đắng chát của trà đen và vị ngọt béo của Macchiato tưởng không hợp mà lại hợp không tưởng.",
                listedPrice: [35.000],
                imgUrl:`/assets/img/t-01.png`
            },
            {
                name: "Trà Ôlong Macchiato",
                id: "t-02",
                dsc:"Là sự kết hợp đặc biệt ở hương trà than và lớp Macchiato beo béo bồng bềnh.",
                listedPrice: [35.000],
                imgUrl:`/assets/img/t-02.png`
            },
            {
                name: "Trà Hạt Sen Macchiato",
                id: "t-03",
                dsc:"Trà có vị ngọt dịu nhẹ của hạt sen pha lẫn chút béo mặn của lớp Macchiato",
                listedPrice: [40.000],
                imgUrl: `/assets/img/t-03.png`
            },
            {
                name: "Trà Trái Cây",
                id: "t-04",
                dsc:"Với cái nắng oi bức của mặt trời thì trà trái cây được xem như là một cách để giải nhiệt.",
                listedPrice: [30.000],
                imgUrl: `/assets/img/t-04.png`
            },
            {
                name: "Trà Ổi Hồng",
                id: "t-05",
                dsc:"Bổ sung vitamin, khoáng chất cần thiết, giúp bạn kiểm soát trọng lượng và thanh lọc cơ thể.",
                listedPrice:[30.000],
                imgUrl: `/assets/img/t-05.png`
            },
            {
                name: "Trà Đen Vải Thiều",
                id: "t-06",
                dsc:"Trà đen vải thiều mang vị ngọt thanh của vải kết hợp với vị chua của chanh và hương trà đen thơm nhẹ.",
                listedPrice: [30.000],
                imgUrl: `/assets/img/t-06.png`
            }
        ]
    },
    
    dessert:{
        items:[
            {
                name: "Chè Thảo Mộc",
                id: "ds-01",
                dsc:"Cùng với khoai dẻo, trân châu, mùi thơm bùi của nước cốt dừa và vị ngọt thanh của chè sẽ giảm bớt vị đắng của cao quy linh.",
                listedPrice:[35.000,45.000],
                imgUrl: `/assets/img/ds-01.png`
            },
            {
                name: "Trứng Nấu Trà Đen",
                id: "ds-02",
                dsc:"Trứng nấu trà đen mang hương thơm đặc trưng từ các loại thảo mộc, là một món ăn bổ dưỡng của người Đài Loan.",
                listedPrice:[20.000,25.000],
                imgUrl: `/assets/img/ds-02.png`
            },
            {
                name: "Tàu Hủ Singapore",
                id: "ds-03",
                dsc:"Tàu hủ Singapore mang vị đặc trưng của đậu nành ngọt nhẹ ăn kèm với topping tùy sở thích.",
                listedPrice:[18.000],
                imgUrl: `/assets/img/ds-03.png`
            }
        ]
    }
}



function ProductSection() {



    const mealCategoryList = []
    for (const meal in DUMMY_ITEMS) {
        const mealList = DUMMY_ITEMS[meal].items.map((item)=>{
            return(<Item key={item.id} item={item}></Item>) 
        })
        mealCategoryList.push(mealList)
      }
      
      const [showTab,setShowTab]= useState(0)
      const setShowTabHandler = (e)=>{
          
          if(e.currentTarget.dataset.index==0){
              setShowTab(0)
            }else if(e.currentTarget.dataset.index==1){
                setShowTab(1)
            }else if(e.currentTarget.dataset.index==2){
                setShowTab(2)
            }else if(e.currentTarget.dataset.index==3){
                setShowTab(3)
            }
        }

        const productList = mealCategoryList.map((product,index)=>{
            return <div className={`${showTab==index?'active':''} ${classes.tab}`} key={index} >{product}</div>
        })
        console.log(productList)
        
    return ( 
        
        <div className={classes['product-section']} id="PDS">
            <div className="grid wide">
                <div className={classes[`available-type`]}>
                    <h1>Thực đơn</h1>
                    <ul>
                        <li data-index={0} onClick={setShowTabHandler} className={`${showTab == 0?"active":""}`}><a >Cà Phê Bọt</a></li>
                        <li data-index={1} onClick={setShowTabHandler} className={`${showTab == 1?"active":""}`}><a >Trà Sữa</a> </li>
                        <li data-index={2} onClick={setShowTabHandler} className={`${showTab == 2?"active":""}`}><a >Trà</a> </li>
                        <li data-index={3} onClick={setShowTabHandler} className={`${showTab == 3?"active":""}`}><a >Món Ăn nhẹ</a></li>
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