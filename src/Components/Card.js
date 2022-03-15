import React from "react";

const Card = (props)=>{
    return (
                <div className="mt-4 relative bg-white rounded-lg shadow-sm hover:shadow-lg overflow-hidden">
                            <img src={props.data.imageSRC} alt={props.data.imageALT} className="w-full h-32 sm:h-48 object-cover" />
                            <div className="m-4">
                                <span className="font-bold">{props.data.recipeName}</span>
                                <span className="text-gray-500 block text-sm">Recipe by {props.data.recipeBy}</span>
                            </div>
                            <div className="absolute top-0 bg-gray-200 text-gray-500 rounded-full px-2 py-1 ml-2 mt-2">
                                <span>{props.data.rating}⭐</span>
                            </div>
                        </div>
    );
}

export default Card;