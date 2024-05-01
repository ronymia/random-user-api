const express = require("express");
const userController = require("../../controllers/user.controller");

const router = express.Router();

/***************
* @api {get} / route => user/random 
* @apiDescription get a random user every time
* @apiPermission anyone can  access
*
* @apiHeader {string} => user's access token not implement
* @apiHeaderExample {json} Header-Example:
*
*
*@apiSuccess {Object} response => user object
*
*@apiError {Unauthorized 401} => only authorized users can access this
*@apiError {forbidden 403} => only only can access this
*
*************/
router.get("/random", userController.getRandomUser);


/***************
* @api {get} / route => user/all 
* @apiDescription get all users
* @apiPermission anyone can  access
*
* @apiHeader {string} => user's access token not implement
* @apiHeaderExample {json} Header-Example:
*
* @apiQuery {Number}   [limit] => limit=5
*
*@apiSuccess {Object[]} will get array of object
*
*@apiError {Unauthorized 401} => only authorized users can access this
*@apiError {forbidden 403} => only only can access this
*
*************/
router.get("/all", userController.getAllUser);

/***************
* @api {get} / user/:id
* @apiDescription get single user by id
* @apiPermission anyone can  access
*
* @apiHeader {string} => user's access token not implement
* @apiHeaderExample {json} Header-Example:
*
* @apiParam {id}   [id=1] => id means user id
*
*@apiSuccess {Object} Response=> user object
*
*@apiError {Unauthorized 401} => only authorized users can access this
*@apiError {forbidden 403} => only only can access this
*
*************/
router.get("/:id" , userController.getSingleUser);


/***************
* @api {post} / user/save
* @apiDescription save a single user
* @apiPermission anyone can  access
*
* @apiHeader {string} => user's access token not implement
* @apiHeaderExample {json} Header-Example:
*
*
*@apiSuccess {Object} Response=> user object
*
*@apiError {Unauthorized 401} => only authorized users can access this
*@apiError {forbidden 403} => only only can access this
*
*************/
router.post("/save" , userController.saveSingleUser);


/***************
* @api {patch} / user/update
* @apiDescription update a user by 
* @apiPermission anyone can  access
*
* @apiHeader {string} => user's access token not implement
* @apiHeaderExample {json} Header-Example:
*
* @apiParam {id}   [id=1] => id means user id
*
*@apiSuccess {Object} Response=> user object
*
*@apiError {Unauthorized 401} => only authorized users can access this
*@apiError {forbidden 403} => only only can access this
*
*************/
router.patch("/update" , userController.updateSingleUser);


/***************
* @api {patch} / user/bulk-update
* @apiDescription update bulk user by array of id => [1,2,3]
* @apiPermission anyone can  access
*
* @apiHeader {string} => user's access token not implement
* @apiHeaderExample {json} Header-Example:
*
* @apiParam {id}   [id=1] => id means user id
*
*@apiSuccess {Object} Response=> user object
*
*@apiError {Unauthorized 401} => only authorized users can access this
*@apiError {forbidden 403} => only only can access this
*
*************/
router.patch("/bulk-update" , userController.updateBulkUser);


/***************
* @api {delete} / user/delete
* @apiDescription delete user by user id
* @apiPermission anyone can  access
*
* @apiHeader {string} => user's access token not implement
* @apiHeaderExample {json} Header-Example:
*
* @apiQuery {id}   [id=1] => id means user id
*
*@apiSuccess {Object} Response=> boolean
*
*@apiError {Unauthorized 401} => only authorized users can access this
*@apiError {forbidden 403} => only only can access this
*
*************/
router.delete("/delete" , userController.deleteUser);


module.exports = router;