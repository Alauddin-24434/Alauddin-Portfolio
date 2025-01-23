// src/config/apiConfig.js

const BASE_URL = import.meta.env.VITE_BASE_URL ;

export default BASE_URL;


export const emailPublic=import.meta.env.VITE_EMAIL_PUBLIC_KEY;
export const emailService=import.meta.env.VITE_EMAIL_SERVICE_ID;
export const emailTempalte=import.meta.env.VITE_EMAIL_TEMPLATE_ID;