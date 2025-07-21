import ElementalNo1 from "../assets/images/ElementalNo.1.jpg";
import ElementalNo2 from "../assets/images/ElementalNo.2.jpg";
import ElementalNo3 from "../assets/images/ElementalNo.3.jpg";
import SummerCollection from "../assets/images/SummerCollection.jpg";
import WinterEdition from "../assets/images/WinterEdition.jpg";
import DiscoverySet from "../assets/images/DiscoverySet.jpg";
import LimitedEdition from "../assets/images/LimitedEdition.jpg";
import TravelCollection from "../assets/images/TravelCollection.jpg";
import EssencePure from "../assets/images/EssencePure.jpg";
import Product from "../models/products";

export async function products(): Promise<Product[]> {
  return await fetchData<Product[]>(
    "https://681fb6be72e59f922ef6f24d.mockapi.io/Product",
    httpMethod.GET
  );

  const result = [
    {
      id: 1,
      name: "Elemental No.1",
      category: "signature",
      description: "Bergamot & White Sage",
      price: "120.0",
      image: ElementalNo1,
    },
    {
      id: 2,
      name: "Elemental No.2",
      category: "signature",
      description: "Citrus & Cedar Blend",
      price: "110.0",
      image: ElementalNo2,
    },
    {
      id: 3,
      name: "Elemental No.3",
      category: "signature",
      description: "Amber & Sandalwood",
      price: "130.0",
      image: ElementalNo3,
    },
    {
      id: 4,
      name: "Summer Collection",
      category: "seasonal",
      description: "Light Floral Blend",
      price: "95.0",
      image: SummerCollection,
    },
    {
      id: 5,
      name: "Winter Edition",
      category: "seasonal",
      description: "Warm Spice & Wood",
      price: "115.0",
      image: WinterEdition,
    },
    {
      id: 6,
      name: "Discovery Set",
      category: "sets",
      description: "3 x 15ml Collection",
      price: "160.0",
      image: DiscoverySet,
    },
    {
      id: 7,
      name: "Limited Edition",
      category: "limited",
      description: "Rose & Oud Blend",
      price: "50.0",
      image: LimitedEdition,
    },
    {
      id: 8,
      name: "Travel Collection",
      category: "sets",
      description: "4 x 10ml Set",
      price: "85.0",
      image: TravelCollection,
    },
    {
      id: 9,
      name: "Essence Pure",
      category: "signature",
      description: "Clean & Fresh Notes",
      price: "105.0",
      image: EssencePure,
    },
  ];
  return result;
}

enum httpMethod {
  "GET",
  "POST",
}

async function fetchData<T>(url: string, method: httpMethod): Promise<T> {
  const tst = await fetch(url, {
    method: httpMethod[method],
    headers: { "content-type": "application/json" },
  });
  const res = tst.json();
  return res as T;
}

export default products;
