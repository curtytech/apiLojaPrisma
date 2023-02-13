import { Router } from "express";
import { GetAllProductController } from "./controllers/GetAllProductController";
import { GetAllCategoryController } from "./controllers/GetAllCategoryController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateProductWithExistCategory } from "./controllers/CreateProductWithExistCategory";
import { FindCategoryController } from "./controllers/FindCategoryController";
import { FindProductController } from "./controllers/FindProductController";

const router = Router();
const getAllProduct = new GetAllProductController();
const getAllCategory = new GetAllCategoryController();
const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createProductCategoryExist = new CreateProductWithExistCategory();
const findProduct = new FindProductController();
const findCategory = new FindCategoryController();

router.get("/getallproduct", getAllProduct.handle);
router.get("/getallcategory", getAllCategory.handle);
router.post("/createProduct", createProduct.handle);
router.post("/createCategory", createCategory.handle);
router.post("/categoryProduct", createProductCategory.handle);
router.post("/productWithCategory", createProductCategoryExist.handle);
router.get("/product/:id", findProduct.handle);
router.get("/category/:id", findCategory.handle);

export { router };