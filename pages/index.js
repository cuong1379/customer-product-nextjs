import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useCart } from "react-use-cart";
import styles from "./styles/Home.module.css";
import {
  Carousel,
  List,
  Card,
  Form,
  Input,
  Button,
  DatePicker,
  Dropdown,
  TimePicker,
  message,
  Modal,
  Badge,
  Drawer
} from "antd";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const menu = [
  {
    key: '1',
    label: (
      <div style={{ color: "#eb7c7c" }}>
        <Link href="/breakfast">
          <p style={{ paddingLeft: "20px", paddingRight: "20px" }}>Ăn sáng</p>
        </Link>
      </div>
    )
  },
  {
    key: '2',
    label: (
      <div style={{ color: "#eb7c7c" }}>
        <Link href="/dimsum">
          <p style={{ paddingLeft: "20px", paddingRight: "20px" }}>Dimsum</p>
        </Link>
      </div>
    )
  },
  {
    key: '3',
    label: (
      <div style={{ color: "#eb7c7c" }}>
        <Link href="/hotpot">
          <p style={{ paddingLeft: "20px", paddingRight: "20px" }}>Lẩu</p>
        </Link>
      </div>
    )
  }
];

export function useMounted() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}


const foods = [
  {
    id: 'fwecwef',
    name: "Malm",
    price: 9900,
    description: 'Định lượng: 200g',
    thumbnail: 'https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1551438228969-H0FPV1FO3W5B0QL328AS/chup-anh-thuc-an-1.jpg'
    
  },
  {
    id: 'cwccwegwgb',
    name: "Nordli",
    price: 16500,
    description: 'Định lượng: 300g, ngon giòn',
    thumbnail: 'https://beptueu.vn/hinhanh/tintuc/top-15-hinh-anh-mon-an-ngon-viet-nam-khien-ban-khong-the-roi-mat-1.jpg'
  },
  {
    id: 'wgwewefgw',
    name: "Kullen",
    price: 4500,
    description: 'Định lượng: 400g',
    thumbnail: 'https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham.jpg'
  },
  {
    id: 'wegwu5h6g5fef',
    name: "Cooky",
    price: 4500,
    description: 'Định lượng: 500g, ngon giòn',
    thumbnail: 'https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1550052451758-LL5DACGHWUM1MEAI6HOA/chup-anh-mon-an-com-ga-thuong-hai-8.jpg'
  },
  {
    id: 'qefwrtht4frt5',
    name: "Maki",
    price: 14500,
    description: 'Định lượng: 600g',
    thumbnail: 'https://studiovietnam.com/wp-content/uploads/2022/03/hinh-anh-ve-do-an-22.jpg'
  },
  {
    id: 'wef34fwef4',
    name: "Levender",
    price: 24500,
    description: 'Định lượng: 700g, ngon giòn',
    thumbnail: 'https://hthaostudio.com/wp-content/uploads/2019/08/Anh-food-layout-11-min-1180x760.jpg'
  },
  {
    id: 'vsdvnrybetn5',
    name: "Levender",
    price: 4550,
    description: 'Định lượng: 800g',
    thumbnail: 'https://uploads-ssl.webflow.com/5f37e24d2bb0e5491702cddb/5f7f3dc784183855fde5a89c_dich-vu-chup-anh-mon-an.jpg'
  },
  {
    id: 'bsfbevwverv',
    name: "Levender",
    price: 4550,
    description: 'Định lượng: 800g',
    thumbnail: 'https://top10quangbinh.vn/wp-content/uploads/2022/10/anh-do-an-20.jpg'
  },
  {
    id: 'stnbwbrntb',
    name: "Levender",
    price: 4550,
    description: 'Định lượng: 800g',
    thumbnail: 'https://images.pexels.com/photos/1797171/pexels-photo-1797171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 'ehthbtrshbtr',
    name: "Levender",
    price: 4550,
    description: 'Định lượng: 800g',
    thumbnail: 'https://assets.grab.com/wp-content/uploads/sites/11/2019/11/19142939/samlacareview_72488619_745515349298258_676929066594289512_n-e1574145126441.jpg'
  },
  {
    id: 'cswrce',
    name: "Levender",
    price: 4550,
    description: 'Định lượng: 800g',
    thumbnail: 'https://thegioianh.diendandoanhnghiep.vn/wp-content/uploads/2023/03/vietnamese_food_top_banner.jpeg'
  },
  {
    id: 'tjkkjhgerhj',
    name: "Levender",
    price: 4550,
    description: 'Định lượng: 800g',
    thumbnail: 'https://afamilycdn.com/WV8iA0A8EAfajQ9tIqEEPbrc36AeNK/Image/2015/08/_20150809105829362.jpg'
  },
];

const { Meta } = Card;

