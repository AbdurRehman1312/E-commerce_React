import Card from "../../components/ProductCard/Card";
const BestSellingProducts = () => {
  return (
    <div className="my-16 container border-b">
    <div className="flex items-center gap-3">
        <img src="icons/redbox.png" alt="" className="w-5" />
        <h1 className="text-sm font-bold text-red-500">This Month</h1>
    </div>
    <div className="flex lg:flex-row flex-col md:flex-row justify-between sm:flex-col items-center">
        <h1 className="text-black font-sembold text-3xl my-6">
            Best Selling Products
        </h1>
        <button className="btn_red text-sm px-10">View All</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
        <Card
            prod_img="images/product5.png"
            prod_name="The north coat"
            prod_price="$260"
            prod_cutPrice="$360"
            prod_rating="images/fivestar.png"
            prod_reviews="(65)"
            showDiscountTag={false}
        />
        <Card
            prod_img="images/product6.png"
            prod_name="Gucci duffle bag"
            prod_price="$960"
            prod_cutPrice="$1160"
            prod_rating="images/fourhalfstar.png"
            prod_reviews="(65)"
            showDiscountTag={false}
        />
        <Card
            prod_img="images/product7.png"
            prod_name="RGB liquid CPU Cooler"
            prod_price="$160"
            prod_cutPrice="$170"
            prod_rating="images/fourhalfstar.png"
            prod_reviews="(65)"
            showDiscountTag={false}
        />
        <Card
            prod_img="images/product8.png"
            prod_name="Small BookSelf"
            prod_price="$360"
            prod_rating="images/fivestar.png"
            prod_reviews="(65)"
            showDiscountTag={false}
        />
    </div>
</div>
  )
}

export default BestSellingProducts