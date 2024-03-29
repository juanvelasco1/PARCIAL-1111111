const productsData = [
    {
      id: 1,
      title: 'Straight Cargo Jeans',
      description: 'Cargo-style jeans with a straight cut.',
      value: 89.99,
      inStock: { available: true, quantity: 15 },
      image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/0359/534/800//04/961e08073215317061c9ad9add2f0269-0359534800_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh&imformat=generic',
      details: {
        materials: ['Denim'],
        sizesAvailable: ['38', '39', '40', '41', '42'],
        brand: 'Bershka',
        origin: 'Italy',
      },
    },
    {
      id: 2,
      title: 'Mini Pleated Skirt',
      description: 'Short skirt with pleats in a mini style.',
      value: 34.99,
      inStock: { available: true, quantity: 8 },
      image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/6047/692/800//04/e9a6c12608ccc21601f3eb1b6f28776d-6047692800_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh&imformat=chrome',
      details: {
        materials: ['Cotton'],
        sizesAvailable: ['S', 'M', 'L', 'XL'],
        brand: 'Bershka',
        origin: 'United States',
      },
    },
    {
      id: 3,
      title: 'Red Mini Dress',
      description: 'Short dress in vibrant red color.',
      value: 55.50,
      inStock: { available: false, quantity: 0 },
      image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/0753/623/600//04/d01b2ef273c8df03c6241bc0b40f3445-0753623600_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh&imformat=chrome',
      details: {
        materials: ['Polyester'],
        sizesAvailable: ['One Size'],
        brand: 'Fashion Trends',
        origin: 'China',
      },
    },
    {
      id: 4,
      title: 'Gray Hoodie',
      description: 'Hooded sweatshirt in gray color.',
      value: 120.00,
      inStock: { available: true, quantity: 3 },
      image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/7220/538/810//04/77ac9fe9d2c4e740bd65acd17da68cc9-7220538810_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh&imformat=chrome',
      details: {
        materials: ['Cotton', 'Polyester'],
        sizesAvailable: ['One Size'],
        brand: 'Bershka',
        origin: 'Switzerland',
      },
    },
    {
      id: 5,
      title: 'Short Sleeve T-shirt',
      description: 'Basic short sleeve t-shirt in red color.',
      value: 45.99,
      inStock: { available: true, quantity: 10 },
      image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/2758/443/600/85c0650918b63a32dd83f9bed15cec37-2758443600_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh&imformat=chrome',
      details: {
        materials: ['Cotton'],
        sizesAvailable: ['S', 'M', 'L', 'XL'],
        brand: 'Bershka',
        origin: 'Italy',
      },
    },
  ];
  export default productsData
  