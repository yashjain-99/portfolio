import React from "react";

const Card = ({ children, appliedClassName = "" }) => {
  const cardClasses = `border border-primary-border-color rounded-xl bg-secondary-background-color ${appliedClassName}`;

  return <div className={cardClasses}>{children}</div>;
};

export default Card;
