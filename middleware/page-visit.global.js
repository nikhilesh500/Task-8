export default defineNuxtRouteMiddleware(() => {
  const pageVisit = usePageVisitCount();
  pageVisit.value++;
})