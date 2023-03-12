import { Router } from "express";
//Get All Imports
import { GetAllCartController } from "./controllers/GetAllCartController";
import { GetAllProductController } from "./controllers/GetAllProductController";
import { GetAllCategoryController } from "./controllers/GetAllCategoryController";
import { GetAllStoreController } from "./controllers/GetAllStoreController";

import { LoginController } from "./controllers/LoginController";

//Count Imports
import { GetCountCartController } from "./controllers/GetCountCartController";

//Create Imports
import { CreateCartController } from "./controllers/CreateCartController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateStoreController } from "./controllers/CreateStoreController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateProductWithExistCategory } from "./controllers/CreateProductWithExistCategory";

//Delete Imports
import { DeleteCartController } from "./controllers/DeleteCartController";

//Find Imports
import { FindCategoryController } from "./controllers/FindCategoryController";
import { FindProductController } from "./controllers/FindProductController";

const router = Router();
const getAllCart = new GetAllCartController();
const getAllProduct = new GetAllProductController();
const getAllCategory = new GetAllCategoryController();
const getAllStore = new GetAllStoreController();
const getCountCart = new GetCountCartController();

const login = new LoginController();


// Delete Classes
const deleteCart = new DeleteCartController();

// Create Classes
const createCart = new CreateCartController();
const createUser = new CreateUserController();
const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createStore = new CreateStoreController();
const createProductCategory = new CreateProductCategoryController();
const createProductCategoryExist = new CreateProductWithExistCategory();

// Find Classes
const findProduct = new FindProductController();
const findCategory = new FindCategoryController();

// Get all routes
router.get("/getallcart", getAllCart.handle);
router.get("/getallproduct", getAllProduct.handle);
router.get("/getallcategory", getAllCategory.handle);
router.get("/getallstore", getAllStore.handle);

router.post("/login", login.handle);

//Create Routes
router.post("/createCart", createCart.handle);
router.post("/createProduct", createProduct.handle);
router.post("/createStore", createStore.handle);
router.post("/createCategory", createCategory.handle);
router.post("/createUser", createUser.handle);

//Count Routes
router.get("/getCountCart/:id", getCountCart.handle);

//Delete Routes
router.get("/deleteCart/:id", deleteCart.handle);


router.post("/categoryProduct", createProductCategory.handle);
router.post("/productWithCategory", createProductCategoryExist.handle);
router.get("/product/:id", findProduct.handle);
router.get("/category/:id", findCategory.handle);

export { router };