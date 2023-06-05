"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const main_1 = __importDefault(require("../controllers/main"));
const router = (0, express_1.Router)();
router.get('/bemvindo/:nome', main_1.default.bemvindo);
router.get('/page', main_1.default.page);
router.get('/', main_1.default.index);
router.get('/lorem', main_1.default.loremFunc);
router.get('/generate-ipsum/:count', main_1.default.generateLorem);
router.get('/hb1', main_1.default.hb1);
router.get('/hb2', main_1.default.hb2);
router.get('/hb3', main_1.default.hb3);
router.get('/hb4', main_1.default.hb4);
router.get('/hb5', main_1.default.hb5);
exports.default = router;
