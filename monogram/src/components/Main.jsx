
export default function Main() {
    const productsTopObj = [
        {
            name: "MINI CONSOLE",
            description: "Ideal for everyday shortcuts. Adaptable to any workflow.",
            price: "Sold Out",
            image: "https://cdn.shopify.com/s/files/1/0974/7950/products/Everyday-Bundle-Mocks-final_750x500_crop_center.jpg?v=1660013247",
            hoverImg: "https://cdn.shopify.com/s/files/1/0974/7950/products/Everyday-Bundle-Mocks-horizontal_750x500_crop_center.jpg?v=1668446709",
            preorder: true,
            available: false
        },
        {
            name: "AUDIO CONSOLE",
            description: "Ideal for music & audio. Adaptable to any workflow.",
            price: "Sold Out",
            image: "https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_TravelerClosedBracket1_Monogram_May20204517_d3899632-1a43-425f-a16a-1d5b968810c7_750x500_crop_center.jpg?v=1623682377",
            hoverImg: "https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_TravelerBracket1_Monogram_May2020_4561_30a35bd4-01b4-44db-894a-e06162d8ab77_750x500_crop_center.jpg?v=1668433146",
            preorder: true,
            available: false
        },
        {
            name: "PHOTO CONSOLE",
            description: "Ideal for photo & video. Adaptable to any workflow.",
            price: "Sold Out",
            image: "https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_StudioClosedBracket1_Monogram_May20204507_548446cb-17c9-4fc2-8b12-ae1b1a308a7e_750x500_crop_center.jpg?v=1623269261",
            hoverImg: "https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_StudioBracket1_Monogram_May2020_4558_53685b21-b09f-45b0-85a2-180d6acfafac_750x500_crop_center.jpg?v=1668433210",
            preorder: true,
            available: false
        },
        {
            name: "VIDEO CONSOLE",
            description: "Ideal for Video & Film. Adaptable to any workflow.",
            price: "Sold Out",
            image: "https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_MasterClosedBracket1_Monogram_May20204494_750x500_crop_center.jpg?v=1623682600",
            hoverImg: "https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_MasterBracket1_Monogram_May2020_4555_750x500_crop_center.jpg?v=1668433240",
            preorder: true,
            available: false
        },
        {
            name: "MONOGRAM KEYBOARD + MULTIPAD",
            description: "Adaptable to any workflow.",
            price: "Sold Out",
            image: "https://cdn.shopify.com/s/files/1/0974/7950/files/Monogram_Keyboard_Multipad-v2_750x508_crop_center.png?v=1711651403",
            hoverImg: "https://cdn.shopify.com/s/files/1/0974/7950/files/Monogram_Keyboard_2_878639a5-2865-4c4f-a21e-498f3a3db3b8_750x422_crop_center.jpg?v=1712087494",
            preorder: true,
            available: false
        }
    ]

    const productsBottomObj = [
        {
            name: "MONOGRAM KEYBOARD",
            price: "Sold Out",
            image: "https://cdn.shopify.com/s/files/1/0974/7950/files/Monogram_Keyboardv2_750x748_crop_center.png?v=1711651435",
            hoverImg: "https://cdn.shopify.com/s/files/1/0974/7950/files/preview_images/d1564dbc344144d594c1e602d3ab46d7.thumbnail.0000000000_750x422_crop_center.jpg?v=1712243546",
            preorder: true,
            available: false
        },
        {
            name: "MONOGRAM MULTIPAD",
            price: "Sold Out",
            image: "https://cdn.shopify.com/s/files/1/0974/7950/files/MonogramMultipad_750x545_crop_center.png?v=1711648070",
            hoverImg: "https://cdn.shopify.com/s/files/1/0974/7950/files/Monogram_Keyboard_3_45ca86e3-ee84-48a0-b55d-c991d2e57e3c_750x422_crop_center.jpg?v=1712087520",
            preorder: true,
            available: false
        },
        {
            name: "MONOGRAM CORE",
            price: "159 US$",
            image: "https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_CoreBracket1_Monogram_May20204545_ccb8b10a-0772-448b-9857-a14fa83bd5b7_750x500_crop_center.jpg?v=1593651640",
            hoverImg: "https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_CoreBracket1_Monogram_May2020_4578_6683fd8e-be63-45bb-9fbd-dd82a4838db8_750x500_crop_center.jpg?v=1593651640",
            preorder: true,
            available: true
        },
        {
            name: "SLIDER MODULE",
            price: "Sold Out",
            image: "https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_SliderHeroBracket1_Monogram_May20204536_8b0e1987-0315-491e-9951-a9404031b55a_750x500_crop_center.jpg?v=1593651879",
            hoverImg: "https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_SliderBracket1_Monogram_May2020_4565_f941e8d9-d194-47ee-a54a-79132f105e34_750x500_crop_center.jpg?v=1593651879",
            preorder: true,
            available: false
        }, 
        {
            name: "ORBITER MODULE", 
            price: "Sold Out",
            image: "https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_OrbiterBracket1_Monogram_May20204542_50105ec2-8b68-4ed5-ac4e-ac261c36459c_750x500_crop_center.jpg?v=1593651849",
            hoverImg: "https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_OrbiterHero_Monogram_May2020_4568_3d64e8b3-71ce-441a-9fcd-2b054c423310_750x500_crop_center.jpg?v=1593651849",
            preorder: true,
            available: false
        },
        {
            name: "ESSENTIAL KEYS MODULE",
            price: "Sold Out",
            image: "https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_KeysBracket1_Monogram_May20204548_c26eef0c-c95c-40e6-8fd3-abe1f59abfcd_750x500_crop_center.jpg?v=1593651769",
            hoverImg: "https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_KeysBracket1_Monogram_May2020_4571_43b65ca9-4fde-4f55-9f0e-32374554ce76_750x500_crop_center.jpg?v=1593651769",
            preorder: true,
            available: false
        }, 
        {
            name: "DIAL MODULE",
            price: "Sold Out",
            image: "https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_DialHeroBracket1_Monogram_May20204539_375e79fb-32f0-447b-b606-3dd0ac8318f6_750x500_crop_center.jpg?v=1593651701",
            hoverImg: "https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_DialBracket1_Monogram_May2020_4575_981a6401-f834-4094-9a6e-6cd7d0b374ca_750x500_crop_center.jpg?v=1593651701",
            preorder: true,
            available: false
        }, 
        {
            name: "MONOGRAM CARRYING CASE",
            price: "Sold Out",
            image: "https://cdn.shopify.com/s/files/1/0974/7950/products/20221018_MonogramCC_Case_06_1920x1280_crop_center.jpg?v=1666726898",
            hoverImg: "https://cdn.shopify.com/s/files/1/0974/7950/products/20221018_MonogramCC_Case_02_1920x1280_crop_center.jpg?v=1666799808",
            preorder: true,
            available: false
        }, 
        {
            name: "CONSOLE PACK: VIDEO",
            price: "69 US$",
            image: "https://cdn.shopify.com/s/files/1/0974/7950/products/SW-box-render-mini-video-final-august_750x540_crop_center.jpg?v=1661441054",
            preorder: false,
            available: true
        },
        {
            name: "CONSOLE PACK: PHOTO",
            price: "39 US$",
            image: "https://cdn.shopify.com/s/files/1/0974/7950/products/SW-box-render-mini-photo-final-august_750x540_crop_center.jpg?v=1661440997",
            preorder: false,
            available: true
        },
        {
            name: "CONSOLE PACK: AUDIO",
            price: "29 US$",
            image: "https://cdn.shopify.com/s/files/1/0974/7950/products/SW-box-render-mini-midi-final-august_750x540_crop_center.jpg?v=1661440892",
            preorder: false,
            available: true
        }, 
        {
            name: "MONOGRAM CARE",
            price: "19 US$ - 129 US$",
            image: "https://cdn.shopify.com/s/files/1/0974/7950/products/Care-updated-traveler_1920x1270_crop_center.jpg?v=1633483052",
            hoverImg: "https://cdn.shopify.com/s/files/1/0974/7950/products/MONO_CONSOLE_CARE_STU_453eaa1a-02d9-4ba7-9d9a-8d05e2915f8f_1920x1270_crop_center.jpg?v=1633485492",
            preorder: false,
            available: true
        }
    ]

    const productsTop = productsTopObj.map(item => {
        return (
            <div className="product">
                <a href="#">
                    <div className="product-img">
                        <img src={item.image} alt={item.name} className="product-img-main"/>
                        <img src={item.hoverImg} alt={item.name} className="product-img-hover" />
                        {item.preorder && <div className="preorder-tag">PRE-ORDER</div>}
                    </div>
                    <div className="product-description">
                        <div className="product-description-top">
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                            {item.available && <div className="shop-now">
                                <p>SHOP NOW</p>
                            </div>}
                        </div>
                        <div className="product-description-bottom">
                            <p>{item.description}</p>
                        </div>
                    </div>
                </a>
            </div>
        )
    })

    const productsBottom = productsBottomObj.map(item => {
        if ("hoverImg" in item) {
            return (
                <div className="product">
                    <a href="#">
                        <div className="product-img">
                            <img src={item.image} alt={item.name} className="product-img-main"/>
                            <img src={item.hoverImg} alt={item.name} className="product-img-hover" />
                            {item.preorder && <div className="preorder-tag">PRE-ORDER</div>}
                        </div>
                        <div className="product-description">
                            <div className="product-description-top">
                                <h3>{item.name}</h3>
                                <div className="price-shop">
                                    <p>{item.price}</p>
                                    {item.available && <div className="shop-now">
                                        <p>SHOP NOW</p>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            )
        } else if (!("hoverImg" in item)) {
            return (
                <div className="product">
                    <a href="#">
                        <div className="product-img">
                            <img src={item.image} alt={item.name} className="product-img-main"/>
                            {item.preorder && <div className="preorder-tag">PRE-ORDER</div>}
                        </div>
                        <div className="product-description">
                            <div className="product-description-top">
                                <h3>{item.name}</h3>
                                <div className="price-shop">
                                    <p>{item.price}</p>
                                    {item.available && <div className="shop-now">
                                        <p>SHOP NOW</p>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            )
        }
    })

    return (
        <main>
            <section className="products-top-section">
                {productsTop}
            </section>
            <section className="middle-banner-section">
                <div className="middle-banner-text">
                    <h2>CREATE YOUR OWN CONSOLE</h2>
                    <p>Add-on to make it perfect</p>
                </div>
            </section>
            <section className="products-bottom-section">
                {productsBottom}
            </section>
        </main>
    )
}