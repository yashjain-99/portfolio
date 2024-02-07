import React, { useState } from "react";
import CardItem from "./CardItem";
import Tabs from "./Tabs";

const CardLayoutWindow = ({
  columns,
  data,
  layoutId,
  sectionClassName,
  cardItemClassName,
}) => {
  const [selectedTab, setSelectedTab] = useState(columns[0].alias);
  const [[page, direction], setPage] = useState([0, 0]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleTabChange = (alias) => {
    const currentIndex = Object.keys(data).indexOf(selectedTab);
    const newIndex = Object.keys(data).indexOf(alias);

    if (currentIndex !== newIndex) {
      paginate(currentIndex < newIndex ? 1 : -1);
      setSelectedTab(alias);
    }
  };

  return (
    <>
      <Tabs
        columns={columns}
        selectedTab={selectedTab}
        handleTabChange={handleTabChange}
        layoutId={layoutId}
      />
      <div className={`overflow-hidden ${sectionClassName}`}>
        {data[selectedTab].map((dataItem, index) => (
          <CardItem
            key={`${dataItem.name}-${index}`}
            dataItem={dataItem}
            index={index}
            page={page}
            direction={direction}
            expandedIndex={expandedIndex}
            setExpandedIndex={setExpandedIndex}
            cardItemClassName={cardItemClassName}
          />
        ))}
      </div>
    </>
  );
};

export default CardLayoutWindow;
