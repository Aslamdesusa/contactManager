export default (to, from, next) => {
    if (to.meta.requiresAuth) {
      const authUser = JSON.parse(window.localStorage.getItem('user_token'))
      if (!authUser) {
        next({
          path: '/contactManager',
          query: { redirect: to.fullPath }
        })
      }else{
          next()
      }
    } else {
      next()
    }
  };