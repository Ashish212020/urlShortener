const express =require('express');
const {handleGenerateNewShortURL,handleRedirectToOriginalURL,handleGetAnalytics}=require('../controllers/url')

const router=express.Router();

router.post('/',handleGenerateNewShortURL);
router.get('/:shortID',handleRedirectToOriginalURL);
router.get('/:shortID/analytics',handleGetAnalytics);
module.exports =router;