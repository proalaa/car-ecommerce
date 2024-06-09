import { BuyerApiInterface } from "@/types";

const BuyerInfo: React.FC = () => {
  const buyer: BuyerApiInterface = {
    name: "John Doe",
    email: "john@example.com",
    phone: "555-1234",
    address: "123 Main St, Anytown USA",
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Buyer Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Name
          </div>
          <div>{buyer.name}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Email
          </div>
          <div>{buyer.email}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Phone
          </div>
          <div>{buyer.phone}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Address
          </div>
          <div>{buyer.address}</div>
        </div>
      </div>
    </div>
  );
};

export default BuyerInfo;
