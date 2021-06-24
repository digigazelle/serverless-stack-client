const config = {
    STRIPE_KEY: "pk_test_ZTyXHjLCZMCUoRqiBhMo7ZcKY",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "ap-southeast-2",
      BUCKET: "notes-app-upload-456",
    },
    apiGateway: {
      REGION: "ap-southeast-2",
      URL: "https://makqmtsw98.execute-api.ap-southeast-2.amazonaws.com/prod",
    },
    cognito: {
      REGION: "ap-southeast-2",
      USER_POOL_ID: "ap-southeast-2_T5KRKKLNH",
      APP_CLIENT_ID: "6i29cd3n2ohreha6ftf1uv02e4",
      IDENTITY_POOL_ID: "ap-southeast-2:94a66533-a9c3-44c8-9bcc-b8b022e8d71a",
    },
  };
  
  export default config;