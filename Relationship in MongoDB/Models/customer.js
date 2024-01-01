const mongoose = require("mongoose");
const { Schema, model } = mongoose;

main()
  .then(() => {
    console.log("Connection Established!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationshipDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Order',
        }
    ]
});

// customerSchema.pre("findOneAndDelete",async()=>{
//   console.log("PRE MIDDLEWARE!");
// });

customerSchema.post("findOneAndDelete",async(customer)=>{
  if(customer.orders.length){
    let res = await Order.deleteMany({_id: {$in: customer.orders}});
    console.log(res);
  }
});


const Order = model("Order", orderSchema);
const Customer = model("Customer",customerSchema);

const findCustomer = async()=>{
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
}

// findCustomer();

const addCustomer = async()=>{
    let cust1 = new Customer({
        name: "Neha",
    });

    let order1 = await Order.findOne({item: "Chips"});
    let order2 = await Order.findOne({item: "Chocolate"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result = await cust1.save();
    console.log(result);
};

// addCustomer();

const addOrders = async () => {
  let res = await Order.insertMany([
    {
      item: "Samosa",
      price: 12,
    },
    {
      item: "Chips",
      price: 20,
    },
    {
      item: "Chocolate",
      price: 40,
    }
]);
  console.log(res);
};

// addOrders();

const addCust = async()=>{
  let newCust = new Customer({
    name: "Karan Arjun",
  });

  let newOrder = new Order({
    item: "Pizza",
    price:250
  });

  newCust.orders.push(newOrder);

  await newOrder.save();
  await newCust.save();

  console.log("added new cutomers");
};

// addCust();

const delCust = async()=>{
  let data = await Customer.findByIdAndDelete("659016b6e0300ded4cd54491");
  console.log(data);
}

delCust();