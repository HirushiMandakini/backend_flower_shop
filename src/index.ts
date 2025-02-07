import express from 'express';
import EmployeeRoute from './route/EmployeeRoute';

const app = express();
app.use(express.json());
app.use('/employee', EmployeeRoute);

const port = 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});