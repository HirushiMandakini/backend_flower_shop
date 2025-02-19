import express from 'express';
import EmployeeRoute from './route/EmployeeRoute';
import CustomerRote from './route/CustomerRoute';
// import OrderRoute from './route/OrderRoute';

const app = express();
app.use(express.json());
app.use('/employee', EmployeeRoute);
app.use('/customer',CustomerRote)

const port = 4000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
