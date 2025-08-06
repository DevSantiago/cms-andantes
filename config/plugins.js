module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });