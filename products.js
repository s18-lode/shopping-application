//All Products Here As per Provided 

const products = [
    {
      id: 1,
      category: "mobile",
      title: "iphone X",
      imgUrl: "https://s.yimg.com/os/creatr-uploaded-images/2018-10/e0186290-d3a1-11e8-a877-3edaad41fc41",
      quantity: 5,
      price: 74000,
      inCart: false,
      info:
        `64 GB ROM 
        14.73 cm (5.8 inch) 
        Super Retina HD Display 
        12MP + 12MP | 7MP Front Camera 
        A11 Bionic Chip with 64-bit Architecture,
        Neural Engine,
        Embedded M11 Motion Coprocessor Processor
        iOS 13 Compatible`
    },
    {
      id: 2,
      category: "mobile",
      title: "redmi note 9",
      imgUrl: "https://i01.appmifile.com/webfile/globalimg/in/cms/8CF60072-6762-E5F5-BA0D-1F4BB6AE26C4.jpg",
      quantity: 2,
      price: 12000,
      inCart: false,
      info:
        `4 GB RAM | 128 GB ROM | Expandable Upto 512 GB
        16.94 cm (6.67 inch) Full HD+ Display
        48MP + 8MP + 5MP + 2MP | 16MP Front Camera
        5020 mAh Battery
        Qualcomm® Snapdragon™ 720G Processor`
    },
    {
      id: 3,
      category: "mobile",
      title: "realme 7",
      imgUrl: "https://static.toiimg.com/thumb/msid-78107023,width-1200,resizemode-4/78107023.jpg",
      quantity: 10,
      price: 14000,
      inCart: false,
      info:
        `6 GB RAM | 64 GB ROM | Expandable Upto 256 GB
        16.51 cm (6.5 inch) Full HD+ Display
        64MP + 8MP + 2MP + 2MP | 16MP Front Camera
        5000 mAh Lithium-ion Battery
        MediaTek Helio G95 Processor`
    },
    {
      id: 4,
      category: "mobile",
      title: "poco m2 pro",
      imgUrl: "https://www.gizmochina.com/wp-content/uploads/2020/07/POCO-M2-Pro-featured.png",
      quantity: 1,
      price: 10000,
      inCart: false,
      info:
        `4 GB RAM | 64 GB ROM | Expandable Upto 512 GB
        16.94 cm (6.67 inch) Full HD+ Display
        48MP + 8MP + 5MP + 2MP | 16MP Front Camera
        5000 mAh Lithium-ion Polymer Battery
        Qualcomm Snapdragon 720G Processor`
    },
    {
      id: 5,
      category: "fashion",
      title: "men shirt",
      imgUrl: "https://www.dhresource.com/0x0/f2/albu/g8/M00/27/59/rBVaV13oWXuAPSh_AAJO6__js5M100.jpg/spring-light-blue-men-shirt-fashion-mens.jpg",
      quantity: 5,
      price: 400,
      inCart: false,
      info:
        `Care Instructions: Machine Wash
        Fit Type: Regular Fit
        Regular fit
        Regular classic collar
        Checkered long sleeve casual shirt
        Don't dry dark colors in direct sunlight
        Machine wash
        Made in India
        `
  
    },
    {
      id: 6,
      category: "fashion",
      title: "men t-shirt",
      imgUrl: "https://i.pinimg.com/736x/e9/8d/44/e98d449dca79f830ec0f0e242397d8ae.jpg",
      quantity: 2,
      price: 350,
      inCart: false,
      info:
        `Fit Type: Regular Fit
        Fabric: Cotton
        Easy hand wash
        Half Sleeve
        Made In India
        Quality: All garments are subjected to the 
        following tests Fabric dimensional stability
        test and quality inspection for colours 
        and wash fastness`
    },
    {
      id: 7,
      category: "fashion",
      title: "nike shoes",
      imgUrl: "https://s3.amazonaws.com/nikeinc/assets/84925/Sp19_BB_Nike_Adapt_20181218_NIKE0538_Detail5_rectangle_1600.jpg?1547068102",
      quantity: 3,
      price: 2000,
      inCart: false,
      info:
        `Sole: Rubber
        Closure: Lace-Up
        Shoe Width: Regular
        Outer Material: Synthetic
        Closure Type: Lace-Up
        Toe Style: Round Toe
        Warranty Type: Manufacturer & Seller
        Warranty Description: 30 days `
    },
    {
      id: 8,
      category: "fashion",
      title: "women jacket",
      imgUrl: "https://i.pinimg.com/originals/73/f8/57/73f857050959990f6af9f2a9175b765e.png",
      quantity: 1,
      price: 1200,
      inCart: false,
      info:
        `Care Instructions: hand wash
        Color Name: Pink
        100% Nylon
        Hand wash
        Quilted
        Plain
        Zip fly with button closure`
    },
    {
      id: 9,
      category: "sport",
      title: "bat",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71qjE2I%2BO7L._SL1500_.jpg",
      quantity: 5,
      price: 900,
      inCart: false,
      info:
        `Brand	Kansal Traders
        Color	Red
        Included Components	Cricket Bat
        Length	88 Centimeters
        Width	8 Centimeters
        Height	4 Centimeters
        Size	FULL
        Style	Bat With Ball and Bat Cover
        Manufacturer	Kansal Traders
        Country of Origin	India`
    },
    {
      id: 10,
      category: "sport",
      title: "foot ball",
      imgUrl: "https://m.media-amazon.com/images/I/31XMtxBt53L.jpg",
      quantity: 2,
      price: 650,
      inCart: false,
      info:
        `Colour : Multicolor
        Ensures Good Performance
        Package Content :1 Piece Replica Football AND A PUMP
        The Ball Is Meant For Very Light Play And Not For Playing On Rough Ground
        VOODANIA is a registered TM of Thok Adda`
    },
    {
      id: 11,
      category: "sport",
      title: "badminton",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/61cGtO5ieML._SL1500_.jpg",
      quantity: 3,
      price: 800,
      inCart: false,
      info:
        `Ideal for junior, age group above 4 years,
        playing level practice for beginners and not for professional play
        Durable product
        Shaft Material: Steel
        Contains: Pack of 2 badminton Rackets, 
        1 badminton cover + 1 Shuttle box (Pack of 3)
        Lightweight Racket with Excellent Grip`
    },
    {
      id: 12,
      category: "sport",
      title: "dumbbells",
      imgUrl: "https://5.imimg.com/data5/QT/ME/MY-24863451/dumbell-500x500.jpg",
      quantity: 2,
      price: 1200,
      inCart: false,
      info:
        `Included Components: Two 10kg rubber coated round dumbbells
        Material: Rubber; Color: Black; Size - Item Length: 27.5cm, 
        Item Width: 28.4cm, Item Height: 14.2cm; Item Weight: 20kg
        Dumbbells offer the ability to target specific muscle
        groups or perform a full body workout; `
    },
    {
      id: 13,
      category: "electronics",
      title: "trimmer",
      imgUrl: "https://images.philips.com/is/image/PhilipsConsumer/BT3102_15-IMS-en_IN?$jpglarge$&wid=1250",
      quantity: 5,
      price: 900,
      inCart: false,
      info:
        `This trimmer has high precision blades Please use
        it gently without applying too much pressure on 
        the skin while operating it without the comb
        This beard trimmer comes with a USB cable for
        more flexible charging via your computer or
        any USB adaptor The adaptor is not included`
    },
    {
      id: 14,
      category: "electronics",
      title: "digital watch",
      imgUrl: "https://www.skmei-watch.com/wp-content/uploads/2019/10/16016-8o0yas.jpg",
      quantity: 2,
      price: 650,
      inCart: false,
      info:
        `Dial color: black, case shape: round, dial glass material: mineral
        Band color: black, band material: plastic, Shock Resistant
        Watch movement type: watch movement type: , watch display type: digital
        Case material: plastic, case diameter: 49 millimeters
        Water resistance depth: 50 meters`
    },
    {
      id: 15,
      category: "electronics",
      title: "camera",
      imgUrl: "https://media.wired.com/photos/5b64db3717c26f0496f4d62d/master/w_1982,h_1486,c_limit/Canon-G7XII-SOURCE-Canon.jpg",
      quantity: 3,
      price: 25000,
      inCart: false,
      info:
        `Sensor: APS-C CMOS Sensor with 24.1 MP 
        (high resolution for large prints and image cropping)
        ISO: 100-6400 sensitivity range 
        (critical for obtaining grain-free pictures, especially in low light)
        Image Processor: DIGIC 4+ with 9 autofocus points`
    },
    {
      id: 16,
      category: "electronics",
      title: "tablets",
      imgUrl: "https://m.media-amazon.com/images/I/61uHJ+pWHSL.jpg",
      quantity: 2,
      price: 12000,
      inCart: false,
      info:
        `26.31 Centimeters (10.4-inch) ,
        16M color support
        Ergonomic S-Pen included in box
        8MP primary camera | 5MP front facing camera
        Dual Speaker with Dolby Atmos
        Andoid 10 operating system with 2.3GHz Exynos9611 Octa Core processor
        4GB RAM, 64GB internal memory expandable up to 1TB`
    },
    {
      id: 17,
      category: "home",
      title: "bean bag",
      imgUrl: "https://5.imimg.com/data5/PE/AS/MY-37550917/gabbroo-bean-bag-brown-500x500.jpeg",
      quantity: 5,
      price: 900,
      inCart: false,
      info:
        `Pack Contents - 1 Bean Bag Cover without beans
        Fade resistant Leatherette fabric with superior seam and tear strength
        Double stitched for extra strength
        Double protection with velcro and zipper to prevent beans from spilling
        Handle strap for ease of holding or carrying around
        Beans requirement: XXL - 1.5kg - 2kg.`
    },
    {
      id: 18,
      category: "home",
      title: "table",
      imgUrl: "https://www.ikea.com/ca/en/images/products/ingo-table-pine__0737092_PE740877_S5.JPG",
      quantity: 2,
      price: 3000,
      inCart: false,
      info:
        `Specification: Package Content:-Set of 6 table mats & 1 Long Runner,
        Size:13 X 72 Inch, placement size (13 x 19 inch ) Color: Multicolor, Material:100% cotton
        Set of 6 Table Mats Protects Your Dining Table from Water Marks, Heat, 
        Spills, Stains and Scratches.`
    },
    {
      id: 19,
      category: "home",
      title: "curtains",
      imgUrl: "https://www.meijer.com/content/dam/meijer/product/0088/53/0846/60/0088530846601_1_A1C1_1200.png",
      quantity: 3,
      price: 500,
      inCart: false,
      info:
        `Color: ivory & ivory, size name: standard
        Material: polyester
        Package contents: 2 curtains; size: 2.5 x 5 feet (w x h); care instructions: 
        gentle machine wash, do not bleach, 
        iron in medium temperature, can be dry cleaned`
    },
    {
      id: 20,
      category: "home",
      title: "wall clocks",
      imgUrl: "https://www.ikea.com/in/en/images/products/bravur-wall-clock-black__0633568_PE695902_S5.JPG",
      quantity: 2,
      price: 700,
      inCart: false,
      info:
        `Dial size: 11.75 inches in diameter
        Material of the frame: Plastic
        Uses 1 "AA" battery - not included (Note: Plus side of your battery should be inserted first)
        Ideal for Home, living room, bedroom, Kitchen & offices
        18 months replacement warranty on movement machine`
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };