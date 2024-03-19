import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions=[
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 40.00,
            "features": [
              "Access to cardio equipment",
              "Access to weight training area",
              "Locker room access",
              "Limited group fitness classes"
            ],
           
          },
          {
            "id": 2,
            "name": "Standard Membership",
            "price": 60.00,
            "features": [
              "Access to all gym facilities",
              "Unlimited group fitness classes",
              "Personalized workout plan",
              "Access to sauna and steam room"
            ],
            
          },
          {
            "id": 3,
            "name": "Premium Membership",
            "price": 40.00,
            "features": [
              "Access to all gym facilities",
              "Unlimited group fitness classes",
              "Personalized workout plan",
              "Access to sauna and steam room",
              "Monthly personal training session",
              "Towel service"
            ],
            
          }
    ];
    
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices I n the town</h2>
           <div className="grid md:grid-cols-3 gap-6">
           {
            priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
           }
           </div>
        </div>
    );
};

export default PriceOptions;