import { useState, useEffect } from "react";
import Slider from "react-slick";
import categoryData from "../util/categories.json"
import { Link } from "react-router-dom";

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(categoryData);
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 8,
        slidesToScroll: 3
    }

    return (
        <main className="pt-8 pb-8 shadow-md">
            <div className="container mx-auto">
                <p className="font-semibold">Categories</p>
                <Slider {...settings}>
                    {categories && categories.map((category) => (
                        <Card category={category} key={category.id} />
                    ))}
                </Slider>
            </div>
        </main>
    )
}

function Card({category}) {
    return (
        <Link to={`${category.name}`} className="py-4 flex flex-col items-center gap-y-2 outline-none">
            <img src={category.image} className="w-[90px] h-[90px] object-cover rounded-full"/>
            <p className="text-brand-primary">{category.name}</p>
        </Link>
    )
}