const contentStyle1 = {
  backgroundPosition: "center",
  height: "500px",
  backgroundImage: `url("https://haihoangbinhtan.com/uploads/source/slider/nhahanghaihoang1.jpg")`,
};
const contentStyle2 = {
  backgroundPosition: "center",
  height: "500px",
  backgroundImage: `url("https://haihoangbinhtan.com/uploads/source/slider/monmoihaihoangbinhtan.jpg")`,
};
const contentStyle3 = {
  backgroundPosition: "center",
  height: "500px",
  backgroundImage: `url("https://haihoangbinhtan.com/uploads/source/slider/nhahanghaihoangbinhtan.jpg")`,
};
const contentStyle4 = {
  backgroundPosition: "center",
  height: "500px",
  backgroundImage: `url("https://haihoangbinhtan.com/uploads/source/slider/nhahanghaihoang.jpg")`,
};
const format = "HH:mm";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};

const responsive1 = {
  0: { items: 2 },
  568: { items: 4 },
  1024: { items: 6 },
};

const responsive2 = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Home = () => {
  // const [productList, setProductList] = useState([]);
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    name: "",
    price: "",
    description: "",
    thumbnail: "",
  });
  const {
    cartTotal,
    totalItems,
    isEmpty,
    items,
    updateItemQuantity,
    addItem
  } = useCart();

  const showDrawer = () => {
    setOpenCart(true);
  };
  const onClose = () => {
    setOpenCart(false);
  };

  const onFinish = async (values) => {
    try {
      const res = await axios.post(
        "https://production-api-123.herokuapp.com/customers",
        values
      );
      console.log(res.data.customer);
      message.success("Đặt bàn thành công");
    } catch (error) {
      console.log(error);
      message.error("Đặt bàn thất bại");
    }
    form.resetFields();
  };

  const handleOpenModal = (id) => {
    setCurrentProduct(foods?.find(x => x?.id == id) || {})
    setVisible(true);
  };

  const handleUpdateQuantity = (thisItem, currentQuantity, isPlus) => {
    if (!thisItem?.id) return
    if (!currentQuantity && !isPlus) return
    if (!currentQuantity && isPlus) {
      addItem(thisItem)
      return
    }
    updateItemQuantity(thisItem?.id, isPlus ? currentQuantity + 1 : currentQuantity - 1)
  }

  const handleDragStart = (e) => e.preventDefault();

  const mouted = useMounted()

  const items0 = [
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/breakfast1.png"
        alt="has1"
        onDragStart={handleDragStart}
        style={{ width: "90%", objectFit: "cover" }}
      />
    </div>,

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/breakfast2.png"
        alt="has2"
        onDragStart={handleDragStart}
        style={{ width: "90%", objectFit: "cover" }}
      />
    </div>,
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/breakfast3.png"
        alt="has4"
        onDragStart={handleDragStart}
        style={{ width: "90%", objectFit: "cover" }}
      />
    </div>,
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/breakfast4.png"
        alt="has1"
        onDragStart={handleDragStart}
        style={{ width: "90%", objectFit: "cover" }}
      />
    </div>,
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/breakfast5.png"
        alt="has2"
        onDragStart={handleDragStart}
        style={{ width: "90%", objectFit: "cover" }}
      />
    </div>,
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/breakfast6.png"
        alt="has5"
        onDragStart={handleDragStart}
        style={{ width: "90%", objectFit: "cover" }}
      />
    </div>,
  ];

  const items1 = [
    <div>
      <Image
        width={175}
        height={300}
        src="/mon5.jpg"
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "black",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        SET 1 TẠI NHÀ HÀNG
      </div>
      <div
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        299,000đ
      </div>
    </div>,
    <div>
      <Image
        width={175}
        height={300}
        src="/mon5.jpg"
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "black",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        SET 1 TẠI NHÀ HÀNG
      </div>
      <div
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        299,000đ
      </div>
    </div>,
    <div>
      <Image
        width={175}
        height={300}
        src="/mon5.jpg"
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "black",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        SET 1 TẠI NHÀ HÀNG
      </div>
      <div
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        299,000đ
      </div>
    </div>,
    <div>
      <Image
        width={175}
        height={300}
        src="/mon5.jpg"
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "black",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        SET 1 TẠI NHÀ HÀNG
      </div>
      <div
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        299,000đ
      </div>
    </div>,
    <div>
      <Image
        width={175}
        height={300}
        src="/mon5.jpg"
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "black",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        SET 1 TẠI NHÀ HÀNG
      </div>
      <div
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        299,000đ
      </div>
    </div>,
    <div>
      <Image
        width={175}
        height={300}
        src="/mon5.jpg"
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "black",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        SET 1 TẠI NHÀ HÀNG
      </div>
      <div
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        299,000đ
      </div>
    </div>,
    <div>
      <Image
        width={175}
        height={300}
        src="/mon5.jpg"
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "black",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        SET 1 TẠI NHÀ HÀNG
      </div>
      <div
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        299,000đ
      </div>
    </div>,
    <div>
      <Image
        width={175}
        height={300}
        src="/mon5.jpg"
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "black",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        SET 1 TẠI NHÀ HÀNG
      </div>
      <div
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        299,000đ
      </div>
    </div>,
    <div>
      <Image
        width={175}
        height={300}
        src="/mon5.jpg"
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "black",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        SET 1 TẠI NHÀ HÀNG
      </div>
      <div
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        299,000đ
      </div>
    </div>,
  ];

  const items2 = [
    <div>
      <Image
        width={350}
        height={225}
        src="/tiec4.jpg"
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          fontWeight: "600",
          marginTop: "10px",
          marginRight: "20px",
        }}
      >
        TẶNG NGAY MÓN QUÀ YÊU THƯƠNG CHO THƯC KHÁCH KHI ĐẾN DÙNG BỮA TẠI NHÀ
        HÀNG
      </div>
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          marginTop: "10px",
          marginRight: "20px",
          fontWeight: "300",
        }}
      >
        07/04/2020
      </div>
      <div
        style={{
          color: "#000",
          fontSize: "14px",
          marginTop: "10px",
          marginRight: "20px",
          fontWeight: "300",
        }}
      >
        Noel năm 2019 khách đến đông đúc và nhận được quà từ ông già Noel đây -
        Haihoangbinhtan.com
      </div>
    </div>,
    <div>
      <Image
        width={350}
        height={225}
        src="/tiec1.jpg"
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          fontWeight: "600",
          marginTop: "10px",
          marginRight: "20px",
        }}
      >
        TẶNG NGAY MÓN QUÀ YÊU THƯƠNG CHO THƯC KHÁCH KHI ĐẾN DÙNG BỮA TẠI NHÀ
        HÀNG
      </div>
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          marginTop: "10px",
          marginRight: "20px",
          fontWeight: "300",
        }}
      >
        07/04/2020
      </div>
      <div
        style={{
          color: "#000",
          fontSize: "14px",
          marginTop: "10px",
          marginRight: "20px",
          fontWeight: "300",
        }}
      >
        Noel năm 2019 khách đến đông đúc và nhận được quà từ ông già Noel đây -
        Haihoangbinhtan.com
      </div>
    </div>,
    <div>
      <Image
        width={350}
        height={225}
        src="/tiec2.jpg"
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          fontWeight: "600",
          marginTop: "10px",
          marginRight: "20px",
        }}
      >
        TẶNG NGAY MÓN QUÀ YÊU THƯƠNG CHO THƯC KHÁCH KHI ĐẾN DÙNG BỮA TẠI NHÀ
        HÀNG
      </div>
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          marginTop: "10px",
          marginRight: "20px",
          fontWeight: "300",
        }}
      >
        07/04/2020
      </div>
      <div
        style={{
          color: "#000",
          fontSize: "14px",
          marginTop: "10px",
          marginRight: "20px",
          fontWeight: "300",
        }}
      >
        Noel năm 2019 khách đến đông đúc và nhận được quà từ ông già Noel đây -
        Haihoangbinhtan.com
      </div>
    </div>,
    <div>
      <Image
        width={350}
        height={225}
        src="/tiec3.jpg"
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          fontWeight: "600",
          marginTop: "10px",
          marginRight: "20px",
        }}
      >
        TẶNG NGAY MÓN QUÀ YÊU THƯƠNG CHO THƯC KHÁCH KHI ĐẾN DÙNG BỮA TẠI NHÀ
        HÀNG
      </div>
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          marginTop: "10px",
          marginRight: "20px",
          fontWeight: "300",
        }}
      >
        07/04/2020
      </div>
      <div
        style={{
          color: "#000",
          fontSize: "14px",
          marginTop: "10px",
          marginRight: "20px",
          fontWeight: "300",
        }}
      >
        Noel năm 2019 khách đến đông đúc và nhận được quà từ ông già Noel đây -
        Haihoangbinhtan.com
      </div>
    </div>,
    <div>
      <Image
        width={350}
        height={225}
        src="/tiec4.jpg"
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          fontWeight: "600",
          marginTop: "10px",
        }}
      >
        TẶNG NGAY MÓN QUÀ YÊU THƯƠNG CHO THƯC KHÁCH KHI ĐẾN DÙNG BỮA TẠI NHÀ
        HÀNG
      </div>
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          marginTop: "10px",
          fontWeight: "300",
        }}
      >
        07/04/2020
      </div>
      <div
        style={{
          color: "#000",
          fontSize: "14px",
          marginTop: "10px",
          fontWeight: "300",
        }}
      >
        Noel năm 2019 khách đến đông đúc và nhận được quà từ ông già Noel đây -
        Haihoangbinhtan.com
      </div>
    </div>,
    <div>
      <Image
        width={350}
        height={225}
        src="/tiec1.jpg"
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          fontWeight: "600",
          marginTop: "10px",
        }}
      >
        TẶNG NGAY MÓN QUÀ YÊU THƯƠNG CHO THƯC KHÁCH KHI ĐẾN DÙNG BỮA TẠI NHÀ
        HÀNG
      </div>
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          marginTop: "10px",
          fontWeight: "300",
        }}
      >
        07/04/2020
      </div>
      <div
        style={{
          color: "#000",
          fontSize: "14px",
          marginTop: "10px",
          fontWeight: "300",
        }}
      >
        Noel năm 2019 khách đến đông đúc và nhận được quà từ ông già Noel đây -
        Haihoangbinhtan.com
      </div>
    </div>,
    <div>
      <Image
        width={350}
        height={225}
        src="/tiec2.jpg"
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          fontWeight: "600",
          marginTop: "10px",
        }}
      >
        TẶNG NGAY MÓN QUÀ YÊU THƯƠNG CHO THƯC KHÁCH KHI ĐẾN DÙNG BỮA TẠI NHÀ
        HÀNG
      </div>
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          marginTop: "10px",
          fontWeight: "300",
        }}
      >
        07/04/2020
      </div>
      <div
        style={{
          color: "#000",
          fontSize: "14px",
          marginTop: "10px",
          fontWeight: "300",
        }}
      >
        Noel năm 2019 khách đến đông đúc và nhận được quà từ ông già Noel đây -
        Haihoangbinhtan.com
      </div>
    </div>,
    <div>
      <Image
        width={350}
        height={225}
        src="/tiec3.jpg"
        alt="has1"
        onDragStart={handleDragStart}
      />
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          fontWeight: "600",
          marginTop: "10px",
        }}
      >
        TẶNG NGAY MÓN QUÀ YÊU THƯƠNG CHO THƯC KHÁCH KHI ĐẾN DÙNG BỮA TẠI NHÀ
        HÀNG
      </div>
      <div
        style={{
          color: "#990000",
          fontSize: "15px",
          marginTop: "10px",
          fontWeight: "300",
        }}
      >
        07/04/2020
      </div>
      <div
        style={{
          color: "#000",
          fontSize: "14px",
          marginTop: "10px",
          fontWeight: "300",
        }}
      >
        Noel năm 2019 khách đến đông đúc và nhận được quà từ ông già Noel đây -
        Haihoangbinhtan.com
      </div>
    </div>,
  ];

  const items3 = [
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "90%", objectFit: "cover" }}
        src="/anh1.jpg"
        alt="has1"
        onDragStart={handleDragStart}
      />
    </div>,
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "90%", objectFit: "cover" }}
        src="/anh1.jpg"
        alt="has2"
        onDragStart={handleDragStart}
      />
    </div>,
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "90%", objectFit: "cover" }}
        src="/anh1.jpg"
        alt="has7"
        onDragStart={handleDragStart}
      />
    </div>,

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "90%", objectFit: "cover" }}
        src="/anh1.jpg"
        alt="has1"
        onDragStart={handleDragStart}
      />
    </div>,

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "90%", objectFit: "cover" }}
        src="/anh1.jpg"
        alt="has2"
        onDragStart={handleDragStart}
      />
    </div>,

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "90%", objectFit: "cover" }}
        src="/anh1.jpg"
        alt="has8"
        onDragStart={handleDragStart}
      />
    </div>,
  ];

  if (!mouted) return <></>
  return (
    <div style={{ overflowX: "hidden" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          backgroundColor: "rgb(243, 0, 69)",
          color: "white",
        }}
        className="padding-x-16px"
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            className={styles.svgPhone}
            style={{ width: "25px", fill: "currentColor" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path d="M 22.625 3.03125 C 22.304688 3.0625 21.976563 3.148438 21.65625 3.28125 L 21.65625 3.25 C 21.640625 3.253906 21.609375 3.277344 21.59375 3.28125 C 19.160156 4.136719 14.5 6.28125 10.28125 10.5 C 6.03125 14.75 3.980469 19.496094 3.0625 21.84375 L 3.0625 21.875 C 2.65625 23.089844 2.945313 24.40625 3.75 25.34375 L 3.78125 25.375 L 3.78125 25.40625 L 6.78125 28.375 L 6.90625 28.5 C 7.734375 29.328125 9.171875 29.328125 10 28.5 L 14.09375 24.40625 C 14.921875 23.578125 14.921875 22.109375 14.09375 21.28125 L 12.125 19.3125 C 12.46875 18.597656 13.359375 16.839844 14.9375 15.1875 C 16.503906 13.546875 18.300781 12.710938 19 12.40625 L 21.0625 14.46875 L 21.15625 14.53125 C 21.625 14.84375 22.160156 15.019531 22.71875 15 C 23.242188 14.980469 23.785156 14.722656 24.1875 14.28125 L 24.21875 14.3125 L 24.28125 14.21875 L 28.3125 10.21875 C 29.140625 9.390625 29.140625 7.921875 28.3125 7.09375 L 25.21875 4 C 24.78125 3.5625 24.191406 3.234375 23.5625 3.09375 C 23.257813 3.027344 22.945313 3 22.625 3.03125 Z M 22.78125 5.03125 C 23.160156 5.003906 23.539063 5.164063 23.78125 5.40625 L 26.90625 8.5 C 27.078125 8.671875 27.078125 8.609375 26.90625 8.78125 L 22.71875 12.96875 C 22.722656 12.964844 22.71875 12.996094 22.625 13 C 22.546875 13.003906 22.429688 12.9375 22.3125 12.875 L 22.25 12.875 L 19.90625 10.5 L 19.4375 10.03125 L 18.84375 10.25 C 18.84375 10.25 15.769531 11.398438 13.46875 13.8125 C 11.207031 16.179688 9.96875 19.09375 9.96875 19.09375 L 9.71875 19.71875 L 10.1875 20.21875 L 12.6875 22.71875 C 12.859375 22.890625 12.859375 22.828125 12.6875 23 L 8.59375 27.09375 C 8.421875 27.265625 8.484375 27.265625 8.3125 27.09375 L 5.25 24.0625 C 5.242188 24.054688 5.257813 24.039063 5.25 24.03125 L 5.21875 24 C 4.871094 23.566406 4.765625 23.105469 4.9375 22.5625 C 4.941406 22.550781 4.933594 22.542969 4.9375 22.53125 C 5.824219 20.273438 7.777344 15.847656 11.71875 11.90625 C 15.675781 7.949219 20.164063 5.914063 22.34375 5.15625 L 22.375 5.125 L 22.40625 5.125 C 22.527344 5.070313 22.65625 5.039063 22.78125 5.03125 Z" />
          </svg>
          <div> Hotline: 0938 624 368 - Phone: 0937 230 388</div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Link href="/book">
            <button
              style={{
                padding: "10px",
                border: "none",
                background: "rgba(255,211,109,1)",
                display: "flex",
                marginRight: "20px",
              }}
            >
              <svg
                style={{
                  width: "20px",
                  color: "white",
                  fill: "currentColor",
                  marginRight: "5px",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M 28.28125 6.28125 L 11 23.5625 L 3.71875 16.28125 L 2.28125 17.71875 L 10.28125 25.71875 L 11 26.40625 L 11.71875 25.71875 L 29.71875 7.71875 Z" />
              </svg>

              <div style={{ cursor: "pointer", color: "white" }}>Đặt bàn</div>
            </button>
          </Link>
          <form style={{ color: "black", width: "150px", borderRadius: "5px" }}>
            <select
              style={{ width: "150px", borderRadius: "5px" }}
              name="cars"
              id="cars"
            >
              <option value="volvo"> Tiếng Việt</option>
              <option value="saab">中国人</option>
            </select>
          </form>
        </div>
      </div>

      <div className={styles.part2}>
        <div className={styles.part2p1}>
          <div>
            <ul style={{ listStyle: "none", display: "flex" }}>
              <Link href="/">
                <li
                  style={{
                    padding: "10px 15px",
                    fontWeight: "100px",
                    color: "white",
                  }}
                >
                  <span
                    style={{ padding: "5px", cursor: "pointer" }}
                    className={styles.spanHover}
                  >
                    TRANG CHỦ
                  </span>
                </li>
              </Link>
              <Link href="/introduce">
                <li
                  style={{
                    padding: "10px 15px",
                    fontWeight: "100px",
                    color: "white",
                  }}
                >
                  <span
                    style={{ padding: "5px", cursor: "pointer" }}
                    className={styles.spanHover}
                  >
                    GIỚI THIỆU
                  </span>
                </li>
              </Link>
              <li style={{ padding: "10px 15px", fontWeight: "100px" }}>
                <Dropdown
                  menu={{ items: menu }}
                  placement="bottom"
                  arrow={false}
                  trigger={["hover", "click"]}
                >
                  <span
                    style={{ padding: "5px", cursor: "pointer" }}
                    className={styles.spanHover}
                  >
                    THỰC ĐƠN
                  </span>
                </Dropdown>
              </li>
            </ul>
          </div>

          <div className={styles.logo}>
            <Link href="/">
              <Image
                width={83}
                height={111}
                alt="description of huhu"
                src="/logo.jpg"
              />
            </Link>
          </div>
          <div>
            <ul style={{ listStyle: "none", display: "flex" }}>
              <Link href="/album">
                <li
                  style={{
                    padding: "10px 15px",
                    fontWeight: "100px",
                    color: "white",
                  }}
                >
                  <span
                    style={{ padding: "5px", cursor: "pointer" }}
                    className={styles.spanHover}
                  >
                    HÌNH ẢNH
                  </span>
                </li>
              </Link>
              <Link href="/book">
                <li
                  style={{
                    padding: "10px 15px",
                    fontWeight: "100px",
                    color: "white",
                  }}
                >
                  <span
                    style={{ padding: "5px", cursor: "pointer" }}
                    className={styles.spanHover}
                  >
                    ĐẶT BÀN
                  </span>
                </li>
              </Link>

              <Link href="/contact">
                <li
                  style={{
                    padding: "10px 15px",
                    fontWeight: "100px",
                    color: "white",
                  }}
                >
                  <span
                    style={{ padding: "5px", cursor: "pointer" }}
                    className={styles.spanHover}
                  >
                    LIÊN HỆ
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <Carousel autoplay style={{ height: "100%" }}>
        <div>
          <div style={contentStyle1}></div>
        </div>
        <div>
          <div style={contentStyle2}></div>
        </div>
        <div>
          <div style={contentStyle3}></div>
        </div>
        <div>
          <div style={contentStyle4}></div>
        </div>
      </Carousel>

      <div className={styles.part4}>
        <div className="d-flex justify-content-center">
          <Image
            src="/daubep1.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>

        <div>
          <div
            style={{
              fontFamily: "Satisfy",
              color: "#990000",
              fontSize: "30px",
              fontWeight: "600",
              marginTop: "50px",
              marginLeft: "30px",
              textAlign: 'center'
            }}
          >
            Góc Tuyển Dụng
          </div>
          <br></br>
          <div style={{ fontSize: "15px" }}>
            <div>
              Chúng tôi cần tuyển 10 bạn Phục vụ, không giới hạn độ tuổi và giới
              tính. Yêu cầu công việc như sau:
            </div>
            <br></br>
            <div>- Giới thiệu menu theo nhu cầu của khách.</div>
            <div>- Set up trước mỗi ca làm việc.</div>
            <div>- Đảm bảo chất lượng phục vụ của nhà hàng</div>
            <div>- Các công việc khác theo hướng dẫn của quản lý nhà hàng.</div>
            <div>- Ưu tiên ứng viên tốt tiếng Hoa</div>
            <br></br>
            <div>Yêu cầu: Không yêu cầu kinh nghiệm, ngoại hình dễ nhìn.</div>
            <br></br>
            <div>Lương: thỏa thuận</div>
            <div>
              Phỏng vấn tại địa điểm: 239 - 241 Vành Đai Trong, P. Bình Trị Đông
              B, Q. Bình Tân
            </div>
          </div>

          <hr style={{ fontWeight: "300", marginTop: "70px" }}></hr>

          <div
            style={{
              fontFamily: "Satisfy",
              color: "#990000",
              fontSize: "30px",
              fontWeight: "600",
              marginTop: "30px",
              marginLeft: "30px",
              textAlign: 'center'
            }}
          >
            Thực Đơn
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "50px",
          paddingBottom: "50px",
          backgroundColor: "rgb(255, 245, 224)",
        }}
      >
        <div style={{ maxWidth: "1200px", width: "100%", marginTop: "50px" }}>
          <AliceCarousel
            mouseTracking
            items={items0}
            autoPlay={true}
            autoPlayInterval={2000}
            infinite={true}
            responsive={responsive}
            disableButtonsControls={true}
            disableDotsControls={true}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            color: "#000",
            fontSize: "25px",
            fontWeight: "500",
            marginTop: "30px",
            marginLeft: "30px",
          }}
        >
          Các Món Chính
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgb(255, 245, 224)",
          paddingTop: "50px",
          paddingBottom: "30px",
        }}
        className="padding-x-16px"
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1600px",
          }}
        >
          <List
            style={{ width: "100%" }}
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 4,
              xxl: 4,
            }}
            dataSource={foods}
            renderItem={(item) => (
              <List.Item>
                <Card
                  hoverable
                  cover={
                    <img height="250px" alt="example" src={item.thumbnail} onClick={() => handleOpenModal(item.id)}/>
                  }
                  style={{ borderRadius: "10px" }}
                >
                  <Meta title={item.name} description={item.description} />
                  <div
                    style={{
                      marginTop: "15px",
                      color: "red",
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>
                      {new Intl.NumberFormat().format(item.price)} VNĐ
                    </span>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <img src="https://phanexpress.com/WebLauPhan/ship/ship-minus.svg" alt="" onClick={() => handleUpdateQuantity(item, items?.find(x => x?.id == item?.id)?.quantity ?? 0, false)}/>
                      <span style={{margin: '0px 10px', color: 'black'}}> {items?.find(x => x?.id == item?.id)?.quantity ?? 0} </span>
                      <img src="https://phanexpress.com/WebLauPhan/ship/ship-plus.svg" alt="" onClick={() => handleUpdateQuantity(item, items?.find(x => x?.id == item?.id)?.quantity ?? 0, true )} />
                    </div>
                    
                  </div>
                </Card>
              </List.Item>
            )}
          />
        </div>
      </div>

      <div style={{ marginTop: "50px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              maxWidth: "800px",
              width: "80%",
              height: "1px",
              backgroundColor: "black",
            }}
          ></div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              fontFamily: "Satisfy",
              color: "#990000",
              fontSize: "30px",
              fontWeight: "600",
            }}
          >
            Set Tiệc
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }} className="padding-x-16px">
        <div style={{ maxWidth: "1200px", width: "100%", marginTop: "50px" }}>
          <AliceCarousel
            mouseTracking
            items={items1}
            autoPlay={true}
            autoPlayInterval={2000}
            infinite={true}
            responsive={responsive1}
            disableButtonsControls={true}
            disableDotsControls={true}
          />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            fontFamily: "Satisfy",
            color: "#990000",
            fontSize: "30px",
            fontWeight: "600",
            marginTop: "30px",
            marginLeft: "30px",
          }}
        >
          Sự Kiện - Góc Ẩm Thực
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#fff5e0",
          padding: "10px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            marginTop: "50px",
            marginBottom: "30px",
          }}
        >
          <AliceCarousel
            mouseTracking
            items={items2}
            autoPlay={true}
            autoPlayInterval={2000}
            infinite={true}
            responsive={responsive2}
            disableButtonsControls={true}
            disableDotsControls={true}
          />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            fontFamily: "Satisfy",
            color: "#990000",
            fontSize: "30px",
            fontWeight: "600",
            marginTop: "50px",
            marginLeft: "30px",
          }}
        >
          Thư viện ảnh
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            marginTop: "50px",
            paddingBottom: "50px",
          }}
        >
          <AliceCarousel
            mouseTracking
            items={items3}
            autoPlay={true}
            autoPlayInterval={2000}
            infinite={true}
            responsive={responsive}
            disableButtonsControls={true}
            disableDotsControls={true}
          />
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url("https://haihoangbinhtan.com/uploads/source/slider/nhahanghaihoangbinhtan.jpg")`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#000",
            padding: "30px",
            margin: "30px",
            maxWidth: "500px",
            width: "100%",
          }}
        >
          <p
            style={{
              textAlign: "center",
              color: "#ffcc33",
              fontWeight: "400",
              fontSize: "25px",
            }}
          >
            YÊU CẦU ĐẶT BÀN
          </p>
          <Form
            name="nest-messages"
            onFinish={onFinish}
            validateMessages="Vui long nhap thong tin"
            form={form}
            initialValues={{}}
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Tên khách hàng" />
            </Form.Item>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Item
                style={{ width: "50%" }}
                name="phone"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Số điện thoại" />
              </Form.Item>
              <Form.Item name="time">
                <TimePicker
                  format={format}
                />
              </Form.Item>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Item name="date" label="">
                <DatePicker placeholder="mm/dd/yy" />
              </Form.Item>

              <Form.Item name="count">
                <Input style={{ width: "100%" }} placeholder="Số chỗ ngồi" />
              </Form.Item>
            </div>

            <Form.Item name="content">
              <Input.TextArea placeholder="Lời nhắn" />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  backgroundColor: "#cc0000",
                  color: "white",
                  border: "none",
                }}
              >
                Gửi Yêu Cầu Đặt Hẹn
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <div className={styles.frameFooter}>
        <div style={{ marginRight: "30px", marginBottom: "30px" }}>
          <div
            style={{
              fontWeight: "500",
              fontSize: "25px",
              marginBottom: "15px",
            }}
          >
            Quán lẩu dê Hải Nam
          </div>
          <div>
            <Image
              width={150}
              height={200}
              src="/anhfooter.jpg"
              alt="heafne"
              style={{ marginBottom: "15px" }}
            />
          </div>
          <div>
            Đến với nhà hàng để được phục vụ tốt nhất và trãi nghiệm nhé!
          </div>
          <div>
            239-241 Vành Đai Trong, Phường Bình Trị Đông B, Bình Tân, Hồ Chí
            Minh
            <br></br>
            Hotline: 0938 624 368
            <br></br>
            Mail: quananhaihoang@gmail.com
            <br></br>
            Website: haihoangbinhtan.com
          </div>
        </div>

        <div style={{ marginLeft: "30px" }}>
          <iframe
            title="Google Map"
            style={{ width: "100%", height: "350px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.807510014489!2d106.61270031472169!3d10.749313662633048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752dcd24fec181%3A0x9305d628f31e46c8!2zMjM5IFbDoG5oIMSQYWkgVHJvbmcsIELDrG5oIFRy4buLIMSQw7RuZyBCLCBCw6xuaCBUw6JuLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1617431019274!5m2!1svi!2s"
          ></iframe>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#282828",
          color: "white",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
      >
        © 2021 Quán lẩu dê Hải Nam
      </div>

      <a
        href="https://zalo.me/0937230388"
        style={{
          position: "fixed",
          left: 0,
          top: "50%",
          borderRadius: "100%",
          color: "white",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <Image width={60} height={46} alt="meowcon" src="/zalo-4.png" />
      </a>

      {
        isEmpty ? '' : <div className="fixed-bottom-cart" style={{position: 'fixed', bottom: 0, left: 0, width: '100%', padding: '15px 10px 10px', backgroundColor: '#8d400a', display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
         <div onClick={showDrawer}>
           <Badge count={totalItems ?? 0}>
             <img src="/cart.svg" alt="Shopping Cart" width={25} />
           </Badge>
         </div>
 
         <span onClick={showDrawer} style={{margin: '0px 0px 0px 30px', color: 'white'}}>Tổng tiền: <b style={{color: '#FF7216'}}>{cartTotal ?? 0} đ</b></span>
        </div>
 
         <button style={{
             background: '#ff7216',
             borderRadius: '3px',
             width: '108px',
             textAlign: 'center',
             padding: '8px 0',
             fontSize: '12px',
             fontWeight: 'bold',
             border: 'none',
             color: 'white'
         }}>Đặt Hàng</button>
       </div>
      }

      {
        isEmpty ? '' : <div className="fixed-badge-cart" style={{position: 'fixed', top: '50%', right: 0, width: '100%', backgroundColor: '#8d400a', width: 60, height: 60, borderRadius: '50%', justifyContent: 'space-between', alignItems:'center', paddingTop: '8px', paddingLeft: '10px' }}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
         <div onClick={showDrawer}>
           <Badge count={totalItems ?? 0}>
             <img src="/cart.svg" alt="Shopping Cart" width={25} />
           </Badge>
         </div>
        </div>
       </div>
      }

      <Modal
        title="Thông tin chi tiết món ăn"
        centered
        open={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
        footer={null}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "60%" }}>
            <img
              style={{
                objectFit: "cover",
                width: "90%",
              }}
              alt="mjbb"
              src={currentProduct?.thumbnail}
            ></img>
          </div>
          <div style={{ width: "40%" }}>
            <h2>Tên món ăn: {currentProduct?.name} </h2>
            <p style={{ color: "red" }}>Giá: {currentProduct?.price}</p>
            <p>Mô tả chi tiết: {currentProduct?.description}</p>
          </div>
        </div>
      </Modal>

      {
        isEmpty ? '' : <Drawer title="CÁC MÓN ĐÃ CHỌN" placement={'bottom'} onClose={onClose} open={openCart} height={'80%'} closeIcon={<span>Xem lại</span>} className="footer-card-drawer">
          <div className="cart-content-style">
            <div style={{overflowY: 'auto'}}>
              {
                items && items?.map(product => {
                  return <div key={`${product?.id}-tab`} className="d-flex justify-content-between mb-30px">
                    <div className="d-flex">
                      <img src={product?.thumbnail || ''} alt="" className="mr-30px" width={68} height={68} style={{objectFit: 'cover'}} />
                      <div>
                        <div style={{marginBottom: '8px', fontWeight: 'bold'}}>{product?.name ?? ''}</div>
                        <div>{product?.description ?? ''}</div>
                      </div>
                    </div>
                    <div>
                      <div style={{textAlign: 'right', fontWeight: 'bold', color: '#ff7216', fontSize: '16px'}}>{new Intl.NumberFormat().format(product?.itemTotal) ?? 0} đ</div>
                      <div style={{display: 'flex', alignItems: 'center', margin: '15px 0px 0px'}}>
                        <img src="https://phanexpress.com/WebLauPhan/ship/ship-minus.svg" alt="" onClick={() => handleUpdateQuantity(product, items?.find(x => x?.id == product?.id)?.quantity ?? 0, false)}/>
                        <span style={{margin: '0px 10px', color: 'black'}}> {items?.find(x => x?.id == product?.id)?.quantity ?? 0} </span>
                        <img src="https://phanexpress.com/WebLauPhan/ship/ship-plus.svg" alt="" onClick={() => handleUpdateQuantity(product, items?.find(x => x?.id == product?.id)?.quantity ?? 0, true )} />
                      </div>
                    </div>
                  </div>
                })
              }
            </div>
            
            <div style={{borderTop: '0.5px solid #c2c2c2', padding: '20px 0px 0px', position: 'sticky', bottom: 0, left: 0 }}>
              <div className="d-flex align-items-center justify-content-between mb-15px">
                <span>Tổng hóa đơn</span>
                <span>{new Intl.NumberFormat().format(cartTotal) ?? 0} đ</span>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-15px">
                <span>Giảm giá khuyến mại</span>
                <span>0 đ</span>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-15px">
                <span>VAT</span>
                <span>0 đ</span>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-15px">
                <b>Số tiền cần thanh toán</b>
                <span style={{textAlign: 'right', fontWeight: 'bold', color: '#ff7216', fontSize: '14px'}}>{new Intl.NumberFormat().format(cartTotal) ?? 0} đ</span>
              </div>
              <div style={{textAlign: 'center'}}>{`(Giá trên chưa bao gồm phí vận chuyển)`}</div>
              <div class="ship-cart-submit" id="submit-cart-mobile">
                  ĐẶT HÀNG
              </div>
            </div>
          </div>
      </Drawer>
      }
      
    </div>
  );
};

export default Home;
