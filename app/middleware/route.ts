export default defineNuxtRouteMiddleware((to, from) => {
 function routeer() {
  const isAuthenticated = true; 
  if (isAuthenticated == false) {
    return navigateTo('/routePage');
  }
  
  else {
    return navigateTo('/userPage');

  }
 }
  return routeer();
});