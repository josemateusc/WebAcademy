import { Router } from 'express';
import { LoremIpsum } from 'lorem-ipsum';
import mainController from '../controllers/main';

const router = Router();

router.get('/bemvindo/:nome', mainController.bemvindo);
router.get('/page', mainController.page);
router.get('/', mainController.index);
router.get('/lorem', mainController.loremFunc);
router.get('/generate-ipsum/:count', mainController.generateLorem);
router.get('/hb1', mainController.hb1);
router.get('/hb2', mainController.hb2);
router.get('/hb3', mainController.hb3);
router.get('/hb4', mainController.hb4);
router.get('/hb5', mainController.hb5);

export default router;
