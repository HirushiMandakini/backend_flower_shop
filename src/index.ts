// import express from 'express';
// import EmployeeRoute from './route/EmployeeRoute';
// import CustomerRote from './route/CustomerRoute';
// import SupplierRoute from './route/SupplierRoute';
// import FlowerBouquetRoute from './route/FlowerBouquetRoute'; 
// import OrderRoute from './route/OrderRoute';
// import OrderDetailRoute from './route/OrderdetailRoute';

// const app = express();
// app.use(express.json());
// app.use('/employee', EmployeeRoute);
// app.use('/customer',CustomerRote);
// app.use('/supplier', SupplierRoute);
// app.use('/flowerBouquet', FlowerBouquetRoute); 
// app.use('/order', OrderRoute);
// app.use('/orderDetails', OrderDetailRoute); // Order

// const port = 4000
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

import express from 'express';
import cors from 'cors';
import EmployeeRoute from './route/EmployeeRoute';
import CustomerRoute from './route/CustomerRoute';
import SupplierRoute from './route/SupplierRoute';
import FlowerBouquetRoute from './route/FlowerBouquetRoute'; 
import OrderRoute from './route/OrderRoute';
import OrderDetailRoute from './route/OrderdetailRoute';
import userRoutes from "./route/UserRoute";

const app = express();

// ✅ Enable CORS
app.use(cors({
    origin: "http://localhost:5173", // Allow requests from frontend
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
}));

app.use(express.json());

// ✅ Use Routes
app.use('/employee', EmployeeRoute);
app.use('/customer', CustomerRoute);
app.use('/supplier', SupplierRoute);
app.use('/flowerBouquet', FlowerBouquetRoute);
app.use('/order', OrderRoute);
app.use('/orderDetails', OrderDetailRoute); 
app.use("/user", userRoutes);

const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});