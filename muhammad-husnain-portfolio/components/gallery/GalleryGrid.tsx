"use client";

import { useMemo, useState } from "react";

import gallery from "@/components/data/gallery";

import GalleryCard from "./GalleryCard";
import GalleryFilter from "./GalleryFilter";
import GalleryLightbox from "./GalleryLightbox";


export default function GalleryGrid() {


const [activeCategory, setActiveCategory] = useState("All");


const [selectedImage, setSelectedImage] = useState<{
image:string;
title:string;
} | null>(null);





const categories = useMemo(()=>{


return [

"All",

...Array.from(

new Set(

gallery.map(
(item)=>item.category
)

)

)

];


},[]);







const filteredItems = useMemo(()=>{


if(activeCategory==="All")

return gallery;



return gallery.filter(

(item)=>

item.category===activeCategory

);


},[activeCategory]);







return (

<>


<GalleryFilter

categories={categories}

active={activeCategory}

onChange={setActiveCategory}

/>







<div

className="
grid

gap-8

md:grid-cols-2

xl:grid-cols-3

"

>


{

filteredItems.map((item)=>(


<GalleryCard

key={item.title}

{...item}

onClick={()=>


setSelectedImage({

image:item.image,

title:item.title

})


}

/>


))


}



</div>







<GalleryLightbox

open={!!selectedImage}

image={selectedImage?.image ?? ""}

title={selectedImage?.title ?? ""}

onClose={()=>setSelectedImage(null)}

/>



</>

);

}