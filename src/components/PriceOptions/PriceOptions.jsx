import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const gymPlans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "$20/month",
      features: [
        "Access to gym equipment",
        "1 personal training session per month",
        "Locker room access",
        "Access during off-peak hours",
        "Free water station access",
        "Weekly group workout emails",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: "$40/month",
      features: [
        "Access to gym equipment",
        "4 personal training sessions per month",
        "Group fitness classes",
        "Locker room access",
        "Free health assessment",
        "Access during all hours",
        "Priority access to new equipment",
        "1 guest pass per month",
        "Discount on sportswear",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "$60/month",
      features: [
        "Access to gym equipment",
        "Unlimited personal training sessions",
        "Group fitness classes",
        "Nutrition consultation",
        "Sauna and steam room access",
        "Free health and fitness assessment",
        "Priority booking for all classes",
        "Access to VIP lounge",
        "Free gym merchandise",
        "Monthly fitness progress report",
        "Dedicated personal locker",
        "Unlimited guest passes",
      ],
    },
  ];

  return (
    <div className="m-5">
      <h1 className="text-2xl font-extrabold text-center">Price List</h1>
      <div className="grid md:grid-cols-3">
      {gymPlans.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
      </div>
    </div>
  );
};

export default PriceOptions;
