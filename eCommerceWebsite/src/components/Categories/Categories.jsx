import CategoryCard from "../../components/CategoryCard/CategoryCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import categories from "./data";
const Categories = () => {
    return (
        <div className="container my-10 border-b">
            <div className="flex items-center gap-3">
                <img src="icons/redbox.png" alt="" className="w-5" />
                <h1 className="text-sm font-bold text-red-500">Categories</h1>
            </div>
            <h1 className="text-black font-sembold text-3xl my-6">
                Browse By Category
            </h1>
            <Carousel className="w-full relative py-16 mb-11">
                <CarouselContent>
                    {categories.map((category, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/3 lg:basis-1/6"
                        >
                            <CategoryCard
                                category_name={category.category_name}
                                icon={category.icon}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute lg:top-[-12%] lg:left-[94%] md:left-[90%] md:top-[-17%] lg:visible md:visible invisible" />
                <CarouselNext className="absolute lg:top-[-12%] lg:left-[97.5%] md:left-[96%] md:top-[-17%] lg:visible md:visible invisible" />
            </Carousel>
        </div>
    )
}

export default Categories