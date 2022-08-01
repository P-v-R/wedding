import React from "react";

function GuideBlock({title, items, footer = false}) {
  
  function item({name, url, featured = false }, idx) {
    let style = "py-4 hover:text-coral cursor-pointer";
    if (idx % 2 === 0 && items.length - 1 === idx) {
      style = "py-4 col-span-2 hover:text-chartreuse cursor-pointer"
    }

    return (
      <div 
        key={name} 
        className={style}> 
        {name}{featured ? "*" : ""}
      </div>
    )
  } 

  return (
    <div className="pb-10">
      <p className="text-4xl py-6">{title}</p>
      <div className="grid grid-cols-2 gap-4 px-4 text-olive text-2xl">
      {items.map((i, idx) =>
        (item(i, idx)) )}
      </div>
      {footer ? <div className="pt-10 text-md col-span-2 italic">*{footer}</div> : ""}
    </div>
  );
}

export default GuideBlock;
