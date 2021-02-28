export const environment = {
  production: true,
  //TEST
  // apiUrl: "https://idb-staging-api.silvernet.co.il/api/v1/",
  //PROD
  apiUrl: 'https://idb-api.silvernet.co.il/api/v1/',

  //TEST
  /*  config:  {
      authority: 'https://idb-staging-api.silvernet.co.il/sts/v1',
      client_id: 'back-office-client',
      redirect_uri: "https://d1hw9vx9oruxdm.cloudfront.net/tenants",
      post_logout_redirect_uri: "https://d1hw9vx9oruxdm.cloudfront.net/login",
      response_type: "id_token token",
      scope: "openid profile api"
    }*/
  //PROD
  config: {
    authority: 'https://idb-api.silvernet.co.il/sts/v1',
    client_id: 'back-office-client',
    redirect_uri: 'https://d1i6pcfnc2r5dg.cloudfront.net/tenants',
    post_logout_redirect_uri: 'https://d1i6pcfnc2r5dg.cloudfront.net/login',
    response_type: 'id_token token',
    scope: 'openid profile api'
  }
};
