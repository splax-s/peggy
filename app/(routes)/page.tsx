import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import Herosection from "@/components/herosection";
import Instagram from "@/components/instagram";
import Product from "@/components/product";
import Container from "@/components/ui/container";
import "bootstrap/dist/css/bootstrap.min.css";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("277308d6-e94d-4940-b89d-6384bb980972");

  return (
    <>
      <Container>
        <Herosection />
        <Banner />
        <Product featuredProducts={products} />
        <Instagram />
      </Container>
    </>
  );
};

export default HomePage;
